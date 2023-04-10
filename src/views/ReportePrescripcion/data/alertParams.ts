export const alertVolTotal = (volAgua: number, dextrosa: string, lipidos: string, aminoacidos: string,
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

//////////////////////////////FORMULACIONES//////////////
export const alertViaDeAdmin = (viaAdmin: string, osmolaridad: number) => {

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

export const alertRelacion_Calcio_Fosfato = (calcio: string, concCalcioMax: number, fosfato: string, concFosfato: number) => {

    if (parseInt(calcio) <= concCalcioMax || parseInt(fosfato) <= concCalcioMax) {
        return 'SEGURA';
    } else {
        return 'INSEGURA'
    }

}

export const alarmFactorDePrecipitacion = (concDeProteinas: number, calcio: string, fosfato_de_potasio: number, volTotalNPT: string) => {

    let factor: number = (parseInt(calcio) * 0.465 + fosfato_de_potasio * 2.6) * 100 / (parseInt(volTotalNPT) - parseInt(calcio) - fosfato_de_potasio);

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

    export const alarmConcCHOS = (dextrosa: string, volTotalNPT: string,) => {

        let concCHOS: number = parseInt(dextrosa) * 0.5 / parseInt(volTotalNPT);
        if (concCHOS >= 5 || concCHOS <= 35) {
            return 'SEGURA';
        } else {
            return 'REVISAR';
        }

    }

    export const alarmConcDeLipidos = (lipidos: string, omegaven: string, volTotalNPT: string) => {
        let concDeLipidos: number = (parseInt(lipidos) * 0.2 + parseInt(omegaven) * 0.1) / parseInt(volTotalNPT)

        if (concDeLipidos > 1.5) {
            return 'SEGURA';
        } else {
            return 'REVISAR';
        }
    }

    export const alarmConcSodio = ( sodio: string, fosfato_de_sodio: string,volTotalNPT:string) => {


            let sodioVol: number = (parseInt(sodio)+parseInt(fosfato_de_sodio)) * 2 / (parseInt(volTotalNPT)/1000);

            if (sodioVol < 180) {
                return 'SEGURA';
            } else {
                return 'REVISAR';
            }

    }

    export const alarmConcPotasio = ( potasio: string, fosfato_de_potasio: string,volTotalNPT:string) => {


        let potasioVol: number = (parseInt(potasio)*2+parseInt(fosfato_de_potasio)) * 3.8 / (parseInt(volTotalNPT)/1000);

        if (potasioVol < 100) {
            return 'SEGURA';
        } else {
            return 'REVISAR';
        }

}


export const alarmConcMagnesio = ( magnesio: string, fosfato_de_magnesio: string,volTotalNPT:string) => {


    let magnesioVol: number = parseInt(magnesio)*1.62/ (parseInt(volTotalNPT)/1000);

    if (magnesioVol < 15) {
        return 'SEGURA';
    } else {
        return 'REVISAR';
    }

}

