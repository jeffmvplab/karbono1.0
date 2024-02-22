import { IComment } from "./observaciones.model"

export interface ILogs{
    
       _id:string,
       user:string,
       prescription:number,
       opcion:string,
       date:string,
       cambios: any[]
    
}


