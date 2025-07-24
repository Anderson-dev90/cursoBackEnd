/*Exercício 3: Encontrar o Índice de um Elemento
Crie um array de strings com os nomes de algumas frutas: ["maçã", "banana", "laranja", "manga", "abacaxi"].

Encontre o índice da fruta "manga" no array utilizando o método indexOf(). Imprima o índice no console. */
const listaFrutas = ["maçã", "banana", "laranja", "abacaxi"];

const frutaEscolhida = "manga";
const indice = listaFrutas.indexOf(frutaEscolhida);

if(indice > -1){ 
    console.log (`a palavra ${frutaEscolhida} foi encontrada no indice: ${indice}`);

} else {
    console.log (`${frutaEscolhida} não encontrada.`)
}
