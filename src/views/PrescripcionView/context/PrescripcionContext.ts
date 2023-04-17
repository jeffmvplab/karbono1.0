import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { createContext } from "react";


interface ContextProps {
    
    loadingGet:boolean,
    getOK:boolean,
    messageAPI:string,
    getAll:(limit?:number) => Promise<any>,
    reportes:IPrescriptions[],
}

export const PrescripcionContext = createContext({} as ContextProps)
   