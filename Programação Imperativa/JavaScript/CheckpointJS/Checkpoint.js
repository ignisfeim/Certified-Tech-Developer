function microOndas(Alimento,tempo){
    if(Alimento == "pipoca" || Alimento == "macarrão" || Alimento == "carne" || Alimento == "feijão" || Alimento == "brigadeiro"){
    switch (Alimento){
        case "pipoca":
            if(tempo >= 30){
                console.log("-----------------------------------")
                console.log("Comida selecionada: Pipoca")
                console.log("kabuum");
                console.log("Prato pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }else if (tempo >= 20){
                console.log("-----------------------------------")
                console.log("Comida selecionada: Pipoca")
                console.log("comida queimou");
                console.log("Prato pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }else if(tempo < 10){
                console.log("-----------------------------------")
                console.log("Comida selecionada: Pipoca")
                console.log("tempo insuficiente");
                console.log("Prato quase pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }else{
                console.log("-----------------------------------")
                console.log("Comida selecionada: Pipoca")
                console.log("Prato pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }
            break;
        }
    }
    switch (Alimento){
        case "macarrão":
            if(tempo >= 24){
                console.log("-----------------------------------")
                console.log("Comida selecionada: Macarrão")
                console.log("Kabuum");
                console.log("Prato pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }else if(tempo >= 16){
                console.log("-----------------------------------")
                console.log("Comida selecionada: Macarrão")
                console.log("comida queimou");
                console.log("Prato pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }else if(tempo < 10){
                console.log("-----------------------------------")
                console.log("Comida selecionada: Macarrão")
                console.log("tempo insuficiente");
                console.log("Prato quase pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }else{
                console.log("-----------------------------------")
                console.log("Comida selecionada: Macarrão")
                console.log("Prato pronto, bom apetite!!!");
                console.log("-----------------------------------")
            }
            break;
        }
        switch (Alimento){
            case "carne":
                if(tempo >= 45){
                    console.log("-----------------------------------")
                    console.log("Comida selecionada: Carne")
                    console.log("Kabuum");
                    console.log("Prato pronto, bom apetite!!!");
                    console.log("-----------------------------------")
                }else if(tempo >= 30){
                    console.log("-----------------------------------")
                    console.log("Comida selecionada: Carne")
                    console.log("comida queimou");
                    console.log("Prato pronto, bom apetite!!!");
                    console.log("-----------------------------------")
                }else if(tempo < 15){
                    console.log("-----------------------------------")
                    console.log("Comida selecionada: Carne")
                    console.log("tempo insuficiente");
                    console.log("Prato quase pronto, bom apetite!!!");
                    console.log("-----------------------------------")
                }else{
                    console.log("-----------------------------------")
                    console.log("Comida selecionada: Carne")
                    console.log("Prato pronto, bom apetite!!!");
                    console.log("-----------------------------------")
                }
                break;
            }
            switch (Alimento){
                case "feijão":
                    if(tempo >= 36){
                        console.log("-----------------------------------")
                        console.log("Comida selecionada: Feijão")
                        console.log("Kabuum");
                        console.log("Prato pronto, bom apetite!!!");
                        console.log("-----------------------------------")
                    }else if(tempo >= 24){
                        console.log("-----------------------------------")
                        console.log("Comida selecionada: Feijão")
                        console.log("comida queimou");
                        console.log("Prato pronto, bom apetite!!!");
                        console.log("-----------------------------------")
                    }else if(tempo < 12){
                        console.log("-----------------------------------")
                        console.log("Comida selecionada: Feijão")
                        console.log("tempo insuficiente");
                        console.log("Prato quase pronto, bom apetite!!!");
                        console.log("-----------------------------------")
                    }else{
                        console.log("-----------------------------------")
                        console.log("Comida selecionada: Feijão")
                        console.log("Prato pronto, bom apetite!!!");
                        console.log("-----------------------------------")
                    }
                    break;
                }
                switch (Alimento){
                    case "brigadeiro":
                        if(tempo >= 24){
                            console.log("-----------------------------------")
                            console.log("Comida selecionada: Brigadeiro")
                            console.log("Kabuum");
                            console.log("Prato pronto, bom apetite!!!");
                            console.log("-----------------------------------")
                        }else if(tempo >= 16){
                            console.log("-----------------------------------")
                            console.log("Comida selecionada: Brigadeiro")
                            console.log("comida queimou");
                            console.log("Prato pronto, bom apetite!!!");
                            console.log("-----------------------------------")
                        }else if(tempo < 10){
                            console.log("-----------------------------------")
                            console.log("Comida selecionada: Brigadeiro")
                            console.log("tempo insuficiente");
                            console.log("Prato quase pronto, bom apetite!!!");
                            console.log("-----------------------------------")
                        }else{
                            console.log("-----------------------------------")
                            console.log("Comida selecionada: Brigadeiro")
                            console.log("Prato pronto, bom apetite!!!");
                            console.log("-----------------------------------")
                        }
                        break;
                    }
    }
    //----------------------------------------------//
    //Tipos de alimento para Uso//
    //"pipoca"
    //"macarrão"
    //"carne"
    //"feijão"
    //"brigadeiro"
    //Bom Apetite!!//
    //----------------------------------------------//
    microOndas("brigadeiro" , 50 )

    

    