const tableau = new Array(100).fill().map((_, i) => i + 1); // remplir le tableau avec des nombres de 1 à 100
// console.log(tableau);
let numberOfTries = 0;
const numberToGuess = Math.floor(Math.random() * 100) + 1;
function simpleSearch(tableau, numberToGuess) {
    for (let i = 0; i < tableau.length; i++) {
        numberOfTries++;
        if (tableau[i] === numberToGuess) {
            return i;
        }
    }
}
const result = simpleSearch(tableau, numberToGuess);
console.log(result, numberOfTries);