const espectador = [
    { idade: 20, opiniao: 3 },
    { idade: 30, opiniao: 2 },
    { idade: 15, opiniao: 1 },
    { idade: 20, opiniao: 2 },
    { idade: 30, opiniao: 1 },
    { idade: 50, opiniao: 3 },
    { idade: 30, opiniao: 3 },
    { idade: 34, opiniao: 1 },
    { idade: 56, opiniao: 2 },
    { idade: 22, opiniao: 1 },
    { idade: 19, opiniao: 3 },
    { idade: 18, opiniao: 3 },
    { idade: 22, opiniao: 2 },
    { idade: 23, opiniao: 1 },
    { idade: 56, opiniao: 1 },
];
let media = 0;
let qtdO  = 0;
let qtdR = 0
for (let i = 0; i < espectador.length; i++) {
    if(espectador[i].opiniao == 3){
        qtdO++;
        media = espectador[i].opiniao + media;
    }else if(espectador[i].opiniao == 1){
        qtdR++;
    };
}
let total = espectador.length;
let count = 0;
for (let i = 0; i < espectador.length; i++) {
    if(espectador[i].opiniao == 2){
        count++;
        
    }
    
  }
console.log("A quantidade de Pessoas que Acharam Otimo é:" + " " + qtdO)
media = media / qtdO;
console.log("A média de "+" "+ qtdO + " " + "pessoas que acharam o filme Ótimo é:" + media);
console.log("A quantidade de Pessoas que Acharam Regular é:" + qtdR)

console.log("Total de espectadores do filme é:" + " " + total)
console.log("Porcentagem dos espectadores que acharam o filme Bom:"+" "+ (count * 100 / total).toFixed(2) + '%');

// Integrantes do grupo
// Daniela Fuenmayor
// Diego Junio Reis
// Diogo
// Henrique Vilela