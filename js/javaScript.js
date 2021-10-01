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
                nums = nums.replace(/\s+/g, " ");
            
                split2 = nums.split(' ') // (1) [ num1, num1 ]
                num1 = split2[0] // (2) num1
                num2 = split2[1] // (3) num2
                            
                // comprobar el punto 3
                    // Not a Number // Nulo // Tiene letra
                        if(!NaN && !null){
                                num1 = parseInt(num1);
                                num2 = parseInt(num2);
                                alert(`El resultado de la suma es ${num1+num2}`);
                                result = confirm("Quieres hacer otra operación?");
                                if(result === false){
                                    condition = false;
                                }
                            }else{
                                alert("Error!");
                            }
                break;

                case "-":
                // Restar

                break;
                case "*":
                // Multipicar
    
                break;
                case "/":
                            // Dividir
    
                break;
                default:
                    alert("Error dentro del switch!");
                break;
            }    
        } else{
            alert("Error en else!");
    }
} while(contition === true);
alert("Has salido de el bucle de opciones, error en do while");