let pontoUsuario = 0;
let pontoMaquina = 0;

function escolhaMaoUsuario(){
    let maoUsuario = parseInt(prompt("1 - pedra , 2 - papel , 3 - tesoura"))
    console.log("Mão Do Usuário "+ maoUsuario)
    return maoUsuario;
    
}

function escolhaMaoMaquina(){
    let maoMaquina = parseInt(Math.random()*3 + 1)
    console.log("Mão da Máquina " + maoMaquina)
    return maoMaquina;
}

function jogar(){
    const escolhaUsuario = escolhaMaoUsuario();
    const escolhaMaquina = escolhaMaoMaquina();
    switch(escolhaUsuario){
        case escolhaMaquina:
            if (escolhaMaquina == 1 && escolhaUsuario == 1){
                alert("Escolha do Player : Pedra X Escolha da Maquina : Pedra")+alert("Empate")
            }
       
        
        
    }
}
jogar()