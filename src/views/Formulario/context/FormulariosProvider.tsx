
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { FormulariosContext } from "./FormulariosContext";

type Props = {
	children: JSX.Element | JSX.Element[]
};

////////////////Parámetros farmacéuticos////////////
export const param_farmaceuticos = {
	volumen: '1000',
	via_de_administración: '0',
	relación_lipidos_aminoacidos: '0',
	volumen_acumulado: '0',
	osmolaridad: '0',
	relacion_calcio_fosfato: '0',
	factor_de_precipitación: '0',
	/////////Macronutrientes//////////   
	volumen_dextrosa50: '222.48',
	volumen_aminoácidos: '329.60',
	volumen_lipidos: '247.20',
	/////////Micronutrientes//////////   
	volumen_sodio: '0.00',
	volumen_potacio: '0.00',
	volumen_fosfato: '0.00',
	volumen_calsio: '0.00',
	volumen_sulfato_magnesio: '0.00',
	volumen_traza: '0.00',
	volumen_vitaminas: '0.00',
	volumen_vitaminas_Comp: '0.00',
	volumen_vitamina_C: '0.00',
	acido_folico: '0.00',
}

export const param_nutricionales = {
	///////////////////////////////////////////////////
	////////////////Parámetros Nutricionales////////////
	calorias: '1030.20',
	calorias_totalesKgDia: '17.32',
	gramos_totales_de_nitrogeno: '7.68',
	calorias_totales_proteicas: '192.00',
	calorias_totales_proteicasKg: '3.20',
	calorias_totales_no_proteicasCHOS: '367.20',
	calorias_totales_no_proteicas_lipidos: '480.00',
	relacion_Cal_No_proteicas_gAA: '17.65',
	calorias_totales_no_protéicasKg: '14.12',
	relacion_Cal_No_Protreicas_Protreica_g_nitrogeno: '480.00',
	/////////Distribucion Porcentual//////////   
	porcentaje_de_proteina: '1000',
	porcentaje_de_lipidos: '1000',
	porcentaje_de_carbohidratos: '1000',

}

export const FormulariosProvider: FC<Props> = ({ children }) => {

///////////////////////////HANDLE ACORDIONS///////////////////////////
	let matches: boolean = useMediaQuery('(min-width:768px)')

	const [stateAcordion1, setStateAcordion1] = useState(false);
	const handleAcordion1 = () => {
		if (stateAcordion1) {
			setStateAcordion1(false)
		} else {
			setStateAcordion1(true)
		}
		// console.log('CHANGE:',isMovil)
	}

	const [stateAcordion2, setStateAcordion2] = useState(false);
	const handleAcordion2 = () => {
		if (stateAcordion2) {
			setStateAcordion2(false)
		} else {
			setStateAcordion2(true)
		}
		// console.log('CHANGE:',isMovil)
	}

	const [stateAcordion3, setStateAcordion3] = useState(false);
	const handleAcordion3 = () => {
		if (stateAcordion3) {
			setStateAcordion3(false)
		} else {
			setStateAcordion3(true)
		}
		// console.log('CHANGE:',isMovil)
	}
	////////////////////////////////////////////////////////////////////

	return (
		<FormulariosContext.Provider value={{
			matches,
			stateAcordion1,
			setStateAcordion1,
			handleAcordion1,
			stateAcordion2,
			setStateAcordion2,
			handleAcordion2,
			stateAcordion3,
			setStateAcordion3,
			handleAcordion3

		}}>{children}
		</FormulariosContext.Provider>
	)
};