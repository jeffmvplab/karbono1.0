import { ILogs } from "@/domain/models/logs.model";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { Dayjs } from "dayjs";

import { ChangeEvent, createContext } from "react";


interface ContextProps {

    loadingGet: boolean,
    getOK: boolean,
    messageAPI: string,
    getAll: (limit?: number) => Promise<any>,
    reportes: IPrescriptions[],
    goEdit: (orden: number) => void,
    goPrint: (orden: number) => void,
    goReporte: (orden: number) => void,
    goAddNew: (route: string) => void,

    openModalSearch: boolean,
    handleOpenModalSearch: () => void,
    handleCloseModalSearch: () => void,

    openActionsDrawer: boolean, setOpenActionsDrawer: React.Dispatch<React.SetStateAction<boolean>>,
    goActions:(orden: number) => void,

    search: string,
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchName: string,
    handleSearchName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchNumber: string,
    handleSearchNumber: (event: React.ChangeEvent<HTMLInputElement>) => void,

    searchFecha: any,
    setSearchFecha: React.Dispatch<React.SetStateAction<string | Dayjs | null|undefined>>,

    searchId: string,
    handleSearchId: (event: React.ChangeEvent<HTMLInputElement>) => void,

    handleFiltrosBorrar: () => void,

    selectedFilter: string,
    handleChangeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void,

    loadingApi: boolean,
    apiOK: boolean,
    handleFilterSearch: () => Promise<void>,
    prescSearch: IPrescriptions | undefined,

    getPrescriptionsByName: (name: string) => Promise<void>
    getPrescriptionsById: (id: string) => Promise<void>
    getPrescriptionsByDate: (date: string) => Promise<void>
    getPrescriptionsByNumber: (number: string) => Promise<void>
    getLogsByNumber: () => Promise<void>,
    logs:ILogs[] | undefined
}

export const PrescripcionContext = createContext({} as ContextProps)
