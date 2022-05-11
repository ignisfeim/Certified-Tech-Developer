function somadiego ( num1, num2 ){
    // console.log ( num1 + num2 );
    return ( num1 + num2 );
}

let result = somadiego( 5,5 );
console.log( result );

console.log(somadiego(10,5));

result = somadiego( 20,5 );
console.log( result );

function repeticao( info,qtd ){
    return info.repeat( qtd );
}
let num = 5;
console.log (repeticao( 'Diego', num ) ) ;

function sub( a = 2, b = 0 ){
    return a - b;
}
console.log ( sub (5));