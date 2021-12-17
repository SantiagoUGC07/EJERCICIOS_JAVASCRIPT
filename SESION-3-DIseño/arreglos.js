/*ARREGLOS
Nos permiten almacenar los datos
se puede meter arreglos deontro de otros arreglos
*/

//MANERAS EN LAS QUE SE PUEDE ESTRUCTURAR ARREGLOS.
//MANERA-1 // se puede meter arreglos deontro de otros arreglos
const arreglo1 = [4,'HOLA', true,[1, 2, 6]];
console.log(arreglo1);

//MANERA-2
const arreglo2 = Array.of(1, 'HOLA', true);
console.log(arreglo2);

//MANERA-3
const arreglo3 = new Array(3, true, 'ADIOS',[arreglo2]);
console.log(arreglo3);




