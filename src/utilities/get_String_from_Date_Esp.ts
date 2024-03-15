
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

export function formatDateTime(dateTime: string | Date | undefined): string {
  if (!dateTime) {
    return ''; // Devuelve una cadena vacía si no se proporciona ninguna fecha
  }

  // Convierte el dateTime a un objeto Date
  const date = new Date(dateTime);

  // Obtiene el día, mes y año
  const day = date.getDate();
  const month = date.toLocaleString('es-ES', { month: 'long' }); // Obtiene el nombre del mes en español
  const year = date.getFullYear();

  // Obtiene la hora y los minutos
  let hour = date.getHours();
  const minutes = date.getMinutes();

  // Define si es AM o PM
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  hour = hour || 12; // Si hour es 0, cambia a 12 para el formato de 12 horas

  // Formatea la fecha y la hora en el formato deseado
  const formattedDateTime = `${day} ${month} ${year} ${hour}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

  return formattedDateTime; // Devuelve la fecha y la hora formateadas
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