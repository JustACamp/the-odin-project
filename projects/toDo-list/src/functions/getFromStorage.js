export default function getFromStorage() {
    const pageLoad = localStorage.getItem("pageLoad");
    const pageData = localStorage.getItem("pageData");
    console.log(pageData);
}