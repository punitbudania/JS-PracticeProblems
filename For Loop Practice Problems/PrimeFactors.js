const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number: "));

//Prints all two's that divide the number
while (number % 2 == 0) {
    console.log(2);
    number /= 2;
}

//Prints all the odd numbers that divide the number
for (let index = 3; index * index <= number; index += 2) {
    while (number % index == 0) {
        console.log(index);
        number = number / index;
    }
}

//Prints the number if it's a prime number
if (number > 2) {
    console.log(number);
}