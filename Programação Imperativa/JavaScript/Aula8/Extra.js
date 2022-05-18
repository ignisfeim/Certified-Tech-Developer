
function exe1 (valor1,valor2){
    if (valor1 > valor2){return ("O valor 1 "+valor1+ " é maior ")

}else{
    return ('O valor 2 ' + valor2 + ' é maior')
}

}
console.log('----------------------------------------');
console.log (exe1( 2,1 ));
//---------------------------------------------------//
// 2. Escreva     um     programa     para     ler     o     ano     de     nascimento     de     uma     pessoa     e
//     escrever     uma     mensagem     que     diga     se     ela     poderá     ou     não     votar     este     ano
//     (não    é    necessário    considerar    o    mês    em    que    ela    nasceu).

function idadeVotar(ano){
    if (ano >= 18){
        return ("Poderá Votar")
    }else {
        return ("Não Poderá Votar")
    }
}
console.log('----------------------------------------');
console.log (idadeVotar(17));
//---------------------------------------------------//

// 3. Escreva     um     programa     que     verifique     a     validade     de     uma     senha     fornecida
//     pelo     usuário.     A     senha     válida     é     o     número     1234.    Devem     ser    impressas     as
//     seguintes    mensagens:
//     ACESSO    PERMITIDO    caso    a    senha    seja    válida.
//     ACESSO    NEGADO    caso    a    senha    seja    inválida.

function ValidadorDeSenhas(senha){
    if (senha === 1234){
        return ("ACESSO    PERMITIDO")
    }else{
        return ("ACESSO    NEGADO")
    }
    
}
console.log('----------------------------------------');
console.log(ValidadorDeSenhas(1234));
//---------------------------------------------------//
// 4. As    maçãs     custam     R$     0,30     cada     se     forem     compradas    menos     do     que     uma
//     dúzia,     e     R$     0,25     se     forem     compradas     pelo     menos     doze.     Escreva     um
//     programa     que     leia     o     número     de     maçãs     compradas,     calcule     e     escreva     o
//     valor    total    da    compra.
function compramacas(qtdd){
    if (qtdd < 12){
        return (qtdd * 0.30)
    }else if(qtdd >= 12){
        return (qtdd * 0.25)
    }

    
    
}
console.log('----------------------------------------');
console.log (compramacas(12));
//---------------------------------------------------//
// 5. Tendo     como     entrada     a     altura     e     o     sexo     (codificado     da     seguinte     forma:
//     1:feminino          2:masculino)     de     uma     pessoa,     construa     um     programa     que
//     calcule    e    imprima    seu    peso    ideal,    utilizando    as    seguintes
//     Fórmulas:
//     - para    homens:    (72.7    *    Altura)    – 58
//     - para    mulheres:    (62.1    *    Altura)    – 44.7
function pesoIdeal(altura,sexo){
    
}