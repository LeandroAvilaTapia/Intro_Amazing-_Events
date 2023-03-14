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
  