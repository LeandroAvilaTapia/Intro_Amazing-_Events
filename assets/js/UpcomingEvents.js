import { filtroUpcoming } from "./main.js";
import { data } from "./data.js";
let rowsCards = document.getElementById("rowCards");
let stringHtml = "";
let eventosFiltrados = filtroUpcoming(data.currentDate, data.events);

for (let eventos of eventosFiltrados) {
  stringHtml += `
    
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
};

rowsCards.innerHTML = stringHtml;