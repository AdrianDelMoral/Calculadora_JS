let lastResult = 0;
let opcion;

let operacion_a_Hacer = function() {
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
};

let pedirYComprobarNumeros = function() {
    let condition2 = true;
    do {
        nums = prompt('Introduce dos numeros separados por un espacio');
        nums = nums.replace(/\s+/g, " ");

        arrayNumeros = nums.split(' ') // (1) [ num1, num2 ]
        num1 = arrayNumeros[0] // (2) num1
        num2 = arrayNumeros[1] // (3) num2
        // Comprobar que son numeros solo y no contienen letras y salir del bucle si es verdad
        if(isNaN(num1) === false && isNaN(num2) === false || num1 == 'r' || num1 == 'R' || num2 == 'R' || num2 == 'r'){
            if(num1 == 'r' ||num1 == 'R'){
                // console.log("Num1 es R:");
                // console.log("Numero1:" + num1 + " Numero2: " + num2);
                num1 = calculadora.lastResult;
                num2 = Number(num2);
                arrayNumeros[0] = num1;
            }else if(num2 == 'r' || num2 == 'R'){
                // console.log("Num2 es R:");
                // console.log("Numero1:" + num1 + " Numero2: " +num2);
                num1 = Number(num1);
                num2 = calculadora.lastResult;
                arrayNumeros[1] = num2;
            }else{
                // console.log("NO HAY R Numero1: " + num1 + " Numero2: " +num2);
                num1 = Number(num1);
                num2 = Number(num2);
            };

            condition2 = false;         
        }else{
            alert("Error tienen que ser numeros, numeros y no numeros y letras!");
        }
    } while (condition2);
    return arrayNumeros;
};

let resultadoFinal = function(opcion,numeros){
    switch (opcion) {
        case "+":
            calculadora.lastResult = calculadora.sum(numeros);  
            break;

        case "-":
            calculadora.lastResult = calculadora.res(numeros);
        break;

        case "*":
            calculadora.lastResult = calculadora.mul(numeros);
        break;

        case "/":
            calculadora.lastResult = calculadora.div(numeros);
        break;
    }
};

let calculadora = {
    sum(numeros) {
        let num1 = Number(numeros[0]);
        let num2 = Number(numeros[1]);
        result = num1+num2;
        alert("El resultado de la Suma es: " + result);
        return result;
    },
    
    res(numeros) {
        let num1 = Number(numeros[0]);
        let num2 = Number(numeros[1]);
        result = num1-num2;
        alert("El resultado de la Resta es: " + result);
        return result;
    },
    
    mul(numeros) {
        let num1 = Number(numeros[0]);
        let num2 = Number(numeros[1]);
        result = num1*num2;
        alert("El resultado de la Multiplicación es: " * result);
        return result;
    },

    div(numeros) {
        let num1 = Number(numeros[0]);
        let num2 = Number(numeros[1]);
        result = num1/num2;
        alert("El resultado de la División es: " + result);
        return result;
    },
    lastResult
};

// Da la bienvenida
alert('Bienvenido/a a la calculadora de JavaScript');
do{
    // Pide que operacion hacer
    opcion = operacion_a_Hacer();
    // console.log("LastResult antes de sumar: " + calculadora.lastResult);
    
    // Pide los numeros y comprueba
    numeros = pedirYComprobarNumeros();

    // Envia la opción elegida, y el array de numeros spliteados
    resultadoFinal(opcion,numeros);
    
    result = confirm("Quieres hacer otra operación?");
} while (result);
document.write("<h1>Gracias por utilizar mi calculadora</h1>");
