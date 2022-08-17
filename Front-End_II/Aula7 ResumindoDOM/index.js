// let imagens = document.querySelectorAll("img")
// let novaImgs = Array.from(imagens);

// let escolhaUsuario = prompt("Defina a posição da imagem que deseja alterar:")
// function alterarImg(){
//     if(escolhaUsuario==null){}
//     else if(escolhaUsuario<novaImgs.length){//Escolha do Usuario seja menor do que o tamanho do array de imagens novaImgs
//         let escolhaImgUser = prompt ("Defina a URL da nova imagem!");
//         if(escolhaImgUser!="" && escolhaImgUser !=null){//escolhaImgUser NÂO é igual a url original EE escolhaImgUser NÂO for nula
//             novaImgs[escolhaUsuario].setAttribute("src",escolhaImgUser);//novaImgs[escolhaUsuario"posição selecionada no prompt"].setAttribute("source",Url Escolhida)
//         }else{
//             alert("imagem não alterada!")
//         }}
//         else{
//             alert("Posição da imagem invalida!")
//         }

// }

// alterarImg()

let imagens = document.querySelectorAll("img");
let novaIMG = Array.from(imagens);

let escolhaImg = prompt("Esolha a posição da imagem que seja alterada");

function trocaIMG (){
    if (escolhaImg == null){}
    else if (escolhaImg<novaIMG.length){
        let escolhaUrl = prompt("insira a Url Da imagem desejada!")
        if(escolhaUrl!="" && escolhaUrl !=null ){
            novaIMG[escolhaImg].setAttribute("src",escolhaUrl) 
        }else{alert("Nada foi alterado")}
    }else {alert("Nenhuma posição de imagens selecionada!")}
}
trocaIMG()




