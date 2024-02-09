// object constructor for each to do

// properties title, description, duedate, priority, notes, checklist

//project cards with tiles

// app opens with default project, user creates to dos and sorts them into projects

// everything in separate modules 
// chg priority, mark as complete, make new todos etc.
// dom should be separate

// local storage uses json. figure out how to store and retrieve it
// figure out how to add methods back to object properties after they are fetched.
import './styles/style.css';
import initLoad from "./functions/initLoad";
import ToDoItem from "./functions/createToDo";

initLoad();
const item1 = new ToDoItem ("Description", "4/5", "High Priority","Notes","Add checklist");
console.log(item1.desc, item1.dueDate);
const list = document.querySelector(".list");
const item = document.createElement("div");
item.classList = ("item");
list.appendChild(item);


