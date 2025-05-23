/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
*/
// El manejo de promesas es muy diferente PROMESAS

/*const irPorElElote = ( horaDelDia ) =>{

  //const miPromesa = new Promise( fnCallBack);
  const miPromesa = new Promise( (fnCallBackResolve, fnCallBackReject) => {
    if(horaDelDia === "día" || horaDelDia === "tarde"){
      fnCallBackResolve("Toma tu elote que está dentro de una bolsa");
    } else {
      fnCallBackReject( {error: 404, descripcion: "Elote no fue encontrado"} )
    }
    return miPromesa;
  });
}

irPorElElote("día");*/


/*const irPorElElote = (horaDelDia) => {
  //const miPromesa = new Promise( fncCallBack );
  const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
    console.log("voy por el elote en la " + horaDelDia); // esta tarea puede demorar mucho o poco
    if (horaDelDia === "día" || horaDelDia === "tarde") {
      fncCallBackResolve("Toma tu elote que está dentro de una bolsa");
    } else {
      fncCallBackReject({ error: 404, descripcion: "Elote no fue encontrado" });
    }
  });
  return miPromesa;*/


/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

/*const numDeVueltas = (number) => {

    const miPromesa = new Promise( (fncCallBackResolve, fncCallBackReject) =>{
        console.log(El numero de vueltas son ${number});
        
        if (number <= 2) {
            fncCallBackResolve("ñomi ñomi")
        } else {
            fncCallBackReject({error:404, descripcion: "ups, se me cayó tu elote"})
        }
    });
    return miPromesa;
};


//miFuncionPromesa().then( callback ).catch( callback ).finally( callback );

irPorElElote("tarde")
    .then( ( response )=> console.log("1eraPromesa",response) );

irPorElElote("noche")
    .then( ( response )=> console.log("2daPromesa",response) )
    .catch( ( error )=> console.log(Promesa rechazada, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa") );

// Ya tengo mi elote, pero falta abrir la bolsa

irPorElElote("tarde")
    .then( ( response )=> {
        console.log("1eraPromesa",response);
        const vueltas = 2;
        numDeVueltas(vueltas)
            .then( response => console.log(response))
            .catch( error => console.log(error));
    })
    .catch( ( error )=> console.log(Promesa rechazada, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa") ) */



/*
API: Application Programming Interface
Permite la comunicación entre dos aplicaciones de software
a travéz de un conjunto de reglas.

La API Fetch nos ayuda a acceder y manipular 
peticiones HTTP (DELETE, GET, POST, PUT).
 
Sintaxis:
fetch(resource, options)

Las promesa es un patrón asincrónico que se utiliza
para manejer operaciones asíncronas.

Las promesas permite realizar tareas asíncronas y
manejar los resultados (éxito o error) en un momento posterior.

Las promesas tiene 3 estados:

1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
2.- Resolved: La promesa se resuelve con un valor
3.- Rejected: La promesa se rechaza con un razón

*/
const vueltasAleatorias = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;


const irPorElElote = (horaDelDia) => {

  // const miPromesa = new Promise( fncCallBack  );
  const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
    console.log("Voy por el elote en la " + horaDelDia); // esta tarea pude demorar mucho o poco
    if (horaDelDia === "día" || horaDelDia === "tarde") {
      fncCallBackResolve({ mensaje: "Toma tu elote que está dentro de una bolsa", vueltas: vueltasAleatorias() });
    } else {
      fncCallBackReject({ error: 404, descripcion: "Elote no fue encontrado" });
    }
  });

  return miPromesa;
}


/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

const numDeVueltas = (number) => {

  const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
    console.log("el numero de vueltas es: " + number);
    if (number <= 2) {
      fncCallBackResolve("ñomi ñomi, me comi mi elote");
    } else {
      fncCallBackReject({ error: 404, descripcion: "upss se me cayo el elote" });
    }
  });
  return miPromesa;
}


/* 
 La función se llama ponerChilito()
 La función NO tiene parámetro de entrada.
 Realizar una promesa que retorne en el estado resolve: "Chilito del que pica".
 La función no debe tener Reject.
*/
const ponerChilito = () => {
  const miPromesa = new Promise((fncCallBackResolve) => {
    fncCallBackResolve("chilito del que pica");
  });
  return miPromesa;
};






// miFuncionPromesa().then( callback ).catch( callback ).finally( callback );
/*
irPorElElote("tarde")
    .then( ( response )=> console.log("1eraPromesa", response) );

irPorElElote("noche")
    .then( ( response )=> console.log("2aPromesa", response) )
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  );
*/
// Ya tengo mi elote, pero falta abri la bolsa
const tiempo = "tarde";
irPorElElote(tiempo)
  .then((response) => {
    console.log("Promesa", tiempo, response);
    numDeVueltas(response.vueltas)
      .then(response => console.log(tiempo, response))
      .catch(error => console.log(error));
  })
  .catch((error) => console.log(`Promesa rechazada`, error))
  .finally(() => console.log("Se ha terminado tu promesa"));




// ============== Uso de la api fetch ====================
/*const leerProductos = async ( url )=> {
 
      const response = await fetch(url); // Obtener los datos en formato JSON
      console.log(response);
      const datosApi =  await response.json(); // Convertir de JSON a objetos de JavaScript
      return datosApi;
 
 leerProductos("https://rickandmortyapi.com/api/character");
 }

const construirTarjetasRickandMorty = (personajes) =>{
  const tarjetas = personajes.map((personaje, index, array)=>{
     const contruirTarjetasDeRickandMorty = ( personajes ) => {
    const tarjetas = personajes.map( (personaje, index, array)=>(
     `<div class="col-12 col-md-4 col-lg-3">
        <div class="card">
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">${personaje.species}</a>
            </div>
        </div> 
      </div>
     `
    ) );
    return tarjetas;
 }
 const insertarTarjetasAlDom = (tarjetas, idDOM = "cards")=>{
    const refDom =  document.getElementById( idDOM );
    refDom.innerHTML = tarjetas.join("");
 }

  })
  
}

 const crearCardsDeRickAndMorty = async ()=>{
     const data = await leerProductos("https://rickandmortyapi.com/api/character");
     const personajes = data.results;
     console.log( personajes );

 }
 
 const crearCardsDeRickAndMorty = async ()=>{
     const data = await leerProductos("https://rickandmortyapi.com/api/character");
     const personajes = data.results;
     console.log( personajes );
     const tarjetas = contruirTarjetasDeRickandMorty( personajes);
     insertarTarjetasAlDom( tarjetas );
 }


      const insertarTarjetasAlDom = (tarjetas, idDOM = "cards")=>{
    const refDom =  document.getElementById( idDOM );
    refDom.innerHTML = tarjetas.join("");
 crearCardsDeRickAndMorty(); */


// Leer productos desde una URL
// Leer productos desde una URL
const leerProductos = async (url) => {
  try {
    const response = await fetch(url);
    const datosApi = await response.json();
    return datosApi;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

// Construir tarjetas HTML con los personajes
const construirTarjetasDeDigimon = (personajes) => {
  return personajes.map((personaje) => (
    `<div class="col-12 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img src="${personaje.img}" class="card-img-top" alt="${personaje.name}">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">Level: ${personaje.level}</p>
          <a href="#" class="btn btn-primary">${personaje.level}</a>
        </div>
      </div>
    </div>`
  ));
};

// Insertar tarjetas al DOM
const insertarTarjetasAlDom = (tarjetas, idDOM = "cards") => {
  const refDom = document.getElementById(idDOM);
  if (refDom) {
    refDom.innerHTML = tarjetas.join("");
  } else {
    console.error(`No se encontró el elemento con ID "${idDOM}"`);
  }
};

const crearCardsDeDigimon = async () => {
  const data = await leerProductos("/public/json/digimon.json"); //otra opcion solo pegat la url https://digimon-api.vercel.app/api/digimon
  if (data) {
    const primeros40 = data.slice(0, 40); // Solo los primeros 20
    const tarjetas = construirTarjetasDeDigimon(primeros40);
    insertarTarjetasAlDom(tarjetas);
  } else{
    console.log("Error al cargar datos de una o ambas páginas");
  }
};

//Ejecutar
crearCardsDeDigimon();


// Función principal
/*const crearCardsDeRickAndMorty = async () => {
  // Hacer las dos solicitudes de manera paralela
  const [data1, data2] = await Promise.all([
    leerProductos("https://rickandmortyapi.com/api/character?page=1"),
    leerProductos("https://rickandmortyapi.com/api/character?page=2")
  ]);

  // Verificar que ambas respuestas tengan datos
  if (data1 && data2 && data1.results && data2.results) {
    const personajes = [...data1.results, ...data2.results]; // Combinar personajes de ambas páginas
    const tarjetas = construirTarjetasDeRickAndMorty(personajes);
    insertarTarjetasAlDom(tarjetas);
  } else {
    console.error("Error al cargar datos de una o ambas páginas.");
  }
};

// Ejecutar
crearCardsDeRickAndMorty();*/


/*
const leerProductos = async (url) => {
  try {
    const response = await fetch(url);
    const datosApi = await response.json();
    return datosApi;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

const construirTarjetasDeRickAndMorty = (personajes) => {
  return personajes.map((personaje) => (
    `<div class="col-12 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">Status: ${personaje.status}</p>
          <a href="#" class="btn btn-primary">${personaje.species}</a>
        </div>
      </div>
    </div>`
  ));
};

const insertarTarjetasAlDom = (tarjetas, idDOM = "cards") => {
  const refDom = document.getElementById(idDOM);
  if (refDom) {
    refDom.innerHTML = tarjetas.join("");
  } else {
    console.error(`No se encontró el elemento con ID "${idDOM}"`);
  }
};

// NUEVO: Cargar múltiples páginas de la API
const crearCardsDeRickAndMorty = async () => {
  const urls = [
    "https://rickandmortyapi.com/api/character?page=1",
    "https://rickandmortyapi.com/api/character?page=2"
  ];

  try {
    // Esperar todas las respuestas en paralelo
    const respuestas = await Promise.all(urls.map(url => leerProductos(url)));

    // Combinar los resultados de todas las páginas
    const todosLosPersonajes = respuestas.flatMap(data => data?.results || []);

    // Construir e insertar las tarjetas
    const tarjetas = construirTarjetasDeRickAndMorty(todosLosPersonajes);
    insertarTarjetasAlDom(tarjetas);

  } catch (error) {
    console.error("Error al cargar personajes:", error);
  }
};

crearCardsDeRickAndMorty();

*/

