function calcular(num1,num2,operador){
    let resultado;

    switch(operador){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
        if(num2 !== 0){
            resultado = num1 / num2
        }else{
            resultado = "Erro: Divisão por zero!";
            
        }
            break;
            default:
            resultado = "Operador invalido";
    }

    return resultado;
}

let resultado = calcular(5, 3, "*");
console.log("Resultado: " + resultado);