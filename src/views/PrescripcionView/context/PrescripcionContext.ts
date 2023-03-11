import { createContext } from "react";


interface ContextProps {
    
    ruta:string;
    mostrarRuta:() => void
    cambiarRuta:()=> void
    ancho:boolean
    cambiarAncho:()=> void
    

}

export const PrescripcionContext = createContext({} as ContextProps)
   