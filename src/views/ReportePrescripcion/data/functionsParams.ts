import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { parse } from "path";

export interface IParamFunc {
    requerimiento: any,
    volumen: any,
}
export interface IParamNumeric {
    requerimiento:number,
    volumen:number,
}
//////////////////////////////FORMULACIONES//////////////
export const getSodio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const sodio: number = parseInt(prescription?.sodio_total!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === 'Por requerimientos') {
        params.requerimiento = sodio * peso / 2;
        params.volumen = sodio

    } else {
        params.volumen = sodio * 2 / peso;
        params.requerimiento = sodio
    }

    return params;
}

export const getPotacio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const potacio: number = parseInt(prescription?.potasio_total!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === 'Por requerimientos') {
        params.requerimiento = potacio * peso / 2;
        params.volumen = potacio
    } else {
        params.volumen = potacio * 2 / peso;
        params.requerimiento = potacio
    }
    return params;
}

export const getCalcio = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const calcio: number = parseInt(prescription?.req_calcio!);
    const tCalcio: string = prescription?.calcio!;
    const peso: number = prescription?.peso!;

    if (tp === 'Por requerimientos') {
        if (tCalcio === 'Gluconato de Calcio') {

            params.requerimiento = calcio * peso / 0.01;
            params.volumen = calcio
        } else {
            params.requerimiento = calcio * peso * 2.15;
            params.volumen = calcio
        }
    } else {

        if (tCalcio === 'Gluconato de Calcio') {
            params.volumen = calcio * 100 / peso;
            params.requerimiento = calcio
        } else {
            params.volumen = calcio * 0.465 / peso;
            params.requerimiento = calcio
        }
    }

    return params;
}

export const getFosforo = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const fosforo: number = parseInt(prescription?.req_fosfato!);
    const tipofosfato: string = prescription?.fosfato!;
    const peso: number = prescription?.peso!;

    if (tipofosfato === 'Fosfato de sodio') {

        if (tp === 'Por requerimientos') {
            params.requerimiento = fosforo * 1 / peso;
            params.volumen = fosforo;
        } else {
            params.requerimiento = fosforo * 1 * peso;
            params.volumen = fosforo
        }
    } else {
        if (tp === 'Por requerimientos') {
            params.volumen = fosforo * peso / 2.6;
            params.requerimiento = fosforo
        } else {
            params.volumen = fosforo * 2.6 / peso;
            params.requerimiento = fosforo
        }
    }

    return params;
}

export const getMagnesio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const magnesio: number = parseInt(prescription?.req_magnesio!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === 'Por requerimientos') {
        params.requerimiento = magnesio * peso / 200;
        params.volumen = magnesio
    } else {
        params.volumen = magnesio * 200 / peso;
        params.requerimiento = magnesio
    }
    return params;
}

export const getDextrosa = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dextrosa: number = parseInt(prescription?.dextrosa!);
    const peso: number = prescription?.peso!;
    const tiempoInfusion: number = prescription?.tiempo_infusion!;

    if (tp === 'Por requerimientos') {
        params.requerimiento = dextrosa * peso * tiempoInfusion * 0.12;
        params.volumen = dextrosa
    } else {
        params.volumen = dextrosa / (peso * tiempoInfusion * 0.12);
        params.requerimiento = dextrosa
    }
    return params;
}

export const getAminoacidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const tipoPaciente: string = prescription?.tipo_paciente!;
    const aminoacidos: number = parseInt(prescription?.req_aminoacidos!);
    const peso: number = prescription?.peso!;
    const tipoAminoacidos: string = prescription?.aminoacidos!;
    let concSinAminoacidos: number = 0;

    if (tipoAminoacidos === 'Aminoven') { if (tipoPaciente === 'Adulto') { concSinAminoacidos = 0.15 } else { concSinAminoacidos = 0.1 } }
    if (tipoAminoacidos === 'TravasolPlus') { concSinAminoacidos = 0.15 }
    if (tipoAminoacidos === 'Aminoplasmal') { if (tipoPaciente === 'Adulto') { concSinAminoacidos = 0.15 } else { concSinAminoacidos = 0.1 } }
    if (tipoAminoacidos === 'Aminosteril') { concSinAminoacidos = 0.08 }
    if (tipoAminoacidos === 'Trophamine') { concSinAminoacidos = 1 }

    if (tp === 'Por requerimientos') {
        params.requerimiento = aminoacidos * peso / concSinAminoacidos;
        params.volumen = aminoacidos
    } else {
        params.volumen = aminoacidos * concSinAminoacidos / peso;
        params.requerimiento = aminoacidos
    }
    return params;
}

export const getLipidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const tipoLipidos: string = prescription?.lipidos!
    const lipidos: number = parseInt(prescription?.req_lipidos);
    const concSinLipidos: number = 0.2;
    const peso: number = prescription?.peso!;

    if (tp === 'Por requerimientos') {
        params.requerimiento = lipidos * peso / concSinLipidos
        params.volumen = lipidos
    } else {
        params.volumen = lipidos * concSinLipidos / peso;
        params.requerimiento = lipidos
    }
    return params;
}

export const getOmegaven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };
    const tp: string = prescription?.tipo_prescripcion!;
    const omegaven: number = parseInt(prescription?.omegaven!);
    const concSinOmegaven: number = 0.1;
    const peso: number = prescription?.peso!;

    if (tp === 'Por requerimientos') {
        params.requerimiento = omegaven * peso / concSinOmegaven;
        params.volumen = omegaven
    } else {
        params.volumen = omegaven * concSinOmegaven / peso;
        params.requerimiento = omegaven
    }
    return params;
}

export const getDipeptiven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dipeptiven: number = parseInt(prescription?.dipeptiven!);
    const concSinDipeptiven: number = 0.2;
    const peso: number = prescription?.peso!;

    if (tp === 'Por requerimientos') {
        params.requerimiento = dipeptiven * peso / concSinDipeptiven;
        params.volumen = dipeptiven
    } else {
        params.volumen = dipeptiven * concSinDipeptiven / peso;
        params.requerimiento = dipeptiven
    }
    return params;
}


export const getAgua = (prescription: IPrescriptions) => {

    const volTotalNPT: number = prescription?.volumen!
    const oligoelementos: number = parseInt(prescription?.req_elementos_traza!)
    const vitaminas: number = parseInt(prescription?.req_vit_hidrosolubles!) + parseInt(prescription?.req_vit_liposolubles!)

    let agua: number = volTotalNPT - (
        parseInt(prescription?.dextrosa!) + parseInt(prescription?.req_lipidos!)
         + parseInt(prescription?.req_aminoacidos!) + parseInt(prescription?.dipeptiven!)
         + parseInt(prescription?.omegaven!) + parseInt(prescription?.sodio_total!) + parseInt(prescription?.potasio_total!) + parseInt(prescription?.req_fosfato!)
         + parseInt(prescription?.req_magnesio!) + parseInt(prescription?.req_calcio!) + oligoelementos + vitaminas
        + parseInt(prescription?.vit_C!) + parseInt(prescription?.acido_folico!)
    );
    
    return agua;
}


export const getVolTotal = (prescription: IPrescriptions) => {

    const volAgua: number = getAgua(prescription)
    const oligoelementos: number = parseInt(prescription?.req_elementos_traza)
    const vitaminas: number = parseInt(prescription?.req_vit_hidrosolubles) + parseInt(prescription?.req_vit_liposolubles)

    let volTotal: number = volAgua
        + parseInt(prescription?.dextrosa!) + parseInt(prescription?.req_lipidos!) + parseInt(prescription?.req_aminoacidos!) + parseInt(prescription?.dipeptiven!)
        + parseInt(prescription?.omegaven!) + parseInt(prescription?.sodio_total!) + parseInt(prescription?.potasio_total!) + parseInt(prescription?.req_fosfato!)
        + parseInt(prescription?.req_magnesio!) + parseInt(prescription?.req_calcio!) + oligoelementos + vitaminas
        + parseInt(prescription?.vit_C!) + parseInt(prescription?.acido_folico!)

    return volTotal;
}

export const getVelinfusion = (prescription: IPrescriptions) => {

    const volTotal: number = getVolTotal(prescription);
    const tiempoInfusion: number = prescription?.tiempo_infusion!

    let velinfusion: number = volTotal / tiempoInfusion
    return velinfusion;
}


export const getOsmolaridad = (prescription: IPrescriptions) => {

    const volTotalNPT: number = prescription?.volumen!;
    const volAgua: number = getAgua(prescription!);

    const vit_hidrosoluble: string = prescription?.vit_hidrosolubles!;

    const cernevit: number = (vit_hidrosoluble === 'Cernevit')
        ? parseInt(prescription?.req_vit_hidrosolubles!) : 0;
    const soluvit: number = (vit_hidrosoluble === 'Soluvit')
        ? parseInt(prescription?.req_vit_hidrosolubles!) : 0;
    const multi12K: number = (vit_hidrosoluble === 'Multi12Potasio')
        ? parseInt(prescription?.req_vit_hidrosolubles!) : 0;

    const tipo_paciente: string = prescription?.tipo_paciente!;

    const vitaLipidInfantil: number = (tipo_paciente === 'Pediatrico')
        ? parseInt(prescription?.req_vit_liposolubles!) : 0;
    const vitaLipidAd: number = (tipo_paciente === 'Adulto')
        ? parseInt(prescription?.req_vit_liposolubles!) : 0;

    const elementos_traza: string = prescription?.elementos_traza!

    const volOligoNulanza: number = (elementos_traza === 'Nulanza')
        ? parseInt(prescription?.req_vit_hidrosolubles!) : 0;
    const volOligoSensitrace: number = (elementos_traza === 'Sencitrace')
        ? parseInt(prescription?.req_vit_hidrosolubles!) : 0;

    let osmolaridad: number =
        ((parseInt(prescription?.dextrosa!) * 2780) + (parseInt(prescription?.req_lipidos!) * 290) + (parseInt(prescription?.req_aminoacidos!) * 1505) + (parseInt(prescription?.dipeptiven!) * 921)
            + (parseInt(prescription?.omegaven!) * 273) + (parseInt(prescription?.sodio_total!) * 4001) + (parseInt(prescription?.potasio_total!) + 4000) + (parseInt(prescription?.req_fosfato!) * 2570)
            + (parseInt(prescription?.req_magnesio!) * 1623) + (parseInt(prescription?.req_calcio!) * 626) + (volOligoNulanza * 2500) + (volOligoSensitrace * 100)
            + (cernevit * 4820) + (multi12K * 298.5) + (vitaLipidInfantil * 260) + (vitaLipidAd * 260)
        + (soluvit * 490) + (parseInt(prescription?.vit_C!) * 1740) + (parseInt(prescription?.acido_folico!) * 227) + (volAgua * 1)) / (volTotalNPT + prescription?.purga)
    return osmolaridad;
}


export const getCalTotales = (prescription: IPrescriptions) => {

    const calTotalesProteicas: number = getCaloriasTotalesProteicas(prescription!);
    const calNoProteicasCHO: number = getCaloriasNoProteicasCHOS(prescription!);
    const calNoProteicasLIPIDOS: number = getCaloriasNoProteicasLIPIDOS(prescription!);

    let calTotales: number = calTotalesProteicas + calNoProteicasCHO + calNoProteicasLIPIDOS
    return calTotales;
}

export const getCalTotalesKgDia = (prescription: IPrescriptions) => {

    const calTotales: number = getCalTotales(prescription);
    const peso: number = prescription?.peso!;

    let calTotalesKgDia: number = calTotales / peso
    return calTotalesKgDia;
}

export const getGramosTotalesNitro = (prescription: IPrescriptions) => {

    const aminoacidos: number = parseInt(prescription?.req_aminoacidos!);
    const concSinAminoacidos: number = parseInt(prescription?.req_aminoacidos!) * 0.15;
    const dipeptiven: number = parseInt(prescription?.dipeptiven!)

    let gramosTotalesNitro: number = (aminoacidos + concSinAminoacidos * 0.16) + (dipeptiven * 0.32)
    return gramosTotalesNitro;
}



export const getCaloriasTotalesProteicas = (prescription: IPrescriptions) => {

    const aminoacidos: number = parseInt(prescription?.req_aminoacidos!);
    const concSinAminoacidos: number = parseInt(prescription?.req_aminoacidos!) * 0.15;
    const dipeptiven: number = parseInt(prescription?.dipeptiven!);

    let caloriasTotalesProteicas: number = (aminoacidos + concSinAminoacidos * 4) + (dipeptiven * 0.8)
    return caloriasTotalesProteicas;
}

export const getCaloriasTotalesProteicasKg = (prescription: IPrescriptions) => {

    const calTotalesProteicas: number = getCaloriasTotalesProteicas(prescription!);
    const peso: number = prescription?.peso!

    let caloriasTotalesProteicasKg: number = calTotalesProteicas / peso
    return caloriasTotalesProteicasKg;
}

export const getCaloriasNoProteicasCHOS = (prescription: IPrescriptions) => {

    const dextrosa: number = parseInt(prescription?.dextrosa!);

    let caloriasNoProteicasCHOS: number = dextrosa * 1.7
    return caloriasNoProteicasCHOS;
}

export const getCaloriasNoProteicasLIPIDOS = (prescription: IPrescriptions) => {

    const lipidos: number = parseInt(prescription?.req_lipidos!);
    const omegaven: number = parseInt(prescription?.omegaven!);

    let caloriasNoProteicasLIPIDOS: number = (lipidos * 2) + (omegaven * 1.12)
    return caloriasNoProteicasLIPIDOS;
}

export const getCaloriasNoProteicasKg = (prescription: IPrescriptions) => {


    const calNoProteicasCHO: number = getCaloriasNoProteicasCHOS(prescription!);
    const calNoProteicasLIPIDOS: number = getCaloriasNoProteicasLIPIDOS(prescription!);
    const peso: number = prescription?.peso!

    let caloriasNoProteicasKg: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / peso
    return caloriasNoProteicasKg;
}

export const getRelacionCalNoProteicasN = (prescription: IPrescriptions) => {

    const calNoProteicasCHO: number = getCaloriasNoProteicasCHOS(prescription!);
    const calNoProteicasLIPIDOS: number = getCaloriasNoProteicasLIPIDOS(prescription!);
    const gramosTotalesNitro: number = getGramosTotalesNitro(prescription!);

    let relacionCalNoProteicasN: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / gramosTotalesNitro
    return relacionCalNoProteicasN;
}

export const getRelacionCalNoProteicasAminoacidos = (prescription: IPrescriptions) => {

    const calNoProteicasCHO: number = getCaloriasNoProteicasCHOS(prescription!);
    const calNoProteicasLIPIDOS: number = getCaloriasNoProteicasLIPIDOS(prescription!);
    const gramosTotalesNitro: number = getGramosTotalesNitro(prescription!);

    let relacionCalNoProteicasAminoacidos: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / gramosTotalesNitro * 6.25
    return relacionCalNoProteicasAminoacidos;
}


export const getConcentracionDeCHOS = (prescription: IPrescriptions) => {

    const dextrosa: number = parseInt(prescription?.dextrosa!);
    const volTotalNPT: number = prescription?.volumen!;

    let concentracionDeCHOS: number = dextrosa * 0.5 / volTotalNPT
    return concentracionDeCHOS;
}

export const getConcentracionDeProteinas = (prescription: IPrescriptions) => {

    const aminoacidos: number = parseInt(prescription?.req_aminoacidos!);
    const concSinAminoacidos: number = parseInt(prescription?.req_aminoacidos!) * 0.15;
    const dipeptiven: number = parseInt(prescription?.dipeptiven!);
    const volTotalNPT: number = prescription?.volumen!;

    let concentracionDeProteinas: number = (aminoacidos * concSinAminoacidos + dipeptiven * 0.2) / volTotalNPT
    return concentracionDeProteinas;
}

export const getConcentracionDeLipidos = (prescription: IPrescriptions) => {

    const lipidos: number = parseInt(prescription?.req_lipidos!);
    const omegaven: number = parseInt(prescription?.omegaven!);
    const volTotalNPT: number = prescription?.volumen!;

    let concentracionDeLipidos: number = (lipidos * 0.2 + omegaven * 0.1) / volTotalNPT
    return concentracionDeLipidos;
}




// export const reporteMicronutrientes:IReporte[]=[
//     {
//     parametro: 'Sodio (req./ml)',
//     requerimiento:getSodio(),
//     volumen:,
//     }
// ]





