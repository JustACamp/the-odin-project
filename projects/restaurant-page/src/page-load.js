function pageLoad () {
    const head = document.head;
    const body = document.body;
    console.log(body);
    console.log(head);
    const content = document.getElementById('content');
    const title = document.createElement('title');
    title.innerHTML = "Restaurant Landing Pages"
    head.appendChild(title);

    const headline = document.createElement('h1');
    headline.innerHTML = "The Watering Hole";
    body.append(headline);
    
    content.innerHTML = "This is my amazing restaurant";


    const image = document.createElement("img");
    image.setAttribute("src","./C&J-WEDDING-202.jpg");
    image.setAttribute("width","500");
    image.setAttribute("height","auto");
    body.append(image);
};

export default pageLoad;