var num1=1
var num2=2
console.log("prima variabile",num1)
console.log("seconda variabile",num2)
somma= num1+num2
console.log("totale",somma)
var stringa="cavolo"
console.log("valore del stringa",stringa)
stringa="ciao"
console.log("stringa2",stringa)
const PIGRECO=3.14159265359
const PIGRECO2=1.00000000000
console.log("prima constante",PIGRECO)
sommaconst= PIGRECO+PIGRECO2
console.log("totaleConstante",sommaconst)

var uno=1
var due=2
var tre=3
var quatro=4
var cinque=5
totaleVar= uno+due+tre+quatro+cinque
console.log("La somma tra i numeri equivale a",totaleVar)
mediaVar=totaleVar/5
console.log("e la media equivale a",mediaVar)

var annoCor=2023
var annoKeri=1995
var anniManc=100
eta=annoCor-annoKeri
rimanente=anniManc-eta
console.log("hai",eta,"anni e ti mancano",rimanente,"anni per compiere 100")

document.getElementById("button").onclick = function() {calcola()};

function calcola(){
var numeroUno=0
var numeroDue=0
numeroUno = parseInt(prompt("inserisi il primo numero"))
numeroDue = parseInt(prompt("inserisi il secondo numero"))
somma=numeroUno+numeroDue
sottrazione=numeroUno-numeroDue
moltiplicazione=numeroUno*numeroDue
divisione=numeroUno/numeroDue
potenza=numeroUno**numeroDue

document.write("Con i numeri da te scelti, i risultati delle varie operazioni sono: somma",somma,"sottrazione",sottrazione,"moltiplicazione",moltiplicazione,"divisione",divisione,"potenza",potenza,)}
