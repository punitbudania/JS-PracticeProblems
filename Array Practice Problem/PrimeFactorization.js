const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number: "));

function getPrimeFactors(number) {
    let factorArray = new Array();

    while (number % 2 == 0) {
        factorArray.push(2);
        number /= 2;
    }
    
    for (let index = 3; index * index <= number; index += 2) {
        while (number % index == 0) {
            factorArray.push(index);
            number = number / index;
        }
    }
    
    if (number > 2) {
        factorArray.push(number);
    }

    return factorArray;
}

let factorArray = getPrimeFactors(number);
console.log("Prime Factors of " + number + " are " + factorArray);
