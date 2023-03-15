import { data } from "./data.js";
/* Obtenenos los datos de los parametros de la URL */
const queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get("id")
/* Buscar dato por id */
let evento = data.events.find(info => info._id == id)

/* Renderizar profile */
const contenedor = document.getElementById("rowCardsDetails");
let html = "";

html += `
<div class="card mb-3 imgDetails">
  <img src="${evento.image}" class="card-img-top " alt="${evento.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.description}</p>
    <p class="card-text">${evento.capacity}</p>
    <p class="card-text">${evento.place}</p>
    <p class="card-text">${evento.assistance}</p>
  </div>
</div>
    `
contenedor.innerHTML = html


