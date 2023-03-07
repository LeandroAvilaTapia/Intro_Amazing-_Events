import { data } from "./data.js";

// console.log ("cosas")
// let numeros = [1,2,3,4,5,6,4,5,7]
// let numero
// let personas = {
//     nombre: 'Eduardo',
//     apellido: 'Mendoza',
//     edad: 33,
// }
let probar = data.events;
// let fecha = data.currentDate;

// console.log (probar) /// imprime el array completo
// console.log (fecha)

// for (numero in probar) {
//     console.log(probar[numero]);   /// imprime uno a uno el contenido del array
// }


function filtroPersonas(fechaActual, arrayEventos) {
  let eventsFuture = [];
  for (let eventos of arrayEventos) {
    if (eventos.date >= fechaActual) {
      eventsFuture.push(eventos);
      //console.log(eventos.date)
    }
  }
  return eventsFuture;
}
console.log(filtroPersonas(data.currentDate, data.events));