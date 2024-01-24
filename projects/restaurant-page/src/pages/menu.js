

function menuPage() {
    const body = document.body;
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.setAttribute("id","menu");
    menu.textContent = "Here is the menu for today";
    content.appendChild(menu);
}



export default menuPage