const tableau = new Array(100).fill().map((_, i) => i + 1);
// console.log(tableau);
let numberOfTries = 0;
const numberToGuess = Math.floor(Math.random() * 100) + 1;
function binarySearch(tableau, numberToGuess) {
    let min = 0;
    let max = tableau.length - 1;
    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let guess = tableau[middle];
        numberOfTries++;
        if (guess === numberToGuess) {
            return middle;
        } else if (guess > numberToGuess) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }
    return null
}

const start = performance.now();
const result = binarySearch(tableau, numberToGuess);
const end = performance.now();
console.log("binary search time : ", end - start);
console.log("result : ", result);

// Complexity: O(log n)