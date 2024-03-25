import { IComment } from "@/domain/models/observaciones.model";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { IErrorsTab } from "@/domain/models/taps_errors";
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

    getMovilHeight: () => string | undefined

    open1: boolean | undefined,
    handleMenu1: () => void,
    open2: boolean | undefined,
    handleMenu2: () => void,
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,

    ///////////////////////////ORDEN ///////////////////////////////
    getMaxNumPresc: () => Promise<void>,
    maxNumOrder: number | undefined, setmaxNumOrder: React.Dispatch<React.SetStateAction<number | undefined>>,
    numOrder: string, errorNumOrder: boolean, messageErrorNumOrder: string, handleNumOrder: (event: React.ChangeEvent<HTMLInputElement>) => void,
    prescripcion: string, errorPrescripcion: boolean, messageErrorPrescripcion: string, handlePrescripcion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fechaCreacion: string, errorFechaCreacion: boolean, messageErrorFechaCreacion: string, handleFechaCreacion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fechaActual: () => void;
    prescriptionSave: IPrescriptions | undefined;

    getPrescriptionsByNumber: () => Promise<void>,

    prescriptionCharge: IPrescriptions | undefined,
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
    overfill: number,setOverfill: React.Dispatch<React.SetStateAction<number>>, errorOverfill: boolean, messageErrorOverfill: string, handleOverfill: (event: Event, newValue: number | number[]) => void,
    filtro: string, errorFiltro: boolean, messageErrorFiltro: string, handleFiltro: (event: React.ChangeEvent<HTMLInputElement>) => void,
    eqFotosencible: string, errorEqFotosencible: boolean, messageErrorEqFotosencible: string, handleEqFotosencible: (event: React.ChangeEvent<HTMLInputElement>) => void,
    tipoPaciente: string, errorTipoPaciente: boolean, messageErrorTipoPaciente: string, handleTipoPaciente: (event: React.ChangeEvent<HTMLInputElement>) => void,
    viaAdmin: string, errorViaAdmin: boolean, messageErrorViaAdmin: string, handleViaAdmin: (event: React.ChangeEvent<HTMLInputElement>) => void,
    diagnostico: string, errorDiagnostico: boolean, messageErrorDiagnostico: string, handleDiagnostico: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ////////////////////MACRONUTRIENTES////////////////////////////////////
    tipoPrescripcion: string, errorTipoPrescripcion: boolean, messageErrorTipoPrescripcion: string, handleTipoPrescripcion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    flujoMetabolico: string, errorFlujoMetabolico: boolean, messageErrorFlujoMetabolico: string, handleFlujoMetabolico: (event: React.ChangeEvent<HTMLInputElement>) => void,
    aminoacidos: string, errorAminoacidos: boolean, messageErrorAminoacidos: string, handleAminoacidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    dextrosa: string, errorDextrosa: boolean, messageErrorDextrosa: string, handleDextrosa: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimientoAminoacidos: string, errorRequerimientoAminoacidos: boolean, messageErrorRequerimientoAminoacidos: string, handleRequerimientoAminoacidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    lipidos: string, errorLipidos: boolean, messageErrorLipidos: string, handleLipidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimientoLipidos: string, errorRequerimientoLipidos: boolean, messageErrorRequerimientoLipidos: string, handleRequerimientoLipidos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    omegaven: string, errorOmegaven: boolean, messageErrorOmegaven: string, handleOmegaven: (event: React.ChangeEvent<HTMLInputElement>) => void,
    dipeptiven: string, errorDipeptiven: boolean, messageErrorDipeptiven: string, handleDipeptiven: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ////////////////////MACRONUTRIENTES////////////////////////////////////
    sodioTotal: string, errorSodioTotal: boolean, messageErrorSodioTotal: string, handleSodioTotal: (event: React.ChangeEvent<HTMLInputElement>) => void,
    potacioTotal: string, errorPotacioTotal: boolean, messageErrorPotacioTotal: string, handlePotacioTotal: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fosfato: string, errorFosfato: boolean, messageErrorFosfato: string, handleFosfato: (event: React.ChangeEvent<HTMLInputElement>) => void,
    requerimientoFosfato: string, errorRequerimientoFosfato: boolean, messageErrorRequerimientoFosfato: string, handleRequerimientoFosfato: (event: React.ChangeEvent<HTMLInputElement>) => void,
    calcio: string, errorCalcio: boolean, messageErrorCalcio: string, handleCalcio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    unidades: string, errorUnidades: boolean, messageErrorUnidades: string, handleUnidades: (event: React.ChangeEvent<HTMLInputElement>) => void,
    reqCalcio: string, errorReqCalcio: boolean, messageErrorReqCalcio: string, handleReqCalcio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    magnesio: string, errorMagnesio: boolean, messageErrorMagnesio: string, handleMagnesio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    reqMagnesio: string, errorReqMagnesio: boolean, messageErrorReqMagnesio: string, handleReqMagnesio: (event: React.ChangeEvent<HTMLInputElement>) => void,
   
    soluvid_Vitalipid: string,
    handleSoluvid_Vitalipid: (event: React.ChangeEvent<HTMLInputElement>) => void,

    elementosTraza: string, errorElementosTraza: boolean, messageErrorElementosTraza: string, handleElementosTraza: (event: React.ChangeEvent<HTMLInputElement>) => void,
    reqTraza: string, errorReqTraza: boolean, messageErrorReqTraza: string, handleReqTraza: (event: React.ChangeEvent<HTMLInputElement>) => void,
    vitaminasHidrosolubles: string, errorVitaminasHidrosolubles: boolean, messageErrorVitaminasHidrosolubles: string, handleVitaminasHidrosolubles: (event: React.ChangeEvent<HTMLInputElement>) => void,
    reqVitHidrosolubles: string, errorReqVitHidrosolubles: boolean, messageErrorReqVitHidrosolubles: string, handleReqVitHidrosolubles: (event: React.ChangeEvent<HTMLInputElement>) => void,
    vitaminasLiposolubles: string, errorVitaminasLiposolubles: boolean, messageErrorVitaminasLiposolubles: string, handleVitaminasLiposolubles: (event: React.ChangeEvent<HTMLInputElement>) => void,
    vitaminasC: string, errorVitaminasC: boolean, messageErrorVitaminasC: string, handleVitaminasC: (event: React.ChangeEvent<HTMLInputElement>) => void,
    acidoFolico: string, errorAcidoFolico: boolean, messageErrorAcidoFolico: string, handleAcidoFolico: (event: React.ChangeEvent<HTMLInputElement>) => void,

    estado:'PENDIENTE FINALIZAR' |'PENDIENTE' | 'FINALIZAR' | 'SOLICITADA' | 'CALIDAD' | 'PRODUCCION' | 'CANCELADA'|undefined
    
    newComment: IComment, setNewComment: React.Dispatch<React.SetStateAction<IComment>>,
    saveComments: (comment:IComment) => Promise<void>,

    loadingSave: boolean
    saveOK: boolean,
    valOKAlert: boolean,
    messageAPI: string | undefined, setMessageAPI: React.Dispatch<React.SetStateAction<string | undefined>>,
    validateCampos: () => boolean;

    //////MODAL//////
    openModalFormSaved: boolean,
    handleOpenModalFormSaved: () => void,
    handleCloseModalFormSaved: () => void,

    openModalFormSavedBorrador: boolean,
    handleOpenModalFormSavedBorrador: () => void,
    handleCloseModalFormSavedBorrador: () => void,

    openModalFormSavedRespon: boolean,
    handleOpenModalFormSavedRespon: () => void,
    handleCloseModalFormSavedRespon: () => void,

    openModalFormCancel: boolean,
    handleOpenModalFormCancel: () => void,
    handleCloseModalFormCancel: () => void,

    savePrescription: () => Promise<boolean | undefined>,
    cancelForm: (route: string) => void,

    saveBorrador: () => Promise<void>,
    getPrescriptions: () => void,
    validateAlert: () => boolean,
    copyPrescriptions: (prescription: IPrescriptions | undefined) => Promise<void>
    borrarPrescriptions: (prescription: IPrescriptions | undefined) => Promise<void>

    selectTab: number, setSelectTab: React.Dispatch<React.SetStateAction<number>>

    tabsErrors: IErrorsTab, setTabErrors: React.Dispatch<React.SetStateAction<IErrorsTab>>
    valTabsErrors1: () => boolean | undefined, valTabsErrors2: () => boolean | undefined,
    validateTipoPrecripcion: (tipoPrescripcion: string) => boolean,


}

export const FormulariosContext = createContext({} as ContextProps)
