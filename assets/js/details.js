import { data } from "./data.js";
/* Obtenenos los datos de los parametros de la URL */
const queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get("id")
/* Buscar dato por id */
let evento = data.events.find(info => info._id == id)

/* Renderizar profile */
const container = document.getElementById("rowCardsDetails");
let html = "";

html += `
    <div class="card w-50">
          <div class="row">
            <div class="col-xl-6 d-flex justify-content-center">
              <img src=${evento.image} class="card-img-top m-3 imgDetails" alt="Cinema" />
            </div>
            <div class="col-xl-6 d-flex justify-content-center align-items-center">
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">
                ${evento.name}
                </h5>
                <p class="card-text d-flex justify-content-center">
                ${evento.description}
                </p>
                <p class="card-text d-flex justify-content-center">
                ${evento.capacity}
                </p>
                <p class="card-text d-flex justify-content-center">
                ${evento.assistance}
                </p>
                <p class="card-text d-flex justify-content-center">
                ${evento.place}
                </p>
              </div>
            </div>
          </div>
        </div>
    `
container.innerHTML = html


