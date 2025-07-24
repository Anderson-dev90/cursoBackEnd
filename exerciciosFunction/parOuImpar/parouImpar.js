// Exercício 2:
// Crie uma função chamada parOuImpar que recebe um número como parâmetro e retorna "Par" se o número for par, e "Ímpar" se o número for ímpar.
// 
// 

function parOuImpar(numero){
    if(numero % 2 === 0){
        console.log(`${numero} é par.`);
    }

    else {
        console.log(`${numero} é ímpar.`);
    }

}



let  resultado = parOuImpar(15);
