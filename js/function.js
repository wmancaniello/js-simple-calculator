/**
 * Descrizione:  Funzione che controlla e gestisce la presenza dei numeri sul display.
 * @param {string} number Il numero da mostrare sul display.
 */
function displayNumber(number) {
  //  seleziono il display
  const display = document.getElementById("result");

  //  Check del display, se c'è già lo 0
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

/**
 * Descrizione:  Funzione per il calcolo matematico tra due numeri. (Addizione, Sottrazione, Moltiplicazione, Divisione)
 * @param {string} sign ,simbolo operazione
 * @param {number} num1 ,primo numero
 * @param {number} num2 ,secondo numero
 * @returns {number/string} se è errore sarà string, altrimenti number
 */
function operations(sign, num1, num2) {
  let result;

  //  Addizione
  if (sign === "+") {
    result = num1 + num2;
  }
  //  Sottrazione
  else if (sign === "-") {
    result = num1 - num2;
  }
  //  Moltiplicazione
  else if (sign === "×") {
    result = num1 * num2;
  }
  //  Divisione
  else if (sign === "÷") {
    if (num2 === 0) {
      result = "ERROR";
    } else {
      result = num1 / num2;
    }
  }
  //  ERROR
  else {
    result = "error";
  }

  return result;
}

/**
 * Funzione che resetti il display della calcolatrice.
 */
function displayBack() {
  document.getElementById("result").innerText = "0";
}
