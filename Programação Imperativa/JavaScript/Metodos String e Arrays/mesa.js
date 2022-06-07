let FizzBuzz = (num1 , num2) => {
    for (let i = 1 ; i <= 42; i++){
        if ( i % num1 == 0){
            console.log (`${i}- ${i % num2 == 0 ? "fizzbuzz" : "fizz"}`);
    

        }else if (i % num2 == 0 ){
            console.log ( `${i} - buzz`);
        }else {
            console.log(`${i}-Nem Fizz e nem Buzz`)
        }
    }
}
FizzBuzz( 2 , 3)

