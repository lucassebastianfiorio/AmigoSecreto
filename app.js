let listaAmigos = [];
let cantidadAmigos = 0;

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert('Ingrese un nombre');
    } else{
        listaAmigos.push(nombre);
    document.getElementById('amigo').value = '';
    cantidadAmigos++;
    console.log(`lista de amigos: ${listaAmigos}`);
    console.log(`cantidad de amigos: ${cantidadAmigos}`);
    mostrarListaAmigos();
    }
    
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

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