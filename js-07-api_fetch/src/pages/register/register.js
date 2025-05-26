
import { postUser } from "../../js/API/postUser/postUser.js";
import { isUserValid } from "../../js/validation/isUserValid.js";
import { insertMainHeader as menu } from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { ejecutarObjetos } from "./objetos.js";

ejecutarObjetos();

menu(document.getElementById("header"));

const registerForm = document.getElementById("contactForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita el envío del formulario y que se limpien los inputs
    console.log("Manejo del Formulario");

    const newUser = leerInputsFormulario(registerForm);
    console.log(newUser);

    const validatedUser = isUserValid(newUser);

    if (validatedUser.isValid) {
        // Aquí podrías enviar los datos usando fetch o 
        try{
            const response = await postUser("https://reqres.in/", newUser);
            alert("Formulario enviado corectamente" + response.createdAt);
    }catch (error){
        alert("Error al enviar formulario" + error.message);
    }
        
        // Ejemplo de limpieza o mensaje
        // registerForm.reset();
        // alert("Formulario enviado correctamente");
    } else {
        alert(validatedUser.errors.join("\n"));
    }
});


/* 
import { isUserValid } from "../../js/validation/isUserValid.js";
import { insertMainHeader as menu } from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { ejecutarObjetos } from "./objetos.js";
ejecutarObjetos();

menu(document.getElementById("header"));


const registerForm = document.getElementById("contactForm");
//para que se escuche al enviar ( "evento", ()=>{})
registerForm.addEventListener( "submit", (e)=>{ // e evneto
    e.preventDefault(); // ebita que se envie el formulario. No deja en blanco, no se borra los inputs
    console.log("Manejo del Formulario");
   // console.log(e);
    const newUser = leerInputsFormulario( registerForm );
     console.log( newUser);
});

//if(isUserValid(newUser)){
const validatedUser = isUserValid(newUser);
if(validatedUser.isValid){

}else{
    alert(validatedUser.errors.join("\n"))
};

// Obtener los dtos del formulario.
    // Validar los datos
    // Si los datos son válidos enviar el formulario
        // - Usando la api fetch al servidor, con el método POST enviar el formulario
           // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
           // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario
    
        // Obtener los dtos del formulario.
*/


/* const postUser = async ( user, url ) => {
    // Para el método POST, PUT y DELETE se debe configurar
    // el objeto de configuración del meétodo fetch.
    const options = {
        method: "POST", // Método HTTP: POST, PUT, DELETE, GET
        headers: {
            "Content-Type": "application/json" // Tipo de contenido
        },
        body: JSON.stringify(user) // Cuerpo de la petición
    }
    const response = await fetch( url, options);
    console.log( "Respuesta del servidor:", response );
    if ( !response.ok || response.status !== 201 ) {
        // Si la respuesta no es correcta, lanzar un error
        throw new Error(`Error al enviar el usuario: ${response.statusText}`);
    }
    // Solo es necesario si el servidor devuelve un cuerpo en la respuesta
    // en formato JSON.
    const data = await response.json(); 
    return data;
}
export { postUser };
try {
            const response = await postUser("https://reqres.in/api/users", newUser ); 
            alert("Formulario enviado correctamente " + response.createdAt);           
        } catch (error) {
            alert("Error al enviar el formulario: " + error.message);
        }
import { postUser } from "../../js/api/postUser/postUser.js";
*/