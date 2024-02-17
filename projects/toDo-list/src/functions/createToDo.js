// title, description, dueDate, priority, notes, checklist

import addToDo from "./addToDo";

export default function ToDoItem () {
    const title = prompt("Title?");
    const description = prompt("Description?");
    const dueDate = prompt("Due Date?");
    const priority = prompt("Priority Level?");
    const notes = prompt("Notes?");
    const checklist = prompt("Checklist");
    addToDo(title, description, dueDate, priority, notes, checklist);
};