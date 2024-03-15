
export interface ITableUser {

  _id: string,
  email: string
  nombre_apellidos: string
}

export const newIUserTable = {

  _id: '',
  email: '',
  nombre_apellidos: ''
}

export const getNameByObject = (user: any) => {
  if (user === null) return '';
  return `${user.nombre_apellido}`;
};