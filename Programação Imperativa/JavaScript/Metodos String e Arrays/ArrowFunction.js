function divCalback ( x , y ){
    return x * y;
}
function somaCalback ( a , b, callback ){
    let result = callback( a , b );
    return a + b + result;
}
let somaArrow1 = (a , b) => {
    return a + b;
}
let somaArrow2 = (a , b) => a + b;

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ":" +
    data.getMinutes();
}


// function print () {
//     console.log ( " olá mundo");
// }
// setTimeout( print, 1000);

// setInterval ( print, 1000)

let print = () => console.log ( " olá mundo");
setInterval ( print, 1000)
// console.log ( horaAtual() );
// console.log ( somaArrow1(10,10) );
// console.log ( somaArrow2(10,10) );
// console.log ( somaCalback(10,10,divCalback) );