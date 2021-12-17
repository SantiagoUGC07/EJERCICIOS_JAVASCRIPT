
/*prompt: es una funcion que el valor ingresado lo regresa como texto.. por eso una suma o operacion matematica no funciona
  parseInt: fuciona como un convertidor... si el texto ingresado tiene formato de numero lo convierte a numero...
*/
const numero1 = parseInt(prompt('ingresa el valor del numero1: '));
const numero2 = parseInt(prompt('ingresa el valor del numero2: '));

const suma = numero1 + numero2;
const rest = numero1 - numero2;
const mult = numero1 * numero2;
const div = numero1 / numero2;
const modu = numero1 % numero2;


console.log("la suma de " + numero1, "y " + numero2, "es: " + suma);
console.log("la resta de " + numero1, "y " + numero2, "es: " + rest);
console.log("la multiplicacion de " + numero1, "y " + numero2, "es: " + mult);
console.log("la division de " + numero1, "y " + numero2, "es: " + div);
console.log("el modulo de " + numero1, "y " + numero2, "es: " + modu);

