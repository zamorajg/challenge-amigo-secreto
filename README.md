# 🎁 Challenge Amigo Secreto

<img src="https://img.icons8.com/color/96/gift.png" alt="Amigo Secreto" width="80" />

Esta aplicación web permite organizar un sorteo de "Amigo Secreto" de manera sencilla y segura, asegurando que los nombres ingresados sean válidos y que el sorteo no repita el último resultado.

## ✨ Características

- 👤 **Agregar amigos:** Valida que los nombres no estén vacíos, no contengan números y no se repitan (sin importar mayúsculas/minúsculas).
- 🎲 **Sortear amigo secreto:** Selecciona aleatoriamente un nombre de la lista, evitando repetir el último sorteado.
- 🔄 **Reiniciar juego:** Limpia la lista de amigos y el resultado del sorteo para comenzar de nuevo.
- 🖥️ **Interfaz intuitiva:** Permite agregar nombres, ver la lista actual y realizar el sorteo con facilidad.

## 📁 Estructura de archivos

- `app.js`: Lógica principal de la aplicación.
- `index.html`: Estructura de la interfaz de usuario.
- `styles.css`: Estilos visuales (si existe).
- `README.md`: Documentación del proyecto.

## 🚀 Instalación y uso

1. 📥 **Descarga o clona el repositorio.**
2. 🖱️ Abre el archivo `index.html` en tu navegador.
3. ✍️ Ingresa los nombres de los participantes y realiza el sorteo.

## ✅ Validaciones implementadas

- ❌ El nombre no puede estar vacío.
- 🔤 El nombre solo puede contener letras y espacios (incluye caracteres especiales en español).
- 🚫 No se permiten nombres duplicados (Pedro y pedro se consideran iguales).
- 🔁 El sorteo no repite el último nombre sorteado si hay más de un participante.

## 📝 Ejemplo de uso

<img src="https://img.icons8.com/color/96/conference-call.png" alt="Lista de amigos" width="60" />

1. Escribe el nombre de un amigo y haz clic en "Agregar".
2. Repite el proceso para todos los participantes.
3. Haz clic en "Sortear" para ver quién es el amigo secreto.
4. Usa "Reiniciar" para comenzar un nuevo sorteo.

## 👨‍💻 Autor: José Zamora

Desarrollado como parte del desafío de lógica de programación de Alura Latam.

---
