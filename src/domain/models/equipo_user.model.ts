
export interface IUserEquipo {

    id?: string,
    email?: string,
    nombre_apellidos?: string,
    telefono?: string,
    password?: string,
    registro_medico?: string,
    primer_nombre?: string,
    primer_apellido?: string,
    entidad_de_salud?: [string],
    he_leido?: boolean,
    central_mezcla?: string,
    roles?: string
    group_admin?:string

    // phoneNumber: string,
    // cedula: string,
    // avatar?:string
}


export const userInvNull: IUserEquipo = {

    id: '',
    email: '',
    nombre_apellidos: '',
    telefono: '',
    password: '',
    registro_medico: '',
    primer_nombre: '',
    primer_apellido: '',
    entidad_de_salud: [''],
    he_leido: false,
    central_mezcla: '',
    roles: '',
    group_admin:''

    // phoneNumber: string,
    // cedula: string,
    // avatar?:string
}



