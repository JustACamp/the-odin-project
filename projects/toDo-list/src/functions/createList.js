// module to add a project list to the interface
import createItem from "./createItem";
import getFromStorage from "./getFromStorage";
import saveToStorage from "./saveToStorage";
import Lists from "./listConstructor";
import ToDoItem from "./itemConstructor";


export default function createList(listIndex, pageObject) {
        // pageObject.lists[listIndex] = new Lists();                      // set new list at list index

        let newList = pageObject.lists[listIndex];


        // queries
            const contentDiv = document.querySelector(".content");
            const addNewListDiv = document.querySelector(".newListDiv");

        // create list
            const listDiv = document.createElement("div");
            listDiv.className = "list";
            listDiv.id = "list" + listIndex;

        // list title

            const listTitle = document.createElement("div");
            listTitle.id = "listTitle";
            listTitle.class =  "Title";

            const listTitleInput = document.createElement("input");
            listTitleInput.setAttribute("type", "textarea");
            listTitleInput.setAttribute("id", "listTitleInput");
            listTitleInput.setAttribute("name","listTitle");
            // if (initItem.title === undefined) {
            //     listTitle.textContent = "Title...";
            // } else {
            listTitle.textContent = newList.listTitle;
            // }
            
            listTitle.addEventListener("click", () => {
                listTitle.replaceWith(listTitleInput);
                listTitleInput.focus();
                newList.listTitle = listTitleInput.value;
                // saveDiv.remove();
            });

            listTitleInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    newList.listTitle = listTitleInput.value;
                    listTitle.textContent = newList.listTitle;
                    listTitleInput.blur();
                    listTitleInput.replaceWith(listTitle);
                };
            });

            window.addEventListener("click", function(event) {
                if (event.target != listTitleInput && event.target != listTitle) {
                    listTitleInput.replaceWith(listTitle);
                    //   saveDiv.style.display = "none";
                    // saveDiv.style.visibility = "hidden";
                }
            });

            listDiv.append(listTitle);

        //add item button

            const addItemInput = document.createElement("input");
            addItemInput.setAttribute("value","Add Card...");
            addItemInput.placeholder = "Add Card...";
            addItemInput.setAttribute("onfocus","this.value=''");
            addItemInput.setAttribute("onfocusout","this.value='Add Card...'");
            addItemInput.setAttribute("type", "text");
            addItemInput.setAttribute("id", "addItemBtn"+listIndex);
            addItemInput.setAttribute("name","addBtn");

            addItemInput.addEventListener("click", () => {
                // list.append(saveDiv);
                saveDiv.style.visibility = "visible";

            });

            addItemInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                event.preventDefault();
                saveBtn.click();
                addItemInput.focus();
                // console.log(addItemInput.value);
                // console.log(addItemInput.getAttribute("value"));
                // list.append(saveDiv);
                saveDiv.style.visibility = "visible";
                };
            });

            listDiv.append(addItemInput);
       
        // save/cancel input buttons

            const saveDiv = document.createElement("div");
            saveDiv.setAttribute("class","saveDiv");

            const saveBtn = document.createElement("button");
            saveBtn.setAttribute("id", "saveBtn");
            saveBtn.className = "save"
            saveBtn.textContent = "Save";
            saveBtn.addEventListener("click", () => {
                // const newItem = new ToDoItem
                // newItem.title = addItemInput.value;
                createItem(listIndex, pageObject, addItemInput.value);                                   // create item
                // saveToStorage();                                    // save to storage
                // getFromStorage();                                   // get from storage
                saveDiv.style.visibility = "hidden";
                // saveDiv.remove();
            });

            const cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("id", "cancelBtn");
            cancelBtn.innerHTML = "&times";

            cancelBtn.addEventListener("click", () => {
                saveDiv.style.visibility = "hidden";
                // saveDiv.remove();
            });

            saveDiv.append(saveBtn,cancelBtn);
            listDiv.append(saveDiv);
            saveDiv.style.visibility = "hidden";

            //
        const delListDiv = document.createElement("div");
        saveDiv.setAttribute("class","saveListDiv");

        const delListBtn = document.createElement("button");
        delListBtn.setAttribute("id", "delListBtn");
        delListBtn.className = "delete";
        delListBtn.textContent = "Delete List";
        delListBtn.addEventListener("click", () => {
            pageObject.lists.splice(listIndex,1);
            // pageObject.lists[listIndex].items[itemIndex].splice(0,1);
            listDiv.remove();
            let stringObject = JSON.stringify(pageObject);
            saveToStorage(stringObject);
            console.log(pageObject);
        });

        delListDiv.append(delListBtn);
        listDiv.append(delListDiv);

            window.addEventListener("click", function(event) {
                if (event.target != addItemInput) {
                  saveDiv.style.visibility = "hidden";
                // saveDiv.remove();
                }
            });

        contentDiv.insertBefore(listDiv, addNewListDiv);

        // addItemInput.focus();

        // listTitleInput.focus();
    };