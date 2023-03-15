import { data } from "./data.js";
import { filtroIndex } from "./main.js";


let rowsCards = document.getElementById("rowCardsIndex");
let inputSearch = document.getElementById("inputSearch");
let CheckboxIndex = document.getElementById("CheckboxIndex")

//--------------------------

imprimirCards(data.events);
imprimirCheckbox(data.events);

//--------------------------

inputSearch.addEventListener('input',filtro)

CheckboxIndex.addEventListener('change',filtro)


//--------------------------
function filtro() {
  let filtroDeSearch = filtroSearch(data.events,inputSearch.value)
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
             <img src="${evento.image}" class="card-img-top imgCard" alt="cinema" />
             <div class="card-body">
               <h5 class="card-title d-flex justify-content-center">${evento.name}</h5>
              <p class="card-text">${evento.description}</p>            
              <div class="row d-flex justify-content-center align-items-end gap-2">            
                 <div class="col-12 p-0 d-flex justify-content-center">                
                   <p class="card-text">price: ${evento.price}</p>
                 </div>
                 <div class="col-12 p-0 d-flex justify-content-center boton">
                   <a href="./Details.html" class="btn d-flex">Ver más</a>
                </div>
             </div>
           </div>
           </div> 
            `  

})
rowsCards.innerHTML = stringHtmlss;
}

function filtroSearch(arrayDeEventos,texto) {
  return arrayDeEventos.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()))
}

function imprimirCheckbox(eventos){
  let setEventos = new Set (eventos.map(evento => evento.category))
  let creadorDeChecks=''
  setEventos.forEach(evento =>{
  creadorDeChecks += `
  <div class="form-check border border-dark rounded m-1">
            <input class="form-check-input" type="checkbox" value="${evento}" id="${evento}" />
            <label class="form-check-label px-1" for="${evento}">
              ${evento}
            </label>
          </div>
  `
  })
  CheckboxIndex.innerHTML = creadorDeChecks
}

function filtroCategoria(eventos){
  let arrayCheckboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))
  let checksActivados = arrayCheckboxes.filter(check => check.checked)
  if (checksActivados.length == 0){
    return eventos
  }
  let categorias = checksActivados.map(check => check.value)
  return eventos.filter(elemento =>categorias.includes(elemento.category))
}