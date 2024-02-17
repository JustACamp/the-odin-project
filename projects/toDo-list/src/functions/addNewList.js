// module to add a project list to the interface

export default function addNewList() {
        const addNewListDiv = document.querySelector(".addNewListDiv");
        const content = document.querySelector(".content");
        const list = document.createElement("div");
        list.className = "list";
        
        const addButton = document.createElement("button");
        addButton.className = "btn";
        addButton.setAttribute("id","addButton");
        addButton.textContent = "Add Card..";
        addButton.addEventListener("click", () => {
            const item1 = new ToDoItem();
        });
        list.appendChild(addButton);

        content.insertBefore(list, addNewListDiv);
    };

//add name box to project
//add item button and type to div at bottom
