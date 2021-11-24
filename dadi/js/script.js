// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let numberOne = "";
let numberTwo = "";
let dieOne = document.getElementById("dieOne");
let dieTwo = document.getElementById("dieTwo");
let result = document.querySelector(".result");

document.getElementById("button").addEventListener("click", function() {
    const numberOne = Math.floor(Math.random() * 6);
    const numberTwo = Math.floor(Math.random() * 6);
    dieOne.append(numberOne);
    dieTwo.append(numberTwo);
    if (numberOne > numberTwo) {
        document.querySelector(".result").innerHTML = "Player won"
    } else if (numberOne < numberTwo) {
        document.querySelector(".result").innerHTML = "PC won"
    } else {
        document.querySelector(".result").innerHTML = "Draw"
    }
    result.classList.add("active");
})
