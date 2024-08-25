const texto = document.getElementById("texto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const mensaje = document.getElementById("mensaje");
const mensajeparrafo = document.getElementById("mensajeparrafo");
const derecho = document.getElementById("derecho");
const muñeco = document.getElementById("muñeco");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "ines"],
    ["a", "ai"],
    ["u", "ufat"],
];

const remplace = (nuevovalor) => {
    mensaje.innerHTML = nuevovalor; 
    muñeco.classList.remove("oculto");
    texto.value = "";
    mensajeparrafo.style.display = "none";
    botoncopiar.style.display = "block";
    derecho.classList.add("respuesta");
    mensaje.classList.add("respuesta");
    muñeco.classList.add("oculto");
}

const reset = () => {


    mensaje.innerHTML = "";
    muñeco.classList.remove("oculto");
    mensajeparrafo.style.display = "block";
    botoncopiar.style.display = "none";
    derecho.classList.remove("respuesta");
    mensaje.classList.remove("respuesta"); 
    texto.focus();
}


function encriptar(nuevotexto) {
    for (let i = 0; i < remplazar.length; i++) {
        if (nuevotexto.includes(remplazar[i][0])) {
            nuevotexto = nuevotexto.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
     }
    return nuevotexto;
   }

botonEncriptar.addEventListener("click", () => {
    const textoIngresado = texto.value.toLowerCase();
    if(textoIngresado !=""){
        remplace(encriptar(textoIngresado));
    } else{
        alert("Ingrese texto a encriptar");
        reset();
    }  
    
});


function Desencriptar(nuevotexto) {
    for (let i = 0; i < remplazar.length; i++) {
        if (nuevotexto.includes(remplazar[i][1])) {
            nuevotexto = nuevotexto.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
    }
    return nuevotexto;
}

botonDesencriptar.addEventListener("click", () => {
    const textoIngresado = texto.value.toLowerCase();
    if(textoIngresado != ""){
       remplace(Desencriptar(textoIngresado));
    } else{
        alert("Ingrese texto a desencriptar");
    }
});

botoncopiar.addEventListener("click", () => { 
    let textoIngresado = mensaje;
    textoIngresado.select();
    document.execCommand("copy");
    alert("Texto copiado");
    reset();

});
