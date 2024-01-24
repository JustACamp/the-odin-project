function initLoad () {
    const head = document.head;
    const body = document.body;
    const content = document.querySelector('#content');

    const title = document.createElement('title');
    title.textContent = "Restaurant Landing Pages"
    head.appendChild(title);

    const header = document.createElement('div');
    body.prepend(header);
    const headline = document.createElement('h1');
    headline.textContent = "nettle and thyme";
    const headLinePara = document.createElement('p');
    headLinePara.textContent = "Your amazing tiny home away from home";
    header.appendChild(headline);
    header.appendChild(headLinePara);
    
    // create tab div
    const tabDiv = document.createElement('div');
    tabDiv.setAttribute("id", "tabDiv");
    header.appendChild(tabDiv);


    // create tabs
    const tabOne = document.createElement('button');
    const tabTwo = document.createElement('button');
    const tabThree = document.createElement('button');
    
    
    tabOne.textContent = "home";
    tabOne.setAttribute("id", "tabOne");
    tabTwo.textContent = "menu";
    tabTwo.setAttribute("id", "tabTwo");
    tabThree.textContent = "contact";
    tabThree.setAttribute("id", "tabThree");

    tabDiv.appendChild(tabOne)
    tabDiv.appendChild(tabTwo)
    tabDiv.appendChild(tabThree);
}

export default initLoad