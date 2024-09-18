let meGusta1 = document.querySelector("#botonUno");
let mostrarLikes = document.querySelector("#likes");
let contador = 0;


function sumarClick1() {
    
    contador++;
    console.log("diste like");
    mostrarLikes.innerHTML = contador + " likes  ";
}


//----segundo boton

let meGusta2 = document.querySelector("#botonDos");
let mostrarLikes2 = document.querySelector("#likesDos");
let contador2 = 0;


function sumarClick2() {
    
    contador2++;
    console.log("diste like ");
    mostrarLikes2.innerHTML = contador2 + " likes  ";

}


//----tercer boton

let meGusta3 = document.querySelector("#botonTres");
let mostrarLikes3 = document.querySelector("#likesTres");
let contador3 = 0;


function sumarClick3() {
    
    contador3++;
    console.log("diste like");
    mostrarLikes3.innerHTML = contador3 + " likes  ";

}

