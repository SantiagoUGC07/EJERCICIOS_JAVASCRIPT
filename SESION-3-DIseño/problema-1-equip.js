/* PROBLEMA 1 EN EQUIPO
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js) 
*/

function ingrePrecio()
{
    let precio = parseInt(prompt("ingresa el precio: "));
    let desc = 0;
    document.write('el precio ingresado fue de:' + precio); 
    if(precio < 100)
    {
      desc = precio * .10;
      precio = precio - desc;

    }
    else if(precio >= 100 && precio < 200)
    {
      desc = precio * .20;
      precio = precio - desc;
    }
    else if(precio >= 200)
    {
      desc = precio * .30;
      precio = precio - desc;
    }
    else
    {
      document.write('error en el precio ingresado');
    }
    document.write('descuento aplicado a su precio:' + desc); 
    document.write('El precio total con el descuento aplicado es de :' + precio); 
    return precio;
}

ingrePrecio();
 

