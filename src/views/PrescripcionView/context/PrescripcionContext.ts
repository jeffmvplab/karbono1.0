import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { createContext } from "react";


interface ContextProps {
    
    loadingGet:boolean,
    getOK:boolean,
    messageAPI:string,
    getAll:(limit?:number) => Promise<any>,
    reportes:IPrescriptions[],
    goEdit:(orden:number,route:string)=>void,
    goAddNew:(route:string)=>void,
}

export const PrescripcionContext = createContext({} as ContextProps)
   