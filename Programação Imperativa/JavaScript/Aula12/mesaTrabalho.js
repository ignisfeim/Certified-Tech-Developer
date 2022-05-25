const alice = [ 23, 82, 46, ];
const bob = [ 45, 8, 32,];
let a = 0;
let b = 0;
function ganhador(alice,bob){
    for (let i = 0; i <= alice.length; i++){
        if(alice[i] > bob[i]) {
            a = a + 1;
        } else if (bob[i] > alice[i]){
            b = b + 1;
        }
    }
    return vencedor(a,b);
}
function vencedor(a,b){
let msg = '';
if (a > b){
    msg = `ganhador é Alice: ${a}`;
} else {
    msg = `ganhador é Bob: ${b}`;
}
 return msg;
}
console.log(ganhador(alice,bob))

