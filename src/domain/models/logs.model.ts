import { IComment } from "./observaciones.model"

export interface ILogs {

       _id: string,
       user: any,
       prescription: number,
       opcion: string,
       date: string,
       cambios: any[]

}
// export interface ILogs {

//        _id: string,
//        usuario: any,
//        prescription: number,
//        rol:any[],
//        comentario: string,
//        fecha: string,
//        cambios: any[]

// }
export interface Aportes {
       a_sodio: number,
       a_potacio: number,
       a_magnesio: number,
       a_fosforo: number,
       a_cloruro: number,
}


export const aportesNew: Aportes = {
       a_sodio: 0,
       a_potacio: 0,
       a_magnesio: 0,
       a_fosforo: 0,
       a_cloruro: 0,
}
