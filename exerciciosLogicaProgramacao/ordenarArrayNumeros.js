/* 
Exercício 4: Ordenar um Array de Números
Crie um array de números aleatórios, por exemplo: [45, 12, 9, 33, 18].

Ordene o array em ordem crescente e imprima o array ordenado. 
*/


const numeros = [45, 12, 9, 33, 18];

// Ordenando o array em ordem crescente
numeros.sort((a, b) => a - b);

console.log(numeros);  // Saída esperada: [9, 12, 18, 33, 45]