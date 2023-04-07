export interface IReporte {
    parametro: string,
    requerimiento: Function,
    volumen: Function,
}
//////////////////////////////FORMULACIONES//////////////
export const getSodio = (tp: string, sodio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        let sodioReq: number = (parseInt(sodio) * parseInt(peso)) / 2;
        return sodioReq;
    } else {
        let sodioVol: number = (parseInt(sodio) * 2) / parseInt(peso);
        return sodioVol;
    }

}

export const getPotacio = (tp: string, potacio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        let potacioReq: number = (parseInt(potacio) * parseInt(peso)) / 2;
        return potacioReq;
    } else {
        let potacioVol: number = (parseInt(potacio) * 2) / parseInt(peso);
        return potacioVol;
    }

}

export const getCalcio = (tp: string, calsio: string, tCalsio: string, peso: string) => {

    if (tp === 'Por requerimientos') {
        if (tCalsio === 'Gluconato de Calcio') {
            let calsioReq: number = (parseInt(calsio) * parseInt(peso)) / 0.01;
            return calsioReq;
        } else {
            let calsioReq: number = (parseInt(calsio) * parseInt(peso)) * 2.15;
            return calsioReq;
        }
    } else {
        if (tCalsio === 'Gluconato de Calcio') {
            let calsioVol: number = (parseInt(calsio) * 100) / parseInt(peso);
            return calsioVol;
        } else {
            let calsioVol: number = (parseInt(calsio) * 0.465) / parseInt(peso);
            return calsioVol;
        }

    }

}


// export const reporteMicronutrientes:IReporte[]=[
//     {
//     parametro: 'Sodio (req./ml)',
//     requerimiento:getSodio(),
//     volumen:,
//     }
// ]



