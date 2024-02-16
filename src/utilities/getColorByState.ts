export function getColorForState(estado:'PENDIENTE FINALIZAR'| 'FINALIZADA'|'SOLICITADA'|'CALIDAD'|'PRODUCCION'|'CANCELADA') {
  switch (estado) {
    case 'PENDIENTE FINALIZAR':
      return 'blue'; // Puedes asignar el color que desees
    case 'FINALIZADA':
      return 'green';
    case 'SOLICITADA':
      return 'orange';
    case 'CALIDAD':
      return 'purple'; // Puedes asignar el color que desees
    case 'PRODUCCION':
      return 'yellow'; // Puedes asignar el color que desees
    case 'CANCELADA':
      return 'red';
    default:
      return 'black'; // Puedes asignar el color que desees para el caso por defecto
  }
}