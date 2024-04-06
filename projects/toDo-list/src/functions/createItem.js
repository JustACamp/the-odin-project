import modalPopUp from "./modalPopUp";
import ToDoItem from "./itemConstructor";

export default function createItem(listIndex, pageObject, itemData) {
    // const items = document.querySelectorAll(".items");
    // console.log(listIndex);
    // console.log(item);
    // console.log(itemObject);
    // itemObject.title = itemObjectTitle;
    const listDiv = document.querySelector("#list" + listIndex);
    // const addItemButton = document.querySelector("#" + list.id + "addItemBtn");
    const addItemButton = document.querySelector("#addItemBtn" + listIndex);

    const itemButton = document.createElement("button");
    // itemButton.setAttribute("id", list.id + "item" + (items.length + 1));
    itemButton.className = "items";
    let itemObject;
    if (itemData.title === undefined) {
        itemObject = new ToDoItem();
        itemObject.title = itemData;           //create new item object using constructor, then chg values in modalpopup.
        pageObject.lists[listIndex].items.push(itemObject);
        
    } else {
        itemObject = itemData;
    }

    itemButton.textContent = itemObject.title;

    modalPopUp(listIndex, itemButton, itemObject, pageObject);
    // modalPopUp(itemButton, newItem);

    listDiv.insertBefore(itemButton, addItemButton); 
        
    // addItemButton.setAttribute("value"," ");
    addItemButton.setAttribute("value","Add Card...");
    addItemButton.blur();

    
};