const prompt = require('prompt-sync')();

let startNumber = parseInt(prompt("Enter the number: "));
let endNumber = parseInt(prompt("Enter the number: "));
for (let index = startNumber; index <= endNumber; index++) {
    let isPrimeNumber = true;
    if (index == 2) {
        console.log(2);
        continue;
    }
    if (index == 1 || index % 2 == 0) {
        continue;
    }
    for (let j = 2; j < index; j++) {
        if (index % j == 0) {
            isPrimeNumber = false;
            break;
        }
        
    }
    if (isPrimeNumber) console.log(index);
    
}