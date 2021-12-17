//MANERA 3 ARREGLOS

const arreglo3 = new Array(3, true, 'ADIOS');
console.log(arreglo3);

const frutas = ['manzana', 'naranjas', 'uvas', 'sandias',[1, 2, 3, 4, 5,[A, B, C]]];
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);//para imprimir todos los elemtnso del 2nd arreglo.
console.log(frutas[4][4]);// para imprimir un elemento del 2nd arreglo que esta en la posicicion 4.
console.log(frutas[4][5][1]);// para acceder al tercer arreglo a su elemento B;


/*
//length:  NOS SIRVE PARA VER LA CANTIDAD DE ELEMENTOS QUE SE TIENE EN EL ARREGLO.
const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

//push: NOS SIRVE PARA AÑADIR ELEMENTOS AL FINAL DE NUESTRO ARREGLO.
letras = push('E');
console.log(letras);

//pop = NOS SIRVE PARA ELIMINAR EL ULTIMO ELEMENTO DE NUESTRO ARREGLO.
letras.pop();
console.log(letras);

//unshift = AGREGA UN ELEMNTO AL INICIO DE NUESTRO ARREGLO.
letras.unshift(1);
console.log(letras);

//shift = ELIMINA EL PRIMER ELEMENTO
letras.shift();
console.log(letras);
*/