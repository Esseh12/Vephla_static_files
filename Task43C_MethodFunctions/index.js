// a function that capitalizes the first letter of a sentence. Ensure the rest of the sentence remains lowercase.
const capitalizeFirstLetter = (sentence) =>  {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}
let words = "esemokumo";
console.log(capitalizeFirstLetter(words));


function joinElementsToString(array) {
    return array.join('y ');
}

let array = [1, 2, 3, 4, 5];
console.log(joinElementsToString(array))