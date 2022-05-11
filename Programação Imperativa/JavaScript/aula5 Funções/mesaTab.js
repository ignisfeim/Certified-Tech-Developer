// Crie uma função que converta polegadas em centímetros. 
function ConverterPolegadas(num1){
    return (num1 * 2.54);
}
let polegadas = 10;
console.log(`-------------------------------------`);
console.log(`Convertendo polegadas em centímetros:`);
console.log(`${polegadas} polegadas = ${ConverterPolegadas(polegadas)} centrímetros`);
console.log(`-------------------------------------`);

// Crie uma função que receba uma string e a converta em um URL.
function converteUrl(texto) {
    return `http://www.${texto.toLowerCase().replaceAll(/\s/g, '')}.com.br`;
};

let textoEx2 = 'DIGITAL HOUSE';

console.log(`Convertendo texto digitado em URL:`);
console.log(`Texto digitado: ${textoEx2}`);
console.log(`URL: ${converteUrl(textoEx2)}`);
console.log(`-------------------------------------`);

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function inserirExclamacao(texto) {
    return `${texto}!`;
};

let textoEx3 = `Skyrim é dos Nords`;

console.log(`texto inserido: ${textoEx3}`);
console.log(`Resultado :${inserirExclamacao(textoEx3)}`);
console.log(`-------------------------------------`);

// 4 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function IdadeCachorros(num){
    return `${num * 7}`;
}
let idadeDoCachorro = 10;
console.log (`Idade do Cachorro inserido: ${idadeDoCachorro}`)
console.log (`Idade do Cachorro equivalente a 1 ano Humano:${IdadeCachorros(idadeDoCachorro)}`);
console.log(`-------------------------------------`);