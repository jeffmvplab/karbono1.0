
export function convertirFecha(fecha: string | Date | undefined): string {
    if (!fecha) {
      return ""; // Devuelve una cadena vacía si la fecha es undefined
    }
  
    if (typeof fecha === "string") {
      fecha = new Date(fecha); // Convierte la cadena en un objeto Date
    }
  
    if (fecha instanceof Date && !isNaN(fecha.getTime())) {
      const año = fecha.getFullYear().toString().padStart(4, "0");
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const dia = fecha.getDate().toString().padStart(2, "0");
      // return `${dia}/${mes}/${año}`;
      return `${dia}/${mes}/${año}`;

    } else {
      return "Fecha inválida"; // Devuelve un mensaje de error si la fecha no es válida
    }
  }


  export function convertirFechaLote(fecha: string | Date | undefined): string {
    if (!fecha) {
      return ""; // Devuelve una cadena vacía si la fecha es undefined
    }
  
    if (typeof fecha === "string") {
      fecha = new Date(fecha); // Convierte la cadena en un objeto Date
    }
  
    if (fecha instanceof Date && !isNaN(fecha.getTime())) {
      const año = fecha.getFullYear().toString().slice(2); // Obtener solo los últimos dos dígitos del año
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const dia = fecha.getDate().toString().padStart(2, "0");
      // return `${dia}/${mes}/${año}`;
      return `${dia}${mes}${año}`;

    } else {
      return "Fecha inválida"; // Devuelve un mensaje de error si la fecha no es válida
    }
  }