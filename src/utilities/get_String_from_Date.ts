export function formatearFechaEsp(fechaISO: string): string {
  // const fecha = new Date(fechaISO);
  const fecha = new Date(fechaISO);
  // Array con los nombres de los meses
  const meses: string[] = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  // Obtenemos el día, mes y año de la fecha
  const dia: number = fecha.getDate();
  const mes: string = meses[fecha.getMonth()];
  const año: number = fecha.getFullYear();

  // Obtenemos la hora y los minutos
  let hora: number = fecha.getHours();
  const minutos: number = fecha.getMinutes();

  // Convertimos la hora de formato de 24 horas a 12 horas
  const ampm: string = hora >= 12 ? 'pm' : 'am';
  hora = hora % 12;
  hora = hora ? hora : 12; // Si hora es 0, la cambiamos a 12

  // Formateamos la hora para asegurarnos de que tenga dos dígitos
  const horaFormateada: string = hora < 10 ? '0' + hora : hora.toString();

  // Formateamos los minutos para asegurarnos de que tenga dos dígitos
  const minutosFormateados: string = minutos < 10 ? '0' + minutos : minutos.toString();

  // Devolvemos la fecha formateada
  return `${dia} ${mes} ${año} ${horaFormateada}:${minutosFormateados} ${ampm}`;
}