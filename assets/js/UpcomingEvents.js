import { filtroUpcoming } from "./main.js";
import { filtroCategoria } from "./main.js";
import { imprimirCheckbox } from "./main.js";
import { filtroSearch } from "./main.js";
import { data } from "./data.js";
let rowsCards = document.getElementById("rowCards");
let eventosFiltrados = filtroUpcoming(data.currentDate, data.events);
let inputSearch = document.getElementById("inputSearch");
let CheckboxIndex = document.getElementById("CheckboxIndex")

//--------------------------

imprimirCards(eventosFiltrados);
imprimirCheckbox(eventosFiltrados);

//--------------------------

inputSearch.addEventListener('input',function() { //se imprimen todas las cards si se borra la busqueda
  if (!inputSearch.value) {
    imprimirCards(eventosFiltrados);
  }
});

inputSearch.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    filtro()
  }
});

let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  filtro();
});


CheckboxIndex.addEventListener('change',filtro)


//--------------------------
function filtro() {
  let filtroDeSearch = filtroSearch(eventosFiltrados,inputSearch.value)
  imprimirCards(filtroCategoria(filtroDeSearch))
}

function imprimirCards(eventos){
if (eventos.length == 0){
  rowsCards.innerHTML = `
  <p class="text-light"> no hay eventos con esa descripción. </p>`
  return
};  
let stringHtmlss = "";
eventos.forEach(evento => {
  stringHtmlss += `
    
           <div class="card">
             <img src="${evento.image}" class="card-img-top imgCard" alt="${evento.name}" />
             <div class="card-body">
               <h5 class="card-title d-flex justify-content-center">${evento.name}</h5>
              <p class="card-text">${evento.description}</p>            
              <div class="row d-flex justify-content-center align-items-end gap-2">            
                 <div class="col-12 p-0 d-flex justify-content-center">                
                   <p class="card-text">price: ${evento.price}</p>
                 </div>
                 <div class="col-12 p-0 d-flex justify-content-center boton">
                   <a href="./Details.html?id=${evento._id}" class="btn d-flex">Ver más</a>
                </div>
             </div>
           </div>
           </div> 
            `  

})
rowsCards.innerHTML = stringHtmlss;
}
