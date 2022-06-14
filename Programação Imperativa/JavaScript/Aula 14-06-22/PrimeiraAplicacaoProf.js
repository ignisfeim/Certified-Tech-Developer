const pessoa = [
    {
        altura:1.82,
        sexo:"F"
    },
    {
        altura:1.75,
        sexo:"F"
    },
    {
        altura:1.55,
        sexo:"M"
    },
    {
        altura:1.35,
        sexo:"M"
    }
];

//console.log( pessoa[0].altura );

let menorAltura = 100;
let maiorAltura = 0;

pessoa.forEach(function (p) {
    //console.log(p.altura)
    if(p.altura < menorAltura){
        menorAltura = p.altura;
    }
});
//console.log(menorAltura);

let media = 0;
let qtdm  = 0;
for (let i = 0; i < pessoa.length; i++) {
    if(pessoa[i].sexo == "F"){
        qtdm++;
        media = pessoa[i].altura + media;
    }
}
console.log(qtdm)
media = media / qtdm;
console.log(media);