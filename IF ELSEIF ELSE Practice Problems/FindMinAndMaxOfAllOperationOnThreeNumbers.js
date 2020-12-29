const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Enter Number 1: '));
let num2 = parseInt(prompt('Enter Number 2: '));
let num3 = parseInt(prompt('Enter Number 3: '));

let operation1 = num1 + num2 * num3;
let operation2 = num1 % num2 + num3;
let operation3 = num1 + num2 / num3;
let operation4 = num1 * num2 + num3;

let min = operation1;
let max = operation1;

if (operation2 < min ) {
    min = operation2;
}
if (operation3 < min) {
    min = operation3;
}
if (operation4 < min) {
    min = operation4;  
} 

if (operation2 > max) {
    max = operation2;
}
if (operation3 > max) {
    max = operation3;
}
if (operation4 > max) {
    max = operation4;
}

console.log("Minimum: "+min+" Maximum: "+max);
