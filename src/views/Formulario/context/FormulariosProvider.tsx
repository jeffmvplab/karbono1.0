
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

	const getMovilHeight = () => {

		if (stateAcordion1 && stateAcordion2 && stateAcordion3) { return '3450px' }
		if (!stateAcordion1 && stateAcordion2 && stateAcordion3) { return '2000px' }
		if (stateAcordion1 && !stateAcordion2 && stateAcordion3) { return '2780px' }
		if (stateAcordion1 && stateAcordion2 && !stateAcordion3) { return '2275px' }
		if (!stateAcordion1 && !stateAcordion2 && !stateAcordion3) { return '150px' }
		if (stateAcordion1 && !stateAcordion2 && !stateAcordion3) { return '1600px' }
		if (!stateAcordion1 && stateAcordion2 && !stateAcordion3) { return '820px' }
		if (!stateAcordion1 && !stateAcordion2 && stateAcordion3) { return '1330px' }
	}
	/////////////////////HANDLE MENUS/////////////////
	const [open1, setOpen1] = React.useState<boolean>();
	const [open2, setOpen2] = React.useState<boolean>();

	const handleMenu1 = () => {
		if (open1) {
			setOpen1(false);
		} else {
			setOpen1(true);
			setOpen2(false);
		}
	};

	const handleMenu2 = () => {
		if (open2) {
			setOpen2(false);
		} else {
			setOpen2(true);
			setOpen1(false);
		}
	};


	const toggleDrawer =
		(open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
						(event as React.KeyboardEvent).key === 'Shift')
				) {
					return;
				}

				setOpen1(open);
				setOpen2(open);
			};
	////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////MANEJO DE FORMULARIOS///////////////////////////////////////////////////////////


	//////////////////////////////ORDEN////////////////////////////////////
	const [numOrder, setNumOrder] = React.useState('');
	const [errorNumOrder, setErrorNumOrder] = React.useState(false);
	const [messageErrorNumOrder, setMessageErrorNumOrder] = React.useState('');

	const handleNumOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumOrder(event.target.value || '');
		const numOrder = event.target.value;
		if (numOrder.length > 7 && !isNaN(parseInt(numOrder))) {
			setErrorNumOrder(false);
			setMessageErrorNumOrder('')
		} else {
			setErrorNumOrder(true);
			setMessageErrorNumOrder('Introduzca un número de orden válido')
		}
	};

	const [prescripcion, setPrescripcion] = React.useState('');
	const [errorPrescripcion, setErrorPrescripcion] = React.useState(false);
	const [messageErrorPrescripcion, setMessageErrorPrescripcion] = React.useState('');

	const handlePrescripcion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrescripcion(event.target.value || '');
		const prescripcion = event.target.value;
	};

	const [fechaCreacion, setFechaCreacion] = React.useState('');
	const [errorFechaCreacion, setErrorFechaCreacion] = React.useState(false);
	const [messageErrorFechaCreacion, setMessageErrorFechaCreacion] = React.useState('');

	const handleFechaCreacion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFechaCreacion(event.target.value || '');
		const fechaCreacion = event.target.value;
	};

	////////////////////INFORMACIÓN DEL PACIENTE////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	const [ips, setIps] = React.useState('');
	const [errorIps, setErrorIps] = React.useState(false);
	const [messageErrorIps, setMessageErrorIps] = React.useState('');

	const handleIps = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIps(event.target.value || '');
		const ips = event.target.value;
		console.log(' ips:', ips)
	};

	const [numIden, setNumIden] = React.useState('');
	const [errorNumIden, setErrorNumIden] = React.useState(false);
	const [messageErrorNumIden, setMessageErrorNumIden] = React.useState('');

	const handleNumIden = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumIden(event.target.value || '');
		const numIden = event.target.value;
		if (!isNaN(parseInt(numIden))) {
			setErrorNumIden(false);
			setMessageErrorNumIden('')
		} else {
			setErrorNumIden(true);
			setMessageErrorNumIden('Introduzca un número de identificación')
		}
	};

	const [namePaciente, setNamePaciente] = React.useState('');
	const [errorNamePaciente, setErrorNamePaciente] = React.useState(false);
	const [messageErrorNamePaciente, setMessageErrorNamePaciente] = React.useState('');

	const handleNamePaciente = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNamePaciente(event.target.value || '');
		const namePaciente = event.target.value;
	};

	const [servicio, setServicio] = React.useState('');
	const [errorServicio, setErrorServicio] = React.useState(false);
	const [messageErrorServicio, setMessageErrorServicio] = React.useState('');

	const handleServicio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setServicio(event.target.value || '');
		const servicio = event.target.value;
	};

	const [ubicacion, setUbicacion] = React.useState('');
	const [errorUbicacion, setErrorUbicacion] = React.useState(false);
	const [messageErrorUbicacion, setMessageErrorUbicacion] = React.useState('');

	const handleUbicacion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUbicacion(event.target.value || '');
		const ubicacion = event.target.value;
	};

	const [cama, setCama] = React.useState('');
	const [errorCama, setErrorCama] = React.useState(false);
	const [messageErrorCama, setMessageErrorCama] = React.useState('');

	const handleCama = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCama(event.target.value || '');
		const cama = event.target.value;
	};

	const [pesoKg, setPesoKg] = React.useState('');
	const [errorPesoKg, setErrorPesoKg] = React.useState(false);
	const [messageErrorPesoKg, setMessageErrorPesoKg] = React.useState('');

	const handlePesoKg = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPesoKg(event.target.value || '');
		const pesoKg = event.target.value;
	};

	const [edad, setEdad] = React.useState('');
	const [errorEdad, setErrorEdad] = React.useState(false);
	const [messageErrorEdad, setMessageErrorEdad] = React.useState('');

	const handleEdad = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEdad(event.target.value || '');
		const edad = event.target.value;
		if (!isNaN(parseInt(edad))) {
			setErrorEdad(false);
			setMessageErrorEdad('')
		} else {
			setErrorEdad(true);
			setMessageErrorEdad('Introduzca un número de identificación')
		}
	};

	const [tipoEdad, setTipoEdad] = React.useState('');
	const [errorTipoEdad, setErrorTipoEdad] = React.useState(false);
	const [messageErrorTipoEdad, setMessageErrorTipoEdad] = React.useState('');

	const handleTipoEdad = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipoEdad(event.target.value || '');
		const tipoEdad = event.target.value;
	};

	const [volumen, setVolumen] = React.useState('');
	const [errorVolumen, setErrorVolumen] = React.useState(false);
	const [messageErrorVolumen, setMessageErrorVolumen] = React.useState('');

	const handleVolumen = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVolumen(event.target.value || '');
		const volumen = event.target.value;
	};

	const [purga, setPurga] = React.useState('');
	const [errorPurga, setErrorPurga] = React.useState(false);
	const [messageErrorPurga, setMessageErrorPurga] = React.useState('');

	const handlePurga = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPurga(event.target.value || '');
		const purga = event.target.value;
	};

	const [tiempoDeInfucion, setTiempoDeInfucion] = React.useState<number>(0);
	const [errorTiempoDeInfucion, setErrorTiempoDeInfucion] = React.useState(false);
	const [messageErrorTiempoDeInfucion, setMessageErrorTiempoDeInfucion] = React.useState('');

	const handleTiempoDeInfucion = (event: Event, newValue: number | number[]) => {
		setTiempoDeInfucion(newValue as number);
		const tiempoDeInfucion = newValue as number;
		// console.log('TIEMPO:',tiempoDeInfucion)
	};

	const [overfill, setOverfill] = React.useState<number>(0);
	const [errorOverfill, setErrorOverfill] = React.useState(false);
	const [messageErrorOverfill, setMessageErrorOverfill] = React.useState('');

	const handleOverfill = (event: Event, newValue: number | number[]) => {
		setOverfill(newValue as number);
		const overfill = newValue as number;
	};

	const [filtro, setFiltro] = React.useState('');
	const [errorFiltro, setErrorFiltro] = React.useState(false);
	const [messageErrorFiltro, setMessageErrorFiltro] = React.useState('');

	const handleFiltro = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFiltro(event.target.value || '');
		const filtro = event.target.value;
		console.log('filtro:', filtro)
	};

	const [eqFotosencible, setEqFotosencible] = React.useState('');
	const [errorEqFotosencible, setErrorEqFotosencible] = React.useState(false);
	const [messageErrorEqFotosencible, setMessageErrorEqFotosencible] = React.useState('');

	const handleEqFotosencible = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEqFotosencible(event.target.value || '');
		const eqFotosencible = event.target.value;
	};

	const [tipoPaciente, setTipoPaciente] = React.useState('');
	const [errorTipoPaciente, setErrorTipoPaciente] = React.useState(false);
	const [messageErrorTipoPaciente, setMessageErrorTipoPaciente] = React.useState('');

	const handleTipoPaciente = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipoPaciente(event.target.value || '');
		const tipoPaciente = event.target.value;
		console.log('tipoPaciente:', tipoPaciente)
	};

	const [viaAdmin, setViaAdmin] = React.useState('');
	const [errorViaAdmin, setErrorViaAdmin] = React.useState(false);
	const [messageErrorViaAdmin, setMessageErrorViaAdmin] = React.useState('');

	const handleViaAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
		setViaAdmin(event.target.value || '');
		const viaAdmin = event.target.value;
	};

	const [diagnostico, setDiagnostico] = React.useState('');
	const [errorDiagnostico, setErrorDiagnostico] = React.useState(false);
	const [messageErrorDiagnostico, setMessageErrorDiagnostico] = React.useState('');

	const handleDiagnostico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDiagnostico(event.target.value || '');
		const diagnostico = event.target.value;
	};

	////////////////////MACRONUTRIENTES////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////

	const [tipoPrescripcion, setTipoPrescripcion] = React.useState('');
	const [errorTipoPrescripcion, setErrorTipoPrescripcion] = React.useState(false);
	const [messageErrorTipoPrescripcion, setMessageErrorTipoPrescripcion] = React.useState('');

	const handleTipoPrescripcion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipoPrescripcion(event.target.value || '');
		const tipoPrescripcion = event.target.value;
	};

	const [flujoMetabolico, setFlujoMetabolico] = React.useState('');
	const [errorFlujoMetabolico, setErrorFlujoMetabolico] = React.useState(false);
	const [messageErrorFlujoMetabolico, setMessageErrorFlujoMetabolico] = React.useState('');

	const handleFlujoMetabolico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFlujoMetabolico(event.target.value || '');
		const flujoMetabolico = event.target.value;
	};

	const [aminoacidos, setAminoacidos] = React.useState('');
	const [errorAminoacidos, setErrorAminoacidos] = React.useState(false);
	const [messageErrorAminoacidos, setMessageErrorAminoacidos] = React.useState('');

	const handleAminoacidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAminoacidos(event.target.value || '');
		const aminoacidos = event.target.value;
	};

	const [requerimientoAminoacidos, setRequerimientoAminoacidos] = React.useState('');
	const [errorRequerimientoAminoacidos, setErrorRequerimientoAminoacidos] = React.useState(false);
	const [messageErrorRequerimientoAminoacidos, setMessageErrorRequerimientoAminoacidos] = React.useState('');

	const handleRequerimientoAminoacidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimientoAminoacidos(event.target.value || '');
		const requerimientoAminoacidos = event.target.value;
	};

	const [lipidos, setLipidos] = React.useState('');
	const [errorLipidos, setErrorLipidos] = React.useState(false);
	const [messageErrorLipidos, setMessageErrorLipidos] = React.useState('');

	const handleLipidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLipidos(event.target.value || '');
		const lipidos = event.target.value;
	};

	const [requerimientoLipidos, setRequerimientoLipidos] = React.useState('');
	const [errorRequerimientoLipidos, setErrorRequerimientoLipidos] = React.useState(false);
	const [messageErrorRequerimientoLipidos, setMessageErrorRequerimientoLipidos] = React.useState('');

	const handleRequerimientoLipidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimientoLipidos(event.target.value || '');
		const requerimientoLipidos = event.target.value;
	};

	const [omegaven, setOmegaven] = React.useState('');
	const [errorOmegaven, setErrorOmegaven] = React.useState(false);
	const [messageErrorOmegaven, setMessageErrorOmegaven] = React.useState('');

	const handleOmegaven = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOmegaven(event.target.value || '');
		const omegaven = event.target.value;
	};

	const [dipectiven, setDipectiven] = React.useState('');
	const [errorDipectiven, setErrorDipectiven] = React.useState(false);
	const [messageErrorDipectiven, setMessageErrorDipectiven] = React.useState('');

	const handleDipectiven = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDipectiven(event.target.value || '');
		const dipectiven = event.target.value;
	};

	////////////////////MICRONURIENTES////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	const [sodioTotal, setSodioTotal] = React.useState('');
	const [errorSodioTotal, setErrorSodioTotal] = React.useState(false);
	const [messageErrorSodioTotal, setMessageErrorSodioTotal] = React.useState('');

	const handleSodioTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSodioTotal(event.target.value || '');
		const sodioTotal = event.target.value;
	};

	const [potacioTotal, setPotacioTotal] = React.useState('');
	const [errorPotacioTotal, setErrorPotacioTotal] = React.useState(false);
	const [messageErrorPotacioTotal, setMessageErrorPotacioTotal] = React.useState('');

	const handlePotacioTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPotacioTotal(event.target.value || '');
		const potacioTotal = event.target.value;
	};

	const [fosfato, setFosfato] = React.useState('');
	const [errorFosfato, setErrorFosfato] = React.useState(false);
	const [messageErrorFosfato, setMessageErrorFosfato] = React.useState('');

	const handleFosfato = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFosfato(event.target.value || '');
		const fosfato = event.target.value;
	};

	const [requerimientoFosfato, setRequerimientoFosfato] = React.useState('');
	const [errorRequerimientoFosfato, setErrorRequerimientoFosfato] = React.useState(false);
	const [messageErrorRequerimientoFosfato, setMessageErrorRequerimientoFosfato] = React.useState('');

	const handleRequerimientoFosfato = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimientoFosfato(event.target.value || '');
		const requerimientoFosfato = event.target.value;
	};

	const [calcio, setCalcio] = React.useState('');
	const [errorCalcio, setErrorCalcio] = React.useState(false);
	const [messageErrorCalcio, setMessageErrorCalcio] = React.useState('');

	const handleCalcio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCalcio(event.target.value || '');
		const calcio = event.target.value;
	};

	const [unidades, setUnidades] = React.useState('');
	const [errorUnidades, setErrorUnidades] = React.useState(false);
	const [messageErrorUnidades, setMessageErrorUnidades] = React.useState('');

	const handleUnidades = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUnidades(event.target.value || '');
		const unidades = event.target.value;
		console.log('Unidad:',unidades)
	};

	const [requerimiento, setRequerimiento] = React.useState('');
	const [errorRequerimiento, setErrorRequerimiento] = React.useState(false);
	const [messageErrorRequerimiento, setMessageErrorRequerimiento] = React.useState('');

	const handleRequerimiento = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimiento(event.target.value || '');
		const requerimiento = event.target.value;
	};

	const [sulfatoDeMagnesio, setSulfatoDeMagnesio] = React.useState('');
	const [errorSulfatoDeMagnesio, setErrorSulfatoDeMagnesio] = React.useState(false);
	const [messageErrorSulfatoDeMagnesio, setMessageErrorSulfatoDeMagnesio] = React.useState('');

	const handleSulfatoDeMagnesio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSulfatoDeMagnesio(event.target.value || '');
		const sulfatoDeMagnesio = event.target.value;
	};

	const [reqSulfatoDeMagnesio, setReqSulfatoDeMagnesio] = React.useState('');
	const [errorReqSulfatoDeMagnesio, setErrorReqSulfatoDeMagnesio] = React.useState(false);
	const [messageErrorReqSulfatoDeMagnesio, setMessageErrorReqSulfatoDeMagnesio] = React.useState('');

	const handleReqSulfatoDeMagnesio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReqSulfatoDeMagnesio(event.target.value || '');
		const reqSulfatoDeMagnesio = event.target.value;
	};

	const [elementosTraza, setElementosTraza] = React.useState('');
	const [errorElementosTraza, setErrorElementosTraza] = React.useState(false);
	const [messageErrorElementosTraza, setMessageErrorElementosTraza] = React.useState('');

	const handleElementosTraza = (event: React.ChangeEvent<HTMLInputElement>) => {
		setElementosTraza(event.target.value || '');
		const elementosTraza = event.target.value;
	};

	const [reqTraza, setReqTraza] = React.useState('');
	const [errorReqTraza, setErrorReqTraza] = React.useState(false);
	const [messageErrorReqTraza, setMessageErrorReqTraza] = React.useState('');

	const handleReqTraza = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReqTraza(event.target.value || '');
		const reqTraza = event.target.value;
	};

	const [vitaminasHidrosolubles, setVitaminasHidrosolubles] = React.useState('');
	const [errorVitaminasHidrosolubles, setErrorVitaminasHidrosolubles] = React.useState(false);
	const [messageErrorVitaminasHidrosolubles, setMessageErrorVitaminasHidrosolubles] = React.useState('');

	const handleVitaminasHidrosolubles = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVitaminasHidrosolubles(event.target.value || '');
		const vitaminasHidrosolubles = event.target.value;
	};

	const [vitaminasLiposolubles, setVitaminasLiposolubles] = React.useState('');
	const [errorVitaminasLiposolubles, setErrorVitaminasLiposolubles] = React.useState(false);
	const [messageErrorVitaminasLiposolubles, setMessageErrorVitaminasLiposolubles] = React.useState('');

	const handleVitaminasLiposolubles = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVitaminasLiposolubles(event.target.value || '');
		const vitaminasLiposolubles = event.target.value;
	};

	const [vitaminasC, setVitaminasC] = React.useState('');
	const [errorVitaminasC, setErrorVitaminasC] = React.useState(false);
	const [messageErrorVitaminasC, setMessageErrorVitaminasC] = React.useState('');

	const handleVitaminasC = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVitaminasC(event.target.value || '');
		const vitaminasC = event.target.value;
	};

	const [acidoFolico, setAcidoFolico] = React.useState('');
	const [errorAcidoFolico, setErrorAcidoFolico] = React.useState(false);
	const [messageErrorAcidoFolico, setMessageErrorAcidoFolico] = React.useState('');

	const handleAcidoFolico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcidoFolico(event.target.value || '');
		const acidoFolico = event.target.value;
	};

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
			handleAcordion3,

			getMovilHeight,
			////////////////
			open1,
			handleMenu1,
			open2,
			handleMenu2,

			toggleDrawer,

			///////////////////////////ORDEN ///////////////////////////////
			numOrder, errorNumOrder, messageErrorNumOrder, handleNumOrder,
			prescripcion, errorPrescripcion, messageErrorPrescripcion, handlePrescripcion,
			fechaCreacion, errorFechaCreacion, messageErrorFechaCreacion, handleFechaCreacion,

			////////////INFORMACION DEL PACIENTE///////////////////
			ips, errorIps, messageErrorIps, handleIps,
			numIden, errorNumIden, messageErrorNumIden, handleNumIden,
			namePaciente, errorNamePaciente, messageErrorNamePaciente, handleNamePaciente,
			servicio, errorServicio, messageErrorServicio, handleServicio,
			ubicacion, errorUbicacion, messageErrorUbicacion, handleUbicacion,
			cama, errorCama, messageErrorCama, handleCama,
			pesoKg, errorPesoKg, messageErrorPesoKg, handlePesoKg,
			edad, errorEdad, messageErrorEdad, handleEdad,
			tipoEdad, errorTipoEdad, messageErrorTipoEdad, handleTipoEdad,
			volumen, errorVolumen, messageErrorVolumen, handleVolumen,
			purga, errorPurga, messageErrorPurga, handlePurga,
			tiempoDeInfucion, errorTiempoDeInfucion, messageErrorTiempoDeInfucion, handleTiempoDeInfucion,
			overfill, errorOverfill, messageErrorOverfill, handleOverfill,
			filtro, errorFiltro, messageErrorFiltro, handleFiltro,
			eqFotosencible, errorEqFotosencible, messageErrorEqFotosencible, handleEqFotosencible,
			tipoPaciente, errorTipoPaciente, messageErrorTipoPaciente, handleTipoPaciente,
			viaAdmin, errorViaAdmin, messageErrorViaAdmin, handleViaAdmin,
			diagnostico, errorDiagnostico, messageErrorDiagnostico, handleDiagnostico,
			////////////////////MACRONUTRIENTES////////////////////////////////////
			tipoPrescripcion, errorTipoPrescripcion, messageErrorTipoPrescripcion, handleTipoPrescripcion,
			flujoMetabolico, errorFlujoMetabolico, messageErrorFlujoMetabolico, handleFlujoMetabolico,
			aminoacidos, errorAminoacidos, messageErrorAminoacidos, handleAminoacidos,
			requerimientoAminoacidos, errorRequerimientoAminoacidos, messageErrorRequerimientoAminoacidos, handleRequerimientoAminoacidos,
			lipidos, errorLipidos, messageErrorLipidos, handleLipidos,
			requerimientoLipidos, errorRequerimientoLipidos, messageErrorRequerimientoLipidos, handleRequerimientoLipidos,
			omegaven, errorOmegaven, messageErrorOmegaven, handleOmegaven,
			dipectiven, errorDipectiven, messageErrorDipectiven, handleDipectiven,
			////////////////////MACRONUTRIENTES////////////////////////////////////
			sodioTotal, errorSodioTotal, messageErrorSodioTotal, handleSodioTotal,
			potacioTotal, errorPotacioTotal, messageErrorPotacioTotal, handlePotacioTotal,
			fosfato, errorFosfato, messageErrorFosfato, handleFosfato,
			requerimientoFosfato, errorRequerimientoFosfato, messageErrorRequerimientoFosfato, handleRequerimientoFosfato,
			calcio, errorCalcio, messageErrorCalcio, handleCalcio,
			unidades, errorUnidades, messageErrorUnidades, handleUnidades,
			requerimiento, errorRequerimiento, messageErrorRequerimiento, handleRequerimiento,
			sulfatoDeMagnesio, errorSulfatoDeMagnesio, messageErrorSulfatoDeMagnesio, handleSulfatoDeMagnesio,
			reqSulfatoDeMagnesio, errorReqSulfatoDeMagnesio, messageErrorReqSulfatoDeMagnesio, handleReqSulfatoDeMagnesio,
			elementosTraza, errorElementosTraza, messageErrorElementosTraza, handleElementosTraza,
			reqTraza, errorReqTraza, messageErrorReqTraza, handleReqTraza,
			vitaminasHidrosolubles, errorVitaminasHidrosolubles, messageErrorVitaminasHidrosolubles, handleVitaminasHidrosolubles,
			vitaminasLiposolubles, errorVitaminasLiposolubles, messageErrorVitaminasLiposolubles, handleVitaminasLiposolubles,
			vitaminasC, errorVitaminasC, messageErrorVitaminasC, handleVitaminasC,
			acidoFolico, errorAcidoFolico, messageErrorAcidoFolico, handleAcidoFolico,




		}}>{children}
		</FormulariosContext.Provider>
	)
};