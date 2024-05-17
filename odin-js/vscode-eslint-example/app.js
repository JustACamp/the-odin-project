const { readJsonFromDiskAsync } = require("tsconfig-paths/lib/filesystem");

const name = 'James';

const person = { first: name };

console.log(person);

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};
