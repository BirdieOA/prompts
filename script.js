var datos = [
  { id: 1, nombre: "Ejemplo 1", valor: "abc" },
  { id: 2, nombre: "Ejemplo 2", valor: "xyz" }
  // ... otros objetos ...
];

var opcion = prompt(
  "Seleccione una opción:\n1. Escribir 'buscar'\n2. Agregar dato"
);

if (opcion === "buscar") {
  var busqueda = prompt("Ingrese el término a buscar:");

  // Realizar la búsqueda en el array de objetos
  var resultado = null;
  for (var i = 0; i < datos.length; i++) {
    if (datos[i].nombre.toLowerCase().includes(busqueda.toLowerCase())) {
      resultado = datos[i];
      break;
    }
  }

  // Mostrar el resultado
  if (resultado !== null) {
    console.log("Resultado encontrado:", resultado);
  } else {
    console.log("No se encontraron resultados para la búsqueda:", busqueda);
  }
} else if (opcion === "agregar dato") {
  var nuevoDato = prompt("Ingrese el nuevo dato:");
  var nuevoObjeto = {
    id: datos.length + 1,
    nombre: nuevoDato
    // Puedes agregar más campos según la estructura de tus datos
  };

  // Agregar el nuevo objeto al array 'datos'
  datos.push(nuevoObjeto);

  console.log("Dato agregado:", nuevoObjeto);
} else {
  console.log("Opción no válida");
}
