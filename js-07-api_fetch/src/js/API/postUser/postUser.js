
const postUser = async(user, url) =>{
//Para ek método POST, PIT, DLEETE se debe configurar el objeto de configuración del método fetch
const options ={
method : "POST", //método HTTP: POST, PUT, DELETE, GET
header:{
    "Content-Type": "application/json" // tipo de contenido
},
body: JSON.stringify(user) // cuerpo de la peticion

}

const response = await fetch (url, options);
console.log("Respuesta del servidor:", response);
if(!response.ok || response.status !== 201){
    throw new Error (`Error al envir el usuario: ${response.statusText}`);
}
//Solo es necesario si el servidor devuleve un cuerpo en la respuesta en formato jSON
const data = await response.json();

}

export{postUser};