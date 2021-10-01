let num1;
let num2;
let condition = true;
let resultado;
let opcion;
alert('Bienvenido/a a la calculadora de JavaScript');
    do{
    opcion = prompt('Que operación deseas hacer:\n Sumar(+)\n Restar(-)\n Multiplicar(*)\n Dividir(/)');
    opcion = opcion.trim();
    // si en la pos 0,0 etc, hay un espacio deja hacerlo
        if(opcion !== "" || opcion === "+" || opcion === "-" || opcion === "*" || opcion === "/"){
            switch (opcion) {
                case "+":
                // Sumar
                    alert('Has seleccionado la opción Sumar.\n');    
                    nums = prompt('Introduce dos numeros separados por un espacio');
                    // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
                    // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
                    nums = nums.replace(/\s+/g, " ");
                
                    split2 = nums.split(' ') // (1) [ num1, num1 ]
                    num1 = split2[0] // (2) num1
                    num2 = split2[1] // (3) num2
                                
                    // Comprobar que son numeros solo y no contienen letras
                            if(isNaN(num1) === false || isNaN(num2) === false){
                                    num1 = parseInt(num1);
                                    num2 = parseInt(num2);
                                    alert(`El resultado de la Suma es: ${num1+num2}`);
                                    result = confirm("Quieres hacer otra operación?");
                                    if(result === false){
                                        condition = false;
                                    }
                                }else{
                                    alert("Error tienen que ser numeros, numeros y no numeros y letras!");
                                }
                break;

                case "-":
                // Restar
                    alert('Has seleccionado la opción Restar.\n');    
                    nums = prompt('Introduce dos numeros separados por un espacio');
                    // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
                    // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
                    nums = nums.replace(/\s+/g, " ");
                
                    split2 = nums.split(' ') // (1) [ num1, num2 ]
                    num1 = split2[0] // (2) num1
                    num2 = split2[1] // (3) num2
                                
                    // Comprobar que son numeros solo y no contienen letras
                            if(isNaN(num1) === false || isNaN(num2) === false){
                                    num1 = parseInt(num1);
                                    num2 = parseInt(num2);
                                    alert(`El resultado de la Resta es: ${num1-num2}`);
                                    result = confirm("Quieres hacer otra operación?");
                                    if(result === false){
                                        condition = false;
                                    }
                                }else{
                                    alert("Error tienen que ser numeros, numeros y no numeros y letras!");
                                }
                break;
                case "*":
                // Multipicar
                    alert('Has seleccionado la opción Multiplicar.\n');    
                    nums = prompt('Introduce dos numeros separados por un espacio');
                    // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
                    // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
                    nums = nums.replace(/\s+/g, " ");
                
                    split2 = nums.split(' ') // (1) [ num1, num1 ]
                    num1 = split2[0] // (2) num1
                    num2 = split2[1] // (3) num2
                                
                    // Comprobar que son numeros y no tienen contienen letras
                            if(isNaN(num1) === false || isNaN(num2) === false){
                                    num1 = parseInt(num1);
                                    num2 = parseInt(num2);
                                    alert(`El resultado de la Multiplicación es: ${num1*num2}`);
                                    result = confirm("Quieres hacer otra operación?");
                                    if(result === false){
                                        condition = false;
                                    }
                                }else{
                                    alert("Error tienen que ser numeros, numeros y no numeros y letras!");
                                }
                break;
                case "/":
                    // Dividir
                        alert('Has seleccionado la opción Dividir.\n');    
                        nums = prompt('Introduce dos numeros separados por un espacio');
                        // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
                        // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
                        nums = nums.replace(/\s+/g, " ");
                        
                        split2 = nums.split(' ') // (1) [ num1, num1 ]
                        num1 = split2[0] // (2) num1
                        num2 = split2[1] // (3) num2
                                        
                        // Comprobar que son numeros y no tienen contienen letras
                            if(isNaN(num1) === false || isNaN(num2) === false){
                                num1 = parseInt(num1);
                                num2 = parseInt(num2);
                                alert(`El resultado de la División es: ${num1/num2}`);
                                result = confirm("Quieres hacer otra operación?");
                                if(result === false){
                                condition = false;
                                }
                            }else{
                                alert("Error tienen que ser numeros, numeros y no numeros y letras!");
                            }
                break;
            }    
        } else{
            alert("La operación introducida es erronea, Prueba de nuevo con una que esté indicada 🙄");
        }
        alert("Hasta la proxima 😄!");
} while(contition === true);