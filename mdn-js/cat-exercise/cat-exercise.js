
//Exercise 1 & 2


// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}`);
//     }
//   }
// const cat2 = {
//     name: 'Bernie',
//     breed: 'Cymry',
//     color: 'white',
//     greeting: function() {
//         console.log(`Hello, said ${this.name} the ${this.breed}`);
//     }
// }
// let catName = cat["name"];
// cat.greeting();
// cat2.greeting();
// cat.color = 'black';
// let body = document.querySelector('body');
// let para1 = document.createElement('p');
// let para2 = document.createElement('p');
// para1.textContent = `The cat's name is ${ catName }.`;
// para2.textContent = `The cat's color is ${ cat.color }.`;
// body.appendChild(para1);
// body.appendChild(para2);


//Exercise 4

function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {
        console.log(`Hello, said ${this.name}, the ${this.breed}. I am ${this.color}`)
    }
}

const bernie = new Cat("bernie", "siamese", "grey");
// bernie.name;
bernie.greeting();

const frankie = new Cat("frankie", "tabby", "orange");
frankie.greeting();

