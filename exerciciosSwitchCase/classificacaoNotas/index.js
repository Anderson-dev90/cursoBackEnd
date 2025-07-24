function classficacaoNota(nota){
    let classificacao;
    switch(nota){
        case 9: case 10:
            classificacao = "Excelente";
            break;
        case 7: case 8:
            classificacao = "Bom";
            break;
        case 6: case 5: case 4:
            classificacao = "Satisfatório";
            break;
        case 3: case 2: case 1: case 0:
            classificacao = "Insatisfatório";
            break;
            default:
                return "Classificação Invalida";

    }
    return classificacao
}

console.log(classficacaoNota());