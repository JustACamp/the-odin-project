const removeFromArray = function(array, num) {
    for (let j = 1; j <= arguments.length ; j++) {
    //   console.log(arguments[j]);  
      for (let i = 0; i <= array.length ; i++) {
        //   console.log(array[i]);
            if (array[i] === arguments[j]) {
                array.splice(i , 1);
                // console.log("splicing");
            }
            // console.log(array);
        }
      }
    return array;
  };


// Alternative function
const removeFromArrays = function(array,...args) {
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  })
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
