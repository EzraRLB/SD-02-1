// Refer to Task 6 in your Instructions to complete this task

// ¿Puedes asignar los números generados de la secuencia a elementos en una lista o arreglo?

// Mi solución:

const prompt = require("prompt-sync")();
let l = Number(prompt("Ingresa el número de líneas que gustes que se generen: "));
let results = [];

for (let i = 1; i <= l; i++) {
  let output = "";
  if (i % 3 == 0) {
    output += "Fizz";
  } 
  if (i % 5 == 0) {
    output += "Buzz";
  }
  if (i % 7 == 0) {
    output += "Woof";
  }
  
  if (output === "") {
    results[i-1] = i;
  } else {
    results[i-1] = output;
  }
}

console.log(results);