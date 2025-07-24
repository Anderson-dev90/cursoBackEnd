
// <!-- 'Exercício 3:
// Crie uma função chamada maiorNumero que recebe dois números e retorna o maior deles. -->

function maiorNumero(numero1,numero2){
    if(numero1> numero2){

        return numero1;
    }   
    else if(numero2 > numero1){
        return numero2;
    }
    else{
        return "Os números são iguais";
    }

}

let resultado = maiorNumero(10,10);
console.log(`O maior número é: ${resultado}`);  
