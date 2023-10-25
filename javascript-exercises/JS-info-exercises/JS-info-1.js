//js.info exercises

// #1
let user = {};
user.name = "john";
user.surName = "smith";
user.name = "pete";
delete user.name;

//#2
function isEmpty (obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

//#3
function sum (obj) {
    let sum = 0 ;
    for (let key in obj) {
        sum += obj.key;
    };
};

//#4
function multiplyNumeric (obj) {
    for (let key in obj) {
        if (typeof(key) == "number") {
            obj.key *= 2 ;
        }
    };
}