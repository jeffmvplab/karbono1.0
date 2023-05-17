import { IPrescriptions } from "@/domain/models/prescriptions.model";

export interface IParamFunc {
    requerimiento: any,
    volumen: any,
    conPurga?: any
}
export interface IParamNumeric {
    requerimiento: number,
    volumen: number,
}

// export const tipoPrescripcion:string='Por volúmenes';
export const tipoPrescripcion: string = 'Por requerimientos';
//////////////////////////////FORMULACIONES//////////////
const correccionPurga = (prescription: IPrescriptions) => {

    const volTotalNPT: number = prescription?.volumen;
    const purga: number = prescription?.purga;
    const correccion: number = ((volTotalNPT + purga) / volTotalNPT)

    return correccion;

}

export const getSodio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const sodio: number = parseFloat(prescription?.sodio_total!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = sodio * peso / 2;
        params.conPurga = params.volumen * correccionPurga(prescription);
        params.requerimiento = sodio

    } else {
        params.requerimiento = sodio * 2 / peso;
        params.volumen = sodio
        params.conPurga = params.volumen * correccionPurga(prescription);
    }

    return params;
}

export const getSodioTotal = (prescription: IPrescriptions) => {

    const peso: number = prescription?.peso!;

    const sodioTotal: number = ((getFosfatoSodio(prescription).volumen * 2)
        + (getSodio(prescription).volumen * 2)) / peso
    return sodioTotal;
}


export const getPotacio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const potacio: number = parseFloat(prescription?.potasio_total!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = potacio * peso / 2;
        params.conPurga = params.volumen * correccionPurga(prescription);
        params.requerimiento = potacio
    } else {
        params.requerimiento = potacio * 2 / peso;
        params.conPurga = params.volumen * correccionPurga(prescription);
        params.volumen = potacio
    }
    return params;
}

export const getPotacioTotal = (prescription: IPrescriptions) => {

    const peso: number = prescription?.peso!;

    const potasioTotal: number = ((getFosfatoPotacio(prescription).volumen * 3.8)
        + (getPotacio(prescription).volumen * 2)) / peso

    return potasioTotal;
}

export const getCalcio = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const calcio: number = parseFloat(prescription?.req_calcio!);
    const tCalcio: string = prescription?.calcio!;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        if (tCalcio === 'Gluconato de Calcio') {

            params.volumen = calcio * peso * 0.01;
            params.conPurga = params.volumen * correccionPurga(prescription);
            params.requerimiento = calcio
        } else {
            params.volumen = calcio * peso * 2.15;
            params.conPurga = params.volumen * correccionPurga(prescription);
            params.requerimiento = calcio
        }
    } else {

        if (tCalcio === 'Gluconato de Calcio') {
            params.requerimiento = calcio * 100 / peso;
            params.volumen = calcio
            params.conPurga = params.volumen * correccionPurga(prescription);
        } else {
            params.requerimiento = calcio * 0.465 / peso;
            params.volumen = calcio
            params.conPurga = params.volumen * correccionPurga(prescription);
        }
    }

    return params;
}

export const getFosfatoSodio = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const fosforo: number = parseFloat(prescription?.req_fosfato!);
    const tipofosfato: string = prescription?.fosfato!;
    const peso: number = prescription?.peso!;

    if (tipofosfato === 'Fosfato de sodio')
        if (tp === tipoPrescripcion) {
            params.volumen = fosforo * 1 * peso;
            params.requerimiento = fosforo;
            params.conPurga = params.volumen * correccionPurga(prescription);
        } else {
            params.requerimiento = fosforo * 1 / peso;
            params.volumen = fosforo
            params.conPurga = params.volumen * correccionPurga(prescription);
        }
    return params;
}

export const getFosfatoPotacio = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const fosforo: number = parseFloat(prescription?.req_fosfato!);
    const tipofosfato: string = prescription?.fosfato!;
    const peso: number = prescription?.peso!;

    if (tipofosfato === 'Fosfato de potacio')
        if (tp === tipoPrescripcion) {
            params.volumen = fosforo * peso / 2.6;
            params.conPurga = params.volumen * correccionPurga(prescription);
            params.requerimiento = fosforo
        } else {
            params.requerimiento = fosforo * 2.6 / peso;
            params.volumen = fosforo
            params.conPurga = params.volumen * correccionPurga(prescription);
        }

    return params;
}

export const getFosforo = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = getFosfatoPotacio(prescription).volumen + getFosfatoSodio(prescription).volumen;
    params.requerimiento = getFosfatoPotacio(prescription).requerimiento + getFosfatoSodio(prescription).requerimiento;
    params.conPurga = getFosfatoPotacio(prescription).conPurga + getFosfatoSodio(prescription).conPurga;

    return params;
}

export const getMagnesio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const magnesio: number = parseFloat(prescription?.req_magnesio!);
    // const magnesio: number = parseInt(prescription?.req_magnesio!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = magnesio * peso / 200;
        params.requerimiento = magnesio
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.requerimiento = magnesio * 200 / peso;
        params.volumen = magnesio
        params.conPurga = params.volumen * correccionPurga(prescription);
    }
    return params;
}


export const getVit_C = (prescription: IPrescriptions) => {

    const vitC: string = prescription?.vit_C!;
    const tp: string = prescription?.tipo_prescripcion!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };


    if (tp === tipoPrescripcion) {
        params.volumen = parseFloat(vitC) / 100
        params.requerimiento = parseFloat(vitC);
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.volumen = parseFloat(vitC);
        params.requerimiento = parseFloat(vitC) * 100
        params.conPurga = params.volumen * correccionPurga(prescription);
    }
    return params;
}

export const getDextrosa = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dextrosa: number = parseFloat(prescription?.dextrosa!);
    const flujoMetabolico: number = parseFloat(prescription?.flujo_metabolico!);
    const peso: number = prescription?.peso!;
    const tiempoInfusion: number = prescription?.tiempo_infusion!;

    if (tp === tipoPrescripcion) {
        params.volumen = flujoMetabolico * peso * tiempoInfusion * 0.12;
        params.requerimiento = dextrosa
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.requerimiento = dextrosa / (peso * tiempoInfusion * 0.12);
        params.volumen = dextrosa
        params.conPurga = params.volumen * correccionPurga(prescription);
    }
    // console.log('Flujo Metabolico Vol:', params.volumen,'Flujo Metabolico Req:',params.requerimiento)
    // console.log('Dextrosa Vol:', params.volumen,'Dextrosa Req:',params.requerimiento)

    return params;
}

export const concAminoacidos = (prescription: IPrescriptions) => {

    const tipoAminoacidos: string = prescription?.aminoacidos!;
    let concSinAminoacidos: number = 0;
    const tipoPaciente: string = prescription?.tipo_paciente!;

    if (tipoAminoacidos === 'Aminoven') { if (tipoPaciente === 'Adulto') { concSinAminoacidos = 0.15 } else { concSinAminoacidos = 0.1 } }
    if (tipoAminoacidos === 'TravasolPlus') { concSinAminoacidos = 0.15 }
    if (tipoAminoacidos === 'Aminoplasmal') { if (tipoPaciente === 'Adulto') { concSinAminoacidos = 0.15 } else { concSinAminoacidos = 0.1 } }
    if (tipoAminoacidos === 'Aminosteril') { concSinAminoacidos = 0.08 }
    if (tipoAminoacidos === 'Trophamine') { concSinAminoacidos = 1 }

    return concSinAminoacidos;
}

export const getAminoacidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const aminoacidos: number = parseFloat(prescription?.req_aminoacidos!);
    const peso: number = prescription?.peso!;
    const concSinAminoacidos = concAminoacidos(prescription);

    if (tp === tipoPrescripcion) {
        params.volumen = aminoacidos * peso / concSinAminoacidos;
        params.requerimiento = aminoacidos
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.requerimiento = aminoacidos * concSinAminoacidos / peso;
        params.volumen = aminoacidos
        params.conPurga = params.volumen * correccionPurga(prescription);
    }


    return params;
}

export const getLipidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const lipidos: number = parseFloat(prescription?.req_lipidos);
    const concSinLipidos: number = 0.2;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        params.volumen = (lipidos * peso / concSinLipidos)
        params.requerimiento = lipidos
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.requerimiento = lipidos * concSinLipidos / peso;
        params.volumen = (lipidos)
        params.conPurga = params.volumen * correccionPurga(prescription);
    }
    return params;
}

export const getOmegaven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const tp: string = prescription?.tipo_prescripcion!;
    const omegaven: number = parseFloat(prescription?.omegaven!);
    const concSinOmegaven: number = 0.1;
    const peso: number = prescription?.peso!;


    if (tp === tipoPrescripcion) {
        params.volumen = omegaven * peso / concSinOmegaven;
        params.requerimiento = omegaven
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.requerimiento = omegaven * concSinOmegaven / peso;
        params.volumen = omegaven
        params.conPurga = params.volumen * correccionPurga(prescription);
    }
    return params;
}

export const getDipeptiven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dipeptiven: number = parseFloat(prescription?.dipeptiven!);
    const concSinDipeptiven: number = 0.20;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        params.volumen = dipeptiven * peso / concSinDipeptiven;
        params.requerimiento = dipeptiven
        params.conPurga = params.volumen * correccionPurga(prescription);
    } else {
        params.requerimiento = dipeptiven * concSinDipeptiven / peso;
        params.volumen = dipeptiven
        params.conPurga = params.volumen * correccionPurga(prescription);
    }
    // console.log('Dipep:',params)
    return params;
}

export const getVitHidroSolubles = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = parseFloat(prescription?.req_vit_hidrosolubles!)
    params.conPurga = parseFloat(prescription?.req_vit_hidrosolubles!) * correccionPurga(prescription)

    return params;
}

export const getVitLiposSolubles = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = parseFloat(prescription?.req_vit_liposolubles)
    params.conPurga = parseFloat(prescription?.req_vit_liposolubles) * correccionPurga(prescription)

    return params;
}

export const getOligoelementos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = parseFloat(prescription?.req_elementos_traza)
    params.conPurga = parseFloat(prescription?.req_elementos_traza) * correccionPurga(prescription)

    return params;
}




export const getAgua = (prescription: IPrescriptions) => {

    const volTotalNPT: number = prescription?.volumen!
    const vitaminas: number = getVitHidroSolubles(prescription!).volumen
        + getVitLiposSolubles(prescription!).volumen

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };


    params.volumen = volTotalNPT - (
        getDextrosa(prescription!).volumen + getLipidos(prescription!).volumen
        + getAminoacidos(prescription!).volumen + getDipeptiven(prescription!).volumen
        + getOmegaven(prescription!).volumen + getSodio(prescription!).volumen
        + getPotacio(prescription!).volumen + getFosforo(prescription!).volumen
        + getMagnesio(prescription!).volumen + getCalcio(prescription!).volumen
        + getOligoelementos(prescription).volumen + vitaminas
        + getVit_C(prescription!).volumen + parseFloat(prescription?.acido_folico!)
    );

    params.conPurga = params.volumen * correccionPurga(prescription);
    // }

    // console.log('COSAS:',
    //     getDextrosa(prescription!).volumen, getLipidos(prescription!).volumen
    //     , getAminoacidos(prescription!).volumen, getDipeptiven(prescription!).volumen
    //     , getOmegaven(prescription!).volumen, getSodio(prescription!).volumen
    //     , getPotacio(prescription!).volumen, getFosforo(prescription!).volumen
    //     , getMagnesio(prescription!).volumen, getCalcio(prescription!).volumen
    //     , getOligoelementos(prescription).volumen, vitaminas
    //     , getVit_C(prescription!).volumen, parseFloat(prescription?.acido_folico!));

    return params;
}


export const getVolTotal = (prescription: IPrescriptions) => {

    const volAgua: number = getAgua(prescription).volumen
    const vitaminas: number = getVitHidroSolubles(prescription!).volumen
        + getVitLiposSolubles(prescription!).volumen
    let volTotal: number = 0;


    volTotal = volAgua
        + getDextrosa(prescription!).volumen + getLipidos(prescription!).volumen
        + getAminoacidos(prescription!).volumen + getDipeptiven(prescription!).volumen
        + getOmegaven(prescription!).volumen + getSodio(prescription!).volumen
        + getPotacio(prescription!).volumen + getFosforo(prescription!).volumen
        + getMagnesio(prescription!).volumen + getCalcio(prescription!).volumen
        + getOligoelementos(prescription).volumen + vitaminas
        + getVit_C(prescription!).volumen
        + parseFloat(prescription?.acido_folico!)

    // console.log('Volumen Total:', volTotal)

    return volTotal;
}

export const getVelinfusion = (prescription: IPrescriptions) => {

    const volTotal: number = getVolTotal(prescription);
    const tiempoInfusion: number = prescription?.tiempo_infusion!

    let velinfusion: number = volTotal / tiempoInfusion
    return velinfusion;
}


export const getOsmolaridad = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const volTotalNPT: number = prescription?.volumen!;
    const volAgua: number = getAgua(prescription!).volumen;
    const tipo_paciente: string = prescription?.tipo_paciente!;

    const vit_hidrosoluble: string = prescription?.vit_hidrosolubles!;
    const aminoacidos: string = prescription?.aminoacidos

    console.log('Amino:', aminoacidos)

    const aminovenAdulto: number = (aminoacidos === 'AminovenSE')
        ? getAminoacidos(prescription!).volumen : 0;
    const travasol: number = (aminoacidos === 'TravasolPlus')
        ? getAminoacidos(prescription!).volumen : 0;
    const aminoPlasmalCE: number = (aminoacidos === 'Aminoplasmal SE')
        ? getAminoacidos(prescription!).volumen : 0;
    const aminoPlasmalSE: number = (aminoacidos === 'Aminoplasmal CE')
        ? getAminoacidos(prescription!).volumen : 0;

    const aminovenInfantils: number = (aminoacidos === 'Aminoven Infantil')
        ? getAminoacidos(prescription!).volumen : 0;
    const primene: number = (aminoacidos === 'Primene')
        ? getAminoacidos(prescription!).volumen : 0;

    const cernevit: number = (vit_hidrosoluble === 'Cernevit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const soluvit: number = (vit_hidrosoluble === 'Soluvit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const multi12K: number = (vit_hidrosoluble === 'Multi12Potasio')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;


    const vitaLipidInfantil: number = (tipo_paciente === 'Pediatrico')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const vitaLipidAd: number = (tipo_paciente === 'Adulto')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const elementos_traza: string = prescription?.elementos_traza!

    const volOligoNulanza: number = (elementos_traza === 'Nulanza')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;
    const volOligoSensitrace: number = (elementos_traza === 'Sencitrace')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;


    // let osmolaridad: number = 0;


    params.volumen =
        ((getDextrosa(prescription!).volumen * 2780)
            // + (getAminoacidos(prescription!).volumen * 1505)
            + (getLipidos(prescription!).volumen * 290)
            + (getOmegaven(prescription!).volumen * 273)
            + (getDipeptiven(prescription!).volumen * 921)
            + (getSodio(prescription!).volumen * 4001)
            + (getPotacio(prescription!).volumen * 4000)
            + (getFosforo(prescription!).volumen * 2570)
            + (getCalcio(prescription!).volumen * 626)
            + (getMagnesio(prescription!).volumen * 1623)
            + (travasol * 1357)
            + (primene * 780)
            + (aminovenInfantils * 885)
            + (aminovenAdulto * 1505)
            + (aminoPlasmalCE * 1030)
            + (aminoPlasmalSE * 864)

            + (volOligoNulanza * 2500)
            + (volOligoSensitrace * 100)
            + (cernevit * 4820)
            + (multi12K * 298.5)
            + (vitaLipidInfantil * 260)
            + (vitaLipidAd * 260)
            + (soluvit * 490)
            + (getVit_C(prescription!).volumen * 1740)
            + (parseFloat(prescription?.acido_folico!) * 227)
            + (volAgua * 1))
        / (volTotalNPT + prescription?.purga)
    // }

    params.conPurga =
        ((getDextrosa(prescription!).conPurga * 2780)
            + (getAminoacidos(prescription!).conPurga * 1505)
            + (getLipidos(prescription!).conPurga * 290)
            + (getOmegaven(prescription!).conPurga * 273)
            + (getDipeptiven(prescription!).conPurga * 921)
            + (getSodio(prescription!).conPurga * 4001)
            + (getPotacio(prescription!).conPurga * 4000)
            + (getFosforo(prescription!).conPurga * 2570)
            + (getCalcio(prescription!).conPurga * 626)
            + (getMagnesio(prescription!).conPurga * 1623)
            + (volOligoNulanza * 2500)
            + (volOligoSensitrace * 100)
            + (cernevit * 4820)
            + (multi12K * 298.5)
            + (vitaLipidInfantil * 260)
            + (vitaLipidAd * 260)
            + (soluvit * 490)
            + (getVit_C(prescription!).conPurga * 1740)
            + (parseFloat(prescription?.acido_folico!) * 227)
            + (volAgua * 1))
        / (volTotalNPT)

    return params;
}


export const getCalTotales = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = getCaloriasTotalesProteicas(prescription!).volumen + getCaloriasNoProteicasCHOS(prescription!).volumen + getCaloriasNoProteicasLIPIDOS(prescription!).volumen
    params.conPurga = getCaloriasTotalesProteicas(prescription!).conPurga + getCaloriasNoProteicasCHOS(prescription!).conPurga + getCaloriasNoProteicasLIPIDOS(prescription!).conPurga

    return params;
}

export const getCalTotalesKgDia = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const peso: number = prescription?.peso!;

    params.volumen = getCalTotales(prescription).volumen / peso
    params.conPurga = getCalTotales(prescription).conPurga / peso

    return params;
}

export const getGramosTotalesNitro = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const concSinAminoacidos = concAminoacidos(prescription);

    params.volumen = (getAminoacidos(prescription!).volumen * concSinAminoacidos * 0.16) + (getDipeptiven(prescription!).volumen * 0.32)
    params.conPurga = (getAminoacidos(prescription!).conPurga * concSinAminoacidos * 0.16) + (getDipeptiven(prescription!).conPurga * 0.32)

    return params;
}



export const getCaloriasTotalesProteicas = (prescription: IPrescriptions) => {


    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const concSinAminoacidos = concAminoacidos(prescription);

    params.volumen = (getAminoacidos(prescription!).volumen * concSinAminoacidos * 4) + (getDipeptiven(prescription!).volumen * 0.8)
    params.conPurga = (getAminoacidos(prescription!).conPurga * concSinAminoacidos * 4) + (getDipeptiven(prescription!).conPurga * 0.8)

    return params;
}


export const getCaloriasTotalesProteicasKg = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const peso: number = prescription?.peso!

    params.volumen = getCaloriasTotalesProteicas(prescription!).volumen / peso
    params.conPurga = getCaloriasTotalesProteicas(prescription!).conPurga / peso

    return params;
}

export const getCaloriasNoProteicasCHOS = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = getDextrosa(prescription!).volumen * 1.7
    params.conPurga = getDextrosa(prescription!).conPurga * 1.7

    return params;
}

export const getCaloriasNoProteicasLIPIDOS = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = (getLipidos(prescription!).volumen * 2) + (getOmegaven(prescription!).volumen * 1.12)
    params.conPurga = (getLipidos(prescription!).conPurga * 2) + (getOmegaven(prescription!).conPurga * 1.12)

    return params;
}

export const getCaloriasNoProteicasKg = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const peso: number = prescription?.peso!

    params.volumen = (getCaloriasNoProteicasCHOS(prescription!).volumen + getCaloriasNoProteicasLIPIDOS(prescription!).volumen) / peso
    params.conPurga = (getCaloriasNoProteicasCHOS(prescription!).conPurga + getCaloriasNoProteicasLIPIDOS(prescription!).conPurga) / peso

    return params;
}

export const getRelacionCalNoProteicasN = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = (getCaloriasNoProteicasCHOS(prescription!).volumen + getCaloriasNoProteicasLIPIDOS(prescription!).volumen) / getGramosTotalesNitro(prescription!).volumen
    params.conPurga = (getCaloriasNoProteicasCHOS(prescription!).conPurga + getCaloriasNoProteicasLIPIDOS(prescription!).conPurga) / getGramosTotalesNitro(prescription!).conPurga

    return params;
}

export const getRelacionCalNoProteicasAminoacidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    params.volumen = (getCaloriasNoProteicasCHOS(prescription!).volumen + getCaloriasNoProteicasLIPIDOS(prescription!).volumen) / (getGramosTotalesNitro(prescription!).volumen * 6.25)
    params.conPurga = (getCaloriasNoProteicasCHOS(prescription!).conPurga + getCaloriasNoProteicasLIPIDOS(prescription!).conPurga) / (getGramosTotalesNitro(prescription!).conPurga * 6.25)

    return params;
}


export const getConcentracionDeCHOS = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const volTotalNPT: number = prescription?.volumen!;

    params.volumen = (getDextrosa(prescription!).volumen * 0.5 / volTotalNPT) * 100
    params.conPurga = (getDextrosa(prescription!).conPurga * 0.5 / volTotalNPT) * 100

    return params;
}

export const getConcentracionDeProteinas = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const concSinAminoacidos = concAminoacidos(prescription);
    const volTotalNPT: number = prescription?.volumen!;

    params.volumen = ((getAminoacidos(prescription!).volumen * concSinAminoacidos + getDipeptiven(prescription!).volumen * 0.2) / volTotalNPT) * 100
    params.conPurga = ((getAminoacidos(prescription!).conPurga * concSinAminoacidos + getDipeptiven(prescription!).conPurga * 0.2) / volTotalNPT) * 100

    return params;
}

export const getConcentracionDeLipidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };
    const volTotalNPT: number = prescription?.volumen!;

    params.volumen = ((getLipidos(prescription!).volumen * 0.2 + getOmegaven(prescription!).volumen * 0.1) / volTotalNPT) * 100
    params.conPurga = ((getLipidos(prescription!).conPurga * 0.2 + getOmegaven(prescription!).conPurga * 0.1) / volTotalNPT) * 100

    return params;
}






