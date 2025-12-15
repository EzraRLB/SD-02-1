// Refer to Task 7 in your Instructions to complete this task

// ¿Cómo intentarías reemplazar una secuencia de números primos impares con una nueva palabra dentro de una lista o arreglo?

// Mi solución:

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];

const prompt = require("prompt-sync")();
let l = Number(prompt("Ingresa el número de líneas que gustes que se generen: "));
let results = [];
let buzzWordCounter = 0;

function es_primo(n) {
  if (n <= 1) {
    return false;
  } else if (n % 2 == 0) {
    return false;
  } else if (n % 2 != 0) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      } 
    }
    return true;
  }
}

/* 
for (let i = 1; i <= l; i++) {
  let output = "";

  if (i % 1 == i && i % i == 0) {
    output =+ buzzWords[buzzWordCounter]
  }
  
  if (output === "") {
    results[i-1] = i;
  } else {
    results[i-1] = output;
  }
} */




