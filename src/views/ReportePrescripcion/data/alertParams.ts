import { IPrescriptions } from "@/domain/models/prescriptions.model"
import { concAminoacidos, getAgua, getConcentracionDeProteinas, getOsmolaridad } from "./functionsParams"

export interface IAlarm{
    value:number,
    alert:string,
}

/////////////////////////////ALARMAS PARAMETROS FARMACEUTICOS////////////////////////////////////////////////////
export const alertVolTotal = (prescription: IPrescriptions) => {

    const volAgua: number = getAgua(prescription)
    const oligoelementos: number = parseInt(prescription?.req_elementos_traza)
    const vitaminas: number =  parseInt(prescription?.req_vit_hidrosolubles)+parseInt(prescription?.req_vit_liposolubles)

    let volTotal: number = volAgua
        + parseInt(prescription?.dextrosa!) + parseInt(prescription?.req_lipidos) + parseInt(prescription?.req_aminoacidos) 
        + parseInt(prescription?.dipeptiven) + parseInt(prescription?.omegaven) + parseInt(prescription?.sodio_total) 
        + parseInt(prescription?.potasio_total) + parseInt(prescription?.req_fosfato)
        + parseInt(prescription?.req_magnesio) + parseInt(prescription?.req_calcio) + oligoelementos + vitaminas
        + parseInt(prescription?.vit_C) + parseInt(prescription?.acido_folico)
    return volTotal;
}

//////////////////////////////FORMULACIONES//////////////
export const alertViaDeAdmin = (prescription: IPrescriptions) => {

    const viaAdmin: string = prescription?.via_administracion;
    const osmolaridad: number = getOsmolaridad(prescription)

    const resp:IAlarm={value:0,alert:''};
    resp.value=0


    if (viaAdmin === 'Periférica') {
        if (osmolaridad <= 800) {
            resp.alert='ADECUADA';
        } else {
            resp.alert='INADECUADA';
        }
    } else {
        if (osmolaridad > 800) {
            resp.alert='ADECUADA';
        } else {
            resp.alert='INADECUADA';
        }
    }
return resp
}

export const alertRelacion_Calcio_Fosfato = (prescription: IPrescriptions) => {

    const Ca    : number = concCalcioMexcla(prescription);
    const CCamax: number = concMaxCalcioSegura(prescription)!;

    const PO4: number = concFosfatoMexcla(prescription);
    const CPO4: number= concMaxFosfatoSegura(prescription)!;
   
if(PO4!==0&&Ca!==0){
    if (Ca <= CCamax || PO4 <= CPO4) {
        return 'SEGURA';
    } else {
        return 'INSEGURA'
    }
}else{
    return ''
}

}

export const alertFactorDePrecipitacion = (prescription: IPrescriptions) => {

    const concDeProteinas: number = getConcentracionDeProteinas(prescription);
    const calcio: number = parseInt(prescription?.req_calcio);
    const fosfato_de_potasio: number = parseInt(prescription?.req_fosfato);
    const volTotalNPT: number = prescription?.volumen;

    let factor: number = (calcio * 0.465 + fosfato_de_potasio * 2.6) * 100 / (volTotalNPT - calcio - fosfato_de_potasio);
    
    const resp:IAlarm={value:0,alert:''};
    resp.value=factor

    if (concDeProteinas >= 1.5) {
        if (factor <= 3) {
            resp.alert='SEGURA'
        } else {
            resp.alert='REVISAR';
        }

    } else if (concDeProteinas < 1.5) {
        if (factor <= 2) {
            resp.alert='SEGURA';
        } else {
            resp.alert='REVISAR';
        }
    }
    
    return resp;
    // console.log('factor:',factor)
}


export const alertVelInfucion = (prescription: IPrescriptions) => {

    const tiempoInfusion: number = prescription?.tiempo_infusion;
    const volTotalNPT: number = prescription?.volumen;

    let velocidad: number =volTotalNPT/tiempoInfusion;

    return velocidad;
}

export const alarmConcCHOS = (prescription: IPrescriptions) => {

    const dextrosa: number = parseInt(prescription?.dextrosa!);
    const volTotalNPT: number = prescription?.volumen;

    let concCHOS: number = (dextrosa * 0.5 / volTotalNPT)*100;
    const resp:IAlarm={value:0,alert:''};
    resp.value=concCHOS


    if (concCHOS >= 5 && concCHOS <= 35) {
         resp.alert='SEGURA';
    } else {
         resp.alert='REVISAR';
    }
  return resp
}


export const alarmConcDeProteinas = (prescription: IPrescriptions) => {

    const aminoacidos: number = parseInt(prescription?.req_aminoacidos!);
    const conAminoacidos= concAminoacidos(prescription);
    const dipativen= parseInt(prescription?.dipeptiven!);
    const volTotalNPT: number = prescription?.volumen;

    let concDeProteinas: number = (((aminoacidos*conAminoacidos)+(dipativen*0.2)) / volTotalNPT)*100
    const resp:IAlarm={value:0,alert:''};
    resp.value=concDeProteinas

    if (concDeProteinas > 2.5) {
       resp.alert='SEGURA';
    } else {
       resp.alert='REVISAR';
    }

    return resp
}

export const alarmConcDeLipidos = (prescription: IPrescriptions) => {

    const lipidos: number = parseInt(prescription?.req_lipidos);
    const omegaven: number = parseInt(prescription?.omegaven);
    const volTotalNPT: number = prescription?.volumen;

    let concDeLipidos: number =(( (lipidos * 0.2) + (omegaven * 0.1)) / volTotalNPT)*100
    const resp:IAlarm={value:0,alert:''};
    resp.value=concDeLipidos

    if (concDeLipidos > 1.5) {
        resp.alert='SEGURA';
    } else {
        resp.alert='REVISAR';
    }

    return resp
}

export const alarmConcSodio = (prescription: IPrescriptions) => {

    const sodio: number = parseInt(prescription?.sodio_total);
    const fosfato_de_sodio: number = parseInt(prescription?.req_fosfato);
    const volTotalNPT: number = prescription?.volumen;

    let sodioVol: number = ((sodio + fosfato_de_sodio) * 2) / (volTotalNPT / 1000);
    const resp:IAlarm={value:0,alert:''};
    resp.value=sodioVol

    if (sodioVol < 180) {
        resp.alert='SEGURA';
    } else {
        resp.alert='REVISAR';
    }
   
    return resp
}

export const alarmConcPotasio = (prescription: IPrescriptions) => {

    const potasio: number = parseInt(prescription?.potasio_total);
    const fosfato_de_potasio: number = parseInt(prescription?.req_fosfato);
    const volTotalNPT: number = prescription?.volumen;

    let potasioVol: number = (potasio * 2 + fosfato_de_potasio) * 3.8 / (volTotalNPT / 1000);
    const resp:IAlarm={value:0,alert:''};
    resp.value=potasioVol

    if (potasioVol < 100) {
         resp.alert='SEGURA';
    } else {
         resp.alert='REVISAR';
    }
   return resp
}


export const alarmConcMagnesio = (prescription: IPrescriptions) => {


    const magnesio: number = parseInt(prescription?.req_magnesio);
    const volTotalNPT: number = prescription?.volumen;

    let magnesioVol: number = magnesio * 1.62 / (volTotalNPT / 1000);
    const resp:IAlarm={value:0,alert:''};
    resp.value=magnesioVol

    if (magnesioVol < 15) {
        resp.alert='SEGURA';
    } else {
        resp.alert='REVISAR';
    }
   return resp
}
/////////////////////////////PARAMETROS////////////////////////////////////////////////////


export const concCalcioMexcla = (prescription: IPrescriptions) => {

    const calcio: number = parseInt(prescription?.req_calcio);
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

    const fosfato: number = parseInt(prescription?.req_fosfato);
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

