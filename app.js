// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Archivo: app.js

let amigos = [];
// Variable para guardar el último amigo sorteado y evitar que se repita
let ultimoSorteado = null;
// NUEVA VARIABLE: Para guardar los amigos ya sorteados
let amigosSorteados = [];

/**
 * Función AGREGAR con nuevas validaciones.
 */
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    let nombre = nombreInput.value.trim();

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

    // NORMALIZAR: Primera letra mayúscula, resto minúsculas
    nombre = nombre
        .toLowerCase()
        .replace(/(^|\s)([a-zñáéíóú])/g, l => l.toUpperCase());

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

    // Si ya se sortearon todos los amigos, mostrar mensaje y deshabilitar botón
    if (amigosSorteados.length === amigos.length) {
        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.textContent = 'Ya todos los amigos secretos fueron sorteados, debe reiniciar un nuevo Juego.';
        document.getElementById('sortearBtn').disabled = true;
        document.getElementById('reiniciarBtn').focus();
        return;
    }

    let receptor;
    // Selecciona un receptor que no sea el dador (ultimoSorteado) y que no haya sido sorteado antes
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        receptor = amigos[indiceAleatorio];
    } while (
        (amigos.length > 1 && receptor === ultimoSorteado) ||
        amigosSorteados.includes(receptor)
    );

    // Verificación explícita: dador y receptor no pueden ser la misma persona
    if (receptor === ultimoSorteado) {
        // Esto nunca debería ocurrir por el do...while, pero se deja por claridad
        alert('El dador y el receptor no pueden ser la misma persona.');
        return;
    }

    ultimoSorteado = receptor;
    amigosSorteados.push(receptor);

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `¡El amigo secreto es: ${receptor}! 🎉`;

    // Si ya se sortearon todos, deshabilitar botón y mostrar mensaje
    if (amigosSorteados.length === amigos.length) {
        setTimeout(() => {
            resultadoElemento.textContent = 'Ya todos los amigos secretos fueron sorteados, debe reiniciar un nuevo Juego.';
            document.getElementById('sortearBtn').disabled = true;
            document.getElementById('reiniciarBtn').focus();
        }, 1500);
    }
}


/**
 * Función NUEVA para reiniciar el juego.
 */
function reiniciarJuego() {
    // Se vacía el array de amigos
    amigos = [];
    // Se limpia el último sorteado
    ultimoSorteado = null;
    amigosSorteados = []; // LIMPIAR REGISTRO DE SORTEADOS
    // Se borran los nombres de la lista visible
    document.getElementById('listaAmigos').innerHTML = '';
    // Se borra el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';
    // Se enfoca el cursor en el campo de texto
    document.getElementById('amigo').focus();
    document.getElementById('sortearBtn').disabled = false; // HABILITAR BOTÓN SORTEAR
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