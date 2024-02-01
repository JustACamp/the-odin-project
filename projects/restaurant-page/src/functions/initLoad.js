function initLoad () {
    const head = document.head;
    const body = document.body;

    const title = document.createElement('title');
    title.textContent = "Restaurant Landing Pages"
    head.appendChild(title);

    // create header
    const header = document.createElement('div');
    header.setAttribute("id","header");
    body.prepend(header);
    const headline = document.createElement('h1');
    headline.textContent = "nettle and thyme";

    //create header paragraph
    const headLinePara = document.createElement('p');
    headLinePara.setAttribute("id","headerPara");
    headLinePara.textContent = "Your amazing tiny home away from home";
    header.appendChild(headline);
    header.appendChild(headLinePara);
    
    // create tab div container
    const tabDiv = document.createElement('div');
    tabDiv.setAttribute("id", "tabDiv");
    header.appendChild(tabDiv);


    // create tab buttons
    const tabOne = document.createElement('button');
    tabOne.textContent = "home";
    tabOne.setAttribute("id", "tabOne");
    tabDiv.appendChild(tabOne);

    const tabTwo = document.createElement('button');
    tabTwo.textContent = "menu";
    tabTwo.setAttribute("id", "tabTwo");
    tabDiv.appendChild(tabTwo);
    
    const tabThree = document.createElement('button');
    tabThree.textContent = "contact";
    tabThree.setAttribute("id", "tabThree");
    tabDiv.appendChild(tabThree);   

    // create footer
    const footer = document.createElement("div");
    footer.setAttribute("id","footer");

    const footerLeft = document.createElement("div");
    footerLeft.setAttribute("id","footerLeft");
    footerLeft.textContent = "jac";

    const footerRight = document.createElement("div");
    footerRight.setAttribute("id", "footerRight");
    footerRight.textContent = "Copyright 2024";

    // append footer
    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);
    body.appendChild(footer);
}

export default initLoad