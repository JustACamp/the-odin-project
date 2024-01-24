import initLoad from "./functions/initLoad.js";
import clearPage from "./functions/clearPage.js";
import homePage from "./pages/home.js";
import "./styles/styles.css";
import contactPage from "./pages/contact.js";
import menuPage from "./pages/menu.js";

initLoad();
homePage();
const tabOne = document.querySelector("#tabOne");
const tabTwo = document.querySelector("#tabTwo");
const tabThree = document.querySelector("#tabThree");

tabOne.addEventListener("click", function() {
    clearPage();
    homePage();
});

tabTwo.addEventListener("click", function() {
    clearPage();
    menuPage();
});

tabThree.addEventListener("click", function() {
    clearPage();
    contactPage();
});
    

// tab switching logic
// wipe out the div and fill it with content and style
