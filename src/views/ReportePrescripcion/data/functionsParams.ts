import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { parse } from "path";
import { preProcessFile } from "typescript";

export interface IParamFunc {
    requerimiento: any,
    volumen: any,
}
export interface IParamNumeric {
    requerimiento: number,
    volumen: number,
}

// export const tipoPrescripcion:string='Por volúmenes';
export const tipoPrescripcion: string = 'Por requerimientos';
//////////////////////////////FORMULACIONES//////////////
export const getSodio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const sodio: number = parseFloat(prescription?.sodio_total!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = sodio * peso / 2;
        params.requerimiento = sodio

    } else {
        params.requerimiento = sodio * 2 / peso;
        params.volumen = sodio
    }

    return params;
}

export const getPotacio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const potacio: number = parseFloat(prescription?.potasio_total!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = potacio * peso / 2;
        params.requerimiento = potacio
    } else {
        params.requerimiento = potacio * 2 / peso;
        params.volumen = potacio
    }
    return params;
}

export const getCalcio = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const calcio: number = parseFloat(prescription?.req_calcio!);
    const tCalcio: string = prescription?.calcio!;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        if (tCalcio === 'Gluconato de Calcio') {

            params.volumen = calcio * peso * 0.01;
            params.requerimiento = calcio
        } else {
            params.volumen = calcio * peso * 2.15;
            params.requerimiento = calcio
        }
    } else {

        if (tCalcio === 'Gluconato de Calcio') {
            params.requerimiento = calcio * 100 / peso;
            params.volumen = calcio
        } else {
            params.requerimiento = calcio * 0.465 / peso;
            params.volumen = calcio
        }
    }

    return params;
}

export const getFosforo = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const fosforo: number = parseFloat(prescription?.req_fosfato!);
    const tipofosfato: string = prescription?.fosfato!;
    const peso: number = prescription?.peso!;

    if (tipofosfato === 'Fosfato de sodio') {

        if (tp === tipoPrescripcion) {
            params.volumen = fosforo * 1 * peso;
            params.requerimiento = fosforo;
        } else {
            params.requerimiento = fosforo * 1 / peso;
            params.volumen = fosforo
        }
    } else {
        if (tp === tipoPrescripcion) {
            params.volumen = fosforo * peso / 2.6;
            params.requerimiento = fosforo
        } else {
            params.requerimiento = fosforo * 2.6 / peso;
            params.volumen = fosforo
        }
    }

    return params;
}

export const getMagnesio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;
    const magnesio: number = parseFloat(prescription?.req_magnesio!);
    // const magnesio: number = parseInt(prescription?.req_magnesio!);
    const peso: number = prescription?.peso!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = magnesio * peso / 200;
        params.requerimiento = magnesio
    } else {
        params.requerimiento = magnesio * 200 / peso;
        params.volumen = magnesio
    }
    return params;
}


export const getVit_C = (prescription: IPrescriptions) => {

    const vitC: string = prescription?.vit_C!;
    const tp: string = prescription?.tipo_prescripcion!;

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    if (tp === tipoPrescripcion) {
        params.volumen = parseFloat(vitC) * 100
        params.requerimiento = parseFloat(vitC);
    } else {
        params.volumen = parseFloat(vitC);
        params.requerimiento = parseFloat(vitC) / 100
    }
    return params;
}

export const getDextrosa = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dextrosa: number = parseFloat(prescription?.dextrosa!);
    const peso: number = prescription?.peso!;
    const tiempoInfusion: number = prescription?.tiempo_infusion!;

    if (tp === tipoPrescripcion) {
        params.volumen = dextrosa * peso * tiempoInfusion * 0.12;
        params.requerimiento = dextrosa
    } else {
        params.requerimiento = dextrosa / (peso * tiempoInfusion * 0.12);
        params.volumen = dextrosa
    }
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

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const aminoacidos: number = parseFloat(prescription?.req_aminoacidos!);
    const peso: number = prescription?.peso!;
    const concSinAminoacidos = concAminoacidos(prescription);

    if (tp === tipoPrescripcion) {
        params.volumen = aminoacidos * peso / concSinAminoacidos;
        params.requerimiento = aminoacidos
    } else {
        params.requerimiento = aminoacidos * concSinAminoacidos / peso;
        params.volumen = aminoacidos
    }
    return params;
}

export const getLipidos = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const tipoLipidos: string = prescription?.lipidos!
    const lipidos: number = parseFloat(prescription?.req_lipidos);
    const concSinLipidos: number = 0.2;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        params.volumen = lipidos * peso / concSinLipidos
        params.requerimiento = lipidos
    } else {
        params.requerimiento = lipidos * concSinLipidos / peso;
        params.volumen = lipidos
    }
    return params;
}

export const getOmegaven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };
    const tp: string = prescription?.tipo_prescripcion!;
    const omegaven: number = parseFloat(prescription?.omegaven!);
    const concSinOmegaven: number = 0.1;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        params.volumen = omegaven * peso / concSinOmegaven;
        params.requerimiento = omegaven
    } else {
        params.requerimiento = omegaven * concSinOmegaven / peso;
        params.volumen = omegaven
    }
    return params;
}

export const getDipeptiven = (prescription: IPrescriptions) => {

    const params: IParamFunc = { requerimiento: 0, volumen: 0 };

    const tp: string = prescription?.tipo_prescripcion!;
    const dipeptiven: number = parseFloat(prescription?.dipeptiven!);
    const concSinDipeptiven: number = 0.2;
    const peso: number = prescription?.peso!;

    if (tp === tipoPrescripcion) {
        params.volumen = dipeptiven * peso / concSinDipeptiven;
        params.requerimiento = dipeptiven
    } else {
        params.requerimiento = dipeptiven * concSinDipeptiven / peso;
        params.volumen = dipeptiven
    }
    return params;
}


export const getAgua = (prescription: IPrescriptions) => {

    const volTotalNPT: number = prescription?.volumen!
    const oligoelementos: number = parseFloat(prescription?.req_elementos_traza!)
    const vitaminas: number = parseFloat(prescription?.req_vit_hidrosolubles!) + parseFloat(prescription?.req_vit_liposolubles!)
    const tp: string = prescription?.tipo_prescripcion!;

    let agua: number = 0;

    if (tp === tipoPrescripcion) {
        agua = volTotalNPT - (
            parseFloat(prescription?.dextrosa!) + parseFloat(prescription?.req_lipidos!)
            + parseFloat(prescription?.req_aminoacidos!) + parseFloat(prescription?.dipeptiven!)
            + parseFloat(prescription?.omegaven!) + parseFloat(prescription?.sodio_total!)
            + parseFloat(prescription?.potasio_total!) + parseFloat(prescription?.req_fosfato!)
            + parseFloat(prescription?.req_magnesio!) + parseFloat(prescription?.req_calcio!)
            + oligoelementos + vitaminas
            + parseFloat(prescription?.vit_C!) + parseFloat(prescription?.acido_folico!)
        )
    } else {
        agua = volTotalNPT - (
            getDextrosa(prescription!).volumen + getLipidos(prescription!).volumen
            + getAminoacidos(prescription!).volumen + getDipeptiven(prescription!).volumen
            + getOmegaven(prescription!).volumen + getSodio(prescription!).volumen
            + getPotacio(prescription!).volumen + getFosforo(prescription!).volumen
            + getMagnesio(prescription!).volumen + getCalcio(prescription!).volumen
            + oligoelementos + vitaminas
            + getVit_C(prescription!).volumen + parseFloat(prescription?.acido_folico!)
        );

    }

    console.log('Agua:', agua);

    return agua;
}


export const getVolTotal = (prescription: IPrescriptions) => {

    const volAgua: number = getAgua(prescription)
    const oligoelementos: number = parseFloat(prescription?.req_elementos_traza)
    const vitaminas: number = parseFloat(prescription?.req_vit_hidrosolubles) + parseFloat(prescription?.req_vit_liposolubles)

    const tp: string = prescription?.tipo_prescripcion!;

    let volTotal: number = 0;

    if (tp === tipoPrescripcion) {

        volTotal = volAgua
            + parseFloat(prescription?.dextrosa!) + parseFloat(prescription?.req_lipidos!)
            + parseFloat(prescription?.req_aminoacidos!) + parseFloat(prescription?.dipeptiven!)
            + parseFloat(prescription?.omegaven!) + parseFloat(prescription?.sodio_total!)
            + parseFloat(prescription?.potasio_total!) + parseFloat(prescription?.req_fosfato!)
            + parseFloat(prescription?.req_magnesio!) + parseFloat(prescription?.req_calcio!)
            + oligoelementos + vitaminas
            + parseFloat(prescription?.vit_C!)
            + parseFloat(prescription?.acido_folico!)
    } else {
        volTotal = volAgua
            + getDextrosa(prescription!).volumen + getLipidos(prescription!).volumen
            + getAminoacidos(prescription!).volumen + getDipeptiven(prescription!).volumen
            + getOmegaven(prescription!).volumen + getSodio(prescription!).volumen
            + getPotacio(prescription!).volumen + getFosforo(prescription!).volumen
            + getMagnesio(prescription!).volumen + getCalcio(prescription!).volumen
            + oligoelementos + vitaminas
            + getVit_C(prescription!).volumen
            + parseFloat(prescription?.acido_folico!)
    }

    console.log('Volumen Total:', volTotal)

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
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;
    const soluvit: number = (vit_hidrosoluble === 'Soluvit')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;
    const multi12K: number = (vit_hidrosoluble === 'Multi12Potasio')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const tipo_paciente: string = prescription?.tipo_paciente!;

    const vitaLipidInfantil: number = (tipo_paciente === 'Pediatrico')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;
    const vitaLipidAd: number = (tipo_paciente === 'Adulto')
        ? parseFloat(prescription?.req_vit_liposolubles!) : 0;

    const elementos_traza: string = prescription?.elementos_traza!

    const volOligoNulanza: number = (elementos_traza === 'Nulanza')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;
    const volOligoSensitrace: number = (elementos_traza === 'Sencitrace')
        ? parseFloat(prescription?.req_vit_hidrosolubles!) : 0;

    const tp: string = prescription?.tipo_prescripcion!;

    let osmolaridad: number = 0;

    if (tp === tipoPrescripcion) {
        osmolaridad =
            ((parseFloat(prescription?.dextrosa!) * 2780)
                + (parseFloat(prescription?.req_aminoacidos!) * 1505)
                + (parseFloat(prescription?.req_lipidos!) * 290)
                + (parseFloat(prescription?.omegaven!) * 273)
                + (parseFloat(prescription?.dipeptiven!) * 921)
                + (parseFloat(prescription?.sodio_total!) * 4001)
                + (parseFloat(prescription?.potasio_total!) * 4000)
                + (parseFloat(prescription?.req_fosfato!) * 2570)
                + (parseFloat(prescription?.req_calcio!) * 626)
                + (parseFloat(prescription?.req_magnesio!) * 1623)
                + (volOligoNulanza * 2500)
                + (volOligoSensitrace * 100)
                + (cernevit * 4820)
                + (multi12K * 298.5)
                + (vitaLipidInfantil * 260)
                + (vitaLipidAd * 260)
                + (soluvit * 490)
                + (parseFloat(prescription?.vit_C!) * 1740)
                + (parseFloat(prescription?.acido_folico!) * 227)
                + (volAgua * 1))
            / (volTotalNPT + prescription?.purga)
    } else {
        osmolaridad =
            ((getDextrosa(prescription!).volumen * 2780)
                + (getAminoacidos(prescription!).volumen * 1505)
                + (getLipidos(prescription!).volumen * 290)
                + (getOmegaven(prescription!).volumen * 273)
                + (getDipeptiven(prescription!).volumen * 921)
                + (getSodio(prescription!).volumen * 4001)
                + (getPotacio(prescription!).volumen * 4000)
                + (getFosforo(prescription!).volumen * 2570)
                + (getCalcio(prescription!).volumen * 626)
                + (getMagnesio(prescription!).volumen * 1623)
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
    }

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


    const tp: string = prescription?.tipo_prescripcion!;

    let aminoacidos: number = 0;
    let dipeptiven: number = 0;

    if (tp === tipoPrescripcion) {
        aminoacidos= parseFloat(prescription?.req_aminoacidos!);
        dipeptiven= parseFloat(prescription?.dipeptiven!);
    } else {
        aminoacidos = getAminoacidos(prescription!).volumen;
        dipeptiven = getDipeptiven(prescription!).volumen
    };

    const  concSinAminoacidos = concAminoacidos(prescription);

    let gramosTotalesNitro: number = (aminoacidos * concSinAminoacidos * 0.16) + (dipeptiven * 0.32)
    return gramosTotalesNitro;
}



export const getCaloriasTotalesProteicas = (prescription: IPrescriptions) => {

    // const aminoacidos: number = parseFloat(prescription?.req_aminoacidos!);
    // const dipeptiven: number = parseFloat(prescription?.dipeptiven!);

    
    const tp: string = prescription?.tipo_prescripcion!;

    let aminoacidos: number = 0;
    let dipeptiven: number = 0;

    if (tp === tipoPrescripcion) {
        aminoacidos= parseFloat(prescription?.req_aminoacidos!);
        dipeptiven= parseFloat(prescription?.dipeptiven!);
    } else {
        aminoacidos = getAminoacidos(prescription!).volumen;
        dipeptiven = getDipeptiven(prescription!).volumen
    };

    const concSinAminoacidos = concAminoacidos(prescription);

    let caloriasTotalesProteicas: number = (aminoacidos * concSinAminoacidos * 4) + (dipeptiven * 0.8)
    return caloriasTotalesProteicas;
}

export const getCaloriasTotalesProteicasKg = (prescription: IPrescriptions) => {

    const calTotalesProteicas: number = getCaloriasTotalesProteicas(prescription!);
    const peso: number = prescription?.peso!

    let caloriasTotalesProteicasKg: number = calTotalesProteicas / peso
    return caloriasTotalesProteicasKg;
}

export const getCaloriasNoProteicasCHOS = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let dextrosa: number = 0;


    if (tp === tipoPrescripcion) {
        dextrosa= parseFloat(prescription?.dextrosa!);
    } else {
       dextrosa = getDextrosa(prescription!).volumen;
    };

    // const dextrosa: number = parseFloat(prescription?.dextrosa!)

    let caloriasNoProteicasCHOS: number = dextrosa * 1.7
    return caloriasNoProteicasCHOS;
}

export const getCaloriasNoProteicasLIPIDOS = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let lipidos: number = 0;
    let omegaven: number = 0;

    if (tp === tipoPrescripcion) {
        lipidos = parseFloat(prescription?.req_lipidos);
        omegaven = parseFloat(prescription?.omegaven);
    } else {
        lipidos = getLipidos(prescription!).volumen;
        omegaven = getOmegaven(prescription!).volumen
    };
    // // const lipidos: number = parseFloat(prescription?.req_lipidos!);
    // // const omegaven: number = parseFloat(prescription?.omegaven!);
    // const lipidos: number = getLipidos(prescription!).volumen;
    // const omegaven: number = getOmegaven(prescription!).volumen;

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

    let relacionCalNoProteicasAminoacidos: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / (gramosTotalesNitro * 6.25)

    return relacionCalNoProteicasAminoacidos;
}


export const getConcentracionDeCHOS = (prescription: IPrescriptions) => {

    // const dextrosa: number = parseFloat(prescription?.dextrosa!);
    const tp: string = prescription?.tipo_prescripcion!;

    let dextrosa: number = 0;


    if (tp === tipoPrescripcion) {
        dextrosa= parseFloat(prescription?.dextrosa!);
    } else {
       dextrosa = getDextrosa(prescription!).volumen;
    };

    const volTotalNPT: number = prescription?.volumen!;

    let concentracionDeCHOS: number = dextrosa * 0.5 / volTotalNPT
    return concentracionDeCHOS * 100;
}

export const getConcentracionDeProteinas = (prescription: IPrescriptions) => {


    const tp: string = prescription?.tipo_prescripcion!;

    let aminoacidos: number = 0;
    let dipeptiven: number = 0;

    if (tp === tipoPrescripcion) {
        aminoacidos= parseFloat(prescription?.req_aminoacidos!);
        dipeptiven= parseFloat(prescription?.dipeptiven!);
    } else {
        aminoacidos = getAminoacidos(prescription!).volumen;
        dipeptiven = getDipeptiven(prescription!).volumen
    };

    const concSinAminoacidos = concAminoacidos(prescription);
    const volTotalNPT: number = prescription?.volumen!;

    let concentracionDeProteinas: number = (aminoacidos * concSinAminoacidos + dipeptiven * 0.2) / volTotalNPT
    return concentracionDeProteinas * 100;
}

export const getConcentracionDeLipidos = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let lipidos: number = 0;
    let omegaven: number = 0;

    if (tp === tipoPrescripcion) {
        lipidos = parseFloat(prescription?.req_lipidos);
        omegaven = parseFloat(prescription?.omegaven);
    } else {
        lipidos = getLipidos(prescription!).volumen;
        omegaven = getOmegaven(prescription!).volumen
    }
    const volTotalNPT: number = prescription?.volumen!;

    let concentracionDeLipidos: number = (lipidos * 0.2 + omegaven * 0.1) / volTotalNPT

    return concentracionDeLipidos * 100;
}




// export const reporteMicronutrientes:IReporte[]=[
//     {
//     parametro: 'Sodio (req./ml)',
//     requerimiento:getSodio(),
//     volumen:,
//     }
// ]





