import { createContext } from "react";


interface ContextProps {

    authOK: boolean;

    login: () => void;
    register: (recaptchaValue?:any) => void;
    errorAuth: string,

    logout: () => void;
    isAuth: boolean;
    authStatus: () => void;

    loadingAuth: boolean,

    tipoCliente: string,
    handleTipo: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => void,

    name: string,
    errorName: boolean,
    messageErrorName: string,
    handleName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    apellido: string,
    errorApellido: boolean,
    messageErrorApellido: string,
    handleApellido: (event: React.ChangeEvent<HTMLInputElement>) => void,

    nameYApellidos: string,
    errorNameYApellidos: boolean,
    messageErrorNameYApellidos: string,
    handleNameYApellidos: (event: React.ChangeEvent<HTMLInputElement>) => void,

    registroMedico: string,
    errorRegistroMedico: boolean,
    messageErrorRegistroMedico: string,
    handleRegistroMedico: (event: React.ChangeEvent<HTMLInputElement>) => void,

    captcha: string,setCaptcha: React.Dispatch<React.SetStateAction<string>>,
    
    entidadDeSalud: string,
    errorEntidadDeSalud: boolean,
    messageErrorEntidadDeSalud: string,
    handleEntidadDeSalud: (event: React.ChangeEvent<HTMLInputElement>) => void,

    centralDeMezclas: string,
    errorCentralDeMezclas: boolean,
    messageErrorCentralDeMezclas: string,
    handleCentralDeMezclas: (event: React.ChangeEvent<HTMLInputElement>) => void,

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

    politica_de_privacidad: boolean,
    handlePolitica: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void

}

export const GlobalContext = createContext({} as ContextProps)
