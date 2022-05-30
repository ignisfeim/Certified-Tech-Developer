// JSON = javaScript Object Notation
// Objeto Literal
// Admite aspas simples e duplas.
// As chaves do objeto não usam aspas.
// Podemos escrever métodos sem problemas.
// Recomenda-se colocar uma vírgula na última propriedade.
// ---------------------------------------------------
// JSON
// Apenas aspas duplas podem ser usadas.
// As chaves estão entre aspas.
// Não suporta métodos, apenas propriedades e valores.
// Não podemos colocar uma vírgula no último elemento.
// ---------------------------------------------------

let pessoa = {
    nome:"vinicios",
    idade:21,
    altura:1.80,
}
let listaCompras = ["pão","presunto","queijo"]

let json = JSON.stringify(listaCompras);

// let objetoDeNovo = JSON.parse(json);
let arrayDeNovo = JSON.parse(json)
console.log(arrayDeNovo);
console.log(arrayDeNovo[1]);