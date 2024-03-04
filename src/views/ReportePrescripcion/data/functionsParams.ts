import { Aportes, aportesNew } from "@/domain/models/logs.model";
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
export const correccionPurga = (prescription: IPrescriptions) => {

    const volTotalNPT: number = prescription?.volumen;
    const purga: number = prescription?.overfill;
    const correccion: number = ((volTotalNPT + purga) / volTotalNPT)

    // console.log('Overfill:', correccion)
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

    if (tipofosfato === 'Fosfato de potasio')
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


export const getAportesFosfato = (prescription: IPrescriptions) => {

    const tipofosfato: string = prescription?.fosfato!;
    const aportes: Aportes = aportesNew;

    if (tipofosfato === 'Fosfato de sodio') {
        aportes.a_sodio = getFosfatoSodio(prescription).requerimiento * 2 / 1
        aportes.a_potacio = 0
        aportes.a_magnesio = 0
        aportes.a_fosforo = 0
        aportes.a_cloruro = 0
    } else {
        aportes.a_sodio = 0
        aportes.a_potacio = getFosfatoPotacio(prescription).requerimiento * 3.8 / 1
        aportes.a_magnesio = 0
        aportes.a_fosforo = 0
        aportes.a_cloruro = 0
    }
    return aportes;
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
        params.requerimiento = dextrosa
        params.volumen = flujoMetabolico * peso * tiempoInfusion * 0.12;
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

export const getFlujoMetabolico = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dextrosa: number = parseFloat(prescription?.dextrosa!);
    const flujoMetabolico: number = parseFloat(prescription?.flujo_metabolico!);
    const peso: number = prescription?.peso!;
    const tiempoInfusion: number = prescription?.tiempo_infusion!;

    if (tp === tipoPrescripcion) {
        params.volumen = flujoMetabolico * peso * tiempoInfusion * 0.12;
        params.requerimiento = flujoMetabolico
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
    // const tipoPaciente: string = prescription?.tipo_paciente!;

    if (tipoAminoacidos === 'AminovenSE') { concSinAminoacidos = 0.15 }
    if (tipoAminoacidos === 'TravasolPlus') { concSinAminoacidos = 0.15 }
    if (tipoAminoacidos === 'Aminoplasmal SE') { concSinAminoacidos = 0.1 }
    if (tipoAminoacidos === 'Aminoplasmal CE') { concSinAminoacidos = 0.1 }
    if (tipoAminoacidos === 'Aminoven Infantil') { concSinAminoacidos = 0.1 }
    if (tipoAminoacidos === 'Primene') { concSinAminoacidos = 0.1 }
    // if (tipoAminoacidos === 'Aminosteril') { concSinAminoacidos = 0.08 }
    // if (tipoAminoacidos === 'Trophamine') { concSinAminoacidos = 1 }

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

export const getAportesAminoacidos = (prescription: IPrescriptions) => {

    const tipoAminoacidos: string = prescription?.aminoacidos!;
    const peso: number = prescription?.peso!;
    const aportes: Aportes = aportesNew;

    if (tipoAminoacidos === 'Aminoplasmal CE') {
        aportes.a_sodio = getAminoacidos(prescription).volumen * 0.05 / peso
        aportes.a_potacio = getAminoacidos(prescription).volumen * 0.025 / peso
        aportes.a_magnesio = getAminoacidos(prescription).volumen * 0.0025 / peso
        aportes.a_fosforo = getAminoacidos(prescription).volumen * 0.01 / peso
        aportes.a_cloruro = getAminoacidos(prescription).volumen * 0.052 / peso
    } else {
        aportes.a_sodio = 0
        aportes.a_potacio = 0
        aportes.a_magnesio = 0
        aportes.a_fosforo = 0
        aportes.a_cloruro = 0
    }

    return aportes;
}

export const getLipidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const lipidos: number = parseFloat(prescription?.req_lipidos);
    const tipo_lipidos: string = prescription?.lipidos;
    const concSinLipidos: number = 0.2;
    const peso: number = prescription?.peso!;
    const tipo_paciente: string = prescription?.tipo_paciente!;


    const vitaLipid: number = parseFloat(prescription?.req_vit_liposolubles!);

    const vit_lipo = prescription?.soluvit_vitalip !== '0'
        ? parseFloat(prescription?.soluvit_vitalip!) : 0;


    if (tipo_lipidos === 'Smoflipid') {

        if (vit_lipo !== 0) {

            if (tp === tipoPrescripcion) {
                params.volumen = ((lipidos * peso * 5) - (vit_lipo / 2) - vitaLipid / 2)
                params.requerimiento = lipidos
                params.conPurga = params.volumen * correccionPurga(prescription);
            } else {
                params.requerimiento = lipidos * concSinLipidos / peso;
                params.volumen = (lipidos)
                params.conPurga = params.volumen * correccionPurga(prescription);
            }

        } else {

            if (tp === tipoPrescripcion) {
                params.volumen = ((lipidos * peso * 5) - vitaLipid / 2)
                params.requerimiento = lipidos
                params.conPurga = params.volumen * correccionPurga(prescription);
            } else {
                params.requerimiento = lipidos * concSinLipidos / peso;
                params.volumen = (lipidos)
                params.conPurga = params.volumen * correccionPurga(prescription);
            }
        }
    } else {

        if (tp === tipoPrescripcion) {
            params.volumen = (lipidos * peso * 5)
            params.requerimiento = lipidos
            params.conPurga = params.volumen * correccionPurga(prescription);
        } else {
            params.requerimiento = lipidos * concSinLipidos / peso;
            params.volumen = (lipidos)
            params.conPurga = params.volumen * correccionPurga(prescription);
        }

    }

    return params;
}


export const getAportesLipidos = (prescription: IPrescriptions) => {

    const tipoLipidos: string = prescription?.lipidos!;
    const peso: number = prescription?.peso!;
    const aportes: Aportes = aportesNew;

    if (tipoLipidos === 'Clinoleic') {
        aportes.a_sodio = 0
        aportes.a_potacio = 0
        aportes.a_magnesio = 0
        aportes.a_fosforo = getLipidos(prescription).volumen * 0.015 / peso
        aportes.a_cloruro = 0

    } else if (tipoLipidos === 'Lipoplus') {
        aportes.a_sodio = getLipidos(prescription).volumen * 0.0026 / peso
        aportes.a_potacio = 0
        aportes.a_magnesio = 0
        aportes.a_fosforo = getLipidos(prescription).volumen * 0.0145 / peso
        aportes.a_cloruro = 0

    } else if (tipoLipidos === 'Smoflipid') {

        aportes.a_sodio = 0
        aportes.a_potacio = 0
        aportes.a_magnesio = 0
        aportes.a_fosforo = getLipidos(prescription).volumen * 0.015 / peso
        aportes.a_cloruro = 0

    } else if (tipoLipidos === 'Lipofundin') {
        aportes.a_sodio = getLipidos(prescription).volumen * 0.001 / peso
        aportes.a_potacio = 0
        aportes.a_magnesio = 0
        aportes.a_fosforo = getLipidos(prescription).volumen * 0.0145 / peso
        aportes.a_cloruro = 0
    }

    return aportes;
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


export const getAportesDipeptiven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };

    const dipeptiven: number = parseFloat(prescription?.dipeptiven!);
    const concSinDipeptiven: number = 0.20;
    const peso: number = prescription?.peso!;

    params.volumen = dipeptiven * concSinDipeptiven / peso;
    params.requerimiento = dipeptiven * 13.46 / 20

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

export const getSoluv_Vit = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };


    const sol_vit = (prescription?.soluvit_vitalip === '' || prescription?.soluvit_vitalip === undefined) ? 0 : parseFloat(prescription?.soluvit_vitalip!)

    // console.log('PPPPP:', prescription?.soluvit_vitalip)

    params.volumen = sol_vit
    params.conPurga = sol_vit * correccionPurga(prescription)

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
        + getVitLiposSolubles(prescription!).volumen + getSoluv_Vit(prescription!).volumen

    const params: IParamFunc = { requerimiento: 0, volumen: 0, conPurga: 0 };


    params.volumen = volTotalNPT + prescription?.purga - (
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
        + getVitLiposSolubles(prescription!).volumen + getSoluv_Vit(prescription!).volumen
    let volTotal: number = 0;


    console.log('SSSS:', vitaminas)

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
    const lipidos: string = prescription?.lipidos

    // console.log('Amino:', aminoacidos)

    const aminovenSE: number = (aminoacidos === 'AminovenSE')
        ? getAminoacidos(prescription!).volumen : 0;
    const travasol: number = (aminoacidos === 'TravasolPlus')
        ? getAminoacidos(prescription!).volumen : 0;
    const aminoPlasmalCE: number = (aminoacidos === 'Aminoplasmal CE')
        ? getAminoacidos(prescription!).volumen : 0;
    const aminoPlasmalSE: number = (aminoacidos === 'Aminoplasmal SE')
        ? getAminoacidos(prescription!).volumen : 0;

    const aminovenInfantils: number = (aminoacidos === 'Aminoven Infantil')
        ? getAminoacidos(prescription!).volumen : 0;
    const primene: number = (aminoacidos === 'Primene')
        ? getAminoacidos(prescription!).volumen : 0;

    const cernevit: number = (vit_hidrosoluble === 'Cernevit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const soluvit: number = (vit_hidrosoluble === 'Soluvit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const soluvit_vit: number = prescription?.soluvit_vitalip === '' ? 0 : parseFloat(prescription?.soluvit_vitalip!);

    const multi12K: number = (vit_hidrosoluble === 'Multi12Potasio')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const vitaLipidInfantil: number = (tipo_paciente === 'Pediatrico')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const vitaLipidAd: number = (tipo_paciente === 'Adulto')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const elementos_traza: string = prescription?.elementos_traza!

    const volOligoNulanza: number = (elementos_traza === 'Nulanza')
        ? parseFloat(prescription?.req_elementos_traza!) : 0;

    const volOligoSensitrace: number = (elementos_traza === 'Sencitrace')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;
    ////////////////////////////////////////////////////////////////////////////////
    const smoflipid: number = (lipidos === 'Smoflipid')
        ? getLipidos(prescription).volumen : 0;

    const clinoleic: number = (lipidos === 'Clinoleic')
        ? getLipidos(prescription).volumen : 0;

    const lipoplus: number = (lipidos === 'Lipoplus')
        ? getLipidos(prescription).volumen : 0;

    // let osmolaridad: number = 0;

    // console.log('DDDDD:',prescription?.req_vit_hidrosolubles)

    params.volumen =
        ((getDextrosa(prescription!).volumen * 2780)
            // + (getAminoacidos(prescription!).volumen * 1505)
            + (smoflipid * 290)
            + (clinoleic * 270)
            + (lipoplus * 310)
            + (getOmegaven(prescription!).volumen * 273)
            + (getDipeptiven(prescription!).volumen * 921)
            + (getSodio(prescription!).volumen * 4001)
            + (getPotacio(prescription!).volumen * 4000)
            + (getFosfatoSodio(prescription!).volumen * 2570)
            + (getFosfatoPotacio(prescription!).volumen * 6380)
            + (getCalcio(prescription!).volumen * 626)
            + (getMagnesio(prescription!).volumen * 1623)
            + (travasol * 1357)
            + (primene * 780)
            + (aminovenInfantils * 885)
            + (aminovenSE * 1505)
            + (aminoPlasmalCE * 1030)
            + (aminoPlasmalSE * 864)
            + (volOligoNulanza * 2500)
            + (volOligoSensitrace * 100)
            + (cernevit * 4820)
            + (multi12K * 298.5)
            + (vitaLipidInfantil * 260)
            + (vitaLipidAd * 260)
            + (soluvit * 490)
            + (soluvit_vit * 770)
            + (getVit_C(prescription!).volumen * 1740)
            + (parseFloat(prescription?.acido_folico!) * 227)
            + (volAgua * 1))
        / (volTotalNPT)



    // console.log(
    //     '////////////////OSMOLARIDAD/////////////////////',
    //     'Dextrosa:', (getDextrosa(prescription!).volumen),
    //     // + (getAminoacidos(prescription!).volumen * 1505)
    //     'Lipidos:', (getLipidos(prescription!).volumen),
    //     'Omegaven:', (getOmegaven(prescription!).volumen),
    //     'Dipeptiven:', (getDipeptiven(prescription!).volumen),
    //     'Sodio:', (getSodio(prescription!).volumen),
    //     'Potacio:', (getPotacio(prescription!).volumen),
    //     'Fosforo:', (getFosforo(prescription!).volumen),
    //     'Calcio:', (getCalcio(prescription!).volumen),
    //     'Magnesio:', (getMagnesio(prescription!).volumen),
    //     'travasol:', (travasol),
    //     'primene:', (primene),
    //     'aminovenInfantils:', (aminovenInfantils),
    //     'aminovenSE:', (aminovenSE),
    //     'aminoPlasmalCE:', (aminoPlasmalCE),
    //     'aminoPlasmalSE:', (aminoPlasmalSE),
    //     'volOligoNulanza:', (volOligoNulanza),
    //     'volOligoSensitrace:', (volOligoSensitrace),
    //     'cernevit:', (cernevit),
    //     'multi12K:', (multi12K),
    //     'vitaLipidInfantil:', (vitaLipidInfantil),
    //     'vitaLipidAd:', (vitaLipidAd),
    //     'soluvit:', (soluvit),
    //     'Vit_C:', (getVit_C(prescription!).volumen),
    //     'acido_folico:', (parseFloat(prescription?.acido_folico!)),
    //     'Vol_Agua:', (volAgua * 1)
    // )
    // // }

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
            + (parseFloat(prescription?.soluvit_vitalip!) * 770)
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

    params.volumen = (getAminoacidos(prescription!).volumen * concSinAminoacidos * 0.16) + (getDipeptiven(prescription!).volumen * 0.032)
    params.conPurga = (getAminoacidos(prescription!).conPurga * concSinAminoacidos * 0.16) + (getDipeptiven(prescription!).conPurga * 0.032)

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

    params.volumen = ((getLipidos(prescription!).volumen * 20 + getOmegaven(prescription!).volumen * 10 + getSoluv_Vit(prescription!).volumen * 10 + getVitLiposSolubles(prescription!).volumen * 10) / volTotalNPT)
    params.conPurga = ((getLipidos(prescription!).conPurga * 20 + getOmegaven(prescription!).conPurga * 10 + getSoluv_Vit(prescription!).conPurga * 10 + getVitLiposSolubles(prescription!).conPurga * 10) / volTotalNPT)

    return params;
}

export const tipo_bolsa = (volTotal: number) => {

    if ((volTotal >= 0) && (150 >= volTotal)) {
        return 'FREKA x 150 mL'
    } else if ((volTotal >= 150) && (250 >= volTotal)) {
        return 'FREKA x 250 mL'
    } else if ((volTotal >= 250) && (500 >= volTotal)) {
        return 'FREKA x 500 mL'
    } else if ((volTotal >= 500) && (1000 >= volTotal)) {
        return 'FREKA x 1000 mL'
    } else if ((volTotal >= 1000) && (1800 >= volTotal)) {
        return 'FREKA x 2000 mL'
    } else if ((volTotal >= 1800) && (2800 >= volTotal)) {
        return 'FREKA x 3000 mL'
    } else if ((volTotal >= 2800) && (5000 >= volTotal)) {
        return 'PISA x 3000 mL'
    } else {
        return '-'
    }

}

export const peso_teorico = (prescription: IPrescriptions) => {

    // ([$volpurgaDextrosatrosa * 1.11]
    //     + [$volpurgaAminoven 15 % SE * 1.048]
    //     + [$volpurgaTravasol 15 % * 1.05]
    //     + [$volpurgaPrimene 10 % * 1.03]
    //     + [$volpurgaAminoven Infant 10 % * 1.029]
    //     + [$volpurgaAminoplasmal 10 % CE * 1.03]
    //     + [$volpurgaAminoplasmal 10 % SE * 1.03]
    //     + [$volpurgaClinoleic * 1.986]
    //     + [$volpurgaSmoflipid * 0.988]
    //     + [$volpurgaLipoplus * 0.98]
    //     + [$volpurgaOmegaven * 0.996]
    //     + [$volpurgaDipeptiven * 1.069]
    //     + [$volpurgaSodio * 1.075]
    //     + [$volpurgaPotasio + 1.09]
    //     + [$volpurgaFosfato de potasio * 1.32]
    //     + [$volpurgaFosfato de sodio * 1.147]
    //     + [$volpurgaCalcio * 1.05]
    //     + [$volpurgaMagnesio * 1.21]
    //     + [$volpurgaOligoNulanza * 1.099]
    //     + [$volpurgaOligoSensitrace * 1]
    //     + [$volpurgaOligoPeditrace * 0.999][$volpurgaCernevit * 1]
    //     + [$volpurgaMulti12k * 1]
    //     + [$volpurgaVitaLipidInfantil * 1]
    //     + [$volpurgaVitaLipidAdultos * 0.1]
    //     + [$volpurgaSoluvit * 1]
    //     + ($VolpurgaSoluvit / Vitalipit * 1.015)
    //     + [$volpurgaVitaminaC * 1] + [$volpurgaAcidoFolico * 1]
    //     + [$volpurgaAgua * 1])

    const tipo_paciente: string = prescription?.tipo_paciente!;
    const volAgua: number = getAgua(prescription!).volumen;
    const vit_hidrosoluble: string = prescription?.vit_hidrosolubles!;
    const aminoacidos: string = prescription?.aminoacidos
    const lipidos: string = prescription?.lipidos

    const aminovenSE: number = (aminoacidos === 'AminovenSE')
        ? getAminoacidos(prescription!).volumen : 0;
    const travasol: number = (aminoacidos === 'TravasolPlus')
        ? getAminoacidos(prescription!).volumen : 0;
    const aminoPlasmalCE: number = (aminoacidos === 'Aminoplasmal CE')
        ? getAminoacidos(prescription!).volumen : 0;
    const aminoPlasmalSE: number = (aminoacidos === 'Aminoplasmal SE')
        ? getAminoacidos(prescription!).volumen : 0;

    const aminovenInfantils: number = (aminoacidos === 'Aminoven Infantil')
        ? getAminoacidos(prescription!).volumen : 0;
    const primene: number = (aminoacidos === 'Primene')
        ? getAminoacidos(prescription!).volumen : 0;

    const cernevit: number = (vit_hidrosoluble === 'Cernevit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const soluvit: number = (vit_hidrosoluble === 'Soluvit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const soluvit_vit: number = prescription?.soluvit_vitalip === '' ? 0 : parseFloat(prescription?.soluvit_vitalip!);

    const multi12K: number = (vit_hidrosoluble === 'Multi12Potasio')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const vitaLipidInfantil: number = (tipo_paciente === 'Pediatrico')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const vitaLipidAd: number = (tipo_paciente === 'Adulto')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const elementos_traza: string = prescription?.elementos_traza!

    const volOligoNulanza: number = (elementos_traza === 'Nulanza')
        ? parseFloat(prescription?.req_elementos_traza!) : 0;

    const volOligoSensitrace: number = (elementos_traza === 'Sencitrace')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;
    ////////////////////////////////////////////////////////////////////////////////
    const smoflipid: number = (lipidos === 'Smoflipid')
        ? getLipidos(prescription).volumen : 0;

    const clinoleic: number = (lipidos === 'Clinoleic')
        ? getLipidos(prescription).volumen : 0;

    const lipoplus: number = (lipidos === 'Lipoplus')
        ? getLipidos(prescription).volumen : 0;


    const peso_teorico = (
        ((getDextrosa(prescription!).volumen * 1.11)
            // + (getAminoacidos(prescription!).volumen * 1505)
            + (aminovenSE * 1.048)
            + (travasol * 1.05)
            + (primene * 1.03)
            + (aminovenInfantils * 1.029)
            + (aminoPlasmalCE * 1.03)
            + (aminoPlasmalSE * 1.03)
            + (clinoleic * 1.986)
            + (smoflipid * 0.988)
            + (lipoplus * 0.98)
            + (getOmegaven(prescription!).volumen * 0.996)
            + (getDipeptiven(prescription!).volumen * 1.069)
            + (getSodio(prescription!).volumen * 1.075)
            + (getPotacio(prescription!).volumen * 1.09)
            + (getFosfatoPotacio(prescription!).volumen * 1.32)
            + (getFosfatoSodio(prescription!).volumen * 1.147)
            + (getCalcio(prescription!).volumen * 1.05)
            + (getMagnesio(prescription!).volumen * 1.21)
            + (volOligoNulanza * 1.099)
            + (volOligoSensitrace * 1)
            + (cernevit * 1)
            + (multi12K * 1)
            + (vitaLipidInfantil * 1)
            + (vitaLipidAd * 0.1)
            + (soluvit * 1)
            + (soluvit_vit * 1.015)
            + (getVit_C(prescription!).volumen * 1)
            + (parseFloat(prescription?.acido_folico!) * 1)
            + (volAgua * 1))
    )

    return peso_teorico;
}




