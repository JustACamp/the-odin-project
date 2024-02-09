export default function initLoad() {
    const body = document.body;

    const header = document.createElement("div");
    header.className = "header";
    header.textContent = "Jello";

    const content = document.createElement("div");
    content.className = "content";

    const list = document.createElement("div");
    list.className = "list";


    content.appendChild(list);
    body.append(header, content);
};