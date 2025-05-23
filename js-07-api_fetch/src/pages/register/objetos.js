const myArray = [1,2,3,4];

    const unionArray = myArray.join(" - "); // 1-2-3-4
    myArray.push(5,6,7,8);

    const arrayData = myArray[3]; //4
    for(let index = 0; index < myArray.length; index++){
        const element = myArray[index];
    }


const myObj = { 
        key : "valor",
        name : "SerchNeo",
        firstName : "Trrs",
        email: "serchneo@matrix.com",
        password: "despertar&",
        birthday:"2025-02-25",
        isActive : true,
        hobbies: ["Despertar personas", "verdades incomodas", "comer pure"],
        favoritos: {
            bebidas: ["agua", "pozol", "agua de tamarindo"],
            comidas: ["pozole", "tacos de suadero"]
        },

        saludar: function myFunction(persona){
            return `Hola ${persona};`
        }

    };
    const ejecutarObjetos =()=>{

    //leer datos del objeto
    const nombrePersona = myObj.name; //SerchNeo
    const favoritos = myObj.favoritos.bebidas; // arreglo de bedidad 
    const segundaBebida = favoritos[1]; //"pozol"
    const terceraBebida =myObj.favoritos.bebidas[2]; // agua de tamarindo

//Acceder al atributo firstName
const FirstName = myObj.firstName; //Trrs
const primerNombre =myObj["firstName"];

const mensaje = myObj.saludar("Abril");
console.log(mensaje);




//Otra cosa
const primeraComida = myObj?.favoritos.alimentos; //cannot read propieties of undefined. Se detiene el programa


// Mostrar todos los datos en consola
    /*console.log("Nombre:", nombrePersona);
    console.log("Bebidas favoritas:", favoritos);
    console.log("Segunda bebida:", segundaBebida);
    console.log("Tercera bebida:", terceraBebida);
    console.log("First name:", FirstName);
    console.log("Primer nombre (acceso con corchetes):", primerNombre);
    console.log("Mensaje de saludo:", mensaje);*/


    //Iterar un 
    //for in itera sobre los atributos de un objeto
    for(let clave in myObj){
        console.log(clave, myObj[clave]); //myObj.fristName
    }


    };

export {ejecutarObjetos};


    
