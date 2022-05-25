let filmes = ["star wars","totoro","rocky","pilp fiction","la vida es bella"];

// console.log(filmes[1]);

// console.log(filmes.push('homem Aranha'));

// console.log(filmes);

console.log('--- LISTA FILMES ---');
// console.log(filmes.length);
for(let aux = 1; aux <= filmes.length ; aux++){
    let indice = aux - 1;
    console.log(aux+" - "+filmes[indice]);
}

let favoritos = []
console.log (favoritos);



 for(let aux = 1; aux < filmes.length ; aux++){
     favoritos.push( filmes[aux]);
     console.log (aux+ " - "+filmes[aux]);
}
console.log (favoritos);

//  console.log("1 - "+filmes[1]);
//  console.log("2 - "+filmes[2]);
