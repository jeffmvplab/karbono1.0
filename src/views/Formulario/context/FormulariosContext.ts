import { createContext, Dispatch, SetStateAction } from "react";


interface ContextProps {
    matches:boolean,
    stateAcordion1:boolean,
    setStateAcordion1:Dispatch<SetStateAction<boolean>>,
    handleAcordion1:()=>void,
    stateAcordion2:boolean,
    setStateAcordion2:Dispatch<SetStateAction<boolean>>,
    handleAcordion2:()=>void,
    stateAcordion3:boolean,
    setStateAcordion3:Dispatch<SetStateAction<boolean>>,
    handleAcordion3:()=>void,

}

export const FormulariosContext = createContext({} as ContextProps)
