let listaAmigos = [];
let cantidadAmigos = 0;



function agregarAmigo() {
    //Obtener el valor del input
    let nombre = document.getElementById('amigo').value;
    //Si el nombre está vacío, mostrar un alert
    if (nombre === '') {
        alert('Ingrese un nombre');
    } else if (listaAmigos.includes(nombre)) {
    //Si el nombre ya está en la lista, mostrar un alert    
        alert('El nombre ya está en la lista');
    } else {
        //Si el nombre no está vacío ni repetido, agregarlo a la lista
        listaAmigos.push(nombre);
        document.getElementById('amigo').value = '';
        //Cantidad de amigos, se incrementa en 1 y es el maximo para el random
        cantidadAmigos++;
        mostrarListaAmigos();
    }
    //Habilitar el boton de sortear
    if (cantidadAmigos > 1) {
        habilitarBoton();
    }
}

//Actualiza la lista de amigos al agregar uno nuevo
function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Funcion para sortear un amigo
function sortearAmigo(){

    indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let amigoSorteado = listaAmigos[indiceAmigo];
    let resultado = document.getElementById('resultado');
    ocultarLista();
    resultado.innerHTML = `El ganador es: ${amigoSorteado}`;
  
}

function ocultarLista(){
    document.querySelector('#listaAmigos').classList.add('oculto');
}

function habilitarBoton(){
    let botonSortear = document.getElementById('sortear');
    botonSortear.disabled = false;
}