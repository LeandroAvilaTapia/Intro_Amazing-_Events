import { categoriaStats } from "./main.js";
import { filtroUpcoming } from "./main.js";
import { eventosPorCategorias } from "./main.js";
import { gananciaTotal } from "./main.js";
import { porcentajeDeAsistencia } from "./main.js";
import { totalDeAsistencia } from "./main.js";
import { totalDeCapacidad } from "./main.js";
let Api = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(Api)
.then ((response)=>response.json())
.then(data =>{
  //-----------Upcoming---------------  
  let eventosFiltrados = filtroUpcoming(data.currentDate, data.events);  
  categoriaStats(eventosFiltrados)
  //-----------------------------------
})




