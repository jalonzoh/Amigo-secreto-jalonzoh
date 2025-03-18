let listaAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        Swal.fire({
            title: "Error al escribir un nombre!",
            text: "Por favor escriba un nombre válido.",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000
          });
          return;

    }
    for(i=0;i<listaAmigos.length;i++){
        if(amigo == listaAmigos[i]){
            Swal.fire({
                title: "¡Nombre ya ingresado!",
                text: "Si es otra persona, por favor ingrese su apellido.",
                icon: "error",
                confirmButtonText: "OK",
                timer: 3200
              });
              return;
        }
    }

    listaAmigos.push(amigo);
    for(let i = 0;i<listaAmigos.length;i++){
        exibirAmigos('#listaAmigos',`${listaAmigos}`);
        }
        if(listaAmigos.length>1){
            document.getElementById('sortearAmigo').disabled = false;
        }
    
    limparCampo();
    }
    

function exibirAmigos() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        listaHTML.appendChild(item);
    }
}
function exibeSorteado(tag,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
     }


function sortearAmigo(){
    let amigoSorteado = listaAmigos[Math.floor(Math.random()* listaAmigos.length)];
     exibeSorteado('#resultado',`El amigo sorteado es: ${amigoSorteado} `);
     document.getElementById('sortearAmigo').setAttribute('disabled', true);
     document.getElementById('nuevoSorteo').disabled = false;
     document.getElementById('button-add').setAttribute('disabled', true);
     document.getElementById('amigo').setAttribute('disabled', true);
}
function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
function nuevoSorteo(){
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";
    exibeSorteado('#resultado','');
    limparCampo();
    document.getElementById('button-add').disabled = false;
    document.getElementById('amigo').disabled = false;
    document.getElementById('nuevoSorteo').setAttribute('disabled', true);
    listaAmigos = [];

}