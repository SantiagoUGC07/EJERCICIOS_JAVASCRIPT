/*CONDICIONALES
Se utilizan para tomar deciciones en el programa 

document.write : permite escribir en el html........
*/
/*
const edad = parseInt(prompt("ingresa tu edad"));

if(edad >= 18)
{
    document.write("eres mayor de edad, puedes votar");
}
else
{
    document.write("lo siento, eres menor de edad, no puedes votar.. ");
}

*/

const edad = parseInt(prompt("ingresa tu edad"));

if(edad >= 18 && edad < 30)
{
    document.write("eres un joven");
}
else if(edad >= 30 && edad < 60)
{
    document.write("eres un adulto ");
}
else if(edad >= 60 && edad < 99)
{
    document.write("eres un adulto mayor ");
}
else if(edad >= 99)
{
    document.write("error en la edad ");
}
else
{
    document.write("eres un niño");
}




