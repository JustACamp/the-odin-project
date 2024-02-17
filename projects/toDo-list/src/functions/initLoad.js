import ToDoItem from "./createToDo";
import addNewList from "./addNewList";
import modalPopUp from "./modalPopUp";

export default function initLoad() {
    const body = document.body;

    // create header elements
    const header = document.createElement("div");
    header.className = "header";

    const headerHero = document.createElement("div");
    headerHero.className = "headerHero";
    headerHero.textContent = "LemonJello";
    header.appendChild(headerHero);

    const headerMenu = document.createElement("div");
    headerMenu.className = "headerMenu";
    header.appendChild(headerMenu);
     
    const menu = document.createElement("button");
    menu.className = "btn";
    menu.textContent = ("MENU");
    headerMenu.appendChild(menu);

    // create content div
    const content = document.createElement("div");
    content.className = "content";

    // add lists
    const list1 = document.createElement("div");
    list1.className = "list";
    list1.setAttribute("id","list1");
    
    const list2 = document.createElement("div");
    list2.className = "list";

    const addNewListDiv = document.createElement("div");
    addNewListDiv.className = "addNewListDiv";

    //input method
    const addButton = document.createElement("input");
    addButton.setAttribute("placeholder", "Add Card..");
    addButton.setAttribute("type", "text");
    addButton.setAttribute("id", "addBtn");
    addButton.setAttribute("name","addBtn");

    // add buttons
    const addButton1 = document.createElement("button");
    addButton1.className = "btn";
    addButton1.setAttribute("id","addButton1");
    addButton1.textContent = "Add Card..";
    addButton1.addEventListener("click", () => {
        const item1 = new ToDoItem();
    });

    const addButton2 = document.createElement("button");
    addButton2.className = "btn";
    addButton2.setAttribute("id","addButton2");
    addButton2.textContent = "Add Card..";
    addButton2.addEventListener("click", () => {
        modalPopUp();
    });

    const addListBtn = document.createElement("button");
    addListBtn.className = "btn";
    addListBtn.textContent = "Add List..";
    addListBtn.addEventListener("click", () => {
        addNewList();
    });

    // append buttons
    list1.appendChild(addButton1);
    list1.append(addButton);
    list2.appendChild(addButton2);
    addNewListDiv.appendChild(addListBtn);

    //append divs
    content.prepend(list1,list2, addNewListDiv);
    body.append(header, content);


    
};