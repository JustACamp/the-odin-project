export default function modalPopUp() {
    const body = document.body;
    const modalBtn = document.querySelector("#addButton2");
    const modal = document.createElement("div");
    modal.className = "modal";
    const modalContent = document.createElement("div");
    modalContent.className = "modalContent";

    //close button
    const close = document.createElement("div");
    close.className = "close";
    close.innerHTML = "&times;";

    //title
    const title = document.createElement("input");
    title.className = "title";
    title.textContent = "title";
    
    // title.textContent = document.querySelector(".title").getAttribute("value");

    //description
    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = "description";
    desc.setAttribute("placeholder", "Description..");
    desc.setAttribute("id", "desc");
    desc.setAttribute("name","desc");

    //checklist
    const checklist = document.createElement("div");
    checklist.className = "checklist";
    //add percentage completed

    //checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checklist.append("checkbox");

    //append elements
    modalContent.append(close, title, desc);
    modal.append(modalContent);
    body.append(modal);

    close.addEventListener ("click", ()=> {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
};