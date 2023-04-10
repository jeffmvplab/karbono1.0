export interface IReporte {
    parametro: string,
    requerimiento: Function,
    volumen: Function,
}
//////////////////////////////FORMULACIONES//////////////
export const getSodio = (tp: string, sodio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        let sodioReq: number = parseInt(sodio) * parseInt(peso) / 2;
        return sodioReq;
    } else {
        let sodioVol: number = parseInt(sodio) * 2 / parseInt(peso);
        return sodioVol;
    }

}

export const getPotacio = (tp: string, potacio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        let potacioReq: number = parseInt(potacio) * parseInt(peso) / 2;
        return potacioReq;
    } else {
        let potacioVol: number = parseInt(potacio) * 2 / parseInt(peso);
        return potacioVol;
    }

}

export const getCalcio = (tp: string, calcio: string, tCalcio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        if (tCalcio === 'Gluconato de Calcio') {
            let calcioReq: number = parseInt(calcio) * parseInt(peso) / 0.01;
            return calcioReq;
        } else {
            let calcioReq: number = parseInt(calcio) * parseInt(peso) * 2.15;
            return calcioReq;
        }
    } else {
        if (tCalcio === 'Gluconato de Calcio') {
            let calcioVol: number = parseInt(calcio) * 100 / parseInt(peso);
            return calcioVol;
        } else {
            let calcioVol: number = parseInt(calcio) * 0.465 / parseInt(peso);
            return calcioVol;
        }

    }

}

export const getFosforo = (tp: string, tipofosfato: string, fosforo: string, peso: string) => {

    if (tipofosfato === 'Fosfato de sodio') {

        if (tp === 'Por requerimientos') {
            let fosforoReq: number = parseInt(fosforo) * 1 / parseInt(peso);
            return fosforoReq;
        } else {
            let fosforoVol: number = parseInt(fosforo) * 1 * parseInt(peso);
            return fosforoVol;
        }
    } else {
        if (tp === 'Por requerimientos') {
            let fosforoReq: number = parseInt(fosforo) * parseInt(peso) / 2.6;
            return fosforoReq;
        } else {
            let fosforoVol: number = parseInt(fosforo) * 2.6 / parseInt(peso);
            return fosforoVol;
        }
    }

}

export const getMagnesio = (tp: string, magnesio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        let magnesioReq: number = parseInt(magnesio) * parseInt(peso) / 200;
        return magnesioReq;
    } else {
        let magnesioVol: number = parseInt(magnesio) * 200 / parseInt(peso);
        return magnesioVol;
    }

}

export const getDextrosa = (tp: string, dextrosa: string, peso: string, tiempoInfusion: number) => {

    if (tp === 'Por requerimientos') {
        let dextrosaReq: number = parseInt(dextrosa) * parseInt(peso) * tiempoInfusion * 0.12;
        return dextrosaReq;
    } else {
        let dextrosaVol: number = parseInt(dextrosa) / (parseInt(peso) * tiempoInfusion * 0.12);
        return dextrosaVol;
    }

}

export const getAminoacidos = (tp: string, aminoacidos: string, peso: string, concSinAminoacidos: string) => {

    if (tp === 'Por requerimientos') {
        let aminoacidosReq: number = parseInt(aminoacidos) * parseInt(peso) / parseInt(concSinAminoacidos);
        return aminoacidosReq;
    } else {
        let aminoacidosVol: number = parseInt(aminoacidos) * parseInt(concSinAminoacidos) / parseInt(peso);
        return aminoacidosVol;
    }

}

export const getLipidos = (tp: string, lipidos: string, peso: string, concSinLipidos: string) => {

    if (tp === 'Por requerimientos') {
        let lipidosReq: number = parseInt(lipidos) * parseInt(peso) / parseInt(concSinLipidos);
        return lipidosReq;
    } else {
        let lipidosVol: number = parseInt(lipidos) * parseInt(concSinLipidos) / parseInt(peso);
        return lipidosVol;
    }

}

export const getOmegaven = (tp: string, omegaven: string, peso: string, concSinOmegaven: string) => {

    if (tp === 'Por requerimientos') {
        let omegavenReq: number = parseInt(omegaven) * parseInt(peso) / parseInt(concSinOmegaven);
        return omegavenReq;
    } else {
        let omegavenVol: number = parseInt(omegaven) * parseInt(concSinOmegaven) / parseInt(peso);
        return omegavenVol;
    }

}

export const getDipeptiven = (tp: string, dipeptiven: string, peso: string, concSinDipeptiven: string) => {

    if (tp === 'Por requerimientos') {
        let dipeptivenReq: number = parseInt(dipeptiven) * parseInt(peso) / parseInt(concSinDipeptiven);
        return dipeptivenReq;
    } else {
        let dipeptivenVol: number = parseInt(dipeptiven) * 0.1 / parseInt(peso);
        return dipeptivenVol;
    }

}


export const getAgua = (volTotalNPT: string, dextrosa: string, lipidos: string, aminoacidos: string,
    dipeptiven: string, omegaven: string, sodio: string, potacio: string, fosforo: string,
    magnesio: string, calcio: string, oligoelementos: string, vitaminas: string, vit_C: string,
    acido_folico: string,
) => {
    let agua: number = parseInt(volTotalNPT) - (
        parseInt(dextrosa) + parseInt(lipidos) + parseInt(aminoacidos) + parseInt(dipeptiven)
        + parseInt(omegaven) + parseInt(sodio) + parseInt(potacio) + parseInt(fosforo)
        + parseInt(magnesio) + parseInt(calcio) + parseInt(oligoelementos) + parseInt(vitaminas)
        + parseInt(vit_C) + parseInt(acido_folico)
    );
    return agua;

}


export const getVolTotal = (volAgua: number, dextrosa: string, lipidos: string, aminoacidos: string,
    dipeptiven: string, omegaven: string, sodio: string, potacio: string, fosforo: string,
    magnesio: string, calcio: string, oligoelementos: string, vitaminas: string,
    vit_C: string, acido_folico: string,
) => {
    let volTotal: number = volAgua
        + parseInt(dextrosa) + parseInt(lipidos) + parseInt(aminoacidos) + parseInt(dipeptiven)
        + parseInt(omegaven) + parseInt(sodio) + parseInt(potacio) + parseInt(fosforo)
        + parseInt(magnesio) + parseInt(calcio) + parseInt(oligoelementos) + parseInt(vitaminas)
        + parseInt(vit_C) + parseInt(acido_folico)
    return volTotal;
}

export const getVelinfusion = (volTotal: number, tiempoInfusion: number) => {
    let velinfusion: number = volTotal / tiempoInfusion
    return velinfusion;
}


export const getOsmolaridad = (dextrosa: string, lipidos: string, aminoacidos: string,
    dipeptiven: string, omegaven: string, sodio: string, potacio: string, fosforo: string,
    calcio: string, magnesio: string, volOligoNulanza: string, volOligoSensitrace: string,
    cernevit: string, multi12K: string, vitaLipidInfantil: string, vitaLipidAd: string,
    soluvit: string, vit_C: string, acido_folico: string, volAgua: number, volTotalNPT: number, purga: number,
) => {
    let osmolaridad: number =
        ((parseInt(dextrosa) * 2780) + (parseInt(lipidos) * 290) + (parseInt(aminoacidos) * 1505) + (parseInt(dipeptiven) * 921)
            + (parseInt(omegaven) * 273) + (parseInt(sodio) * 4001) + (parseInt(potacio) + 4000) + (parseInt(fosforo) * 2570)
            + (parseInt(magnesio) * 1623) + (parseInt(calcio) * 626) + (parseInt(volOligoNulanza) * 2500) + (parseInt(volOligoSensitrace) * 100)
            + (parseInt(cernevit) * 4820) + (parseInt(multi12K) * 298.5) + (parseInt(vitaLipidInfantil) * 260) + (parseInt(vitaLipidAd) * 260)
            + (parseInt(soluvit) * 490) + (parseInt(vit_C) * 1740) + (parseInt(acido_folico) * 227) + (volAgua * 1)) / (volTotalNPT + purga)
    return osmolaridad;
}


export const getCalTotales = (calTotalesProteicas: number, calNoProteicasCHO: number, calNoProteicasLIPIDOS: number) => {
    let calTotales: number = calTotalesProteicas + calNoProteicasCHO + calNoProteicasLIPIDOS
    return calTotales;
}

export const getCalTotalesKgDia = (calTotales: number, peso: string,) => {
    let calTotalesKgDia: number = calTotales / parseInt(peso)
    return calTotalesKgDia;
}

export const getGramosTotalesNitro = (aminoacidos: string, concSinAminoacidos: string, dipeptiven: string) => {
    let gramosTotalesNitro: number = (parseInt(aminoacidos) + parseInt(concSinAminoacidos) * 0.16) + (parseInt(dipeptiven) * 0.32)
    return gramosTotalesNitro;
}



export const getCaloriasTotalesProteicas = (aminoacidos: string, concSinAminoacidos: string, dipeptiven: string) => {
    let caloriasTotalesProteicas: number = (parseInt(aminoacidos) + parseInt(concSinAminoacidos) * 4) + (parseInt(dipeptiven) * 0.8)
    return caloriasTotalesProteicas;
}

export const getCaloriasTotalesProteicasKg = (calTotalesProteicas: string, peso: string) => {
    let caloriasTotalesProteicasKg: number = parseInt(calTotalesProteicas) / parseInt(peso)
    return caloriasTotalesProteicasKg;
}

export const getCaloriasNoProteicasCHOS = (dextrosa: string) => {
    let caloriasNoProteicasCHOS: number = parseInt(dextrosa) * 1.7
    return caloriasNoProteicasCHOS;
}

export const getCaloriasNoProteicasLIPIDOS = (lipidos: string, omegaven: string) => {
    let caloriasNoProteicasLIPIDOS: number = (parseInt(lipidos) * 2) + (parseInt(omegaven) * 1.12)
    return caloriasNoProteicasLIPIDOS;
}

export const getCaloriasNoProteicasKg = (calNoProteicasCHO: number, calNoProteicasLIPIDOS: number, peso: string) => {
    let caloriasNoProteicasKg: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / parseInt(peso)
    return caloriasNoProteicasKg;
}

export const getRelacionCalNoProteicasN = (calNoProteicasCHO: number, calNoProteicasLIPIDOS: number, gramosTotalesNitro: number) => {
    let relacionCalNoProteicasN: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / gramosTotalesNitro
    return relacionCalNoProteicasN;
}

export const getRelacionCalNoProteicasAminoacidos = (calNoProteicasCHO: number, calNoProteicasLIPIDOS: number, gramosTotalesNitro: number) => {
    let relacionCalNoProteicasAminoacidos: number = (calNoProteicasCHO + calNoProteicasLIPIDOS) / gramosTotalesNitro * 6.25
    return relacionCalNoProteicasAminoacidos;
}


export const getConcentracionDeCHOS = (dextrosa: string, volTotalNPT: string) => {
    let concentracionDeCHOS: number = parseInt(dextrosa) * 0.5 / parseInt(volTotalNPT)
    return concentracionDeCHOS;
}

export const getConcentracionDeProteinas = (aminoacidos: string, concSinAminoacidos: string, dipeptiven: string, volTotalNPT: string) => {
    let concentracionDeProteinas: number = (parseInt(aminoacidos) * parseInt(concSinAminoacidos) + parseInt(dipeptiven) * 0.2) / parseInt(volTotalNPT)
    return concentracionDeProteinas;
}

export const getConcentracionDeLipidos = (lipidos: string,omegaven: string, volTotalNPT: string) => {
    let concentracionDeLipidos: number = (parseInt(lipidos) * 0.2 + parseInt(omegaven)*0.1)/ parseInt(volTotalNPT)
    return concentracionDeLipidos;
}




// export const reporteMicronutrientes:IReporte[]=[
//     {
//     parametro: 'Sodio (req./ml)',
//     requerimiento:getSodio(),
//     volumen:,
//     }
// ]





