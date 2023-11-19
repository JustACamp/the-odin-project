const body = document.querySelector("body");
const newBook = document.getElementById("newBook");
const table = document.querySelector("table");
const submit = document.getElementById('submit');
const cancel = document.getElementById('btn-cancel');

newBook.addEventListener('click', function () { 
    document.getElementById('formPopup').style.display = "block";
});

cancel.addEventListener('click', () => {
    document.getElementById('formPopup').style.display = "none"
});

function submitForm (event) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let rating = document.getElementById('rating').value;
    const formInput = new Book(title , author , pages , read , rating);
    console.log(formInput);
    // event.preventDefault();
    addBookToLibrary(formInput);
    dispLib(myLibrary);
}


// const myLibrary=[];

const myLibrary = [
    {
        title:"East of Eden",
        author:"Steinbeck",
        pages:704,
        read:"yes",
        rating: 5,
    } 
    ,
    {
        title:"1984",
        author: "Orwell",
        pages: 400,
        read: "yes",
        rating: 4,
    }
];

function Book (title, author, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// display library
function dispLib(myLibrary) {
    const oldTbody = document.getElementById('tableBody');
    const newTbody = document.createElement('tbody');
    newTbody.setAttribute = ('id', 'tableBody');
    table.appendChild(oldTbody);
    
    // const tablerow = document.querySelectorAll('tablerow');
    // table.replaceChild(oldTbody, newTbody);

    // Rebuild Table: for each item make new row, add column items, append to 
    myLibrary.forEach(function (item) {
        const newRow = document.createElement('tr');
        newTbody.appendChild(newRow);
        // newRow.className('row');

        const newCol1 = document.createElement('td');
        newCol1.textContent=item.title;
        newRow.appendChild(newCol1);

        const newCol2 = document.createElement('td');
        newCol2.textContent=item.author;
        newRow.appendChild(newCol2);

        const newCol3 = document.createElement('td');
        newCol3.textContent=item.pages;
        newRow.appendChild(newCol3);

        const newCol4 = document.createElement('td');
        newCol4.textContent=item.read;
        newRow.appendChild(newCol4);

        const newCol5 = document.createElement('td');
        newCol5.textContent=item.rating;
        newRow.appendChild(newCol5);

        return (item);
        // console.table(item);
    })
}

// event.preventDefault();