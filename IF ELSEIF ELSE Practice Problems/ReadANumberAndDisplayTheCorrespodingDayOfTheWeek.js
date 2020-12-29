const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter the number between 1 and 7 : '));
let day;
if (number == 1) {
    day = 'Sunday';
} else if (number == 2) {
    day = 'Monday';
} else if (number == 3) {
    day = 'Tuesday';
} else if (number == 4) {
    day = 'Wednesday';
} else if (number == 5) {
    day = 'Thursday';
} else if (number == 6) {
    day = 'Friday';
} else if (number == 7) {
    day = 'Saturday';
} else {
    console.log("Please enter correct number!");
}

console.log('Day of the Week is: ' + day);
