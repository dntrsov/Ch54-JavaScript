function cambiarNombre() {
      const nombre = prompt("¿Cuál es tu nombre?");
      if (!nombre) {
        alert ("El nombre es requerido. Inténtalo de nuevo, por favor");
        return;
      }
        document.getElementById("hola-nombre").textContent = `Hola ${nombre}`;
      }
