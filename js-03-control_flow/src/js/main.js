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


//BLoque de codigo
    
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar); // 30, 40, 50
    {

    let myVarLet = 100;
    const myVarConst = 110;
    var myVarVar = 120;
    console.log(myVarLet, myVarConst, myVarVar); // 100, 110, 120
    }
    console.log(myVarLet, myVarConst, myVarVar); //30, 40, 120
}

// Ejercicios mentales
let active = false
if( active == true);{ // este ; esta termiando con el ; se muere la sentencia if. 
    console.log("Estás activo") //bajo tipadao
}
console.log("Fin del programa"); //Te imprime los dos. 

// Ejericio mental 2 
active = false;
if( active === true)
    console.log("Está activo");
console.log("Tiene autorización");

console.log("Fin del programa");

// Ejericio mental 3 
/*active = false;
if( active); console.log("Está activo");
else console.log("No estás activo"); // error de sintaxis, el else no tiene un if.
console.log("Fin del programa");*/




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

/*const evaluarNombre = (nombre) =>{
        switch(nombre){
            case "Lua":
                console.log("Es de Abril");
                break;
            default:
                console.log("No sé sabe de quéin es")
        }
}
evaluarNombre ("Lua"); */

const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego":
        case "Besito":
        case "Frijol":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break; 
            case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es";
        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril
console.log( evaluarNombre("Milo")); //No se´sabe de quién es porque no hay break 
console.log( evaluarNombre("Cuchara"));
console.log( evaluarNombre());
console.log( evaluarNombre("Paco"));


const nombreMascota = "Lua";

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


const velocidadVentilador = ( velocidad ) => {
    let resultadoVelocidad; // ¿Que es esto?
    switch ( velocidad){
        case 0:
            resultadoVelocidad = "Apagado";
            break;
        case 1:
            resultadoVelocidad = "velocidad Baja";
            break;
        case 2:
            resultadoVelocidad = "velocidad Media";
            break; 
        case 3:
            resultadoVelocidad = "velocidad Alta";
            break;
        default:
            resultadoVelocidad ="Velocidad desconocida";
        
    }
    return resultadoVelocidad;
}
console.log( velocidadVentilador(0)); 
console.log( velocidadVentilador(1));
console.log( velocidadVentilador(2));
console.log( velocidadVentilador(3));
console.log( velocidadVentilador(5));


/* Realizar dos versiones, una versión con switch y otra con if-else
 */


const numeroVelocidad = ventiladorNumero => {
    if (ventiladorNumero === 0)
        resultadoVelocidadVentilador = "Apagado segunda versión";
    else if (ventiladorNumero === 1)
        resultadoVelocidadVentilador =  "Velocidad Baja segunda versión";
    else if (ventiladorNumero === 2)
        resultadoVelocidadVentilador =  "Velocidad Media segunda versión";
    else if (ventiladorNumero === 3)
        resultadoVelocidadVentilador =  "Velocidad Alta segunda versión";
    else
        resultadoVelocidadVentilador =  "Velocidad Desconocida segunda versión";

        return resultadoVelocidadVentilador;
};

console.log(numeroVelocidad(0));
console.log(numeroVelocidad(1));
console.log(numeroVelocidad(2));
console.log(numeroVelocidad(3));
console.log(numeroVelocidad(5));

//Cuando tenemos bastantes return se vuelve complicado


// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/


const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) );
console.log( verficarPagoDeTarjeta( false ) );








/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */

/*
 Dado un número entero, imprimir:
 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 - Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola.
 - Realizar una versión if-else, switch y operador ternario.
*/


/*const verficarNumero = ( numeroPositivoNegativo ) =>{
    let positivoNegativo;
    if( numeroPositivoNegativo < 0) {
        positivoNegativo = "Negativo";
    else if (numeroPositivoNegativo === 0)
       positivoNegativo = "Cero";
    else if (numeroPositivoNegativo > 0 && numeroPositivoNegativo < 100 )
       positivoNegativo = "Positivo";
    else  (numeroPositivoNegativo >= 100)
        positivoNegativo =  "Grande";

    return positivoNegativo;
}
console.log( verficarNumero(-5) );
console.log( verficarNumero( 0) );
console.log( verficarNumero( 99) );
console.log( verficarNumero( 101) ); */

const verificarNumero = (numeroPositivoNegativo) => {
    let positivoNegativo;
    if (numeroPositivoNegativo < 0) {
        positivoNegativo = "Negativo";
    } else if (numeroPositivoNegativo === 0) {
        positivoNegativo = "Cero";
    } else if (numeroPositivoNegativo > 0 && numeroPositivoNegativo < 100) {
        positivoNegativo = "Positivo";
    } else { // número mayor o igual a 100
        positivoNegativo = "Grande";
    }

    return positivoNegativo;
}

console.log(verificarNumero(-5));   // "Negativo"
console.log(verificarNumero(0));    // "Cero"
console.log(verificarNumero(99));   // "Positivo"
console.log(verificarNumero(101));  // "Grande"

// Ternario
function verificarNumeroTernario(numero) {
    return (numero < 0) ? "Negativo" :
           (numero === 0) ? "Cero" :
           (numero > 0 && numero < 100) ? "Positivo" :
           "Grande";
}

console.log(verificarNumeroTernario(-5));
console.log(verificarNumeroTernario(0));
console.log(verificarNumeroTernario(50));
console.log(verificarNumeroTernario(150));


//Switch
// ----- Function Switch ----------
function evaluarElNumeroSwitch(numeroSwitch) {

    switch ( true ) {
        case (numeroSwitch < 0):
            mensaje1 = "Negativo";
            break;
        case (numeroSwitch === 0):
            mensaje1 = "Cero";
            break;
        case (numeroSwitch >0 && numeroSwitch < 100):
            mensaje1 = "Positivo";
            break;
        case (numeroSwitch >= 100):
            mensaje1 = "Grande";
            break;
        default:
            mensaje1 = "Numero desconocido";
    }
    return mensaje1;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande












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


