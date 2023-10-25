const fibonacci = function(num) {
    if (num < 0 ){
        return "OOPS";
    } 
    if (num === 0){
            return 0;
    }
    let secondprevious = 0;
    let firstprevious = 1;
    for (let i = 2; i <= num; i++) {
        let current = firstprevious + secondprevious;
        secondprevious = firstprevious;
        firstprevious = current;
    };
    return firstprevious;
};
// (0 + 1) (1 + 1) (2 + 1) (3+2) (4+3)
// 1, 1, 2, 3, 5, 8, ...
// Do not edit below this line
module.exports = fibonacci;
