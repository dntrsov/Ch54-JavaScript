/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/
/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/
const edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad.");
}


if (edad >= 18) console.log("Eres mayor de edad"); //if ( condición ) sentencia;
else console.log("Eres menor de edad"); //else sentencia_si_condición_es_falsa;

const verificarEdad = edad => 
    edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(verificarEdad(20)); // "Eres mayor de edad"
console.log(verificarEdad(15)); // "Eres menor de edad"


/*const verificaEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
};
console.log(verificaEdad(17)); // "Eres mayor de edad"
console.log(verificaEdad(15)); // "Eres menor de edad"*/

// Ejemplo Oswaldo
const verificaEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
}
const resultado = verificaEdad(8);
console.log(resultado);

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/
/*const mensajeEdad = edadPersona => {
    if ( edadPersona >= 18 && edadPersona <= 30 ) return "Tus luchadores son Mistico o Vampiro Canadiense";
    else if ( edadPersona >= 31 ) return "Tus luchadores eran el Perro Aguayo o el Gran Apache";
    else if ( edadPersona < 18 ) return "Tus luchadores son Penta el 0M Zero miedo o Pagano 656";
 } */

/*const resultadoEvaluarEdad = mensajeEdad(10);
console.log(resultadoEvaluarEdad);*/

const mensajeEdad = edadPersona => {
    if (edadPersona >= 18 && edadPersona <= 30)
        return "Tus luchadores son Mistico o Vampiro Canadiense";
    else if (edadPersona >= 31)
        return "Tus luchadores eran el Perro Aguayo o el Gran Apache";
    else
        return "Tus luchadores son Penta el 0M Zero miedo o Pagano 656";
};

console.log(mensajeEdad(10));  // "Tus luchadores son Penta el 0M Zero miedo o Pagano 656"
console.log(mensajeEdad(20));  // "Tus luchadores son Mistico o Vampiro Canadiense"
console.log(mensajeEdad(31));  // "Tus luchadores eran el Perro Aguayo o el Gran Apache"






    



//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/




/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */




// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/




/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


