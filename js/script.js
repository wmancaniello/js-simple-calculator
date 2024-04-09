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

// Aggiungo event listener per gli operatori + - x /
// Seleziono i pulsanti degli operatori tranne =
const signBtn = document.querySelectorAll(".operators button:not(.orange");
// Inizio ciclo for
for (let i = 0; i < signBtn.length; i++) {
  const btn = signBtn[i];
  // event listener per i btn
  btn.addEventListener("click", function () {
    // Salvo il primo numero e resetto il display a 0 dopo aver premuto l'operatore per digitare il secondo numero
    firstNum = parseInt(document.getElementById("result").innerText);
    console.log(`Numero digitato: ${firstNum}`);
    // Reset
    document.getElementById("result").innerText = "0";
    console.log("reset display");
  });
}
