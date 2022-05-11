// function soma ( a, b ){
//     return a + b;
// }


// let a = 5;
// console.log( 'string ',8+' sads' );
// console.log( `string ${a} idsajfoisdaf` );
// console.log( soma( a, a ) );

// function divideSoma( a, b ){
//     return a / b;
// }

// console.log( divideSoma( soma(3, 4), 5 ) );
// let result = soma(3, 4);
// console.log( divideSoma( result, 5 ) );


// Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.

function soma(a, b){
    return a + b;
}

let valorAEX1 = 1
let valorBEX1 = 2
console.log (`Valores a ser somados ${valorAEX1} e ${valorBEX1}`)
console.log (`Valor Somado = ${soma(valorAEX1,valorBEX1)}`)
console.log (`-------------------------------------------`)

// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(a,b){
    return (a - b);
}
let valorAEX2 = 1
let valorBEX2 = 2
console.log (`Valores a ser subtraidos ${valorAEX2} e ${valorBEX2}`)
console.log (`Valor Subtraido = ${subtracao(valorAEX2,valorBEX2)}`)
console.log (`-------------------------------------------`)

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(a,b){
    return (a * b);
}
let valorAEX3 = 2
let valorBEX3 = 2
console.log (`Valores a ser Multiplicados ${valorAEX3} e ${valorBEX3}`)
console.log (`Valor Multiplicado = ${multiplicacao(valorAEX3,valorBEX3)}`)
console.log (`-------------------------------------------`)

// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(a,b){
    return (a / b);
}
let valorAEX4 = 0
let valorBEX4 = 2
console.log (`Valores a ser Divididos ${valorAEX4} e ${valorBEX4}`)
console.log (`Valor Dividido = ${divisao(valorAEX4,valorBEX4)}`)
console.log (`-------------------------------------------`)

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function multiplicacaoAoQuadrado(a, a){
    return (a * a);
}
let valorAEX5 = 5

console.log (`Valores a ser Multiplicados ${valorAEX5}`)
console.log (`Valor Ao Quadrado = ${multiplicacaoAoQuadrado(valorAEX5, valorAEX5)}`)
console.log (`-------------------------------------------`)

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.

function mediaDeTresNumeros(a, b, c, d){
    return ( soma(a, b + c ));
}
let ValorAEX6 = 5
let ValorBEX6 = 4
let ValorCEX6 = 2
let ValorDEX6 = 3

console.log (`Valores a ser Feito a Media ${ValorAEX6}`)
console.log (`Valor Médio = ${mediaDeTresNumeros(ValorAEX6, ValorBEX6, ValorCEX6 )/(ValorDEX6) } `)
console.log (`-------------------------------------------`)