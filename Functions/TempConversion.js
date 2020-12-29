const prompt = require('prompt-sync')();

let unit = prompt('Unit: ');
let value = parseFloat(prompt('Enter the temperature: '));

if (unit == 'degreeF') {
    if (value < 32 || value > 212) {
        console.log("Invalid Input");
        return;
    }
} else if (unit == 'degreeC') {
    if (value < 0 || value > 100) {
        console.log("Invalid Input");
        return;
    }
}

function celsiusToFahrenheit(temperature) {
    return (temperature * (9/5)) + 32;
}

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * (5/9);
}

switch (unit) {
    case 'degreeF':
        console.log("Temperature in degree celcius = " + fahrenheitToCelsius(value));
        break;
    case 'degreeC':
        console.log("Temperature in degree fahrenheit = " + celsiusToFahrenheit(value));
        break;
    default:
        console.log("Invalid Unit!");
        break;
}