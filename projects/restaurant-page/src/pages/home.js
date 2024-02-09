// module for updating the DOM of the homepage

function homePage () {
    const content = document.querySelector("#content");
    
    const homePara = document.createElement("p");
    // homePara.textContent = "Fresh food from the soil of Vancouver Island. Plates inspired by diversity in cuisine..";
    // content.appendChild(homePara);

    //div 1
    const div1 = document.createElement("div");
    div1.className = "contentDiv";
    div1.setAttribute("id","div1");
    const div1para = document.createElement("p");
    div1para.textContent = "The story of nettle and thyme began in 2024 as an idea...";
    const image1 = document.createElement("img");
    image1.setAttribute("src","../src/assets/C&J-WEDDING-202.jpg");
    image1.setAttribute("alt", "Bruschetta with heirloom tomatoes");
    div1.append(image1, div1para);
    

    //div 2
    const div2 = document.createElement("div");
    div2.className = "contentDiv";
    div2.setAttribute("id","div2");
    const div2para = document.createElement("p");
    div2para.textContent = ("... to make food cultivated and foraged locally...");
    const image2 = document.createElement("img");
    image2.setAttribute("src","../src/assets/C&J WEDDING-321.jpg");
    image2.setAttribute("alt", "Local Strawberry and Rhubarb Tart Tatin");
    div2.append(div2para, image2);

    //div 3
    const div3 = document.createElement("div");
    div3.className = "contentDiv";
    div3.setAttribute("id","div3");
    const div3para = document.createElement("p");
    div3para.textContent = ("...to perpetuate a connection with the land that roots us.");
    const image3 = document.createElement("img");
    image3.setAttribute("src", "../src/assets/C&J WEDDING-350.jpg");
    image3.setAttribute("alt", "Man excited about cucumber sorbet");
    div3.append(image3, div3para);
    // content.className = "bg";

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

}; 



export default homePage;