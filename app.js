
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creación del arreglo vacío para guardar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    // Validación de la lista para que no esté vacía
    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregamos el nombre al arreglo
    amigos.push(nombre);

    // Actualizamos la lista en pantalla
    mostrarLista();

    // Limpiamos el campo de texto
    input.value = "";
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo y luego limpiar la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>🎉 El amigo secreto es: <strong>" + amigoSorteado + "</strong></li>";

    // Limpiar el arreglo y la lista de amigos
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}