// a function named greetUser that takes one parameter user's name and returns a greeting message
function greetUser() {
    return `hello ${name}`;
}

message = greetUser("Ese")
console.log(message);


// a function called addNumbers that accepts two numbers as arguments and returns their sum

function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(2, 6);
console.log(sum);

// a function named calculateArea that takes the length and width of a rectangle as parameters and returns its area.

function calculateArea(width, height) {
    return width * height;
}
let area = calculateArea(5, 4);
console.log(`The area of the reactangle: ${area}`)

// a a function named findMax that takes three numbers as input and returns the largest number among them.

function findMax(a, b, c) {
    let max = a;
    if (b >= max && b >= c) {
        return `${b}`;
    }
    else if (c >= max) {
        return `${c}`;
    }
    else {
        return `${max}`;
    }
}

maximumNumber = findMax(10, 18, 7);
console.log(maximumNumber);

// a function named checkEvenOrOdd that takes a number as input and prints whether it is even or odd.
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log (`${num} It is an even number`);
    }
    else {
        console.log (`${num} It is not an even number`);
    }
}

evenNumber = checkEvenOrOdd(5);

// a function named simpleInterestCalculator that calculates the simple interest given the principal amount, rate of interest, and time in years. 

function simpleInterestCalculator(principal, rate, time) {
    return (principal * rate * time) / 100;
}

Interest = simpleInterestCalculator(4, 3, 6);
console.log(Interest);

//  a function named stringLength that calculates and returns the length of a given string.

function stringLength(str) {
    return str.length;
}



