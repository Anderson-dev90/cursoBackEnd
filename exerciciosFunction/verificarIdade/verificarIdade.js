// Crie uma função chamada verificarIdade que recebe a idade de uma pessoa e retorna se ela pode ou não votar (idade >= 16).

function verificarIdade(idade){
    if (idade >= 18){
        return "Maior de idade";
    }

    else if (idade < 0){
        return "Idade inválida";
    }
    else {
        return "Menor de idade";
    }   

}


console.log(verificarIdade(20)); // Saída: Maior de idade
console.log(verificarIdade(16)); // Saída: Menor de idade
console.log(verificarIdade(-5)); // Saída: Idade inválida
console.log(verificarIdade(18)); // Saída: Maior de idade
console.log(verificarIdade(0)); // Saída: Menor de idade