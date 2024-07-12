 let Age = prompt("Hello, how old are you?");
if (Age >= 18) {
     alert("you can view the content of the page");
 } else if (Age == 15) {
     alert("you can just try again in 3 years");
 } else {
    alert("please stay away from here");
}

// 2
let firstName = prompt("what is your name");
if (firstName == "Ese") {
    alert(`Welcome + ${firstName}`);
} else {
    alert(`you're not allowed to view this page`);
}

//3
let userColor = prompt("What is your favorite color?");
let myColor = "blue";

if (userColor.toLowerCase() === myColor.toLowerCase()) {
    alert("We have the same favorite color!");
} else {
    alert("Our favorite colors are different.");
}
//4
let answer = prompt("Is JavaScript a programming language? (true/false)").toLowerCase();

if (answer === "true") {
    alert("Correct!");
} else {
    alert("Incorrect. JavaScript is indeed a programming language.");
}


