/*

*/

//FOREACH
const numeros = [1, 4, 7, 8];
console.log(numeros);
numeros.forEach(function(el){//FOREACH.... sirve para recorrer el dato.. para sumar todos los datos del arreglo + 1.
let suma = el + 1;
console.log(suma);
}); //AQUI NO SE MODIFICA EL ARREGLO ORIGINAL.

//CREAR ARREGLOS PARA MODIFICAR ARREGLOS.
const arr = [];
function suma(num)
{
    let sumNum = num +1;
    return arr.push(sumNum);
}
suma(3);
suma(5);
suma(6);
suma(2);
suma(78);
console.log(arr);
