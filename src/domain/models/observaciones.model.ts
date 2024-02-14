
export interface IComment {
  prescriptionId: {},
  comentario?: string,
  estado?: string,
  usuario?: string;
  rol?: string[];
  fecha?: Date|string;
}

export const deleteComment: IComment = {

  prescriptionId: {},
  comentario: '',
  estado: '',
  usuario: '',
  rol: [],
  fecha: new Date,
}

