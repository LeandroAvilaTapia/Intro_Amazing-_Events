//import { categoriaStats } from "./main.js";
import { filtroUpcoming } from "./main.js";
import { filtroPast } from "./main.js";
import { eventosPorCategorias } from "./main.js";
import { gananciaTotal } from "./main.js";
import { gananciaTotalAsistencia } from "./main.js";
import { porcentajeDeAsistencia } from "./main.js";
import { porcentajeDeAsistenciaPast } from "./main.js";
let Api = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(Api)
.then ((response)=>response.json())
.then(data =>{
  //-----------Upcoming---------------  
  let eventosFiltrados = filtroUpcoming(data.currentDate, data.events);  
  statsUpcoming(eventosFiltrados)
  let eventosFiltradosParaPast = filtroPast(data.currentDate, data.events);
  statsPast(eventosFiltradosParaPast)
  statsPrimeraTabla(eventosFiltradosParaPast)

  //-----------------------------------
})


function statsUpcoming(eventos){
  let setEventosStats = new Set (eventos.map(evento => evento.category))
  
  let trUpcomingCategory = document.getElementById("trUpcomingCategory");
  let creadorDeColumnas = ``    
  setEventosStats.forEach(evento=>{
    //------Ganancias de todos los eventos de una categoría----------------
    let eventosFiltradosPorCategoria = eventosPorCategorias(eventos,evento)      
    let ganancia = gananciaTotal(eventosFiltradosPorCategoria)
    //------Porcentaje de asistencia.----------------
    let eventosFiltradosPorCategorias = eventosPorCategorias(eventos,evento)      
    let asistencia = porcentajeDeAsistencia(eventosFiltradosPorCategorias)
    creadorDeColumnas +=`
    <tr>
          <td>${evento}</td>
          <td>$${ganancia}</td>
          <td>${asistencia}%</td>
        </tr>      
    `
  })
  trUpcomingCategory.innerHTML = creadorDeColumnas;
}

function statsPast (eventos){
  let setEventosStats = new Set (eventos.map(evento => evento.category))
  
  let trUpcomingCategory = document.getElementById("trPast");
  let creadorDeColumnas = ``    
  setEventosStats.forEach(evento=>{
    //------Ganancias de todos los eventos de una categoría----------------
    let eventosFiltradosPorCategoria = eventosPorCategorias(eventos,evento)      
    let ganancia = gananciaTotalAsistencia(eventosFiltradosPorCategoria)
    //------Porcentaje de asistencia.----------------
    let eventosFiltradosPorCategorias = eventosPorCategorias(eventos,evento)      
    let asistencia = porcentajeDeAsistenciaPast(eventosFiltradosPorCategorias)
    creadorDeColumnas +=`
    <tr>
          <td>${evento}</td>
          <td>$${ganancia}</td>
          <td>${asistencia}%</td>
        </tr>      
    `
  })
  trUpcomingCategory.innerHTML = creadorDeColumnas;
}

function statsPrimeraTabla (eventos){
  let setEventosStats = new Set (eventos.map(evento => evento.category))  
  let trUpcomingCategory = document.getElementById("trPrimeraTabla");
  let creadorDeColumnas = ``    
  setEventosStats.forEach(evento=>{
    //------Ganancias de todos los eventos de una categoría----------------
    let eventosFiltradosPorCategoria = eventosPorCategorias(eventos,evento)      
    let ganancia = gananciaTotalAsistencia(eventosFiltradosPorCategoria)
    //------Porcentaje de asistencia.----------------
    let eventosFiltradosPorCategorias = eventosPorCategorias(eventos,evento)      
    let asistencia = porcentajeDeAsistenciaPast(eventosFiltradosPorCategorias)
    creadorDeColumnas +=`
    <tr>
          <td>${evento}</td>
          <td>$${ganancia}</td>
          <td>${asistencia}%</td>
        </tr>      
    `
  })
  trUpcomingCategory.innerHTML = creadorDeColumnas;
}