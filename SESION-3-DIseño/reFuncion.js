/* REPASO DE FUNCIONES 
let cuando se declara con este una variable solo vive dentro de la funcion, el return nos sirve para devolver el valor y poder recuperar el valor.
*/

function procesadorDeFrutas(manzanas, naranjas)//procesador de frutas es el nombe de la funcion, manzanas y naranjas son lso elementos que recibe la funcion
{
    let jugo = 'Jugo de ' + manzanas +' manzanas y ' + naranjas + ' naranjas ';
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4, 0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0, 5);
console.log(jugoDeNaranja);