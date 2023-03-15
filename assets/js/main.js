export function filtroIndex(arrayEventos) {
    let eventsIndex = [];
    for (let eventos of arrayEventos) {
      eventsIndex.push(eventos);    
    }
    return eventsIndex;
  };
  export function filtroUpcoming(fechaActual, arrayEventos) {
    let eventsFuture = [];
    for (let eventos of arrayEventos) {
      if (eventos.date >= fechaActual) {
        eventsFuture.push(eventos);
      }
    }
    return eventsFuture;
  };
  
  export function filtroPast(fechaActual, arrayEventos) {
    let eventsPast = [];
    for (let eventos of arrayEventos) {
      if (eventos.date < fechaActual) {
        eventsPast.push(eventos);
      }
    }
    return eventsPast;
  };
  
  export function filtroCategoria(eventos){
    let arrayCheckboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))
    let checksActivados = arrayCheckboxes.filter(check => check.checked)
    if (checksActivados.length == 0){
      return eventos
    }
    let categorias = checksActivados.map(check => check.value)
    return eventos.filter(elemento =>categorias.includes(elemento.category))
  }

  export function imprimirCheckbox(eventos){
    let setEventos = new Set (eventos.map(evento => evento.category))
    let creadorDeChecks=''
    setEventos.forEach(evento =>{
    creadorDeChecks += `
    <div class="form-check m-1">
              <input class="form-check-input border border-dark rounded" type="checkbox" value="${evento}" id="${evento}" />
              <label class="form-check-label border border-dark rounded px-1" for="${evento}">
                ${evento}
              </label>
            </div>
    `
    })
    CheckboxIndex.innerHTML = creadorDeChecks
  }
  
  export function filtroSearch(arrayDeEventos,texto) {
    return arrayDeEventos.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()))
  }