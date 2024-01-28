function menuPage() {

    function addMenuItem(item,price,description) {
        const menuItem = document.createElement("p");
        menuItem.setAttribute("id","menuItem");
        const itemDesc = document.createElement("p");
        itemDesc.setAttribute("id","itemDesc");
        menuItem.textContent = item;
        // menuItem.textContent += " - " + price + "."
        itemDesc.textContent = description;
        menu.appendChild(menuItem);
        menu.appendChild(itemDesc);
    };

    function addMenuSection(section) {
        const menuSection = document.createElement("p");
        menuSection.setAttribute("id", "menuSection");
        menuSection.textContent = (section);
        menu.appendChild(menuSection);
    }
    
    const body = document.body;
    const content = document.getElementById('content');
    const menuHead = document.createElement('p');
    menuHead.setAttribute("id", "menuHead");
    const menu = document.createElement('div');
    menu.setAttribute("id","menu");
    
    menuHead.textContent = "menu";

    addMenuSection("Main Course");
    addMenuItem("Heirloom Tomato and Grilled Plum Salad");
    addMenuItem("Crispy Halloumi, Pea Sprouts");
    addMenuSection("~ ~ ~");
    addMenuItem("Chili Garlic Broccolini");
    addMenuItem("Edamame Bean and Asparagus Salad");
    addMenuItem("Candied Pistachios, Pearl Cous Cous");
    addMenuItem("Compressed Black Plums, Blistered Garlic Scapes");
    addMenuSection("~ ~ ~");
    addMenuItem("Honey Thyme Rainbow Carrots");
    addMenuSection("~ ~ ~");
    addMenuItem("Confit Potatoes");
    addMenuItem("Lightly Smoked Cedar Plank Salmon");
    addMenuSection("~ ~ ~");
    addMenuItem("Roasted Cauliflower and Apple Tempeh");
    addMenuSection("Dessert");
    addMenuItem("Cucumber Mint Sorbet and Mini Sesame Cone");
    addMenuItem("Local Strawberry and Rhubarb Tart Tatin");
    content.appendChild(menuHead);
    content.appendChild(menu);
};



export default menuPage