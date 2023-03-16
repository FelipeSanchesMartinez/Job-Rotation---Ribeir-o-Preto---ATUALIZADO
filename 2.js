const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite um número:"));


let a = 0;
let b = 1;


let atual;


while (atual < num) {
  atual = a + b;
  a = b;
  b = atual;
}


if (atual === num) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}