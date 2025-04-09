
export function convertirFecha(fecha: string | Date | undefined): string {
  if (!fecha) return "";

  if (typeof fecha === "string") fecha = new Date(fecha);

  if (fecha instanceof Date && !isNaN(fecha.getTime())) {
    const año = fecha.getUTCFullYear().toString().padStart(4, "0");
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
    const dia = fecha.getUTCDate().toString().padStart(2, "0");
    return `${dia}/${mes}/${año}`;
  } else {
    return "Fecha inválida";
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



export function formatOnlyTime(dateTime: string | Date | undefined): string {
  if (!dateTime) return "";

  const date = new Date(dateTime);

  if (isNaN(date.getTime())) return "Fecha inválida";

  let hour = date.getUTCHours(); // Usar hora UTC
  const minutes = date.getUTCMinutes(); // Usar minutos UTC

  const ampm = hour >= 12 ? "pm" : "am";
  hour %= 12;
  hour = hour || 12; // Si hour es 0, cambia a 12

  const formattedTime = `${hour}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  return formattedTime;
}

export function convertirFechaLote(fecha: string | Date | undefined): string {
  if (!fecha) return "";

  if (typeof fecha === "string") fecha = new Date(fecha);

  if (fecha instanceof Date && !isNaN(fecha.getTime())) {
    const año = fecha.getUTCFullYear().toString().slice(2);
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
    const dia = fecha.getUTCDate().toString().padStart(2, "0");
    return `${dia}${mes}${año}`;
  } else {
    return "Fecha inválida";
  }
}