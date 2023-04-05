import { createContext, Dispatch, SetStateAction } from "react";


interface ContextProps {
    matches: boolean,
    stateAcordion1: boolean,
    setStateAcordion1: Dispatch<SetStateAction<boolean>>,
    handleAcordion1: () => void,
    stateAcordion2: boolean,
    setStateAcordion2: Dispatch<SetStateAction<boolean>>,
    handleAcordion2: () => void,
    stateAcordion3: boolean,
    setStateAcordion3: Dispatch<SetStateAction<boolean>>,
    handleAcordion3: () => void,

    getMovilHeight: () => "3450px" | "2000px" | "2780px" | "2275px" | "150px" | "1600px" | "820px" | "1330px" | undefined

    open1: boolean | undefined,
    handleMenu1: () => void,
    open2: boolean | undefined,
    handleMenu2: () => void,
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,

    ///////////////////////////ORDEN ///////////////////////////////
    numOrder: string, errorNumOrder: boolean, messageErrorNumOrder: string, handleNumOrder: (event: React.ChangeEvent<HTMLInputElement>) => void,
    prescripcion: string, errorPrescripcion: boolean, messageErrorPrescripcion: string, handlePrescripcion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fechaCreacion: string, errorFechaCreacion: boolean, messageErrorFechaCreacion: string, handleFechaCreacion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    ////////////INFORMACION DEL PACIENTE///////////////////
    ips: string, errorIps: boolean, messageErrorIps: string, handleIps: (event: React.ChangeEvent<HTMLInputElement>) => void,
    numIden: string, errorNumIden: boolean, messageErrorNumIden: string, handleNumIden: (event: React.ChangeEvent<HTMLInputElement>) => void,
    namePaciente: string, errorNamePaciente: boolean, messageErrorNamePaciente: string, handleNamePaciente: (event: React.ChangeEvent<HTMLInputElement>) => void,
    servicio: string, errorServicio: boolean, messageErrorServicio: string, handleServicio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ubicacion: string, errorUbicacion: boolean, messageErrorUbicacion: string, handleUbicacion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    cama: string, errorCama: boolean, messageErrorCama: string, handleCama: (event: React.ChangeEvent<HTMLInputElement>) => void,
    pesoKg: string, errorPesoKg: boolean, messageErrorPesoKg: string, handlePesoKg: (event: React.ChangeEvent<HTMLInputElement>) => void,
    edad: string, errorEdad: boolean, messageErrorEdad: string, handleEdad: (event: React.ChangeEvent<HTMLInputElement>) => void,
    tipoEdad: string, errorTipoEdad: boolean, messageErrorTipoEdad: string, handleTipoEdad: (event: React.ChangeEvent<HTMLInputElement>) => void,
    volumen: string, errorVolumen: boolean, messageErrorVolumen: string, handleVolumen: (event: React.ChangeEvent<HTMLInputElement>) => void,
    purga: string, errorPurga: boolean, messageErrorPurga: string, handlePurga: (event: React.ChangeEvent<HTMLInputElement>) => void,
    tiempoDeInfucion: number, errorTiempoDeInfucion: boolean, messageErrorTiempoDeInfucion: string, handleTiempoDeInfucion: (event: Event, newValue: number | number[]) => void,
    overfill: number, errorOverfill: boolean, messageErrorOverfill: string, handleOverfill: (event: Event, newValue: number | number[]) => void,
    filtro: string, errorFiltro: boolean, messageErrorFiltro: string, handleFiltro: (event: React.ChangeEvent<HTMLInputElement>) => void,
    eqFotosencible: string, errorEqFotosencible: boolean, messageErrorEqFotosencible: string, handleEqFotosencible: (event: React.ChangeEvent<HTMLInputElement>) => void,
    tipoPaciente: string, errorTipoPaciente: boolean, messageErrorTipoPaciente: string, handleTipoPaciente: (event: React.ChangeEvent<HTMLInputElement>) => void,
    viaAdmin: string, errorViaAdmin: boolean, messageErrorViaAdmin: string, handleViaAdmin: (event: React.ChangeEvent<HTMLInputElement>) => void,
    diagnostico: string, errorDiagnostico: boolean, messageErrorDiagnostico: string, handleDiagnostico: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ////////////////////MACRONUTRIENTES////////////////////////////////////
    tipoPrescripcion: string, errorTipoPrescripcion: boolean, messageErrorTipoPrescripcion: string, handleTipoPrescripcion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    flujoMetabolico: string, errorFlujoMetabolico: boolean, messageErrorFlujoMetabolico: string, handleFlujoMetabolico: (event: React.ChangeEvent<HTMLInputElement>) => void,
    aminoacidos: string, errorAminoacidos: boolean, messageErrorAminoacidos: string, handleAminoacidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimientoAminoacidos: string, errorRequerimientoAminoacidos: boolean, messageErrorRequerimientoAminoacidos: string, handleRequerimientoAminoacidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    lipidos: string, errorLipidos: boolean, messageErrorLipidos: string, handleLipidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimientoLipidos: string, errorRequerimientoLipidos: boolean, messageErrorRequerimientoLipidos: string, handleRequerimientoLipidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    omegaven: string, errorOmegaven: boolean, messageErrorOmegaven: string, handleOmegaven: (event: React.ChangeEvent<HTMLInputElement>) => void,
    dipectiven: string, errorDipectiven: boolean, messageErrorDipectiven: string, handleDipectiven: (event: React.ChangeEvent<HTMLInputElement>) => void,
       ////////////////////MACRONUTRIENTES////////////////////////////////////
    sodioTotal: string, errorSodioTotal: boolean, messageErrorSodioTotal: string, handleSodioTotal: (event: React.ChangeEvent<HTMLInputElement>) => void,
    potacioTotal: string, errorPotacioTotal: boolean, messageErrorPotacioTotal: string, handlePotacioTotal: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fosfato: string, errorFosfato: boolean, messageErrorFosfato: string, handleFosfato: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimientoFosfato: string, errorRequerimientoFosfato: boolean, messageErrorRequerimientoFosfato: string, handleRequerimientoFosfato: (event: React.ChangeEvent<HTMLInputElement>) => void,
    calcio: string, errorCalcio: boolean, messageErrorCalcio: string, handleCalcio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    unidades: string, errorUnidades: boolean, messageErrorUnidades: string, handleUnidades: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimiento: string, errorRequerimiento: boolean, messageErrorRequerimiento: string, handleRequerimiento: (event: React.ChangeEvent<HTMLInputElement>) => void,
    sulfatoDeMagnesio: string, errorSulfatoDeMagnesio: boolean, messageErrorSulfatoDeMagnesio: string, handleSulfatoDeMagnesio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    reqSulfatoDeMagnesio: string, errorReqSulfatoDeMagnesio: boolean, messageErrorReqSulfatoDeMagnesio: string, handleReqSulfatoDeMagnesio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    elementosTraza: string, errorElementosTraza: boolean, messageErrorElementosTraza: string, handleElementosTraza: (event: React.ChangeEvent<HTMLInputElement>) => void,
    reqTraza: string, errorReqTraza: boolean, messageErrorReqTraza: string, handleReqTraza: (event: React.ChangeEvent<HTMLInputElement>) => void,
    vitaminasHidrosolubles: string, errorVitaminasHidrosolubles: boolean, messageErrorVitaminasHidrosolubles: string, handleVitaminasHidrosolubles: (event: React.ChangeEvent<HTMLInputElement>) => void,
    vitaminasLiposolubles: string, errorVitaminasLiposolubles: boolean, messageErrorVitaminasLiposolubles: string, handleVitaminasLiposolubles: (event: React.ChangeEvent<HTMLInputElement>) => void,
    vitaminasC: string, errorVitaminasC: boolean, messageErrorVitaminasC: string, handleVitaminasC: (event: React.ChangeEvent<HTMLInputElement>) => void,
    acidoFolico: string, errorAcidoFolico: boolean, messageErrorAcidoFolico: string, handleAcidoFolico: (event: React.ChangeEvent<HTMLInputElement>) => void,



}

export const FormulariosContext = createContext({} as ContextProps)