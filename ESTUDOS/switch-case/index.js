const data = new Date('2025-07-24 00:00:00');
const diaSemana = data.getDay();
let diaSemaTexto;



switch (diaSemana){
    case 0:
        diaSemaTexto = 'Domingo';
        break;    
    case 1:
        diaSemaTexto = 'Segunda';
        break;
    case 2:
        diaSemaTexto = 'Terça';
        break;
    case 3:
        diaSemaTexto = 'Quarta';
        break;
    case 4:
        diaSemaTexto = 'Quinta';
        break;
    case 5:
        diaSemaTexto = 'Sexta';
        break;
    case 6:
        diaSemaTextoSemaTexto = 'Sabado';
        break;
}
/*
if(diaSemana === 0){
    diaSemaTexto = 'Domingo';
}else if (diaSemana === 1){
    diaSemaTexto = 'Segunda';
}else if (diaSemana === 2){
    diaSemaTexto = 'Terça';
}else if (diaSemana === 3){
    diaSemaTexto = 'Quarta';
}else if (diaSemana === 4){
    diaSemaTexto = 'Quinta';
}else if (diaSemana === 5){
    diaSemaTexto = 'Sexta';
}else if (diaSemana === 6){
    diaSemaTexto = 'Sabado';
} else {
    diaSemana = ''
}
*/



console.log(diaSemana , diaSemaTexto)