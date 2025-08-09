// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Archivo: app.js

let amigos = [];
// Variable para guardar el último amigo sorteado y evitar que se repita
let ultimoSorteado = null;

/**
 * Función AGREGAR con nuevas validaciones.
 */
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // VALIDACIÓN 1: El nombre no puede contener números.
    // Se usa una expresión regular para verificar que solo haya letras y espacios.
    const formatoValido = /^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/.test(nombre);
    if (!formatoValido) {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }

    // VALIDACIÓN 2: Diferenciar mayúsculas y minúsculas (Pedro es igual a pedro).
    // Compara el nombre ingresado en minúsculas con los nombres de la lista en minúsculas.
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert('Este nombre ya ha sido agregado. Por favor, inserte uno diferente.');
        nombreInput.value = '';
        return;
    }

    // Se mantiene el nombre con su mayúscula/minúscula original para mostrarlo en la lista
    amigos.push(nombre);
    actualizarLista();

    nombreInput.value = '';
    nombreInput.focus();
}

/**
 * Función SORTEAR actualizada para no repetir el último resultado.
 */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder realizar el sorteo.');
        return;
    }

    let amigoSorteado;

    // VALIDACIÓN 3: Evitar que el nombre sorteado se repita.
    // Si hay más de un amigo, el sorteo se repetirá hasta que salga un nombre
    // diferente al último que fue sorteado.
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigos.length > 1 && amigoSorteado === ultimoSorteado);

    // Guardamos el resultado de este sorteo para la próxima validación
    ultimoSorteado = amigoSorteado;

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `¡El amigo secreto es: ${amigoSorteado}! 🎉`;
}


/**
 * Función NUEVA para reiniciar el juego.
 */
function reiniciarJuego() {
    // Se vacía el array de amigos
    amigos = [];
    // Se limpia el último sorteado
    ultimoSorteado = null;
    // Se borran los nombres de la lista visible
    document.getElementById('listaAmigos').innerHTML = '';
    // Se borra el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';
    // Se enfoca el cursor en el campo de texto
    document.getElementById('amigo').focus();
}

/**
 * Esta función actualiza la lista de amigos.
 */
function actualizarLista() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; 

    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigosElement.appendChild(listItem);
    });
}