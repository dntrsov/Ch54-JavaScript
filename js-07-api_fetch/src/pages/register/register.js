
import { isUserValid } from "../../js/validation/isUserValid.js";
import { insertMainHeader as menu } from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { ejecutarObjetos } from "./objetos.js";

ejecutarObjetos();

menu(document.getElementById("header"));

const registerForm = document.getElementById("contactForm");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío del formulario y que se limpien los inputs
    console.log("Manejo del Formulario");

    const newUser = leerInputsFormulario(registerForm);
    console.log(newUser);

    const validatedUser = isUserValid(newUser);

    if (validatedUser.isValid) {
        // Aquí podrías enviar los datos usando fetch o similar
        console.log("Usuario válido, puedes continuar con el envío.");
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