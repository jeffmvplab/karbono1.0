

export interface IDataTable {
    id: string,
    paciente: string,
    identificación: string,
    ips: string,
    tipo: string,
    creación: string,
    usuario: string,
}

export interface IMicronutrientes {
    sodio: string,
    potasio: string,
    calcio: string,
    fosforo: string
    magnesio: string,
    oligoelementos: string,
    vitaminas_hidro: string,
    vitaminas_lipo: string,
    vit_C: string,
    acido_folico: string,

}

export interface IMacronutrientes {
    flujo_metabólico: string,
    dextros: string,
    aminoacido: string,
    lipidos: string,
    omegaven: string,
    dipeptiven: string,
    agua: string,
}

export interface IParametros {
    volument_total: string,
    velocidad_de_infusi0n: string,
    osmolaridad: string,
    via_de_administracion: string,
    calorias_totales: string,
    calorias_totales_Kg_Dia: string,
    gramos_totales_de_nitrogeno: string,
    calorias_totales_proteicas: string,
    calorias_totales_protéicas_Kg: string,
    calorias_no_proteicas_CHO_S: string,
    calorias_no_proteicas_LIPIDOS: string,
    calorias_no_proteicas_Kg: string,
    relacion_cal_no_proteicas_g_N: string,
    relacion_cal_no_proteicas_g_AA: string,
    concentracion_de_CHO_S: string,
    concentracion_de_Proteína: string,
    concentracion_de_Lípidos: string,
}