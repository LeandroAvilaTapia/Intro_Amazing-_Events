import { data } from "./data.js";
import { filtroIndex } from "./main.js";
let rowsCards = document.getElementById("rowCardsIndex");
let eventosTotales = filtroIndex(data.events);
let stringHtmlss = "";
for (let eventos of eventosTotales) {
  stringHtmlss += `
    
        <div class="card">
          <img src="${eventos.image}" class="card-img-top imgCard" alt="cinema" />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">${eventos.name}</h5>
            <p class="card-text">${eventos.description}</p>            
            <div class="row d-flex justify-content-center align-items-end gap-2">            
              <div class="col-12 p-0 d-flex justify-content-center">                
                <p class="card-text">price: ${eventos.price}</p>
              </div>
              <div class="col-12 p-0 d-flex justify-content-center boton">
                <a href="./Details.html" class="btn d-flex">Ver más</a>
              </div>
            </div>
          </div>
        </div> 
          `;
} 
rowsCards.innerHTML = stringHtmlss;



