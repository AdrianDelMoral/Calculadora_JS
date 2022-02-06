



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
