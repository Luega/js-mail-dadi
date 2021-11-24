// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creation and assignment of variables
const email = prompt("Inserisci la tua email");
let find = false;
// array creation
const accessEmailList = ["marta@gmail.com", "luca@gmail.com", "andrea@gmail.com", "irene@gmail.com", "franco@gmail.com"];
// for cycle
for (let i = 0; i < accessEmailList.length; i++) {
    if (email == accessEmailList[i]) {
        find = true;
    }
}
if (find) {
    alert("You are in the list");
} else {
    alert("You are not in the list");
}