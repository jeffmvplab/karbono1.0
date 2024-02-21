import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { createContext } from "react";


interface ContextProps {

    loadingGet: boolean,
    getOK: boolean,
    messageAPI: string,
    getAll: (limit?: number) => Promise<any>,
    reportes: IPrescriptions[],
    goEdit: (orden: number) => void,
    goReporte: (orden: number) => void,
    goAddNew: (route: string) => void,

    openModalSearch: boolean,
    handleOpenModalSearch: () => void,
    handleCloseModalSearch: () => void,

    search: string,
    errorSearch: boolean,
    messageErrorSearch: string,
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchName: string,
    errorSearchName: boolean,
    messageErrorSearchName: string,
    handleSearchName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchId: string,
    errorSearchId: boolean,
    messageErrorSearchId: string,
    handleSearchId: (event: React.ChangeEvent<HTMLInputElement>) => void,

    
    selectedFilter: string,
    handleChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void,

    loadingApi:boolean,
    apiOK:boolean,
    handleFilterSearch:() => Promise<void>,
    prescSearch:IPrescriptions|undefined,

    getPrescriptionsByName: (name: string) => Promise<void>
    getPrescriptionsById: (id: string) => Promise<void>
}

export const AuditoriaContext = createContext({} as ContextProps)
