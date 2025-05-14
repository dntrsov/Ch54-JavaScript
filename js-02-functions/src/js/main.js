console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/




/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.


sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darReagalo = function ( nombre, regalo ){
console.log(`Felicidades ${nombre}, te traje ${regalo}`);
}; // estamos declarando una variable
darReagalo( "Jen", "Sopa Maruchan con camarón");

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/
// Función declarada para sumar dos números`deben tener RETURN
sumarNumeros(26, 5); 

function sumarNumeros(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(`La suma de los dos números es:  ${resultado}`);
}

// Función expresada para restar dos números
const restarNumeros = function(numero1, numero2) {
  const resultado = numero1 - numero2;
  console.log(`La resta de los dos números es: ${resultado}`);
};
restarNumeros(26, 5);

/*
Ejemplo Abizaic
function sumar(a, b) {
  return a + b;
}
const restar = function(a, b) {
  return a - b;
};
let a ;
let b ;
a = Number(prompt("Ingrese el primer número"));
b = Number(prompt("Ingrese el segundo número"));
console.log(`Suma ${a} + ${b} = ${sumar(a, b)}`);
console.log(`Resta ${a} - ${b} = ${restar(a, b)}`);
*/

/*
 Ejemplo Gustavo
function suma(a, b) {
  return a + b;
}
const resta = function(a, b) {
  return a - b;
};
*/






/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/
/*(function setUp(){
  console.log("Configuración inicial de la aplicación");
  console.log(`valor de data ${data}`)
})(18); // estos () ejecutan la función, nos ahorramas setUp(); */ // revisar función 

/*setUp(); //para que se ejecutte la app 


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
 Similares a las f(declaradas)

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
//Realizar una función declarada que calcule el área de un triangulo. La función debe retornar el resultado

function area( a, b ){
  const area = (a * b)/ 2;
  return `El área del triangulo es ${area} metros cuadrados`;
}
console.log(area(3, 5));

console.log(`El área del triángulo es: ${area2(5, 10)}`);
function area2(a, b) {
  return (a * b) / 2;
}

//Realizar una función expresada que calcule el area de un triángulo
const calculoArea = function(a, b){
  return (a * b) / 2;
};
console.log(calculoArea(3,5));

const calculoAreaTriangulo = function(a, b){
  return (a * b) / 2;
};
console.log(`El área del triángulo es: ${calculoAreaTriangulo(3,5)}`);

const calculaArea2 = function (base, altura) {
  return (base*altura)/2;
}
console.log(calculaArea2(12, 20));


// Realizar una función flecha que calcule el área de un triángulo
const calculaArea3 = ( base, altura) => base * altura / 2;
console.log(`Resultado usando arrow function: ${calculaArea3(12,20)}`)


// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));
imprimirArea(12, 20);

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"
/*function calculaAreaCirculo(radio) => Math.PI * radio**2;
console.log(`Resultado usando arrow function: ${calculaAreaCirculo(3)}`)*/

// Función flecha que calcula el área de un círculo
const calculaAreaCirculo = radio => Math.PI * (radio ** 2);
console.log(`Resultado área circulo: ${calculaAreaCirculo(3)} m²`);


  // Función flecha que calcula el área y actualiza el párrafo
  const AreaCirculo = (radio) => {
    const area = Math.PI * (radio ** 2);
    document.getElementById("area-circulo").textContent = `El área del círculo es ${area.toFixed(2)} m²`;
  };
  AreaCirculo(6);

// Otra opciones
  const circleArea = (radio) => Math.PI * radio ** 2;
  const imprimirAreaCirculo = (radio) => document.getElementById("area-circulo").innerText = circleArea(radio);
  imprimirAreaCirculo(5);






/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = (nombre = "persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`)

saludarPersona(); //Hola undifined, ya nos vamos.. 
saludarPersona("Mich"); // Hola Mich, ...


console.log(parseInt("5")); //5
console.log(parseInt("1000")); // 1000 (base 10 0,1,2,3,4,5,6,7,8,9)
console.log(parseInt("1000", 10)); //1000 (base 10)
console.log(parseInt("1000", 2)); // 8 (base 10)
console.log(parseInt("D2042D")); //NaN base 10
console.log(parseInt("D2042D", 16)); //13763629



/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */


const imprimirMensaje= ( fnCallBack ) => fnCallBack("Hola Ch54"); 
// esta fn va a trabjar sobre el entendi de que lo que le va allegar es una referencia de una f(), es un alias, la está invicando.

//imprimirMensaje( 18 ); 
// 18("Hola Ch54");

// fnCallBack is not a function
//imprimirMensaje("Patito"); // "patito" ("HolaCh54"); ERROR

imprimirMensaje( console.log ); //sin parentesis, si le pone "" lo estaria ejecuatando, no queremos que se ejecute. Console.log("Hola..")
//Le estamos pasando la pura referencia, no el valor, las fx son onjetos, REFERENCIA DIF VALOR. 
//console.log(Hola ch54)

//imprimirMensaje( console.log("Luis")); // Luis
//imprimirMensaje(undefined); // Luis

const enviarAParrafo = (mensaje) => {
  const saluda = "Hola buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;

};
imprimirMensaje(enviarAParrafo);

//Usando la función imprimirMensaje, enviar un callback para que imprima con alert
//imprimirMensaje( alert);

  
/*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/
/*const sumarDosNumeros = ( a, b) => a  + b;
const sumarEImprimir = ( a, b) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   // imprimir en consola
   // console.log(mensaje);
   document.getElementById("resultado-sumatoria").innerText = mensaje;
}
sumarEImprimir( 10, 14);*/

/*const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoh2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}
sumarEImprimir( 10, 14);
sumarEImprimir(50,50, "parrafo");
*/
/*const sumarEImprimir = (a, b, imprimir = console.log) =>{
  const resultado = sumarDosNumeros(a, b);
  const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;

}*/

const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
function imprimirEnDOMParagraph(mensaje) {
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}
const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultadoh2-sumatoria");
  refParagraph.innerText = mensaje;
}
sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2

//sumarEImprimir(10, 14, alert);


// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120

// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
    1            ----               1
    2          2-1 = 1              2
    3          3-1 = 2              6
    4          4-1 = 3              24
    5          5-1 = 4              120
*/
/*
    parámetro   recursividad(n-1)   returnFnc
     5              5-1 = 4            120
     4              4-1 = 3            24
     3              3-1 = 2            6       
     2              2-1 = 1            2         
     1               ----              1
  
*/

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoConRecursividad( numeroHola ){
    console.log(`Resolviendo el factorial de ${numeroHola}`);
    if( numeroHola <= 10  ) return numeroHola ;    
    const result = saludoConRecursividad( numeroHola - 1 ) * numeroHola ;
    console.log(`El numero  de saludo ${hola} es ${result}`);
    return result;
}
console.log(`Número de saludo final: ${ saludoConRecursividad(10)}`); 

//David 
const saludos = numeroDeSaludos => {
  if (numeroDeSaludos === 0) return;
  saludos(numeroDeSaludos - 1);
  console.log(`Saludo ${numeroDeSaludos}`);
}
saludos(10);

