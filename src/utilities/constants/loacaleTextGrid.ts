import { GridLocaleText } from "@mui/x-data-grid";

export const localeTextDataGrid: Partial<GridLocaleText> | undefined = {
     footerRowSelected: (count: number) => `${count.toLocaleString()} fila${count === 1 ? '' : 's'} seleccionada${count === 1 ? '' : 's'}`,
    noRowsLabel: 'No hay filas',
    MuiTablePagination:{
      'labelRowsPerPage':'Filas por página:'
    }
    // pageRowsLabel: 'Filas por página:',
    // pageLabel: 'Página',
    // paginationToolbarLabel: 'Herramientas de paginación',
  };