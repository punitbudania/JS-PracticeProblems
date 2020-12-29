const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter the number between 1 and 7 : '));
let day;

switch (number) {
    case 1:
        day = 'Sunday'
        break;
    case 2:
        day = 'Monday';
        break;
    case 3:
        day = 'Tuesday';
        break;
    case 4:
        day = 'Wednesday';
        break;
    case 5:
        day = 'Thursday';
        break;
    case 6:
        day = 'Friday';
        break;
    case 7:
        day = 'Saturday';
        break;
    default:
        day = 'Improper Input';
        break;
}

console.log(day);