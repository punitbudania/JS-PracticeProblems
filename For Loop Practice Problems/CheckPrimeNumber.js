const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number: "));
let isPrimeNumber = true;
for (let index = 2; index < number; index++) {
    if (number % index == 0) {
        isPrimeNumber = false;
        break;
    }
    
}
console.log("Is Prime Number: " + isPrimeNumber);