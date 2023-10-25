const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const paragraph = document.createElement('p') ;
paragraph.setAttribute('style' , 'color: red');
paragraph.textContent = 'This is red text';
container.appendChild(paragraph);

const header3 = document.createElement('h3') ;
header3.setAttribute('style' , 'color: blue');
header3.textContent = "I'm a blue h3";
container.appendChild(header3);

const content2 = document.createElement('div');
content2.setAttribute('style' , 'border: 2px solid black; background-color: pink;');
// content2.textContent = "Hello";

const header1 = document.createElement('h1');
header1.textContent = "Hello";
content2.appendChild(header1);

const paragraph2 = document.createElement('p');
paragraph2.setAttribute('style' , 'color: black');
paragraph2.textContent = "ME TOO";
content2.appendChild(paragraph2);

container.appendChild(content2);