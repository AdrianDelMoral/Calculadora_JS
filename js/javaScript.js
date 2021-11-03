let operacion_a_Hacer = function () {
    let condition = true;
    let opcion = null;
    do {
        opcion = prompt('Que operación deseas hacer:\n Sumar(+)\n Restar(-)\n Multiplicar(*)\n Dividir(/)');
        opcion = opcion.trim();

        if (opcion === "+" || opcion === "-" || opcion === "*" || opcion === "/") {
            condition = false;
        } else {
            alert("La operación introducida es erronea, Prueba de nuevo con una que esté indicada 🙄");
        }
    } while (condition);
    return opcion;
};

let pedirYComprobarNumeros = function () {
    let condition2 = true;
    do {
        nums = prompt('Introduce dos numeros separados por un espacio');
        nums = nums.replace(/\s+/g, " ");

        arrayNumeros = nums.split(' ') // (1) [ num1, num2 ]
        // si hay un hueco vacio en el array al principio, cambia las posiciones
        if (arrayNumeros[0] === '') {
            arrayNumeros[0] = arrayNumeros[1] // (2) num1
            arrayNumeros[1] = arrayNumeros[2] // (3) num2
        }
        // y pase lo que pase al principio una vez comprobado los guarda en las variables
        num1 = arrayNumeros[0] // (2) num1
        num2 = arrayNumeros[1] // (3) num2
        // Comprobar que son numeros solo y no contienen letras y salir del bucle si es verdad
        if(isNaN(num1) === false && isNaN(num2) === false || num1 == 'r' || num1 == 'R' || num2 == 'R' || num2 == 'r'){
            if(num1 == 'r' ||num1 == 'R'){
                // console.log("Num1 es R:");
                // console.log("Numero1:" + num1 + " Numero2: " + num2);
                num1 = calculadora.lastResult;
                arrayNumeros[0] = num1;
                arrayNumeros = arrayNumeros.map(Number);
            }else if(num2 == 'r' || num2 == 'R'){
                // console.log("Num2 es R:");
                // console.log("Numero1:" + num1 + " Numero2: " +num2);
                num2 = calculadora.lastResult;
                arrayNumeros[1] = num2;
                arrayNumeros = arrayNumeros.map(Number);
            }else{
                // console.log("NO HAY R Numero1: " + num1 + " Numero2: " +num2);
                arrayNumeros = arrayNumeros.map(Number);
            };
            condition2 = false;
        } else {
            alert("Error tienen que ser numeros, numeros y no numeros y letras!");
        }
    } while (condition2);
    return arrayNumeros;
};

let resultadoFinal = function (opcion, numeros) {
    switch (opcion) {
        case "+":
            calculadora.sum(numeros[0], numeros[1]);
            break;

        case "-":
            calculadora.res(numeros[0], numeros[1]);
            break;

        case "*":
            calculadora.mul(numeros[0], numeros[1]);
            break;

        case "/":
            calculadora.div(numeros[0], numeros[1]);
            break;
    }
};

let calculadora = {
    lastResult: 0,
    sum(numero1, numero2) {
        this.lastResult = numero1 + numero2;
        alert("El resultado de la Suma es: " + this.lastResult);
    },

    res(numero1, numero2) {
        this.lastResult = numero1 - numero2;
        alert("El resultado de la Resta es: " + this.lastResult);
        this.lastResult = resultadoResta;
    },

    mul(numero1, numero2) {
        this.lastResult = numero1 * numero2;
        alert("El resultado de la Multiplicación es: " * this.lastResult);
        this.lastResult = resultadoMulti;
    },

    div(numero1, numero2) {
        this.lastResult = numero1 / numero2;
        alert("El resultado de la División es: " + this.lastResult);
        this.lastResult = resultadoDivi;
    },
};

// Da la bienvenida
alert('Bienvenido/a a la calculadora de JavaScript');
let opcionSalir = true;
do {
    // Pide que operacion hacer
    let opcion = operacion_a_Hacer();
    // console.log("LastResult antes de sumar: " + calculadora.lastResult);

    // Pide los numeros y comprueba
    let numeros = pedirYComprobarNumeros();

    // Envia la opción elegida, y el array de numeros spliteados
    resultadoFinal(opcion, numeros);

    opcionSalir = confirm("Quieres hacer otra operación?");
} while (opcionSalir);
document.write("<h1>Gracias por utilizar mi calculadora</h1>");
