import { IUser } from "@/domain/models";
import { IUserEquipo } from "@/domain/models/equipo_user.model";
import { Dispatch, SetStateAction, createContext } from "react";


interface ContextProps {

    authOK: boolean;

    openMainDrawer: boolean, setOpenMainDrawer: React.Dispatch<React.SetStateAction<boolean>>,

    isOnline: boolean,
    handleOnline: () => void,
    handleOffline: () => void,

    login: () => void;
    register: (rol: string) => void;
    registerByInvitation: () => Promise<void>
    errorAuth: string,

    logout: () => void;
    isAuth: boolean;
    authStatus: () => any;

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

    nameYApellidos: string, setNameYApellidos: React.Dispatch<React.SetStateAction<string>>,
    errorNameYApellidos: boolean,
    messageErrorNameYApellidos: string,
    handleNameYApellidos: (event: React.ChangeEvent<HTMLInputElement>) => void,

    registroMedico: string,
    errorRegistroMedico: boolean,
    messageErrorRegistroMedico: string,
    handleRegistroMedico: (event: React.ChangeEvent<HTMLInputElement>) => void,

    captcha: string, setCaptcha: React.Dispatch<React.SetStateAction<string>>,

    entidadDeSalud: string,
    errorEntidadDeSalud: boolean,
    messageErrorEntidadDeSalud: string,
    handleEntidadDeSalud: (event: React.ChangeEvent<HTMLInputElement>) => void,

    centralDeMezclas: string,
    errorCentralDeMezclas: boolean,
    messageErrorCentralDeMezclas: string,
    handleCentralDeMezclas: (event: React.ChangeEvent<HTMLInputElement>) => void,

    rol: string, setRol: React.Dispatch<React.SetStateAction<string>>
    errorRol: boolean,
    messageErrorRol: string,
    handleRol: (event: React.ChangeEvent<HTMLInputElement>) => void,

    phone: string,
    errorPhone: boolean,
    messageErrorPhone: string,
    handlePhone: (event: React.ChangeEvent<HTMLInputElement>) => void,

    email: string, setEmail: React.Dispatch<React.SetStateAction<string>>
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

    codigoVerificacion: string,
    errorCodigoVerificacion: boolean,
    messageErrorCodigoVerificacion: string,
    handleCodigoVerificacion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    recuperarPassword: () => Promise<void>,
    verificarCodigoRecoveryPassword: () => Promise<void>,
    openModalRecoveryPass: boolean,
    handleOpenModalRecoveryPass: () => void,
    handleCloseModalRecoveryPass: () => void,

    openModalVerifyPass: boolean,
    handleOpenModalVerifyPass: () => void,
    handleCloseModalVerifyPass: () => void,

    userInvitado: string, setuserInvitado: React.Dispatch<React.SetStateAction<string>>,
    erroruserInvitado: boolean, setErroruserInvitado: React.Dispatch<React.SetStateAction<boolean>>,
    messageErroruserInvitado: string, setMessageErroruserInvitado: React.Dispatch<React.SetStateAction<string>>
    aceptarInvitacion: (token: string) => Promise<void>;

    loadingApi: boolean, setLoadingApi: Dispatch<SetStateAction<boolean>>,
    errorApi: string, setErrorApi: Dispatch<SetStateAction<string>>,
    user: IUserEquipo | undefined, setUser: Dispatch<SetStateAction<IUserEquipo | undefined>>,
    userEquipo: IUserEquipo[] | undefined, setUserEquipo: Dispatch<SetStateAction<IUserEquipo[] | undefined>>,

    userInv: IUserEquipo | undefined, setUserInv: Dispatch<SetStateAction<IUserEquipo | undefined>>,
    invitarUsuarios: () => Promise<void>,

    getMeEquipo: () => Promise<void>,
    updateMeEquipo: (email: string, roles: string, group_admin: string) => Promise<void>,
    getMe: () => Promise<void>,
    updateMe: () => Promise<void>,
    getMeRol: () => string[],

    modalInvOpen: boolean,
    handleModalInvClose: () => void,
    handleModalInvOpen: () => void,
}

export const GlobalContext = createContext({} as ContextProps)
