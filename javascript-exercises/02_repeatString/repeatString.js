function repeatString(string, num) {
    sentence = '';
    if (num < 0 ) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            sentence = sentence + string;
            // console.log(sentence);
        }
    }
    return sentence;
};
// Do not edit below this line
module.exports = repeatString;
