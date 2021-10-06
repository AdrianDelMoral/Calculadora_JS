// Punto 1 - Función Normal: Pedir la operación que se quiere realizar y validarla (al menos 1 función)
function pedirOperacion() {
    let condition = true;
    let opcion = null;
    do {
        opcion = prompt('Que operación deseas hacer:\n Sumar(+)\n Restar(-)\n Multiplicar(*)\n Dividir(/)');
        opcion = opcion.trim();
            
        if(opcion === "+" || opcion === "-" || opcion === "*" || opcion === "/"){    
            condition = false;
        } else{
            alert("La operación introducida es erronea, Prueba de nuevo con una que esté indicada 🙄");
        }
    } while (condition);
    
    return opcion;
}

// Punto 2 - Expresión de función: Pedir los operandos y validarlos (al menos una función)
let pedirYComprobarNumeros = function() {
    let condition2 = true;
    do {
        nums = prompt('Introduce dos numeros separados por un espacio');
        // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
        // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
        nums = nums.replace(/\s+/g, " ");

        arrayNumeros = nums.split(' ') // (1) [ num1, num1 ]
        num1 = arrayNumeros[0] // (2) num1
        num2 = arrayNumeros[1] // (3) num2
        // Comprobar que son numeros solo y no contienen letras y salir del bucle si es verdad
        if(isNaN(num1) === false && isNaN(num2) === false){
            num1 = Number(num1);
            num2 = Number(num2);
            condition2 = false;         
        }else{
            alert("Error tienen que ser numeros, numeros y no numeros y letras!");
        }
    } while (condition2);
    return arrayNumeros;
}

// Punto 3 - Funciones Arrow - Realizar las operaciones (1 función para cada operación, 4 en total)
let resultadoFinal = (opcionOperacion,numeros) => {
    let num1 = Number(numeros[0]);
    let num2 = Number(numeros[1]);
    switch (opcionOperacion) {
        case "+":
            alert("El resultado de la Suma es: " + (num1+num2));
            break;
    
        case "-":
            alert("El resultado de la Restar es: " + (num1-num2));
        break;

        case "*":
            alert("El resultado de la Multiplicación es: " + (num1*num2));
        break;

        case "/":
            alert("El resultado de la División es: " + (num1/num2));
        break;
    }
}

    
// Da la bienvenida
alert('Bienvenido/a a la calculadora de JavaScript');
do{
    // Pide que operacion hacer
    opcionOperacion = pedirOperacion();
    
    // Pide los numeros
    numeros = pedirYComprobarNumeros();
    
    // Envia la opción elegida, y el array de numeros spliteados
    resultadoFinal(opcionOperacion,numeros);
    
    result = confirm("Quieres hacer otra operación?");
} while (result);
document.write("<h1>Gracias por utilizar mi calculadora</h1>");
