import { createContext } from "react";


interface ContextProps {

    authOK: boolean;

    login: () => void;
    register:()=>void;
    logout: () => void;
    isAuth: boolean;

    loadingAuth: boolean,

    name: string,
    errorName: boolean,
    messageErrorName: string,
    handleName: (event: React.ChangeEvent<HTMLInputElement>) => void,
    
    phone: string,
    errorPhone: boolean,
    messageErrorPhone: string,
    handlePhone: (event: React.ChangeEvent<HTMLInputElement>) => void,

    email: string,
    errorEmail: boolean,
    messageErrorEmail: string,
    handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void,

    password: string,
    errorPassword: boolean,
    messageErrorPassword: string,
    handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void,

    passwordConfirm: string,
    errorPasswordConfirm: boolean,
    messageErrorPasswordConfirm: string,
    handlePasswordConfirm: (event: React.ChangeEvent<HTMLInputElement>) => void,

}

export const GlobalContext = createContext({} as ContextProps)
