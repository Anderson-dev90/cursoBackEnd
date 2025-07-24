// Exercício 6:
// Crie um programa que leia a temperatura e informe se está frio, ameno ou quente:

// Frio: < 15°C

// Ameno: entre 15°C e 25°C

// Quente: > 25°C


let temperatura = 25;

if ( temperatura < 15){
    console.log(`Hojé esta frio! A temperatura é de ${temperatura}°C`);
}

else if(temperatura  >= 15 && temperatura < 25) {
    console.log(` hoje a temperatura enta amena! A temperautera é de ${temperatura}°C`);

}
else if (temperatura >= 25) {
    console.log(`Hoje esta quente! A temperatura é de ${temperatura}°C`);
}