
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */
const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

// Imprimir en conslaa cada uno de los elementos de los cantantes, usando for of

for (let i = 0; i < cantantes.length; i++) {
    const elementos = cantantes[i];
    console.log(elementos);    
}

for ( const cantantesLista of cantantes ) {
    console.log( cantantesLista );
}

/* // Imprimir en consola cada uno de los cantantes, usandor for of
const imprimirCantantes = ( listaCantantes ) => {
    for (const cantante of listaCantantes) {
        console.log(cantante);
    }
}
imprimirCantantes(cantantes);*/

// Imprimir en consola cada uno de los cantantes, usandor for of

    const imprimirCantantes2 = ( listaCantantes ) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes) {
        // cantantesConcatenados = cantantesConcatenados + cantante + " - ";
        cantantesConcatenados +=  cantante + " - ";
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes2(cantantes));


/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 *    <li>Juan Gabriel</li>
 */
function mostrarCantantes(lista) {
      const ul = document.getElementById("lista-cantantes");

      for (const cantante of lista) {
        const li = document.createElement("li");
        li.textContent = cantante;
        ul.appendChild(li);
      }
    }

    mostrarCantantes(cantantes);

    // Ejemplo Lalo
    const unorderListCantantes = arregloCantantes => { 
    let concatenacion =" ";
        for (const cantante of arregloCantantes) {
            concatenacion += "<li>" + cantante + "</li>";
}
return concatenacion;
}
const imprimirDocumento = (arregloFinal) => document.getElementById("cantantes-lista").innerHTML = unorderListCantantes(arregloFinal);
imprimirDocumento(cantantes);







// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}





// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}

let myIteration; // undefined
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0...5    
}
console.log("Final", myIteration); // 6








// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/




/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En cas contrario, despedirse.
*/ 
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random();
    console.log("Tu número de la suerte es: " + numeroSuerte);
}

/* Uso MAth.random ();
Gnerar 5 números aleatorios. Los números deben estar entre 0.0 y 10.0 (sin incluir el 10.)*/

const generarNumerosAleatorios = (cantidad) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() * 10;
        console.log("Número aleatorio: ", numeroAleatorio); // 0.0...10.0
    }
    return numerosAleatorios;
};
generarNumerosAleatorios(5);



const generarNumerosAleatorios2 = (cantidad) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() * 10;
        console.log("Número aleatorio: ", numeroAleatorio); // 0.0...10.0
    }
    return numerosAleatorios;
};
generarNumerosAleatorios2(5);

