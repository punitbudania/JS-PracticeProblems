const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number: "));

function isPrimeNumber(number) {
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        }
    }
    return true;
}

function getPalindrome(number) {
    if (number > 1 && number < 10 ) {
        return number;
    }
    let palindrome = 0;
    while (number > 0) {
        palindrome = palindrome * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return palindrome;
}

if (isPrimeNumber(number)) {
    if (isPrimeNumber(getPalindrome(number))) {
        console.log("Palindrome of the given prime number is also prime");
    } else {
        console.log("Palindrome of the given prime number is not prime");
    }
} else {
    console.log("Given number is not a prime number");
}