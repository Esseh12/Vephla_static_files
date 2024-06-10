// inbuilt methods in javascript.
// the map method creates a new array with the result of calling a provided function on every element in this array
// implementing the arrow function with a map method

const useMap = (arr) => {
    const mappedArr = arr.map(element => element + 30)
    return mappedArr;
}
// the array to be worked on 
const oldArr = [1, 2, 3, 4, 5];
newArr = useMap(oldArr);
console.log(newArr);

// the filter method unlike the map method creates a new array with only the elements that passed the condition inside the provided function

const useFilter = (arr) => {
    const filtered = arr.filter(element => element === 1 || element === 4);
    return filtered;
}
// the array to be worked on 
const oldFilterArr = [1, 2, 3, 4, 5, 6];
newFiltered = useFilter(oldFilterArr);
console.log(newFiltered);

//the forEach() method helps to loop over an array by executing a provided callback function for each element in an array

const useForEach = (arr) => {
    const newElement = arr.forEach(element => {
        console.log(element);
     });
}

array = [1, 2, 3];
const use = useForEach(array)