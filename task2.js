// Refer to Task 2 in your Instructions to complete this task

// Copia el código de task1.js en task2.js. ¿Ahora puedes reemplazar cada número divisible por 3 con Fizz?

// Mi solución:

for (let i = 1; i <= 105; i++) {
  if (i % 3 == 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  }
}