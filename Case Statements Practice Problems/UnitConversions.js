const prompt = require('prompt-sync')();

let value = parseFloat(prompt('Enter the value: '));
let unit = prompt('Enter the unit: ');

let feetToInchFactor = 12;
let inchToFeetFactor = 1/12;
let feetToMeterFactor = 0.3048;
let meterToFeetFactor = 1/0.3048;

switch (unit) {
    case 'Inch':
        console.log("Value in Feet: " + value * inchToFeetFactor);
        break;
    case 'Feet':
        console.log("Value in Inches: " + value * feetToInchFactor);
        console.log("Value in Meters: " + value * feetToMeterFactor);
        break;
    case 'Meter':
        console.log("Value in Feets: "+ value * meterToFeetFactor);
        break;
    default:
        console.log("Enter Proper Unit!");
        break;
}