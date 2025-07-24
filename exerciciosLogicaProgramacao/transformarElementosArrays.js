/*Exercício 2: Transformar os Elementos em String
Crie um array com 5 números. Use o método map() para transformar cada número do array em uma string e imprima o novo array. */

const numeros = [1, 2, 3, 4, 5];

const strings = numeros.map(numeros => numeros.toString());

console.log(strings);