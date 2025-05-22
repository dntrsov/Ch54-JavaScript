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

const irPorElElote= ( horaDelDia ) =>{
   // const miPromesa = new Promise( fncCallBack  );

   const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
       if( horaDelDia === "día" || horaDelDia === "tarde" ){
          fncCallBackResolve("Toma tu elote que está dentro de una bolsa");
       } else {
          fncCallBackReject( {error: 404, descripcion: "Elote no fue encontrado"}  );
       }
       
   } );
   return miPromesa;
}


irPorElElote("noche")
    .then( ( response )=> console.log("2aPromesa", response) )
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  )


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
const meComoMiElote = (numeroDeVueltasBolsa) =>{
  const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
       if( numeroDeVueltasBolsa <= 2 ){
          fncCallBackResolve("ñomi ñomo, me como mi elote");
       } else {
          fncCallBackReject( {error: 404, descripcion:"upss se me cayó el elote, mas suerte pa la próxima"}  );
       }
       
   } );
   return miPromesa;
}

meComoMiElote(10);
  

