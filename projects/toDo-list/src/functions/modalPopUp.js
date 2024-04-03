import saveToStorage from "./saveToStorage";

export default function modalPopUp(listIndex, itemButton, itemObject) {

    // console.log(listIndex);
    // console.log(itemButton);
    // console.log(itemObject);

    // define item
        const button = itemButton;

    // create modal
        const body = document.body;
        const modal = document.createElement("div");
        // modal.setAttribute("id", "modal"+ itemID);
        modal.className = "modal";
        const modalContent = document.createElement("div");
        modalContent.className = "modalContent";

    // close button
        const close = document.createElement("button");
        close.className = "close";
        close.innerHTML = "&times;";
        close.addEventListener("click", function() {
            modal.style.visibility = "hidden";
        });
    
    // title
        const titleEl = document.createElement("div");
        // newItem.title = item.textContent;
        titleEl.className = "title";
        titleEl.textContent = itemObject.title + " in List " + (Number(listIndex)+1);
        
        // const listEl = document.createElement("div");
        // const list = document.getElementById("#")
        // listEl.textContent = "in list:" + 

    // description
        const desc = document.createElement("textarea");
        desc.className = "desc";
        desc.setAttribute("placeholder", "Description..");
        desc.setAttribute("id", "desc");
        desc.setAttribute("name","desc");
        if (desc.getAttribute("value") === null) {
            desc.value = itemObject.description; 
        }
        desc.onchange = () => {
            itemObject.description = desc.value;
            console.log(itemObject.description);
        }
        

    // checklist
        const checklist = document.createElement("div");
        checklist.className = "checklist";
        // checklist.id = "checklist" + id;
        const checklistTitle = document.createElement("div");
        checklistTitle.textContent = itemObject.checkListTitle;
        checklistTitle.className = "checklistTitle";
        checklist.appendChild(checklistTitle);
        // const checklistContent = [];

    // add checkbox button / input

        const addCheckbox = document.createElement("button");
        addCheckbox.className = "addCheckBox";
        addCheckbox.textContent = "Add Item...";

        const addCheckBoxInput = document.createElement("input");
        addCheckBoxInput.type = "textArea";
        addCheckBoxInput.className = "addCheckBoxInput";
        
        checklist.appendChild(addCheckbox);
        
    // save/cancel buttons
        const saveDiv = document.createElement("div");
        saveDiv.setAttribute("class","saveDiv");

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("id", "saveBtn");
        saveBtn.className = "save";
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", () => {
            // event.preventDefault();
            itemObject.checklist.push(addCheckBoxInput.value);
            console.log(itemObject.checklist);
            addCheckBox(addCheckBoxInput.value);
            addCheckBoxInput.focus();
            addCheckBoxInput.value = "";
            addCheckBoxInput.placeholder = "Add another...";
            // checkboxLabel.placeholder = "Add newer Item..";
            // saveDiv.remove();
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("id", "cancelBtn");
        cancelBtn.innerHTML = "&times";

        cancelBtn.addEventListener("click", () => {
            // saveDiv.style.display = "none";
            saveDiv.remove();
        });

        saveDiv.append(saveBtn,cancelBtn);
        checklist.append(saveDiv)

        addCheckbox.addEventListener("click", () => {
            addCheckbox.replaceWith(addCheckBoxInput);
            addCheckBoxInput.placeholder = "Add Item..."
            // addCheckBoxInput.value = "Add Item..."
            addCheckBoxInput.focus();
            
        });
        addCheckBoxInput.addEventListener ('keypress', function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                // console.log(addCheckBox(addCheckBoxInput.value));
                itemObject.checklist.push([addCheckBoxInput.value, addCheckBox(addCheckBoxInput.value)]);
                console.log(itemObject.checklist);
                addCheckBoxInput.focus();
                addCheckBoxInput.value = "";
                addCheckBoxInput.placeholder = "Add another...";
                // checkboxLabel.placeholder = "Add newer Item..";
            };
        });

         // checkbox
            function addCheckBox(value) {
                const checkboxDiv = document.createElement("div");
                checkboxDiv.className = "checkboxDiv";
                const checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.className = "checkbox";
                const checkListLength = document.querySelectorAll(".checkbox").length;
                // checkboxDiv.setAttribute("id", id + "toDo"+ checkListLength);
                // checkbox.setAttribute("value", "1");
                const checkboxLabel = document.createElement("div");
                checkboxLabel.className = "checkboxLabel";
                // checkboxLabel.setAttribute("type","textarea");
                // checkboxLabel.setAttribute("for", id + checkListLength);
                checkboxLabel.textContent = value;

                checkboxDiv.append(checkbox, checkboxLabel);
                checklist.insertBefore(checkboxDiv, addCheckBoxInput);
                // checklist.insertBefore(checkboxDiv, );
                // checkboxLabel.focus();
                // addCheckBoxInput.replaceWith(addCheckbox);
                // addCheckbox.value = "Add Item..."
                checkbox.addEventListener("click", () => {
                    console.log(checkbox.checked);
                    // checkboxLabel.toggleAttribute.className = "checked";
                })
                return checkbox.checked;
            };

    // addCheckBox();
    
    // priority
        const priorityDiv = document.createElement("div");
        priorityDiv.textContent = "Priority"
        const priorityList = document.createElement("select");
        const option1 = document.createElement("option");
        option1.value = "High";
        option1.textContent = "High";
        const option2 = document.createElement("option");
        option2.value = "Medium"; 
        option2.textContent = "Medium";
        const option3 = document.createElement("option");
        option3.value = "Low";
        option3.textContent = "Low";
        priorityList.append(option1,option2,option3);
        priorityDiv.append(priorityList);
    
    // modal click logic
        window.addEventListener("click", function(event) {
            if (event.target.className == "modal") {
            modal.style.visibility = "hidden";
            // saveToStorage();
            }
        });
   
    //append elements
        modalContent.append(close, titleEl, desc, checklist, priorityDiv);
        modal.append(modalContent);
        body.append(modal);
        modal.style.visibility = "hidden";

    // item event listener
        button.addEventListener("click", () => {
            modal.style.visibility = "visible";
            // console.log(itemObject.title);
            // itemObject.description = desc.value;
            // // console.log(newItem.checklist);
            // console.log(itemObject.description);
        });

};