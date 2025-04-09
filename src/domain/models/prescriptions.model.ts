import { IComment } from "./observaciones.model"

export interface IPrescriptions {

    _id?: string,

    createdAt: Date | string,
    updatedAt: Date | string,
    estado: 'PENDIENTE FINALIZAR' | 'PENDIENTE' | 'FINALIZADA' | 'SOLICITADA' | 'CALIDAD' | 'PRODUCCION' | 'CANCELADA' | undefined

    user_id?: string,
    user?: string | any,
    no_orden: number,
    tipo_prescripcion: string,
    fecha: string,
    ips: string,
    no_identificacion: string,
    nombre_paciente: string,
    servicio: string,
    ubicacion: string,
    cama: string,
    peso: number,
    tipo_edad: string,
    edad: number,
    volumen: number,
    purga: number,
    tiempo_infusion: number,
    overfill: number,
    filtro: boolean,
    equipo_fotosensible: boolean,
    tipo_paciente: string,
    via_administracion: string,
    diagnostico: string,
    flujo_metabolico: string,
    aminoacidos: string,
    tipoDextrosa?:string,
    dextrosa?: string,
    req_dextrosa?: string,
    tipo_dextrosa?: string,
    req_aminoacidos: string,
    lipidos: string,
    req_lipidos: string,
    omegaven: string,
    dipeptiven: string,
    sodio_total: string,
    potasio_total: string,
    fosfato: string,
    req_fosfato: string,
    calcio: string,
    req_calcio: string,
    magnesio: string,
    req_magnesio: string,
    elementos_traza: string,
    req_elementos_traza: string,
    vit_hidrosolubles: string,
    req_vit_hidrosolubles: string,
    req_vit_liposolubles: string,
    soluvit_vitalip: string,
    vit_C: string,
    acido_folico: string,
    observaciones?: IComment[],
    preparador?: any,
    preparadores?:any[],
    controlador_de_calidad?: any,
    por_clonacion?: boolean,
}


