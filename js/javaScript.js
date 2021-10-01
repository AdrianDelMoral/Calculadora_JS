let num1;
let num2;
let condition = true;
let condition2 = true;
let resultado;
let opcion;
alert('Bienvenido/a a la calculadora de JavaScript');
do{
    do {
        opcion = prompt('Que operación deseas hacer:\n Sumar(+)\n Restar(-)\n Multiplicar(*)\n Dividir(/)');
        opcion = opcion.trim();
        if(opcion === "+" || opcion === "-" || opcion === "*" || opcion === "/"){    
            condition = false;
        } else{
            alert("La operación introducida es erronea, Prueba de nuevo con una que esté indicada 🙄");
        }
    } while (condition);

    do {
        nums = prompt('Introduce dos numeros separados por un espacio');
        // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
        // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
        nums = nums.replace(/\s+/g, " ");

        split2 = nums.split(' ') // (1) [ num1, num1 ]
        num1 = split2[0] // (2) num1
        num2 = split2[1] // (3) num2
                                
        // Comprobar que son numeros solo y no contienen letras y salir del bucle si es verdad
        if(isNaN(num1) === false && isNaN(num2) === false){
            num1 = Number(num1);
            num2 = Number(num2);
            condition2 = false;         
        }else{
            alert("Error tienen que ser numeros, numeros y no numeros y letras!");
        }
    } while (condition2);

        switch (opcion) {
            case "+":
            // Sumar
                alert(`El resultado de la Suma es: ${num1+num2}`);
            break;

            case "-":
                // Restar
                alert(`El resultado de la Resta es: ${num1-num2}`);
            break;

            case "*":
                // Multipicar
                alert(`El resultado de la Multiplicación es: ${num1*num2}`);
            break;

            case "/":
                    // Dividir
                alert(`El resultado de la División es: ${num1/num2}`);
            break;
        }    
            result = confirm("Quieres hacer otra operación?");    
} while(result);