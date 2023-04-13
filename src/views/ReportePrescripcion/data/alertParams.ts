import { IPrescriptions } from "@/domain/models/prescriptions.model"
import { getAgua, getConcentracionDeProteinas, getOsmolaridad } from "./functionsParams"



/////////////////////////////ALARMAS PARAMETROS FARMACEUTICOS////////////////////////////////////////////////////
export const alertVolTotal = (prescription: IPrescriptions) => {

    const volAgua: number = getAgua(prescription)
    const oligoelementos: number = parseInt(prescription.req_elementos_traza)
    const vitaminas: number =  parseInt(prescription.req_vit_hidrosolubles)+parseInt(prescription.req_vit_liposolubles)

    let volTotal: number = volAgua
        + parseInt(prescription.dextrosa!) + parseInt(prescription.lipidos) + parseInt(prescription.aminoacidos) + parseInt(prescription.dipeptiven)
        + parseInt(prescription.omegaven) + parseInt(prescription.sodio_total) + parseInt(prescription.potasio_total) + parseInt(prescription.req_fosfato)
        + parseInt(prescription.magnesio) + parseInt(prescription.calcio) + oligoelementos + vitaminas
        + parseInt(prescription.vit_C) + parseInt(prescription.acido_folico)
    return volTotal;
}

//////////////////////////////FORMULACIONES//////////////
export const alertViaDeAdmin = (prescription: IPrescriptions) => {

    const viaAdmin: string = prescription.via_administracion;
    const osmolaridad: number = getOsmolaridad(prescription)

    if (viaAdmin === 'Periférica') {
        if (osmolaridad <= 800) {
            return 'VÍA DE ADMINISTRACION ADECUADA';
        } else {
            return 'VÍA DE ADMINISTRACION INADECUADA';
        }
    } else {
        if (osmolaridad > 800) {
            return 'VÍA DE ADMINISTRACION ADECUADA';
        } else {
            return 'VÍA DE ADMINISTRACION INADECUADA';
        }
    }

}

export const alertRelacion_Calcio_Fosfato = (prescription: IPrescriptions) => {

    const Ca    : number = concCalcioMexcla(prescription);
    const CCamax: number = concMaxCalcioSegura(prescription)!;

    const PO4: number = concFosfatoMexcla(prescription);
    const CPO4: number= concMaxFosfatoSegura(prescription)!;
   
    if (Ca <= CCamax || PO4 <= CPO4) {
        return 'SEGURA';
    } else {
        return 'INSEGURA'
    }

}

export const alarmFactorDePrecipitacion = (prescription: IPrescriptions) => {

    const concDeProteinas: number = getConcentracionDeProteinas(prescription);
    const calcio: number = parseInt(prescription.req_calcio);
    const fosfato_de_potasio: number = parseInt(prescription.req_fosfato);
    const volTotalNPT: number = prescription.volumen;

    let factor: number = (calcio * 0.465 + fosfato_de_potasio * 2.6) * 100 / (volTotalNPT - calcio - fosfato_de_potasio);

    if (concDeProteinas >= 1.5) {
        if (factor <= 3) {
            return 'SEGURA';
        } else {
            return 'REVISAR';
        }

    } else if (concDeProteinas < 1.5) {
        if (factor <= 2) {
            return 'SEGURA';
        } else {
            return 'REVISAR';
        }


    }
}

export const alarmConcCHOS = (prescription: IPrescriptions) => {

    const dextrosa: number = parseInt(prescription.dextrosa!);
    const volTotalNPT: number = prescription.volumen;

    let concCHOS: number = dextrosa * 0.5 / volTotalNPT;

    if (concCHOS >= 5 || concCHOS <= 35) {
        return 'SEGURA';
    } else {
        return 'REVISAR';
    }

}

export const alarmConcDeLipidos = (prescription: IPrescriptions) => {

    const lipidos: number = parseInt(prescription.req_lipidos);
    const omegaven: number = parseInt(prescription.omegaven);
    const volTotalNPT: number = prescription.volumen;

    let concDeLipidos: number = (lipidos * 0.2 + omegaven * 0.1) / volTotalNPT

    if (concDeLipidos > 1.5) {
        return 'SEGURA';
    } else {
        return 'REVISAR';
    }
}

export const alarmConcSodio = (prescription: IPrescriptions) => {

    const sodio: number = parseInt(prescription.sodio_total);
    const fosfato_de_sodio: number = parseInt(prescription.req_fosfato);
    const volTotalNPT: number = prescription.volumen;

    let sodioVol: number = (sodio + fosfato_de_sodio) * 2 / (volTotalNPT / 1000);

    if (sodioVol < 180) {
        return 'SEGURA';
    } else {
        return 'REVISAR';
    }

}

export const alarmConcPotasio = (prescription: IPrescriptions) => {

    const potasio: number = parseInt(prescription.potasio_total);
    const fosfato_de_potasio: number = parseInt(prescription.req_fosfato);
    const volTotalNPT: number = prescription.volumen;

    let potasioVol: number = (potasio * 2 + fosfato_de_potasio) * 3.8 / (volTotalNPT / 1000);

    if (potasioVol < 100) {
        return 'SEGURA';
    } else {
        return 'REVISAR';
    }

}


export const alarmConcMagnesio = (prescription: IPrescriptions) => {


    const magnesio: number = parseInt(prescription.req_magnesio);
    const volTotalNPT: number = prescription.volumen;

    let magnesioVol: number = magnesio * 1.62 / (volTotalNPT / 1000);

    if (magnesioVol < 15) {
        return 'SEGURA';
    } else {
        return 'REVISAR';
    }

}
/////////////////////////////PARAMETROS////////////////////////////////////////////////////


export const concCalcioMexcla = (prescription: IPrescriptions) => {

    const calcio: number = parseInt(prescription.req_calcio);
    const volTotalNPT: number = prescription.volumen;

    return calcio * 0.465 / (volTotalNPT / 1000);
}


export const concMaxCalcioSegura = (prescription: IPrescriptions) => {

    if (getConcentracionDeProteinas(prescription) >= 1 || getConcentracionDeProteinas(prescription) <= 1.25) {
        return 40
    }
    if (getConcentracionDeProteinas(prescription) >= 1.25 || getConcentracionDeProteinas(prescription) <= 2.5) {
        return 70
    }
    if (getConcentracionDeProteinas(prescription) >= 2.5) {
        return 112
    }

}

export const concFosfatoMexcla = (prescription: IPrescriptions) => {

    const fosfato: number = parseInt(prescription.req_fosfato);
    const volTotalNPT: number = prescription.volumen;

    return fosfato / (volTotalNPT / 1000);
}


export const concMaxFosfatoSegura = (prescription: IPrescriptions) => {

    if (getConcentracionDeProteinas(prescription) >= 1 || getConcentracionDeProteinas(prescription) <= 1.25) {
        return 25
    }
    if (getConcentracionDeProteinas(prescription) >= 1.25 || getConcentracionDeProteinas(prescription) <= 2.5) {
        return 30
    }
    if (getConcentracionDeProteinas(prescription) >= 2.5) {
        return 48
    }
}

