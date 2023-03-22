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


  //----------------------------------------STATS-----------------------------------------
  

export  function eventosPorCategorias(eventos,category){
    //esta funcion me devuelve un array de eventos de una determinada categoria
   let arrayCategorias = []    
    arrayCategorias = eventos.filter(evento=> evento.category == category)
    return arrayCategorias
  }
  
  export function gananciaTotal (arrayeventos){
    //esta funcion devuelve la ganancia de una categoria
    //usar metodo reduce
    let reduce = arrayeventos.reduce((acc,item)=>{
      return acc +=item.price*item.estimate;
    },0)
    return reduce 
  }


  export function porcentajeDeAsistencia (arrayeventos){
    //esta funcion devuelve el procentaje de una categoria
    let porcentajeDeAsistencia = totalDeAsistencia(arrayeventos)/totalDeCapacidad(arrayeventos)*100
    return porcentajeDeAsistencia.toFixed(2)
  }

  export function totalDeAsistencia (arrayeventos){
    //esta funcion devuelve la asistencia total de una categoria
    //usar metodo reduce
    return arrayeventos.reduce((accs,itemes)=>{
      return accs +=itemes.estimate;
    },0)
  }

  export function totalDeCapacidad (arrayeventos){
    //esta funcion devuelve la capacidad total de una categoria
    //usar metodo reduce
    return arrayeventos.reduce((accs,itemes)=>{
      return accs +=itemes.capacity;
    },0)
  }

  //----------Past---------------
  
  export function gananciaTotalAsistencia (arrayeventos){
    //esta funcion devuelve la ganancia de una categoria
    //usar metodo reduce
    let reduce = arrayeventos.reduce((acc,item)=>{
      return acc +=item.price*item.assistance;
    },0)
    return reduce 
  }

  
  export function porcentajeDeAsistenciaPast (arrayeventos){
    //esta funcion devuelve el procentaje de una categoria
    let porcentajeDeAsistencia = totalDeAsistenciaPast(arrayeventos)/totalDeCapacidadPast(arrayeventos)*100
    return porcentajeDeAsistencia.toFixed(2)
  }

  export function totalDeAsistenciaPast (arrayeventos){
    //esta funcion devuelve la asistencia total de una categoria
    //usar metodo reduce
    return arrayeventos.reduce((accs,itemes)=>{
      return accs +=itemes.assistance;
    },0)
  }

  export function totalDeCapacidadPast (arrayeventos){
    //esta funcion devuelve la capacidad total de una categoria
    //usar metodo reduce
    return arrayeventos.reduce((accs,itemes)=>{
      return accs +=itemes.capacity;
    },0)
  }

  function mayorPorcentajeAsistencia(){
//Evento con mayor porcentaje de asistencia: Sacan el porcentaje de todos los eventos pasados, ordenenlos de mayor a menor, impriman el primero.
  }