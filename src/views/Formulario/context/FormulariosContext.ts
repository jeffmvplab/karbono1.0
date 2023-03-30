import { createContext, Dispatch, SetStateAction } from "react";


interface ContextProps {
    matches: boolean,
    stateAcordion1: boolean,
    setStateAcordion1: Dispatch<SetStateAction<boolean>>,
    handleAcordion1: () => void,
    stateAcordion2: boolean,
    setStateAcordion2: Dispatch<SetStateAction<boolean>>,
    handleAcordion2: () => void,
    stateAcordion3: boolean,
    setStateAcordion3: Dispatch<SetStateAction<boolean>>,
    handleAcordion3: () => void,
    
    getMovilHeight: () =>"3450px" | "2000px" | "2780px" | "2275px" | "150px" | "1600px" | "820px" | "1330px" | undefined

    open1:boolean|undefined,
    handleMenu1:()=>void,
    open2:boolean|undefined,
    handleMenu2:()=>void,
    toggleDrawer:(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
  
}

export const FormulariosContext = createContext({} as ContextProps)
