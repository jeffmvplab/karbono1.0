export function getColorForState(estado:'PENDIENTE FINALIZAR'| 'FINALIZADA'|'SOLICITADA'|'CALIDAD'|'PRODUCCION'|'CANCELADA') {
  switch (estado) {
    case 'PENDIENTE FINALIZAR':
      return '#C7C425'; // Puedes asignar el color que desees
    case 'FINALIZADA':
      return 'black';
    case 'SOLICITADA':
      return 'green';
    case 'CALIDAD':
      return 'blue'; // Puedes asignar el color que desees
    case 'PRODUCCION':
      return 'purple'; // Puedes asignar el color que desees
    case 'CANCELADA':
      return 'red';
    default:
      return 'black'; // Puedes asignar el color que desees para el caso por defecto
  }
}