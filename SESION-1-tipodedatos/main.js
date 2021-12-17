//alert("Hola mundo"); //para lanzar un avis con hola mundo en la pagina

/*PALABRAS RESERVADAS
var
const
let -> crear e idetificar el tipo de variable
*/

//DATOS PRIMITIVOS

//**String es una cadena de texto**
let miNombre = "Uriel Garcia () & % ";
console.log(miNombre); //si colocamos el nombre la variable dentro de esta funcion, se muestra el contenido en la consola de la pagina.

//**number valores negativos o enteros
let numero = 10;
let numero2 = 10.0;
let numero3 = -50;
console.log(numero, numero2, numero3);

//CONCATENAR VALORES
console.log("El valor de numero 1 es: " + numero);//se imprimen en la consola el texto y el valor de la variable.
console.log("El valor de numero 2 es: " + numero2);
console.log("El valor de numero 3 es: " + numero3);

//**BOLEAN**
/*solo tienen dos datos
true => verdadero
false => falso
*/
let miBoolean1 = true;//representan valores logicos
let miBoolean2 = false;
console.log("el valor de nnumero de la variable 1 es: " + miBoolean1);//se imprimen en la consola los valores logicos
console.log("el valor de nnumero de la variable 2 es: " + miBoolean2);

//**NULL**
//la variable esta vacia
let variableVacia = null;//vacia la variable
console.log(variableVacia);//muestra la variable vacia

//**UNDEFINED**
//es un tipo de dato que no existe
let variable; //al no colocar valor a la variable let no puede identificar el tipo de variable
console.log(variable);//se imprimira el valor indefinido de la variable

//**DECLARAR VARIABLE**
variable = "hola";//se declara como string
console.log(variable); //se imprime el valor de la variable y deja de ser undefined

