// Exercício 4:
// Crie uma função chamada calculadora que recebe três parâmetros: dois números e uma operação 
// (como soma, subtração, multiplicação ou divisão) e retorna o resultado da operação.




function calculadora(operacao, num1, num2){
    if (num1 === undefined || num2 === undefined) {
        return "Por favor, forneça dois números.";
    }
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Divisão por zero não é permitida.";
            }
            return num1 / num2;
        default:
            return "Operação inválida. Use '+', '-', '*' ou '/'. ";
    }
}   

// Exemplo de uso:
console.log(calculadora('+', 5, 3)); // Saída: 8
console.log(calculadora('-', 10, 4)); // Saída: 6
console.log(calculadora('*', 7, 6)); // Saída: 42
console.log(calculadora('/', 20, 4)); // Saída: 5
console.log(calculadora('/', 20, 0)); // Saída: Divisão por zero não é permitida.
console.log(calculadora('%', 20, 4)); // Saída: Operação inválida. Use '+', '-', '*' ou '/'.
