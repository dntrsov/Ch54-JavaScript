/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300 */


 
/*function calcularEdad() {
      const edad= document.getElementById('birthdate').value;
      const edadFinal = parseInt(edad);

      if (!isNaN(edadFinal) && edad >= 0) {
        const edadEnMeses = edadFinal * 12;
        document.getElementById('result').innerText = `Tu edad son: ${edadEnMeses} meses`;
      } else {
        document.getElementById('result').innerText = 'Por favor, ingresa una edad válida.';
      }
    }*/


/*const calculate = document.getElementById('calculate');

calculate.addEventListener('click', function () {
  const edadTexto = document.getElementById('birthdate').value;
  const edadFinal = parseInt(edadTexto);

  if (!isNaN(edadFinal) && edadFinal >= 0) {
    const edadEnMeses = edad * 12;
    document.getElementById('result').innerText = `Tu edad son: ${edadEnMeses} meses`;
  }
});*/

/*document.getElementById('calculate').addEventListener('click', function () {
  const edad = document.getElementById('birthdate').value;
  const edadFinal = Number(edad);

  if (!isNaN(edadFinal) && edadFinal >= 0) {
    const edadEnMeses = edadFinal * 12;
    document.getElementById('result').innerText = `Tu edad en meses es: ${edadEnMeses}`;
  } 
});*/

function calcularEdad(){
    const edad = parseInt(Document.getElementById('birthdate').value;
    const meses = edad * 12;
    document.getElementsById('calculate').onclick = calcularEdad;
}

