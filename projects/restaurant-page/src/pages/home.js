// module for updating the DOM of the homepage

function homePage () {
    const content = document.querySelector("#content");
    const homePara = document.createElement("p");
    homePara.textContent = "Fresh food from the soil of Vancouver Island. Plates inspired by diversity in cuisine..";
    content.appendChild(homePara);
    const image1 = document.createElement("img");
    image1.setAttribute("src","../src/assets/C&J-WEDDING-202.jpg");
    image1.setAttribute("alt", "Bruschetta with heirloom tomatoes");
    const image2 = document.createElement("img");
    image2.setAttribute("src","../src/assets/C&J WEDDING-321.jpg");
    image2.setAttribute("alt", "Local Strawberry and Rhubarb Tart Tatin");
    const image3 = document.createElement("img");
    image3.setAttribute("src", "../src/assets/C&J WEDDING-350.jpg");
    image3.setAttribute("alt", "Man excited about cucumber sorbet");
    content.appendChild(image1);
    content.appendChild(image2);
    content.appendChild(image3);

}; 



export default homePage;