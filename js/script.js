//  Variabili VUOTE da utilizzare per memorizzare i numeri da calcolare
let firstNum = "";
let secondNum = "";
let sign = "";

//  CONTROLLO DEL DISPLAY

// Creare event listener per i pulsanti del tastierino numerico
// Utilizzare un ciclo che "selezioni" tutti i pulsanti e aggiunga ad ognuno di esso l'event listener
// Raccolta dati dei button
const numberBtn = document.querySelectorAll(".numbers button");
// Inizio ciclo for
for (let i = 0; i < numberBtn.length; i++) {
  const btn = numberBtn[i];
  // Aggiungo eveNt listener, così che quando premo un pulsante, il numero viene visualizzato nel display.
  btn.addEventListener("click", function () {
    // Richiamo la funzione
    displayNumber(btn.innerText);
    console.log(btn);
  });
}

//  CONTROLLO OPERATORI

// Aggiungo event listener per gli operatori + - x /
// Seleziono i pulsanti degli operatori tranne =
const signBtn = document.querySelectorAll(".operators button:not(.orange)");
// Inizio ciclo for
for (let i = 0; i < signBtn.length; i++) {
  const btn = signBtn[i];
  // event listener per i btn
  btn.addEventListener("click", function () {
    // Salvo il primo numero e l'operatore , dopodichè resetto il display a 0
    firstNum = parseInt(document.getElementById("result").innerText);
    sign = btn.innerText;
    console.log(
      `Primo numero digitato: "${firstNum}" ` + ` Operatore digitato: "${sign}"`
    );
    // Reset
    document.getElementById("result").innerText = "0";
    console.log("reset display");
  });
}

//  CONTROLLO "OPERATORE" =

// Aggiungo event listener per =, che attiverà la function per l'operazione, restituendo il risultato
// Seleziono il pulsante =
const resultBtn = document.querySelector(".orange");
resultBtn.addEventListener("click", function () {
  // Salvo il secondo numero
  secondNum = parseInt(document.getElementById("result").innerText);
  console.log(`Secondo numero digitato: ${secondNum}`);

  // ESECUZIONE della function dell'operazione
  let result = operations(sign, firstNum, secondNum);
  console.log(`Risultato dell'operazione: ${result}`);

  // STAMPA DISPLAY RISULTATO
  document.getElementById("result").innerText = result;
});

//  CONTROLLO FUNCTION RESET DEL DISPLAY

// Reset C
const resetDisplayBtn = document.getElementById("cancel-btn");
// Event listener per il pulsante "C"
resetDisplayBtn.addEventListener("click", function () {
  // function reset display
  displayBack();
});
