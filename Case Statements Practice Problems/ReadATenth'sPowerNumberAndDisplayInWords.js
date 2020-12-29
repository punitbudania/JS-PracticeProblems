const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number which is Tenth's power : "));
let numInWords;

switch (number) {
    case 1:
        numInWords = 'Unit';
        break;
    case 10:
        numInWords = 'Ten';
        break;
    case 100:
        numInWords = 'Hundred';
        break;
    case 1000:
        numInWords = 'Thousand';
        break;
    case 10000:
        numInWords = 'Ten Thousand';
        break;
    case 100000:
        numInWords = 'Hundred Thousand';
        break;
    case 1000000:
        numInWords = 'One Million';
        break;
    case 10000000:
        numInWords = 'Ten Million';
        break;
    case 100000000:
        numInWords = 'Hundred Million';
        break;
    case 1000000000:
        numInWords = 'One Billion';
        break;
    default:
        numInWords = 'Improper Input';
        break;
}

console.log(numInWords);