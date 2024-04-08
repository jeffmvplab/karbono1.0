import { IComment } from "@/domain/models/observaciones.model";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { createContext, Dispatch, SetStateAction } from "react";


interface ContextProps {
    print: boolean, setPrint: React.Dispatch<React.SetStateAction<boolean>>,

    getPrescriptionsByNumber: () => void,
    loadingSave: boolean,
    saveOK: boolean,
    messageAPI: string,

    openModalDescargar: boolean,
    handleOpenModalDescargar: () => void,
    handleCloseModalDescargar: () => void,

    openModalOrdenar: boolean,
    handleOpenModalOrdenar: () => void,
    handleCloseModalOrdenar: () => void,

    openModalRechazar: boolean,
    handleOpenModalRechazar: () => void,
    handleCloseModalRechazar: () => void,

    openModalVerificar: boolean,
    handleOpenModalVerificar: () => void,
    handleCloseModalVerificar: () => void,

    openModalCancelVerificar: boolean,
    handleOpenModalCancelVerificar: () => void,
    handleCloseModalCancelVerificar: () => void,
    // goEdit:(route:string)=>void,
    reporte: IPrescriptions | undefined,

    saveComments: (comment: IComment) => Promise<void>,
}

export const ReportesContext = createContext({} as ContextProps)
