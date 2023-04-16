import { createContext } from "react";


interface ContextProps {
    
    loadingGet:boolean,
    getOK:boolean,
    messageAPI:string,
    getAll:() => Promise<void>,
    
}

export const PrescripcionContext = createContext({} as ContextProps)
   