
export default function saveToStorage (pageObject) {

    //save data on new project (list) create or new Item create

    
    window.localStorage.setItem("pageLoad", "boom Shaka");
    // window.localStoarge.setItem("pageData", JSON.stringify(pageObject));
    window.localStorage.setItem("pageData", pageObject);

    // [list][item][title, description, due date, priority, notes, checklist]
}