//  CONTROLLO DEL DISPLAY

//  Variabili da utilizzare per memorizzare i numeri da calcolare
let firstNum = "";
let secondNum = "";
let sign = "";
// Creare event listener per i pulsanti del tastierino numerico
// Utilizzare un ciclo che "selezioni" tutti i pulsanti e aggiunga ad ognuno di esso l'event listener

// Raccolta dati dei button
const numberBtn = document.querySelectorAll(".numbers button");
// Inizio ciclo for
for (let i = 0; i < numberBtn.length; i++) {
  const btn = numberBtn[i];
  // Aggiungo evemt listener, così che quando premo un pulsante, il numero viene visualizzato nel display.
  btn.addEventListener("click", function () {
    // Richiamo la funzione
    displayNumber(btn.innerText);
    console.log(btn);
  });
}