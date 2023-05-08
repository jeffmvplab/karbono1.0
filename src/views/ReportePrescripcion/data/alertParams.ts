import { IPrescriptions } from "@/domain/models/prescriptions.model"
import { concAminoacidos, getAgua, getAminoacidos, getCalcio, getConcentracionDeProteinas, getDextrosa, getDipeptiven, getFosforo, getLipidos, getMagnesio, getOmegaven, getOsmolaridad, getPotacio, getSodio, getVit_C, tipoPrescripcion } from "./functionsParams"

export interface IAlarm {
    value: number,
    alert: string,
}

/////////////////////////////ALARMAS PARAMETROS FARMACEUTICOS////////////////////////////////////////////////////
export const alertVolTotal = (prescription: IPrescriptions) => {

    const volAgua: number = getAgua(prescription)
    const oligoelementos: number = parseInt(prescription?.req_elementos_traza)
    const vitaminas: number = parseInt(prescription?.req_vit_hidrosolubles) + parseInt(prescription?.req_vit_liposolubles)

    const tp: string = prescription?.tipo_prescripcion!;

    let volTotal: number = 0;

    // if (tp === tipoPrescripcion) {

    //     volTotal = volAgua
    //         + parseFloat(prescription?.dextrosa!) + parseFloat(prescription?.req_lipidos!)
    //         + parseFloat(prescription?.req_aminoacidos!) + parseFloat(prescription?.dipeptiven!)
    //         + parseFloat(prescription?.omegaven!) + parseFloat(prescription?.sodio_total!)
    //         + parseFloat(prescription?.potasio_total!) + parseFloat(prescription?.req_fosfato!)
    //         + parseFloat(prescription?.req_magnesio!) + parseFloat(prescription?.req_calcio!)
    //         + oligoelementos + vitaminas
    //         + parseFloat(prescription?.vit_C!)
    //         + parseFloat(prescription?.acido_folico!)
    // } else {
        volTotal = volAgua
            + getDextrosa(prescription!).volumen + getLipidos(prescription!).volumen
            + getAminoacidos(prescription!).volumen + getDipeptiven(prescription!).volumen
            + getOmegaven(prescription!).volumen + getSodio(prescription!).volumen
            + getPotacio(prescription!).volumen + getFosforo(prescription!).volumen
            + getMagnesio(prescription!).volumen + getCalcio(prescription!).volumen
            + oligoelementos + vitaminas
            + getVit_C(prescription!).volumen
            + parseFloat(prescription?.acido_folico!)
    //}
    return volTotal;
}

//////////////////////////////FORMULACIONES//////////////
export const alertViaDeAdmin = (prescription: IPrescriptions) => {

    const viaAdmin: string = prescription?.via_administracion;
    const osmolaridad: number = getOsmolaridad(prescription)

    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = 0


    if (viaAdmin === 'Periférica') {
        if (osmolaridad <= 800) {
            resp.alert = 'ADECUADA';
        } else {
            resp.alert = 'INADECUADA';
        }
    } else {
        if (osmolaridad > 800) {
            resp.alert = 'ADECUADA';
        } else {
            resp.alert = 'INADECUADA';
        }
    }
    return resp
}

export const alertRelacion_Calcio_Fosfato = (prescription: IPrescriptions) => {

    const Ca: number = concCalcioMexcla(prescription);
    const CCamax: number = concMaxCalcioSegura(prescription)!;

    const PO4: number = concFosfatoMexcla(prescription);
    const CPO4: number = concMaxFosfatoSegura(prescription)!;

    console.log('Rel  :','Ca',Ca,'<=','CCamax:',CCamax,'PO4',PO4,'<=','CPO4:',CPO4,)

    if (PO4 !== 0 && Ca !== 0) {
        if (Ca <= CCamax || PO4 <= CPO4) {
            return 'SEGURA';
        } else {
            return 'INSEGURA'
        }
    } else {
        return ''
    }

}

export const alertFactorDePrecipitacion = (prescription: IPrescriptions) => {

    const concDeProteinas: number = getConcentracionDeProteinas(prescription);

    const tp: string = prescription?.tipo_prescripcion!;

    let calcio: number = 0;
    let fosfato_de_potasio: number = 0;

    // if (tp !== tipoPrescripcion) {
    //     calcio = parseFloat(prescription?.req_calcio);
    //     fosfato_de_potasio = parseFloat(prescription?.req_fosfato);
    // } else {

        calcio = getCalcio(prescription!).volumen;
        fosfato_de_potasio = getFosforo(prescription!).requerimiento;
    // }

    const volTotalNPT: number = prescription?.volumen;

    let factor: number =( (calcio * 0.465) + (fosfato_de_potasio * 2.6)) * 100 / (volTotalNPT - calcio - fosfato_de_potasio);

    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = factor

    if (concDeProteinas >= 1.5) {
        if (factor <= 3) {
            resp.alert = 'SEGURA'
        } else {
            resp.alert = 'REVISAR';
        }

    } else if (concDeProteinas < 1.5) {
        if (factor <= 2) {
            resp.alert = 'SEGURA';
        } else {
            resp.alert = 'REVISAR';
        }
    }

    return resp;
    // console.log('factor:',factor)
}


export const alertVelInfucion = (prescription: IPrescriptions) => {

    const tiempoInfusion: number = prescription?.tiempo_infusion;
    const volTotalNPT: number = prescription?.volumen;

    let velocidad: number = volTotalNPT / tiempoInfusion;

    return velocidad;
}

export const alarmConcCHOS = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let dextrosa: number = 0;

    // if (tp === tipoPrescripcion) {
    //     dextrosa = parseFloat(prescription?.dextrosa!);
    // } else {
        dextrosa = getDextrosa(prescription!).volumen;
    // };


    const volTotalNPT: number = prescription?.volumen;

    let concCHOS: number = (dextrosa * 0.5 / volTotalNPT) * 100;
    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = concCHOS


    if (concCHOS >= 5 && concCHOS <= 35) {
        resp.alert = 'SEGURA';
    } else {
        resp.alert = 'REVISAR';
    }
    return resp
}


export const alarmConcDeProteinas = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let aminoacidos: number = 0;
    let dipeptiven: number = 0;

    // if (tp === tipoPrescripcion) {
    //     aminoacidos = parseFloat(prescription?.req_aminoacidos!);
    //     dipeptiven = parseFloat(prescription?.dipeptiven!);
    // } else {
        aminoacidos = getAminoacidos(prescription!).volumen;
        dipeptiven = getDipeptiven(prescription!).volumen
    // };

    const conAminoacidos = concAminoacidos(prescription);
    const volTotalNPT: number = prescription?.volumen;

    let concDeProteinas: number = (((aminoacidos * conAminoacidos) + (dipeptiven * 0.2)) / volTotalNPT) * 100
    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = concDeProteinas

    if (concDeProteinas > 2.5) {
        resp.alert = 'SEGURA';
    } else {
        resp.alert = 'REVISAR';
    }

    return resp
}

export const alarmConcDeLipidos = (prescription: IPrescriptions) => {


    const tp: string = prescription?.tipo_prescripcion!;

    let lipidos: number = 0;
    let omegaven: number = 0;

    // if (tp === tipoPrescripcion) {
    //     lipidos = parseFloat(prescription?.req_lipidos);
    //     omegaven = parseFloat(prescription?.omegaven);
    // } else {
        lipidos = getLipidos(prescription!).volumen;
        omegaven = getOmegaven(prescription!).volumen
    // }

    const volTotalNPT: number = prescription?.volumen;

    let concDeLipidos: number = (((lipidos * 0.2) + (omegaven * 0.1)) / volTotalNPT) * 100
    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = concDeLipidos

    if (concDeLipidos > 1.5) {
        resp.alert = 'SEGURA';
    } else {
        resp.alert = 'REVISAR';
    }

    return resp
}

export const alarmConcSodio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let sodio: number = 0;
    let fosfato_de_sodio: number = 0;

    // if (tp === tipoPrescripcion) {
    //     sodio = parseFloat(prescription?.req_calcio);
    //     fosfato_de_sodio = parseFloat(prescription?.req_fosfato);
    // } else {

        sodio = getSodio(prescription!).volumen;
        fosfato_de_sodio = getFosforo(prescription!).volumen;
    // }
    // const sodio: number = parseFloat(prescription?.sodio_total);
    // const fosfato_de_sodio: number = parseFloat(prescription?.req_fosfato);

    const volTotalNPT: number = prescription?.volumen;

    let sodioVol: number = ((sodio + fosfato_de_sodio) * 2) / (volTotalNPT / 1000);
    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = sodioVol

    if (sodioVol < 180) {
        resp.alert = 'SEGURA';
    } else {
        resp.alert = 'REVISAR';
    }

    return resp
}

export const alarmConcPotasio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let potacio: number = 0;
    let fosfato_de_potasio: number = 0;

    // if (tp === tipoPrescripcion) {
    //     potacio = parseFloat(prescription?.potasio_total);
    //     fosfato_de_potasio = parseFloat(prescription?.req_fosfato);
    // } else {
        potacio = getPotacio(prescription!).volumen;
        fosfato_de_potasio = getFosforo(prescription!).requerimiento;
    // }

    const volTotalNPT: number = prescription?.volumen;

    let potacioVol: number = (potacio * 2 + fosfato_de_potasio * 3.8) / (volTotalNPT / 1000);
    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = potacioVol

    if (potacioVol < 100) {
        resp.alert = 'SEGURA';
    } else {
        resp.alert = 'REVISAR';
    }
    return resp
}


export const alarmConcMagnesio = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let magnesio: number = 0;


    // if (tp === tipoPrescripcion) {
    //     // magnesio = getMagnesio(prescription!).requerimiento;
    //     magnesio = parseFloat(prescription?.magnesio!);
    // } else {
        magnesio = getMagnesio(prescription!).volumen;
    // };

    const volTotalNPT: number = prescription?.volumen;

    let magnesioVol: number = magnesio * 1.62 / (volTotalNPT / 1000);
    const resp: IAlarm = { value: 0, alert: '' };
    resp.value = magnesioVol

    if (magnesioVol < 15) {
        resp.alert = 'SEGURA';
    } else {
        resp.alert = 'REVISAR';
    }
    return resp
}
/////////////////////////////PARAMETROS////////////////////////////////////////////////////


export const concCalcioMexcla = (prescription: IPrescriptions) => {

    const tp: string = prescription?.tipo_prescripcion!;

    let calcio: number = 0;

    // if (tp === tipoPrescripcion) {
    // //    calcio = parseFloat(prescription?.magnesio!);
    // calcio = getCalcio(prescription!).requerimiento;
    // } else {
       calcio = getCalcio(prescription!).volumen;
    // };
    const volTotalNPT: number = prescription?.volumen;

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
   
    const tp: string = prescription?.tipo_prescripcion!;

    let fosfato: number = 0;


    // if (tp === tipoPrescripcion) {
    // //    fosfato = parseFloat(prescription?.magnesio!);
    //    fosfato = getFosforo(prescription!).requerimiento;
    // } else {
       fosfato = getFosforo(prescription!).volumen;
    // };
 
    const volTotalNPT: number = prescription?.volumen;

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

