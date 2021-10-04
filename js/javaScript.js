let num1, num2, arrayNumeros,split2, nums, condition = true, condition2 = true, resultado, opcion;

function resultadoFinal(opcionOperacion,arrayNumeros) {
    switch (opcionOperacion) {
        case "+":
            sumar(arrayNumeros);
            break;
    
        case "-":
            restar(arrayNumeros);
        break;

        case "*":
            multiplicar(arrayNumeros);
        break;

        case "/":
            dividir(arrayNumeros);
        break;
    }    
}

function bienvenida() {
    alert('Bienvenido/a a la calculadora de JavaScript');    
};

function pedirOperacion() {
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

function pedirNumeros() {
        let  nums = null;
        nums = prompt('Introduce dos numeros separados por un espacio');
        // Quitamos los espacios de mas, y los cambiamos por solo 1 espacio
        // \s se refiere a cualquier símbolo de espacio en blanco: espacios, tabulaciones y saltos de línea.
        nums = nums.replace(/\s+/g, " ");
        nums = nums.split(' ') // (1) [ num1, num2 ]
    return nums;
}

function comprobarNumeros(numeros) {
    num1 = numeros[0];
    num2 = numeros[1];
    if(isNaN(num1) === false && isNaN(num2) === false){
        condition2 = numeros;
    }else{
        alert("Error tienen que ser numeros, numeros y no numeros y letras!");
        condition2 = false;
    }
    return condition2;
}

function sumar(numeros) {
    num1 = Number(numeros[0]);
    num2 = Number(numeros[1]);
    alert(`El resultado de la Suma es: ${num1+num2}`);
}

function restar(numeros) {
    num1 = Number(numeros[0]);
    num2 = Number(numeros[1]);
    alert(`El resultado de la Resta es: ${num1-num2}`);
}

function multiplicar(numeros) {
    num1 = Number(numeros[0]);
    num2 = Number(numeros[1]);
    alert(`El resultado de la Resta es: ${num1*num2}`);
}

function dividir(numeros) {
    num1 = Number(numeros[0]);
    num2 = Number(numeros[1]);
    alert(`El resultado de la Resta es: ${num1/num2}`);
}

// Da la bienvenida
bienvenida();

do{
    // Pide que operacion hacer
    opcionOperacion = pedirOperacion();
    do {
        // Pide los numeros
        numeros = pedirNumeros();
 
        // Comprueba numeros
        arrayNumeros = comprobarNumeros(numeros);    
        console.log(arrayNumeros);
    } while (arrayNumeros === false);

    // Envia la opción elegida, y el array de numeros spliteados
    resultadoFinal(opcionOperacion,numeros);
    
    result = confirm("Quieres hacer otra operación?");
} while (result);
document.write("<h1>Gracias por utilizar mi calculadora</h1>");
