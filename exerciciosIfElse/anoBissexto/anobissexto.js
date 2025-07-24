// Exercício 10:
// Verifique se o ano fornecido é bissexto (divisível por 4 e, se divisível por 100, também deve ser divisível por 400).
let ano = 2023;

if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400  === 0) {
    console.log(`${ano} é um ano bissexto.`);
}
else {
    console.log(`${ano} não é um ano bissexto.`);
}