//Script1
function script1() {
    var numeros = [];
    const total_numeros = 10;

    for (let i = 0; i < total_numeros; i++) {
        let num = parseInt(prompt("Indica un numero"));
        numeros.push(num);
    }
    alert(numeros.sort());
}

//Script 2
function calcular(){
    var c=document.getElementById("coche");
    if (c.value == "92") {
        alert("S'aplicara un descomte del 8%")
    }
    else if (c.value == "94") {
        alert("S'aplicara un descomte del 6%")
    }
    else if (c.value == "96") {
        alert("S'aplicara un descomte del 4%")
    }
    else {
        alert("S'aplicara un descomte del 10%")
    }
    let num = parseInt(prompt("Indica el preu del cotxe:"));
    var porcentatge = parseInt(c.value);
    var calcul = porcentatge * (num / 100);
    alert("El preu final es " + calcul + "€");
}

//Script 3
function script3() {
    var edat = parseInt(prompt("Indica la teva edat:"));
    if (edat >= 16) {
        let a = document.createElement("a");
        a.setAttribute("href", "http://www.caib.es");
        let aTexto = document.createTextNode("Portal FP");
        a.appendChild(aTexto);
         
        document.body.appendChild(a);

        let boto = document.getElementById("boto");
        boto.parentNode.removeChild(boto);
    }
    else {
        alert("Encara no té l'edat per accedir al portal d'FP")
    }
}

//Script 4
function formateig_string() {
    var cadena = prompt("Escriu el que vulguis: ");
    alert(cadena.toLowerCase());
    alert(cadena.toUpperCase());
    var menos_cinc = cadena.length - 5;
    alert(cadena.substring(0,menos_cinc));

    var paraules = cadena.split(" ");
    for (let i=0; i < paraules.length; i++) {
        alert(paraules[i]);
    }
}

//Script 5
function info_pagina() {
    var enllaços = document.getElementsByTagName("a");
    alert("La pagina te " + enllaços.length + " enllaços.");
    var darrer_enllaç = enllaços.length - 1;    
    alert("El darrer enllaç es: " + enllaços[darrer_enllaç]);
    let enllaços_google = 0;
    for (let i=0; i < enllaços.length; i++) {
        let enllaç = enllaços[i].getAttribute("href")
        if (enllaç == "https://www.google.es") {
            enllaços_google++;
        }
    }
    alert("Enllaços que apunten a google: " + enllaços_google);
}

//Script 6
//Es troba dins l'apartat 6

//Script 7
var imagen = document.getElementById("imagen");
function invisible() {
    imagen.setAttribute("style", "display:none;");
}
function visible() {
    imagen.removeAttribute("style");
}
function mes_gran() {
    imagen.setAttribute("height", "800")
    imagen.setAttribute("width", "700")
}
function mes_petit() {
    imagen.setAttribute("height", "400")
    imagen.setAttribute("width", "300")
}

//Script 8
function color_fons(color) {
    document.body.style.backgroundColor = color;
}
function fons_blanc() {
    document.body.style.backgroundColor = 'white';
}

//Script 9
//Es troba dins l'apartat 9