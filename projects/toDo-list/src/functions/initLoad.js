import createList from "./createList";
import ToDoItem from "./itemConstructor";
import Lists from "./listConstructor";
import createItem from "./createItem";
import getFromStorage from "./getFromStorage";
import { format, compareAsc, getDate, getDay, getTime } from "date-fns";

const fns = require('date-fns')

console.log(fns.format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS"))
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]

export default function initLoad() {
    let pageObject = getFromStorage();
    console.log(pageObject);
   

    const body = document.body;

    // create header elements
        const header = document.createElement("div");
        header.className = "header";

        const headerTitle = document.createElement("div");
        headerTitle.className = "headerTitle";
        headerTitle.textContent = "LemonJello";
        header.appendChild(headerTitle);

        const headerMenu = document.createElement("div");
        headerMenu.className = "headerMenu";
        header.appendChild(headerMenu);
        
        // const menuButton = document.createElement("button");
        // menuButton.className = "btn";
        // menuButton.textContent = ("MENU");
        // headerMenu.appendChild(menuButton);

    // create content div
        const contentDiv = document.createElement("div");
        contentDiv.className = "content";

        body.append(header, contentDiv);

    // create newListDiv

        const newListDiv = document.createElement("div");
        newListDiv.className = "newListDiv";
        contentDiv.append(newListDiv);
    
    // addList button and input


        const addListBtn = document.createElement("button");
        addListBtn.className = "addListBtn";
        // addListBtn.setAttribute("onfocus","this.value=''");
        addListBtn.textContent = "Add New List..";
        addListBtn.addEventListener("click", () => {
            addListBtn.replaceWith(addListInput);
            addListInput.focus();
            saveDiv.style.visibility = "visible";
        });

        // const addListBtn = document.createElement("input");
        // addListBtn.type = "button";
        // addListBtn.className = "addListBtn";
        // // addListBtn.setAttribute("onfocus","this.value=''");
        // addListBtn.value = "Add New List..";
        // addListBtn.addEventListener("click", () => {
        //     // addListBtn.replaceWith(addListInput);
        //     // addListBtn.value = ' ';
        //     addListBtn.type = "text";
        //     addListBtn.className = "addListInput";
        //     addListBtn.placeholder = "Add New List... buddy";
        //     // addListBtn.value = "";
        //     addListBtn.focus();
        //     // addListInput.focus();
        //     saveDiv.style.visibility = "visible";
        // });

        const addListInput = document.createElement("input");
        addListInput.className = "addListInput";
        addListInput.placeholder = "Add New List..."
        addListInput.onfocus = () => {
            saveDiv.style.visibility = "visible";
        }

    // save & cancel buttons

        const saveDiv = document.createElement("div");
        saveDiv.setAttribute("class","saveDiv");
        saveDiv.style.visibility = "hidden";

        const addListSaveBtn = document.createElement("button");
        addListSaveBtn.className = "save"
        addListSaveBtn.setAttribute("id", "addListSaveBtn");
        addListSaveBtn.textContent = "Save";
        addListSaveBtn.addEventListener("click", () => {
            pageObject.lists.push(new Lists(addListInput.value));
            const numLists = pageObject.lists.length-1;
            createList(numLists, pageObject);                         // create list, pass the 'add list' input value as the title
            saveDiv.style.visibility = "hidden";
            addListBtn.value = "Add New List...";                     // reset the 'add list' button value
            addListInput.setAttribute("onfocus","this.value=''");
            addListInput.replaceWith(addListBtn);                     // replace input with button
            // addListBtn.value = "Add New List...";
            // addListBtn.setAttribute("onfocus","this.value=''");
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("id", "cancelBtn");
        cancelBtn.innerHTML = "&times";

        cancelBtn.addEventListener("click", () => {
            saveDiv.style.visibility = "hidden";
            // saveDiv.remove();
            addListInput.placeholder = "Add New List..."
            addListInput.replaceWith(addListBtn);
        });

        saveDiv.append(addListSaveBtn,cancelBtn);

        

        window.onclick = function(event) {
            if ((event.target != addListSaveBtn) && (event.target != addListInput) && (event.target != addListBtn)) {
                saveDiv.style.visibility = "hidden";
            }
        };

        addListInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
            event.preventDefault();
            addListSaveBtn.click();
            // const listName = addListInput.value
            // newListDiv.append(saveDiv);
            };
        });
        
        newListDiv.appendChild(addListBtn);
        newListDiv.append(saveDiv);

        
        for (let listIndex in pageObject.lists) {
            // console.log(listIndex);
            // console.log(pageObject.lists[listIndex]);
            createList(listIndex, pageObject);
            for (let itemIndex in pageObject.lists[listIndex].items) {
                // console.log(listIndex + "," + pageObject.lists[listIndex].items[itemIndex].title);
                // console.log(itemIndex);
                // console.log(pageObject.lists[listIndex].items[itemIndex]);
                let itemObject = pageObject.lists[listIndex].items[itemIndex];
                createItem(listIndex, pageObject, itemObject);
                for (let itemContent in itemObject){
                    // console.log(pageObject.lists[listIndex].items[itemIndex][itemContent]);
                }
            }
        }
        

        // const initItem = new ToDoItem();

        // console.log(pageObject);

    // append buttons
    
    //append divs
};