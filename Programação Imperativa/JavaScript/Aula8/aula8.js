function podeSubir(altura, vemAcompanhado){
    if( altura >= 1.40 && altura < 2.00 ){//A
        return ("---Acesso autorizado---");
    }
    else if( altura >= 1.20 && altura < 1.40 && vemAcompanhado ){
        return ("---Acesso autorizado somente com acompanhante---");
    }else{
        return ("---Acesso Negado---");
    }
}
console.log("------------------------------");
console.log("---Averiguando Altura---");
console.log( podeSubir(1.10, true) );
console.log("------------------------------");

