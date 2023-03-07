import { createContext } from "react";


interface ContextProps {
    
    login:()=>void;
    
    loadingAuth:boolean,
    email:string,
    errorEmail:boolean,
    messageErrorEmail:string,
    handleEmail:(event: React.ChangeEvent<HTMLInputElement>)=>void,

    password:string,
    errorPassword:boolean,
    messageErrorPassword:string,
    handlePassword:(event: React.ChangeEvent<HTMLInputElement>)=>void,

}

export const GlobalContext = createContext({} as ContextProps)
   