import { IUser } from "@/domain/models";
import { IUserEquipo } from "@/domain/models/equipo_user.model";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { Dispatch, SetStateAction, createContext } from "react";


interface ContextProps {

    loadingApi: boolean, setLoadingApi: Dispatch<SetStateAction<boolean>>,
    errorApi: string, setErrorApi: Dispatch<SetStateAction<string>>,
    user: IUser | undefined, setUser: Dispatch<SetStateAction<IUser | undefined>>,
    userEquipo: IUserEquipo[] | undefined, setUserEquipo: Dispatch<SetStateAction<IUserEquipo[] | undefined>>,
    getUserByRol: (rol: string) => Promise<void>,

    userInv: IUserEquipo | undefined, setUserInv: Dispatch<SetStateAction<IUserEquipo | undefined>>,
    invitarUsuarios: (roles: string[], central_de_mezclas: string, email: string) => Promise<void>,
    aceptarInvitacion: (token: string) => Promise<void>,
    registerByInvitation: () => Promise<void>
}

export const PerfilContext = createContext({} as ContextProps)
