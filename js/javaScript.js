/*-------Errores Personalizados----------*/
// tiene que ir siempre con Error y delante el nombre del error
class OperacionError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "OperacionError"; // (2)
    }
}
class OperadorError extends Error {
    constructor(message) {
        super(message); // (1)
        /* El nombre de la clase, saldria por defecto error porque la clase padre es Error, 
            por eso lo indicamos en this.name cambiandolo al nombre que se llama la clase.
        */
        this.name = "OperadorError"; // (2)
    }
}
/*---------------------------------------*/
class calculadora {
    lastResult = 0;
    sum(numero1, numero2) {
        this.lastResult = numero1 + numero2;
        alert("El resultado de la Suma es: " + this.lastResult);
    }

    res(numero1, numero2) {
        this.lastResult = numero1 - numero2;
        alert("El resultado de la Resta es: " + this.lastResult);
    }

    mul(numero1, numero2) {
        this.lastResult = numero1 * numero2;
        alert("El resultado de la Multiplicación es: " + this.lastResult);
    }

    div(numero1, numero2) {
        this.lastResult = numero1 / numero2;
        alert("El resultado de la División es: " + this.lastResult);
    }
};
let calculadora2 = new calculadora();

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

        // Produce un error en consola diciendo que "La operación introducida no es la correcta"
        try {
            if (condition === true) {
                // llama a la clase de error personalizado OperacionError y muestra el mensaje
                throw new OperacionError("La operación introducida no es la correcta");
            }
        } catch (error) {
            console.error(`${error}`);
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
        if (isNaN(num1) === false && isNaN(num2) === false || num1 == 'r' || num1 == 'R' || num2 == 'R' || num2 == 'r') {
            if (num1 == 'r' || num1 == 'R') {
                num1 = calculadora2.lastResult;
                arrayNumeros[0] = num1;
                arrayNumeros = arrayNumeros.map(Number);
            } else if (num2 == 'r' || num2 == 'R') {
                num2 = calculadora2.lastResult;
                arrayNumeros[1] = num2;
                arrayNumeros = arrayNumeros.map(Number);
            } else {
                arrayNumeros = arrayNumeros.map(Number);
            };
            condition2 = false;
        } else {
            alert("Error tienen que ser numeros, numeros y no numeros y letras!");
        }
        // Produce un error en consola diciendo que "La operación introducida no es la correcta"
        try {
            if (condition2 === true) {
                // llama a la clase de error personalizado OperadorError y muestra el mensaje
                throw new OperadorError("La introducción de los operandos es erronea");
            }
        } catch (error) {
            console.error(`${error}`);
        }
    } while (condition2);
    return arrayNumeros;
};

let resultadoFinal = function (opcion, numeros) {
    switch (opcion) {
        case "+":
            calculadora2.sum(numeros[0], numeros[1]);
            break;

        case "-":
            calculadora2.res(numeros[0], numeros[1]);
            break;

        case "*":
            calculadora2.mul(numeros[0], numeros[1]);
            break;

        case "/":
            calculadora2.div(numeros[0], numeros[1]);
            break;
    }
};



// Da la bienvenida
alert('Bienvenido/a a la calculadora de JavaScript');
let opcionSalir = true;
do {
    // Pide que operacion hacer
    let opcion = operacion_a_Hacer();

    // Pide los numeros y comprueba
    let numeros = pedirYComprobarNumeros();

    // Envia la opción elegida, y el array de numeros spliteados
    resultadoFinal(opcion, numeros);

    opcionSalir = confirm("Quieres hacer otra operación?");
} while (opcionSalir);
document.write("<h1>Gracias por utilizar mi calculadora</h1>");
