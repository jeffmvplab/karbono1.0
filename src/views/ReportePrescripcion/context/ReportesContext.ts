import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { createContext, Dispatch, SetStateAction } from "react";


interface ContextProps {
    getPrescriptionsByNumber: () => void,
    loadingSave: boolean,
    saveOK: boolean,
    messageAPI: string,

    openModalDescargar:boolean,
    handleOpenModalDescargar: () => void,
    handleCloseModalDescargar: () => void,

    openModalOrdenar:boolean,
    handleOpenModalOrdenar: () => void,
    handleCloseModalOrdenar: () => void,

    reporte:IPrescriptions|undefined,
}

export const ReportesContext = createContext({} as ContextProps)
