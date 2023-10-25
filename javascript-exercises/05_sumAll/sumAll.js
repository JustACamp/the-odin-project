const sumAll = function(a,b) {
    let total = 0;
    if (a < 0 || b < 0) {
        console.log("ERROR");
        return "ERROR";
    } else if (typeof a !== "number" || typeof b !== "number") {
        console.log("ERROR");
        return "ERROR";
    } else if (b>a) {
        for (let anum = a; anum <= b; anum++) {
                total += anum;
        }
    } else if (b<a) {
        for (let anum = b; anum <= a; anum++) 
            total += anum;
    }
    console.log (total);
    return total;
};

// Do not edit below this line
module.exports = sumAll;
