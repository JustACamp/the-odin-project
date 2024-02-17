export default function addToDo(title, description, dueDate, priority, notes, checklist) {
    //DOM function for adding items to lists
    //identify list using button
    const addButton1 = document.querySelector("#addButton1");
    const toDoDiv = document.createElement("div");
    toDoDiv.className = "toDoDiv";
    toDoDiv.textContent = `${title}, ${description}, ${dueDate}, ${priority}, ${notes}, ${checklist}`;
    const list = document.querySelector("#list1");
    list.insertBefore(toDoDiv, addButton1);
    //prepend item to list
    //potential reorder requirement
};