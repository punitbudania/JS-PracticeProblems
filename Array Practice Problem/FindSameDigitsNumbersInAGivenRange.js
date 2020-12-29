const prompt = require('prompt-sync')();

let start = parseInt(prompt("Enter the starting number: "));
let end = parseInt(prompt("Enter the ending number: "));
let sameDigitNumbers = new Array();

if (start <= 0 || start > 100 || end < start || end > 100) {
    console.log("Invalid Inputs. Please enter numbers between 0 and 100");
    return;
}

for (let index = start; index <= end; index++) {
    if (index % 11 == 0) {
        sameDigitNumbers.push(index);
    }
}

console.log("Numbers are: " + sameDigitNumbers);
