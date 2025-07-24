// Exercício 5:
// Faça um programa que conte quantos números de 1 a 100 são divisíveis por 3.

numDivisiveisPor3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        numDivisiveisPor3++;
    }
}
console.log(`Existem ${numDivisiveisPor3} números de 1 a 100 que' são divisíveis por 3.`);