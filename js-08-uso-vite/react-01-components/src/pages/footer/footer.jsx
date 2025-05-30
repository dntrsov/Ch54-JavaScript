
/*const desestructuracion() {
  let a = 10;
  let b = 20;

  // Intercambio usando desestructuración
  [a, b] = [b, a];

  const gryfindor = ["Harry", "Ron", "Neville", "Hermione", "Ginny"];

  /*let protagonista;
  let amigo;
  let amiga;*/
//Desestrucuturacion [arreglos]
  //const [protagonista, amigo, , amiga] = gryfindor;

  /*protagonista = gryfindor[0];
  amigo = gryfindor [1];
  amiga = gryfindor [3];*/


  //Desestructuracion en objetos 
  /*const hadSelesctor = {
  nombre: "Jen",
  color: "canela pasión",
  edad: 26,
  origen: "howarts",
  isMagic: true,
  casas: {
    slythery: "Los chidos que aceptan su naturaleza 🐍",
    hufflepuff:"Luna y sepa la bola 🦡",
    revenclaw: "El cuervo y listos y curiosos 🌳",
    gryfindor: "Harry y los otros 🦁"
  }

  }

  //{}={};
  const {edad, nombre, origen: location} = hadSelesctor;
  /* const nombre = hadSlector.nombre;
  const edad = had selesctor; 
  */ // : para renombrar origin: ahora es location. RENOMBRAR MI ATRIBUTO

  //Obtener el valr de Slytherin
  
  /*const{casas} =hadSelesctor; //{valores del objeto, casas}
  const {slythery:myHouse} = casas;*/

  /*const { casas: { slythery: myHouse } } = hadSelesctor;

  console.log(myHouse);

  console.log(nombre, edad, location); // Jen, 26




  console.log(a, b); // 20 10
};

const Footer = ({ cohorte }) => {
  return (
    <footer>
      <p>Ch{cohorte} - 2025</p>
      <em>Mi padre se enterará de esto</em>
    </footer>
  );
};

export { Footer };
export { desestructuracion };*/

const desestructuracion = () => {
  let a = 10;
  let b = 20;

  [a, b] = [b, a];

  const gryfindor = ["Harry", "Ron", "Neville", "Hermione", "Ginny"];
  const [protagonista, amigo, , amiga] = gryfindor;

  const hadSelesctor = {
    nombre: "Jen",
    color: "canela pasión",
    edad: 26,
    origen: "howarts",
    isMagic: true,
    casas: {
      slythery: "Los chidos que aceptan su naturaleza 🐍",
      hufflepuff: "Luna y sepa la bola 🦡",
      revenclaw: "El cuervo y listos y curiosos 🌳",
      gryfindor: "Harry y los otros 🦁"
    }
  };

  const { edad, nombre, origen: location } = hadSelesctor;
  const { casas: { slythery: myHouse } } = hadSelesctor;

  console.log(myHouse); // 🐍
  console.log(nombre, edad, location); // Jen 26 howarts
  console.log(a, b); // 20 10
};

const Footer = ({ cohorte }) => {
  return (
    <footer>
      <p>Ch{cohorte} - 2025</p>
      <em>Mi padre se enterará de esto</em>
    </footer>
  );
};

export { Footer };
export { desestructuracion };

