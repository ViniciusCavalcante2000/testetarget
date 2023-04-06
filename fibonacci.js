let num = 21; // número a ser verificado
let a = 0;
let b = 1;
let fibo = b;

while (fibo < num) {
  const proxFibo = a + b;
  a = b;
  b = proxFibo;
  fibo = proxFibo;
}

if (fibo === num) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}