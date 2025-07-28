/*for( i = 0; i <= 10; i++){
    if(i % 2 === 0){
console.log(`${i} é par`)
    } else {
        console.log(`${i} é impar`)
    }
}*/


//const listaGames = ['Fortnite','Crash','GTA'];
//
//for(let i = 0; i < listaGames.length; i++){
//    console.log(`indice ${i}`, listaGames[i]);
//}


function fizzBuzz(number){
    if(typeof  number !== 'number') return number;
    if(number % 3 === 0 && number % 5 === 0){
        return 'FizzBuzz'
    } else if(number % 3 === 0){
        return 'Fizz';
    } else if(number % 5 === 0){
        return 'Buzz'
    }
    return number; 
    
}

for(let i = 0; i <= 100; i ++){
    console.log(i, fizzBuzz(i))
}