/*
La variable var se utilizaba anteriormente, son variables globales
La variable let es una variable de contexto, solo visible en un bloque
de codigo.
*/ 

var numero = 40;
console.log(numero); //40

if(true)
{
var numero=50;  //50
console.log(numero);
}

console.log(numero); //50

var texto = " Hola mundo "
console.log(texto);

if(true)
{
    let texto = " Javascript "
    console.log(texto);
}

console.log(texto);