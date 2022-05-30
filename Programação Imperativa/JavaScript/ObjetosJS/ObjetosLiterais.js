let pais = {
    nome: "brasil",
    Capital:"Brasilia",
    Nacionalidade:function(){
        return "sou do " + this.nome;
    }
};
console.log("-----------------------------");
console.log(pais["Capital"]);
console.log("-----------------------------");
console.log(pais["nome"]);
console.log("-----------------------------");
console.log(pais);
console.log("-----------------------------");
console.log(pais.nome);
console.log("-----------------------------");
// A notação de ponto é uma maneira de acessar uma propriedade de um objeto. Para usar a notação de ponto, escreva o nome do objeto, seguido de um ponto (.), seguido do nome da propriedade.
console.log(pais.Nacionalidade());

// Funcção Construtora
let carro = {
    marca:"Fiat",
    modelo:"Uno",
};
function Carro(valorMarca, valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
};
console.log(carro);
console.log(new Carro("Renaut","Clio"));