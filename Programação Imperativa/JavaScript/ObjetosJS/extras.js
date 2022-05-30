const alicia = [23, 69, 32];
const bob = [12, 67, 43];
 
function encontrarGanhador(a, b) {
    let pontosAlice, pontosBob;

    pontosAlice = 0;
    pontosBob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosAlice++;
        } else {
            pontosBob++;
        }
    }

    if (pontosAlice > pontosBob){
        console.log('Alici ganhou com ' + pontosAlice);
        console.log('Não foi dessa vez Bob, você fez: ' + pontosBob);
    } else {
        console.log('Bob ganhou com ' + pontosBob);
        console.log('Não foi dessa vez Alici, você fez: ' + pontosAlice);
    }
}

encontrarGanhador(alicia, bob);