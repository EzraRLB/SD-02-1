// Refer to Task 5 in your Instructions to complete this task

// ¿Puedes pedirle al usuario que ingrese la cantidad de líneas que se generarán, o que genere una línea específica?

// Mi solución:

const prompt = require("prompt-sync")();
let l = Number(prompt("Ingresa el número de líneas que gustes que se generen: "));

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
    console.log(i);
  } else {
    console.log(output);
  }
}