//import { data } from "./data.js";
const queryString = location.search
let id = new URLSearchParams(queryString).get("id") 
let Api = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(Api)
.then ((response)=>response.json())
.then(data =>{
  let evento = data.events.find(evento => evento._id == id)
  imprimarCard (evento)
})

//let evento = data.events.find(evento => evento._id == id)

const contenedor = document.getElementById("rowCardsDetails");
function imprimarCard (evento){
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
}

