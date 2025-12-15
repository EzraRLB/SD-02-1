// Refer to Task 3 in your Instructions to complete this task

// ¿Puedes también reemplazar cada número divisible por 5 con Buzz, y cada número que cumpla ambas condiciones con FizzBuzz?

// Mi solución:

for (let i = 1; i <= 105; i++) {
  let output = "";
  if (i % 3 == 0) {
    output += "Fizz";
  } 
  if (i % 5 == 0) {
    output += "Buzz";
  }
  if (output === "") {
    console.log(i);
  } else {
    console.log(output);
  }
}