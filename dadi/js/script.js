// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numberOne = Math.floor(Math.random() * 6);
const numberTwo = Math.floor(Math.random() * 6);
if (numberOne > numberTwo) {
    alert("Player won");
} else if (numberOne < numberTwo) {
    alert("PC won");
} else {
    alert("draw");
}
 