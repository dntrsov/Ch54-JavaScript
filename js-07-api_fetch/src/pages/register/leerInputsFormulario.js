


const leerInputsFormulario = ( formulario )=>{
    const newUser = {
        name : formulario.elements["name"].value,
        apellido : formulario.elements["family-name"].value,
        email : formulario.elements["email"].value,
        password : formulario.elements["new-password"].value,
        birthDate : formulario.elements["bday"].value,
        /*
         leer el resto de valores
        */
        checkbox: formulario.elements["terminos-condiciones"].checked
    };
    console.table(newUser);
   
    return newUser;
};

export { leerInputsFormulario };