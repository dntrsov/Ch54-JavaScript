
import { insertMainHeader as menu } from "../../modules/header/header.js";
menu(document.getElementById("header"));

const registerForm = document.getElementById("contactForm");
//para que se escuche al enviar ( "evento", ()=>{})
registerForm.addEventListener( "submit", (e)=>{ // e evneto
    e.preventDefault(); // ebita que se envie el formulario. No deja en blanco, no se borra los inputs
    console.log("Manejo del Fprmulario");
   // console.log(e);
});

//obtener los datos del formulario

//Validar los datos JS

// Si los datos son válidos enviar el formulario usando api fetch

//Si los datos no son váidos enviar un mensaje al usuario

