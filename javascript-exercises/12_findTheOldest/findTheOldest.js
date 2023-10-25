const findTheOldest = function (array) {
    let oldest = 0;
    let oldestperson = "";
    array.forEach( (people) => {
        let age = people.yearOfDeath - people.yearOfBirth;
        if (age > oldest) {
            oldest = age;
            oldestperson = people.name;
        }
        
    });
    return oldestperson;
};

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = oldest.name;
        const currentAge = 
    }
}

const getAge = function(birth,death) {
    if (!death) {
        death = new Date().getFullYear()
    }
}

// Do not edit below this line
module.exports = findTheOldest;
