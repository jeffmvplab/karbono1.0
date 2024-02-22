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
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchName: string,
    handleSearchName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchNumber: string,
    handleSearchNumber: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchFecha: string,
    handleSearchFecha: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchId: string,
    handleSearchId: (event: React.ChangeEvent<HTMLInputElement>) => void,


    selectedFilter: string,
    handleChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void,

    loadingApi: boolean,
    apiOK: boolean,
    handleFilterSearch: () => Promise<void>,
    prescSearch: IPrescriptions | undefined,

    getPrescriptionsByName: (name: string) => Promise<void>
    getPrescriptionsById: (id: string) => Promise<void>
    getPrescriptionsByNumber: (number: string) => Promise<void>
}

export const PrescripcionContext = createContext({} as ContextProps)
