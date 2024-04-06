export default function getFromStorage() {
    const pageLoad = window.localStorage.getItem("pageLoad");
    const pageData = window.localStorage.getItem("pageData");
    const pageDataParsed = JSON.parse(pageData);
    console.log(pageDataParsed);
    return pageDataParsed
}