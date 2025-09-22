let listaAmigos=[];
let contador=0;
console.log(listaAmigos);
function agregarAmigo(){
    let nombre=document.getElementById("amigo").value;
    if (nombre.includes(" ")){
        alert("Por favor, ingrese un nombre valido.")
        limpiarCaja();
    }else{
    if (nombre==""){
        alert("Por favor, ingrese un nombre valido.")
        limpiarCaja();
    }else{
            if(listaAmigos.includes(nombre)){
                alert("Nombre ya registrado.")
                document.getElementById("amigo").value="";
            }else{
                listaAmigos.push(nombre);
                console.log(listaAmigos);
                document.getElementById("amigo").value="";
                contador++
                console.log(contador)
                asignarElementoTexto("#listaAmigos",listaAmigos)
    }
        }
    }
    }
function limpiarCaja(){
    document.getElementById("amigo").value="";
}

function asignarElementoTexto(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function sortearAmigo(){
    if (contador<2){
        alert("Ingrese más nombres.")
    }else{
        let numGanador=Math.floor(Math.random()*contador);
        console.log(numGanador)
        ganador=listaAmigos[numGanador];
        asignarElementoTexto("#resultado",`El amigo secreto sorteado es ${ganador}.`);
        asignarElementoTexto("#listaAmigos","");
        listaAmigos=[]
        contador=0

    }
}