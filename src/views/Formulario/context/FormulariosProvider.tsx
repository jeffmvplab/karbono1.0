
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { StorageKeysEnum } from "@/utilities/enums";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FC } from "react";
import { FormulariosContext } from "./FormulariosContext";
import { PrescriptionsUseCases } from "@/domain/usecases/prescriptions.usecases";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { alarmConcCHOS, alarmConcDeLipidos, alarmConcDeProteinas, alarmConcMagnesio, alarmConcPotasio, alarmConcSodio, alarmaAgua, alertFactorDePrecipitacion, alertRelacion_Calcio_Fosfato, alertVelInfucion, alertViaDeAdmin } from "@/views/ReportePrescripcion/data/alertParams";
import { GlobalContext } from "@/context/GlobalContext";
import { IErrorsTab } from "@/domain/models/taps_errors";
import { IComment, deleteComment } from "@/domain/models/observaciones.model";
import { obtenerOverfillPorLabel } from "@/views/ReportePrescripcion/data/instituciones";

type Props = {
	children: JSX.Element | JSX.Element[]
};

export const FormulariosProvider: FC<Props> = ({ children }) => {

	///////////////////////////HANDLE ACORDIONS///////////////////////////
	const router = useRouter();
	let matches: boolean = useMediaQuery('(min-width:768px)')

	const { handleOffline, getMeUser } = useContext(GlobalContext)

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

		if (stateAcordion1 && stateAcordion2 && stateAcordion3) { return '3270px' }
		if (!stateAcordion1 && stateAcordion2 && stateAcordion3) { return '2120px' }
		if (stateAcordion1 && !stateAcordion2 && stateAcordion3) { return '2500px' }
		if (stateAcordion1 && stateAcordion2 && !stateAcordion3) { return '2060px' }
		if (!stateAcordion1 && !stateAcordion2 && !stateAcordion3) { return '150px' }
		if (stateAcordion1 && !stateAcordion2 && !stateAcordion3) { return '1325px' }
		if (!stateAcordion1 && stateAcordion2 && !stateAcordion3) { return '920px' }
		if (!stateAcordion1 && !stateAcordion2 && stateAcordion3) { return '1360px' }
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
	const localStorageProtocol = new LocalStorageProtocol();
	const prescriptionsUseCase = new PrescriptionsUseCases();
	const [loadingSave, setLoadingSave] = React.useState(true);
	const [saveOK, setSaveOk] = React.useState(true);
	const [messageAPI, setMessageAPI] = React.useState<string | undefined>('');

	const savePrescription = () => {

		const saveOK = setPrescriptions();
		handleOpenModalFormSaved();

		const prescripcion = {
			number: parseFloat(numOrder) || maxNumOrder! + 1,
			name: namePaciente,
			id: numIden,
			ips: ips
		}
		localStorageProtocol.set(StorageKeysEnum.prescripcionOrden, prescripcion);
		getPrescriptions();
		//

		return saveOK;
	}

	const [prescriptionCharge, setprescriptionCharge] = useState<IPrescriptions>();

	const getPrescriptionsByNumber = async () => {
		setLoadingSave(false);

		const storagePredsc = localStorageProtocol.get(StorageKeysEnum.prescripcionOrden)
		// console.log('Preds:', storagePredsc);
		// const resp = await prescriptionsUseCase.prescripcionsByNumber(storagePredsc.number);

		if (localStorageProtocol.get(StorageKeysEnum.prescripcionOrden)) {
			const resp = await prescriptionsUseCase.prescripcionsByNumber(storagePredsc.number);

			const repoPresc: IPrescriptions = resp.body

			setprescriptionCharge(repoPresc);

			if (resp.statusCode === 200) {
				setSaveOk(true);
				// console.log('Reporte:', resp)
				// setReporte(repoPresc);
				// localStorageProtocol.set(StorageKeysEnum.reporte,repoPresc);
				(repoPresc._id || repoPresc.nombre_paciente)
					&& initState(repoPresc);

			} else if (resp.statusCode === 400) {
				setMessageAPI(resp.body.message)
				setSaveOk(false)
			} else if (resp.statusCode === 404) {
				setSaveOk(false)
			} else if (resp.statusCode === 401 && resp.statusCode === 500) {
				setSaveOk(false)
			} else if (resp.statusCode === 408) {
				handleOffline();
			} {
				setSaveOk(false)
			}
		}

		setLoadingSave(true);

	}

	const getMaxNumPresc = async () => {
		setLoadingSave(false);

		const resp = await prescriptionsUseCase.getMaxNumberPres();


		// console.log('No Max Pres:', resp)
		if (resp.statusCode === 200) {
			setmaxNumOrder(parseInt(resp.body))
		} else if (resp.statusCode === 400) {
			setmaxNumOrder(undefined)
		} else if (resp.statusCode === 404) {
			setmaxNumOrder(undefined)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setmaxNumOrder(undefined)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {

		}
		setLoadingSave(true);
		return resp.body

	}


	const initState = (repor: IPrescriptions) => {

		setCreatedAt(repor?.createdAt);
		setUpdatedAt(repor?.updatedAt);

		setNumOrder(repor?.no_orden.toString());

		setPrescripcion(repor?.tipo_prescripcion);
		setIps(repor?.ips);
		setNumIden(repor?.no_identificacion);
		setNamePaciente(repor?.nombre_paciente);
		setServicio(repor?.servicio);
		setUbicacion(repor?.ubicacion);
		setCama(repor?.cama);
		setPesoKg(repor?.peso.toString());
		setEdad(repor?.edad.toString());
		setTipoEdad(repor?.tipo_edad);
		setVolumen(repor?.volumen.toString());
		setPurga(repor?.purga.toString());
		setTiempoDeInfucion(repor?.tiempo_infusion);
		setOverfill(repor?.overfill);
		setFiltro((repor?.filtro) ? 'Si' : 'No');
		setEqFotosencible((repor?.equipo_fotosensible) ? 'si' : 'no');
		setTipoPaciente(repor?.tipo_paciente);
		setViaAdmin(repor?.via_administracion);
		setDiagnostico(repor?.diagnostico);
		setTipoPrescripcion(repor?.tipo_prescripcion);
		setFlujoMetabolico(repor?.flujo_metabolico);
		setDextrosa(repor?.dextrosa!);
		setAminoacidos(repor?.aminoacidos);
		setRequerimientoAminoacidos(repor?.req_aminoacidos);
		setLipidos(repor?.lipidos);
		setRequerimientoLipidos(repor?.req_lipidos);
		setOmegaven(repor?.omegaven);
		setDipeptiven(repor?.dipeptiven);
		setSodioTotal(repor?.sodio_total);
		setPotacioTotal(repor?.potasio_total);
		setFosfato(repor?.fosfato);
		setRequerimientoFosfato(repor?.req_fosfato);
		setCalcio(repor?.calcio);
		setReqCalcio(repor?.req_calcio);
		setMagnesio(repor?.magnesio);
		setReqMagnesio(repor?.req_magnesio);
		setElementosTraza(repor?.elementos_traza);
		setReqTraza(repor?.req_elementos_traza);
		setVitaminasHidrosolubles(repor?.vit_hidrosolubles);
		setReqVitHidrosolubles(repor?.req_vit_hidrosolubles);
		setVitaminasLiposolubles(repor?.req_vit_liposolubles);
		setSoluvid_Vitalipid(repor?.soluvit_vitalip)
		setVitaminasC(repor?.vit_C);
		setAcidoFolico(repor?.acido_folico);
		setEstado(repor?.estado!);
	}

	const cancelForm = (route: string) => {
		localStorageProtocol.delete(StorageKeysEnum.prescripcionOrden);
		router.push(route)
	}
	//////////////////////////////////MANEJO DE FORMULARIOS///////////////////////////////////////////////////////////
	// const initStateReport = localStorageProtocol.get(StorageKeysEnum.reporte)
	//////////////////////////////ORDEN////////////////////////////////////
	const [numOrder, setNumOrder] = React.useState('');
	const [errorNumOrder, setErrorNumOrder] = React.useState(false);
	const [messageErrorNumOrder, setMessageErrorNumOrder] = React.useState('');

	const handleNumOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumOrder(event.target.value);
	};

	const [maxNumOrder, setmaxNumOrder] = React.useState<number | undefined>();


	const [prescripcion, setPrescripcion] = React.useState('');
	const [errorPrescripcion, setErrorPrescripcion] = React.useState(false);
	const [messageErrorPrescripcion, setMessageErrorPrescripcion] = React.useState('');

	const handlePrescripcion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrescripcion(event.target.value);
		// const prescripcion = event.target.value;
	};

	const formatoFecha = (fecha: Date) => {
		const opciones: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'numeric', year: 'numeric' };
		const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
		return fechaFormateada;
	}

	const [fechaCreacion, setFechaCreacion] = React.useState('');
	const [errorFechaCreacion, setErrorFechaCreacion] = React.useState(false);
	const [messageErrorFechaCreacion, setMessageErrorFechaCreacion] = React.useState('');

	const handleFechaCreacion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFechaCreacion(event.target.value);
	};

	const fechaActual = () => {
		const fecha: string = formatoFecha(new Date())
		setFechaCreacion(fecha);
		// console.log('FECHA CREACION:', fecha)
	}

	////////////////////INFORMACIÓN DEL PACIENTE////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	const [ips, setIps] = React.useState(getMeUser().entidad_de_salud ? getMeUser().entidad_de_salud[0] :'');
	const [errorIps, setErrorIps] = React.useState(false);
	const [messageErrorIps, setMessageErrorIps] = React.useState('');

	const handleIps = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIps(event.target.value);
		// const ips = event.target.value;
		// console.log(' ips-overfill:', obtenerOverfillPorLabel(event.target.value))
		setOverfill(obtenerOverfillPorLabel(event.target.value) as number)
	};

	const [numIden, setNumIden] = React.useState('');
	const [errorNumIden, setErrorNumIden] = React.useState(false);
	const [messageErrorNumIden, setMessageErrorNumIden] = React.useState('');

	const validateNumIdent = (numIden: string) => {

		if (numIden !== '') {
			setErrorNumIden(false);
			setMessageErrorNumIden('')
			return false;
		} else {
			setErrorNumIden(true);
			setMessageErrorNumIden('Introduzca un número de identificación')
			return true;
		}
	}

	const handleNumIden = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumIden(event.target.value);
		validateNumIdent(event.target.value);
	};

	const [namePaciente, setNamePaciente] = React.useState('');
	const [errorNamePaciente, setErrorNamePaciente] = React.useState(false);
	const [messageErrorNamePaciente, setMessageErrorNamePaciente] = React.useState('');

	const validateNombrePaciente = (name: string) => {
		// console.log('SDF:', name)
		if (name !== '') {
			setErrorNamePaciente(false);
			setMessageErrorNamePaciente('')
			return false;
		} else {
			setErrorNamePaciente(true);
			setMessageErrorNamePaciente('Introduzca el nombre del paciente')
			return true;
		}
	}

	const handleNamePaciente = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNamePaciente(event.target.value);
		validateNombrePaciente(event.target.value);
	};

	const [servicio, setServicio] = React.useState('');
	const [errorServicio, setErrorServicio] = React.useState(false);
	const [messageErrorServicio, setMessageErrorServicio] = React.useState('');

	const validateServicio = (servicio: string) => {
		if (servicio !== '') {
			setErrorServicio(false);
			setMessageErrorServicio('')
		} else {
			setErrorServicio(true);
			setMessageErrorServicio('Introduzca el servicio')
		}

		return errorServicio;
	}

	const handleServicio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setServicio(event.target.value);
		validateServicio(event.target.value);
	};

	const [ubicacion, setUbicacion] = React.useState('');
	const [errorUbicacion, setErrorUbicacion] = React.useState(false);
	const [messageErrorUbicacion, setMessageErrorUbicacion] = React.useState('');

	const handleUbicacion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUbicacion(event.target.value);
		// const ubicacion = event.target.value;
	};

	const [cama, setCama] = React.useState('');
	const [errorCama, setErrorCama] = React.useState(false);
	const [messageErrorCama, setMessageErrorCama] = React.useState('');

	const handleCama = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCama(event.target.value);
		// const cama = event.target.value;
	};

	const [pesoKg, setPesoKg] = React.useState('');
	const [errorPesoKg, setErrorPesoKg] = React.useState(false);
	const [messageErrorPesoKg, setMessageErrorPesoKg] = React.useState('');

	const validatePeso = (peso: string) => {
		if (peso !== '') {
			setErrorPesoKg(false);
			setMessageErrorPesoKg('')
			return false;
		} else {
			setErrorPesoKg(true);
			setMessageErrorPesoKg('Introduzca el peso del paciente')
			return true;
		}
	}

	const handlePesoKg = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPesoKg(event.target.value);
		validatePeso(event.target.value);
		getPrescriptions();
	};

	const [edad, setEdad] = React.useState('');
	const [errorEdad, setErrorEdad] = React.useState(false);
	const [messageErrorEdad, setMessageErrorEdad] = React.useState('');

	const handleEdad = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEdad(event.target.value);
	};

	const [tipoEdad, setTipoEdad] = React.useState('');
	const [errorTipoEdad, setErrorTipoEdad] = React.useState(false);
	const [messageErrorTipoEdad, setMessageErrorTipoEdad] = React.useState('');

	const handleTipoEdad = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipoEdad(event.target.value);
		// const tipoEdad = event.target.value;
	};

	const [volumen, setVolumen] = React.useState('');
	const [errorVolumen, setErrorVolumen] = React.useState(false);
	const [messageErrorVolumen, setMessageErrorVolumen] = React.useState('');

	const validateVolumen = (volumen: string) => {
		if (volumen !== '') {
			setErrorVolumen(false);
			setMessageErrorVolumen('')
			return false;
		} else {
			setErrorVolumen(true);
			setMessageErrorVolumen('Introduzca el volumen')
			return true;
		}
	}

	const handleVolumen = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVolumen(event.target.value);
		validateVolumen(event.target.value);
		// getPrescriptions();
	};

	const [purga, setPurga] = React.useState('');
	const [errorPurga, setErrorPurga] = React.useState(false);
	const [messageErrorPurga, setMessageErrorPurga] = React.useState('');

	const validatePurga = (purga: string) => {
		if (purga !== '') {
			setErrorPurga(false);
			setMessageErrorPurga('')
		} else {
			setErrorPurga(true);
			setMessageErrorPurga('Introduzca el valor de purga')
		}

		return errorPurga;
	}

	const handlePurga = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPurga(event.target.value);
		validatePurga(event.target.value);
		// getPrescriptions();
	};

	const [tiempoDeInfucion, setTiempoDeInfucion] = React.useState<number>(0);
	const [errorTiempoDeInfucion, setErrorTiempoDeInfucion] = React.useState(false);
	const [messageErrorTiempoDeInfucion, setMessageErrorTiempoDeInfucion] = React.useState('');

	const validateTiempoInfucion = (tiempoInfucion: number) => {
		if (tiempoInfucion !== 0) {
			setErrorTiempoDeInfucion(false);
			setMessageErrorTiempoDeInfucion('')
			return false;
		} else {
			setErrorTiempoDeInfucion(true);
			setMessageErrorTiempoDeInfucion('El tiempo de infución no puede ser 0')
			return true;
		}
	}

	const handleTiempoDeInfucion = (event: Event, newValue: number | number[]) => {
		setTiempoDeInfucion(newValue as number);
		validateTiempoInfucion(newValue as number);
		// getPrescriptions();
	};

	const [overfill, setOverfill] = React.useState<number>(0);
	const [errorOverfill, setErrorOverfill] = React.useState(false);
	const [messageErrorOverfill, setMessageErrorOverfill] = React.useState('');

	const handleOverfill = (event: Event, newValue: number | number[]) => {
		// console.log('Overfil:', newValue)
		setOverfill(newValue as number);
		// getPrescriptions();
	};

	const [filtro, setFiltro] = React.useState('');
	const [errorFiltro, setErrorFiltro] = React.useState(false);
	const [messageErrorFiltro, setMessageErrorFiltro] = React.useState('');

	const handleFiltro = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFiltro(event.target.value);
		// getPrescriptions();
	};

	const [eqFotosencible, setEqFotosencible] = React.useState('');
	const [errorEqFotosencible, setErrorEqFotosencible] = React.useState(false);
	const [messageErrorEqFotosencible, setMessageErrorEqFotosencible] = React.useState('');

	const handleEqFotosencible = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEqFotosencible(event.target.value);
		// getPrescriptions();
	};

	const [tipoPaciente, setTipoPaciente] = React.useState('');
	const [errorTipoPaciente, setErrorTipoPaciente] = React.useState(false);
	const [messageErrorTipoPaciente, setMessageErrorTipoPaciente] = React.useState('');

	const validateTipoPaciente = (tipoPaciente: string) => {
		if (tipoPaciente !== '') {
			setErrorTipoPaciente(false);
			setMessageErrorTipoPaciente('')
			return false;
		} else {
			setErrorTipoPaciente(true);
			setMessageErrorTipoPaciente('Introduzca el tipo de paciente')
			return true;
		}
	}

	const handleTipoPaciente = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipoPaciente(event.target.value);
		validateTipoPaciente(event.target.value);
		// getPrescriptions();
	};

	const [viaAdmin, setViaAdmin] = React.useState('');
	const [errorViaAdmin, setErrorViaAdmin] = React.useState(false);
	const [messageErrorViaAdmin, setMessageErrorViaAdmin] = React.useState('');

	const validateViaAdmin = (viaAdmin: string) => {
		if (viaAdmin !== '') {
			setErrorViaAdmin(false);
			setMessageErrorViaAdmin('')
			return false;
		} else {
			setErrorViaAdmin(true);
			setMessageErrorViaAdmin('Introduzca la vía de administración')
			return true;
		}
	}

	const handleViaAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
		setViaAdmin(event.target.value);
		validateViaAdmin(event.target.value);
		// getPrescriptions();
	};

	const [diagnostico, setDiagnostico] = React.useState('');
	const [errorDiagnostico, setErrorDiagnostico] = React.useState(false);
	const [messageErrorDiagnostico, setMessageErrorDiagnostico] = React.useState('');

	const handleDiagnostico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDiagnostico(event.target.value);
		// const diagnostico = event.target.value;
	};
	////////////////////MACRONUTRIENTES////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////

	const [tipoPrescripcion, setTipoPrescripcion] = React.useState('');
	const [errorTipoPrescripcion, setErrorTipoPrescripcion] = React.useState(false);
	const [messageErrorTipoPrescripcion, setMessageErrorTipoPrescripcion] = React.useState('');

	const validateTipoPrecripcion = (tipoPrescripcion: string) => {
		if (tipoPrescripcion !== '') {
			// console.log('TP', tipoPrescripcion)
			setErrorTipoPrescripcion(false);
			setMessageErrorTipoPrescripcion('')
			return false;
		} else {
			setErrorTipoPrescripcion(true);
			setMessageErrorTipoPrescripcion('Introduzca el tipo de prescripción')
			return true;
		}
	}
	const handleTipoPrescripcion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipoPrescripcion(event.target.value);
		validateTipoPrecripcion(event.target.value)
		// getPrescriptions();
	};

	const [flujoMetabolico, setFlujoMetabolico] = React.useState('');
	const [errorFlujoMetabolico, setErrorFlujoMetabolico] = React.useState(false);
	const [messageErrorFlujoMetabolico, setMessageErrorFlujoMetabolico] = React.useState('');

	const validateFlujoMetabolico = (flujoMetabolico: string) => {
		if (flujoMetabolico !== '') {
			setErrorFlujoMetabolico(false);
			setMessageErrorFlujoMetabolico('')
			return false;
		} else {
			setErrorFlujoMetabolico(true);
			if (tipoPrescripcion === 'Por requerimientos' || tipoPrescripcion === '') {
				setMessageErrorFlujoMetabolico('Introduzca el flujo metabolico')
			} else {
				setMessageErrorFlujoMetabolico('')
			}
			return true;
		}
	}

	const handleFlujoMetabolico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFlujoMetabolico(event.target.value);
		validateFlujoMetabolico(event.target.value);
		// getPrescriptions();
	};

	const [dextrosa, setDextrosa] = React.useState('');
	const [errorDextrosa, setErrorDextrosa] = React.useState(false);
	const [messageErrorDextrosa, setMessageErrorDextrosa] = React.useState('');

	const validateDextrosa = (dextrosa: string) => {
		if (dextrosa !== '') {
			setErrorDextrosa(false);
			setMessageErrorDextrosa('')
			return false;
		} else {
			setErrorDextrosa(true);
			setMessageErrorDextrosa('Introduzca el valor de dextrosa')
			return true;
		}
	}

	const handleDextrosa = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDextrosa(event.target.value);
		validateDextrosa(event.target.value);
		// getPrescriptions();
	};

	const [aminoacidos, setAminoacidos] = React.useState('');
	const [errorAminoacidos, setErrorAminoacidos] = React.useState(false);
	const [messageErrorAminoacidos, setMessageErrorAminoacidos] = React.useState('');


	const handleAminoacidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAminoacidos(event.target.value);
		// getPrescriptions();
	};

	const [requerimientoAminoacidos, setRequerimientoAminoacidos] = React.useState('0');
	const [errorRequerimientoAminoacidos, setErrorRequerimientoAminoacidos] = React.useState(false);
	const [messageErrorRequerimientoAminoacidos, setMessageErrorRequerimientoAminoacidos] = React.useState('');

	const validateAminos = (aminos: string) => {
		if (aminos !== '0') {
			setErrorRequerimientoAminoacidos(false);
			setMessageErrorRequerimientoAminoacidos('')
			return false;
		} else {
			setErrorRequerimientoAminoacidos(true);
			setMessageErrorRequerimientoAminoacidos('Introduzca el valor de aminoacidos')
			return true;
		}
	}

	const handleRequerimientoAminoacidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimientoAminoacidos(event.target.value);
		validateAminos(event.target.value);
		// getPrescriptions();
	};

	const [lipidos, setLipidos] = React.useState('');
	const [errorLipidos, setErrorLipidos] = React.useState(false);
	const [messageErrorLipidos, setMessageErrorLipidos] = React.useState('');

	const handleLipidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLipidos(event.target.value);
		// getPrescriptions();
	};

	const [requerimientoLipidos, setRequerimientoLipidos] = React.useState('0');
	const [errorRequerimientoLipidos, setErrorRequerimientoLipidos] = React.useState(false);
	const [messageErrorRequerimientoLipidos, setMessageErrorRequerimientoLipidos] = React.useState('');

	const handleRequerimientoLipidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimientoLipidos(event.target.value);
		// getPrescriptions();
	};

	const [omegaven, setOmegaven] = React.useState('0');
	const [errorOmegaven, setErrorOmegaven] = React.useState(false);
	const [messageErrorOmegaven, setMessageErrorOmegaven] = React.useState('');

	const handleOmegaven = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOmegaven(event.target.value);
		// console.log('PP:', event.target.value)
	};

	const [dipeptiven, setDipeptiven] = React.useState('0');
	const [errorDipeptiven, setErrorDipeptiven] = React.useState(false);
	const [messageErrorDipeptiven, setMessageErrorDipeptiven] = React.useState('');

	const handleDipeptiven = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDipeptiven(event.target.value);
		// getPrescriptions();
	};

	////////////////////MICRONURIENTES////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	const [sodioTotal, setSodioTotal] = React.useState('0');
	const [errorSodioTotal, setErrorSodioTotal] = React.useState(false);
	const [messageErrorSodioTotal, setMessageErrorSodioTotal] = React.useState('');

	const handleSodioTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSodioTotal(event.target.value);
		// getPrescriptions();
	};

	const [potacioTotal, setPotacioTotal] = React.useState('0');
	const [errorPotacioTotal, setErrorPotacioTotal] = React.useState(false);
	const [messageErrorPotacioTotal, setMessageErrorPotacioTotal] = React.useState('');

	const handlePotacioTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPotacioTotal(event.target.value);
		// getPrescriptions();
	};

	const [fosfato, setFosfato] = React.useState('');
	const [errorFosfato, setErrorFosfato] = React.useState(false);
	const [messageErrorFosfato, setMessageErrorFosfato] = React.useState('');

	const handleFosfato = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFosfato(event.target.value);
		// getPrescriptions();
	};

	const [requerimientoFosfato, setRequerimientoFosfato] = React.useState('0');
	const [errorRequerimientoFosfato, setErrorRequerimientoFosfato] = React.useState(false);
	const [messageErrorRequerimientoFosfato, setMessageErrorRequerimientoFosfato] = React.useState('');

	const handleRequerimientoFosfato = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRequerimientoFosfato(event.target.value);
		// getPrescriptions();
	};

	const [calcio, setCalcio] = React.useState('');
	const [errorCalcio, setErrorCalcio] = React.useState(false);
	const [messageErrorCalcio, setMessageErrorCalcio] = React.useState('');

	const handleCalcio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCalcio(event.target.value);
		// getPrescriptions();
	};

	const [unidades, setUnidades] = React.useState('');
	const [errorUnidades, setErrorUnidades] = React.useState(false);
	const [messageErrorUnidades, setMessageErrorUnidades] = React.useState('');

	const handleUnidades = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUnidades(event.target.value);
		// getPrescriptions();
	};

	const [reqCalcio, setReqCalcio] = React.useState('0');
	const [errorReqCalcio, setErrorReqCalcio] = React.useState(false);
	const [messageErrorReqCalcio, setMessageErrorReqCalcio] = React.useState('');

	const handleReqCalcio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReqCalcio(event.target.value);
		// getPrescriptions();
	};

	const [magnesio, setMagnesio] = React.useState('');
	const [errorMagnesio, setErrorMagnesio] = React.useState(false);
	const [messageErrorMagnesio, setMessageErrorMagnesio] = React.useState('');

	const handleMagnesio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMagnesio(event.target.value);
		// console.log('Magnesio:',event.target.value)
		// getPrescriptions();
	};

	const [reqMagnesio, setReqMagnesio] = React.useState('0');
	const [errorReqMagnesio, setErrorReqMagnesio] = React.useState(false);
	const [messageErrorReqMagnesio, setMessageErrorReqMagnesio] = React.useState('');

	const handleReqMagnesio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReqMagnesio(event.target.value);
		// getPrescriptions();
	};

	const [elementosTraza, setElementosTraza] = React.useState('');
	const [errorElementosTraza, setErrorElementosTraza] = React.useState(false);
	const [messageErrorElementosTraza, setMessageErrorElementosTraza] = React.useState('');

	const handleElementosTraza = (event: React.ChangeEvent<HTMLInputElement>) => {
		setElementosTraza(event.target.value);
		// getPrescriptions();
	};

	const [reqTraza, setReqTraza] = React.useState('0');
	const [errorReqTraza, setErrorReqTraza] = React.useState(false);
	const [messageErrorReqTraza, setMessageErrorReqTraza] = React.useState('');

	const handleReqTraza = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReqTraza(event.target.value);
		// getPrescriptions();
	};

	const [vitaminasHidrosolubles, setVitaminasHidrosolubles] = React.useState('');
	const [errorVitaminasHidrosolubles, setErrorVitaminasHidrosolubles] = React.useState(false);
	const [messageErrorVitaminasHidrosolubles, setMessageErrorVitaminasHidrosolubles] = React.useState('');

	const handleVitaminasHidrosolubles = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVitaminasHidrosolubles(event.target.value);
		// getPrescriptions();
	};

	const [reqVitHidrosolubles, setReqVitHidrosolubles] = React.useState('0');
	const [errorReqVitHidrosolubles, setErrorReqVitHidrosolubles] = React.useState(false);
	const [messageErrorReqVitHidrosolubles, setMessageErrorReqVitHidrosolubles] = React.useState('');

	const handleReqVitHidrosolubles = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReqVitHidrosolubles(event.target.value);
		// getPrescriptions();
	};


	const [vitaminasLiposolubles, setVitaminasLiposolubles] = React.useState('0');
	const [errorVitaminasLiposolubles, setErrorVitaminasLiposolubles] = React.useState(false);
	const [messageErrorVitaminasLiposolubles, setMessageErrorVitaminasLiposolubles] = React.useState('');

	const handleVitaminasLiposolubles = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVitaminasLiposolubles(event.target.value);
		// getPrescriptions();
	};


	const [soluvid_Vitalipid, setSoluvid_Vitalipid] = React.useState('0');

	const handleSoluvid_Vitalipid = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSoluvid_Vitalipid(event.target.value);
		// getPrescriptions();
	};

	const [vitaminasC, setVitaminasC] = React.useState('0');
	const [errorVitaminasC, setErrorVitaminasC] = React.useState(false);
	const [messageErrorVitaminasC, setMessageErrorVitaminasC] = React.useState('');

	const handleVitaminasC = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVitaminasC(event.target.value);
		// getPrescriptions();
	};

	const [acidoFolico, setAcidoFolico] = React.useState('0');
	const [errorAcidoFolico, setErrorAcidoFolico] = React.useState(false);
	const [messageErrorAcidoFolico, setMessageErrorAcidoFolico] = React.useState('');

	const handleAcidoFolico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcidoFolico(event.target.value);
		// getPrescriptions();
	};

	const [createdAt, setCreatedAt] = React.useState<Date | string | null>('');
	const [updatedAt, setUpdatedAt] = React.useState<Date | string | null>('');

	const [estado, setEstado] = React.useState<'PENDIENTE FINALIZAR' | 'PENDIENTE' | 'FINALIZADA' | 'SOLICITADA' | 'CALIDAD' | 'PRODUCCION' | 'CANCELADA' | undefined>();

	////////////////////////////////////////////////////////////////////
	///////////////////////////////INTEGRACION DE APIS//////////////////

	const prescriptionsData: IPrescriptions = {

		no_orden: parseFloat(numOrder) || maxNumOrder! + 1,

		createdAt: (createdAt === '') ? new Date().toISOString() : createdAt!,
		updatedAt: new Date().toISOString(),

		estado: estado ? estado : undefined,

		tipo_prescripcion: tipoPrescripcion || '0',
		fecha: fechaCreacion || '0',
		ips: ips || '',
		no_identificacion: numIden || '0',
		nombre_paciente: namePaciente || '',
		servicio: servicio || '',
		ubicacion: ubicacion || '',
		cama: cama || '',
		peso: parseFloat(pesoKg) || 0,
		tipo_edad: tipoEdad,
		edad: parseFloat(edad) || 0,
		volumen: parseFloat(volumen) || 0,
		purga: parseFloat(purga) || 0,
		tiempo_infusion: tiempoDeInfucion || 0,
		// overfill: overfill || 0,
		overfill: overfill === 0 ? obtenerOverfillPorLabel(ips)! : overfill,
		filtro: (filtro === 'Si') ? true : false,
		equipo_fotosensible: (eqFotosencible === 'Si') ? true : false,
		tipo_paciente: tipoPaciente || '',
		via_administracion: viaAdmin || '',
		diagnostico: diagnostico || '',
		flujo_metabolico: (flujoMetabolico === '') ? '0' : flujoMetabolico,
		aminoacidos: aminoacidos || '0',
		dextrosa: (dextrosa === '') ? '0' : dextrosa,
		req_dextrosa: '0',
		req_aminoacidos: (requerimientoAminoacidos === '') ? '0' : requerimientoAminoacidos,
		lipidos: lipidos || '',
		req_lipidos: (requerimientoLipidos === '') ? '0' : requerimientoLipidos,
		omegaven: (omegaven === ' ') ? '0' : omegaven,
		dipeptiven: (dipeptiven === ' ') ? '0' : dipeptiven,
		sodio_total: (sodioTotal === '') ? '0' : sodioTotal,
		potasio_total: (potacioTotal === '') ? '0' : potacioTotal,
		fosfato: fosfato || ' ',
		req_fosfato: (requerimientoFosfato === '') ? '0' : requerimientoFosfato,
		calcio: calcio || ' ',
		req_calcio: (reqCalcio === '') ? '0' : reqCalcio,
		magnesio: magnesio || ' ',
		req_magnesio: (reqMagnesio === '') ? '0' : reqMagnesio,
		elementos_traza: elementosTraza || '0',
		req_elementos_traza: (reqTraza === ' ') ? '0' : reqTraza,
		vit_hidrosolubles: vitaminasHidrosolubles || '0',
		req_vit_hidrosolubles: (reqVitHidrosolubles === '') ? '0' : reqVitHidrosolubles,
		req_vit_liposolubles: (vitaminasLiposolubles === '') ? '0' : vitaminasLiposolubles,
		soluvit_vitalip: (soluvid_Vitalipid === '') ? '0' : soluvid_Vitalipid,
		vit_C: (vitaminasC === '') ? '0' : vitaminasC,
		acido_folico: (acidoFolico === ' ') ? '0' : acidoFolico
	}

	const [prescriptionSave, setPrescriptionSave] = React.useState<IPrescriptions | undefined>();

	const getPrescriptions = async () => {
		setPrescriptionSave(prescriptionsData);
	}

	const setPrescriptions = async () => {
		// getMaxNumPresc();
		setLoadingSave(false);
		// console.log('Loading Save & Update Pres...:', prescriptionsData)

		const numPresc = (localStorageProtocol.get(StorageKeysEnum.prescripcionOrden))
			? localStorageProtocol.get(StorageKeysEnum.prescripcionOrden).number
			: null

		// console.log('NUMBER:', numPresc)

		let resp: any = '';
		if (numPresc) { resp = await prescriptionsUseCase.updatePrescripcions(prescriptionsData, numPresc); console.log('UPDATE') }
		else { resp = await prescriptionsUseCase.savePrescripcions(prescriptionsData); }

		// console.log('Resp Save Presc:', resp)

		setLoadingSave(true);

		if (resp.statusCode === 201) {
			setSaveOk(true);
			handleOpenModalFormSavedRespon()
			// router.push(mainRoutes.reportePrescripcion)
			return true;
		} else if (resp.statusCode === 200) {
			setSaveOk(true);
			handleOpenModalFormSavedRespon()
			// router.push(mainRoutes.reportePrescripcion)
			return true;
		} else if (resp.body.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
			return false;
		} else if (resp.body.statusCode === 403) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
			return false;
		} else if (resp.body.statusCode === 404) {
			setSaveOk(false)
			return false;
		} else if (resp.body.statusCode === 401 && resp.statusCode === 500) {
			setSaveOk(false)
			return false;
		} else if (resp.body.statusCode === 408) {
			handleOffline();
		} else {
			setSaveOk(false)
			return false;
		}
	}


	const saveBorrador = async () => {

		setLoadingSave(false);
		// console.log('Loading...:', prescriptionsData)
		const newnumber = await getMaxNumPresc();

		let resp;

		if (!prescriptionsData.estado) {

			const copyPrescription: IPrescriptions = {
				...prescriptionsData,
				no_orden: newnumber + 1
			}
			resp = await prescriptionsUseCase.savePrescripcions(copyPrescription);
			// console.log('Resp Create:', resp)
		} else {

			const copyPrescription: IPrescriptions = {
				...prescriptionsData,
			}
			resp = await prescriptionsUseCase.updatePrescripcions(copyPrescription, prescriptionsData.no_orden.toString());
			// console.log('Resp Update:', resp)
		}

		setLoadingSave(true);

		if (resp.statusCode === 201) {
			setSaveOk(true);
			handleOpenModalFormSavedBorrador()
		} else if (resp.statusCode === 200) {
			setMessageAPI(resp.body.message)
			setSaveOk(true);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
		} else if (resp.statusCode === 404) {
			setSaveOk(false)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setSaveOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setSaveOk(false)
		}
	}

	const [newComment, setNewComment] = useState<IComment>(deleteComment)

	const saveComments = async (comment: IComment) => {

		setLoadingSave(false);
		// console.log('Loading Commenst...:', comment)
		let resp = await prescriptionsUseCase.createComments(comment);
		// console.log('Resp:', resp)
		setLoadingSave(true);

		if (resp.statusCode === 201) {
			setSaveOk(true);
			setMessageAPI(resp.body.message)
		} else if (resp.statusCode === 200) {
			getPrescriptionsByNumber();
			setSaveOk(true);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
		} else if (resp.statusCode === 404) {
			setSaveOk(false)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setSaveOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setSaveOk(false)
		}
	}

	const copyPrescriptions = async (prescription: IPrescriptions | undefined) => {

		setLoadingSave(false);

		const newnumber = await getMaxNumPresc();

		if (newnumber) {
			const copyPrescription: IPrescriptions = {
				...prescription!,
				_id: undefined,
				nombre_paciente: prescription?.nombre_paciente.split(' ')[0] === 'Copia'
					? prescription?.nombre_paciente
					: `Copia de ${prescription?.nombre_paciente}`,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
				no_orden: newnumber + 1,
				por_clonacion: true,
				estado: 'PENDIENTE FINALIZAR',
				observaciones: [],
			}
			console.log('Copiando Prescripcion...:', copyPrescription)

			const resp = await prescriptionsUseCase.savePrescripcions(copyPrescription);

			console.log('Copiado:', resp)

			if (resp.statusCode === 201) {
				setSaveOk(true);
			} else if (resp.statusCode === 200) {
				setMessageAPI(resp.body.message)
				setSaveOk(true);
			} else if (resp.statusCode === 400) {
				setMessageAPI(resp.body.message)
				setSaveOk(false)
			} else if (resp.statusCode === 404) {
				setMessageAPI(resp.body.message)
				setSaveOk(false)
			} else if (resp.statusCode === 401 && resp.statusCode === 500) {
				setMessageAPI(resp.body.message)
				setSaveOk(false)
			} else if (resp.statusCode === 408) {
				handleOffline();
			} else {
				setSaveOk(false)
			}
		}

		setLoadingSave(true);
	}

	const borrarPrescriptions = async (prescription: IPrescriptions | undefined) => {

		setLoadingSave(false);
		// console.log('Borrando Prescripcion...')

		const deletedComment: IComment = {
			prescriptionId: prescription?._id!,
			estado: 'CANCELADA'
		}
		// const resp = await prescriptionsUseCase.deletePrescriptions(prescription?.no_orden!);
		const resp = await prescriptionsUseCase.createComments(deletedComment);

		// console.log('Borrada:', resp)

		if (resp.statusCode === 201) {
			setSaveOk(true);
		} else if (resp.statusCode === 200) {
			setMessageAPI(resp.body.message)
			setSaveOk(true);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
		} else if (resp.statusCode === 404) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setMessageAPI(resp.body.message)
			setSaveOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setSaveOk(false)
		}
		setLoadingSave(true);
	}


	const [openModalFormSaved, setOpenModalFormSaved] = useState(false);
	const handleOpenModalFormSaved = () => { setOpenModalFormSaved(true) };
	const handleCloseModalFormSaved = () => setOpenModalFormSaved(false);


	const [openModalFormSavedRespon, setOpenModalFormSavedRespon] = useState(false);
	const handleOpenModalFormSavedRespon = () => { setOpenModalFormSavedRespon(true) };
	const handleCloseModalFormSavedRespon = () => setOpenModalFormSavedRespon(false);

	const [openModalFormSavedBorrador, setOpenModalFormSavedBorrador] = useState(false);
	const handleOpenModalFormSavedBorrador = () => { setOpenModalFormSavedBorrador(true) };
	const handleCloseModalFormSavedBorrador = () => setOpenModalFormSavedBorrador(false);


	const [openModalFormCancel, setOpenModalFormCancel] = useState(false);
	const handleOpenModalFormCancel = () => { setOpenModalFormCancel(true) };
	const handleCloseModalFormCancel = () => setOpenModalFormCancel(false);

	// useEffect(() => {
	// 		getPrescriptionsByNumber();
	// 		console.log('PPPP:',reporte);
	// }, [])
	///////////////////////////ALARMAS///////////////////////////////
	//////////////////////Validacion Form/////////////////
	const [valOKAlert, setValOKAlert] = React.useState(true);

	const validateAlert = () => {

		if (
			// alertViaDeAdmin(prescriptionsData!).alert==='INADECUADA'||
			alarmaAgua(prescriptionsData!).alert === 'INADECUADA' ||
			alertRelacion_Calcio_Fosfato(prescriptionsData!) === 'INSEGURA' ||
			alertRelacion_Calcio_Fosfato(prescriptionSave!) === 'INSEGURA' ||
			alertFactorDePrecipitacion(prescriptionsData!).alert === 'REVISAR' ||
			alarmConcCHOS(prescriptionsData!).alert === 'REVISAR' ||
			alarmConcDeProteinas(prescriptionsData!).alert === 'REVISAR' ||
			alarmConcDeLipidos(prescriptionsData!).alert === 'REVISAR' ||
			alarmConcSodio(prescriptionsData!).alert === 'REVISAR' ||
			alarmConcPotasio(prescriptionsData!).alert === 'REVISAR' ||
			alarmConcMagnesio(prescriptionsData!).alert === 'REVISAR'
			// validateCampos()

		) {
			// console.log('ALERT')
			setValOKAlert(false)
			return false
		} else {
			// console.log('NO ALERT')
			setValOKAlert(true)
			return true
		}
	}

	const [tabsErrors, setTabErrors] = useState<IErrorsTab>({ info: false, macro: false, micro: false, obs: false })

	const valTabsErrors1 = () => {

		// console.log('WWWWWW:',
		// 	validateNumIdent(numIden)
		// 	, validateNombrePaciente(namePaciente)
		// 	, validateTipoPaciente(tipoPaciente)
		// 	, validateTipoPrecripcion(tipoPrescripcion)
		// 	, validatePeso(pesoKg)
		// 	, validateVolumen(volumen)
		// 	, validateTiempoInfucion(tiempoDeInfucion)
		// 	, validateViaAdmin(viaAdmin))

		if (
			validateNumIdent(numIden)
			|| validateNombrePaciente(namePaciente)
			|| validateTipoPaciente(tipoPaciente)
			|| validateTipoPrecripcion(tipoPrescripcion)
			|| validatePeso(pesoKg)
			|| validateVolumen(volumen)
			|| validateTiempoInfucion(tiempoDeInfucion)
			|| validateViaAdmin(viaAdmin)
		) {
			setTabErrors({ ...tabsErrors, info: true })
			// console.log('VAL TRUE:', true)
			return true
		} else {
			setTabErrors({ ...tabsErrors, info: false })
			// console.log('VAL FALSE:', false)
			return false
		}
	}

	const valTabsErrors2 = () => {

		if (
			// validateFlujoMetabolico(flujoMetabolico)
			// || validateDextrosa(dextrosa)
			validateAminos(requerimientoAminoacidos)
		) {
			setTabErrors({ ...tabsErrors, macro: true })
			// setTabErrors({...tabsErrors,macro:true})
			// console.log('YYYYY:', requerimientoAminoacidos)
			return true
		} else {
			setTabErrors({ ...tabsErrors, macro: false })
			// setTabErrors({...tabsErrors,micro:false})
			return false
		}
	}

	const validateCampos = () => {

		if (
			validateNumIdent(numIden) ||
			validateNombrePaciente(namePaciente) ||
			validateTipoPaciente(tipoPaciente) ||
			validateServicio(servicio) ||
			validatePeso(pesoKg) ||
			validateVolumen(volumen) ||
			validatePurga(purga) ||
			validateViaAdmin(viaAdmin) ||
			validateTiempoInfucion(tiempoDeInfucion) ||
			validateTipoPrecripcion(tipoPrescripcion) ||
			// validateFlujoMetabolico(flujoMetabolico) ||
			// validateDextrosa(dextrosa!) ||
			validateAminos(requerimientoAminoacidos)
		) {
			// console.log('Validar Campos:', true)
			return true
		}
		else {
			// console.log('Validar Campos:', false)
			return false
		}
	}

	useEffect(() => {
		console.log('ACTUALIZAR');
		validateAlert()
		getPrescriptions();
	}, [numOrder, tipoPrescripcion, fechaCreacion, ips, numIden,
		namePaciente, servicio, ubicacion, cama, pesoKg, tipoEdad,
		edad, volumen, purga, tiempoDeInfucion, overfill, filtro,
		eqFotosencible, tipoPaciente, viaAdmin, diagnostico,
		flujoMetabolico, aminoacidos, dextrosa, requerimientoAminoacidos,
		lipidos, requerimientoLipidos, omegaven, dipeptiven, sodioTotal,
		potacioTotal, fosfato, requerimientoFosfato, calcio, reqCalcio,
		magnesio, reqMagnesio, elementosTraza, reqTraza, vitaminasHidrosolubles,
		reqVitHidrosolubles, vitaminasLiposolubles, soluvid_Vitalipid, vitaminasC, acidoFolico
	])

	const [selectTab, setSelectTab] = useState<number>(0);

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
			//////MODAL//////
			openModalFormSaved,
			handleOpenModalFormSaved,
			handleCloseModalFormSaved,

			openModalFormCancel,
			handleOpenModalFormCancel,
			handleCloseModalFormCancel,

			savePrescription,
			borrarPrescriptions,
			prescriptionSave,
			getPrescriptionsByNumber,
			///////////////////////////ORDEN ///////////////////////////////
			getMaxNumPresc,
			maxNumOrder, setmaxNumOrder,
			numOrder, errorNumOrder, messageErrorNumOrder, handleNumOrder,
			prescripcion, errorPrescripcion, messageErrorPrescripcion, handlePrescripcion,
			fechaCreacion, errorFechaCreacion, messageErrorFechaCreacion, handleFechaCreacion, fechaActual,

			prescriptionCharge,
			////////////INFORMACION DEL PACIENTE///////////////////
			ips, errorIps, messageErrorIps, handleIps,setIps,
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
			overfill, setOverfill, errorOverfill, messageErrorOverfill, handleOverfill,
			filtro, errorFiltro, messageErrorFiltro, handleFiltro,
			eqFotosencible, errorEqFotosencible, messageErrorEqFotosencible, handleEqFotosencible,
			tipoPaciente, errorTipoPaciente, messageErrorTipoPaciente, handleTipoPaciente,
			viaAdmin, errorViaAdmin, messageErrorViaAdmin, handleViaAdmin,
			diagnostico, errorDiagnostico, messageErrorDiagnostico, handleDiagnostico,
			////////////////////MACRONUTRIENTES////////////////////////////////////
			tipoPrescripcion, errorTipoPrescripcion, messageErrorTipoPrescripcion, handleTipoPrescripcion,
			flujoMetabolico, errorFlujoMetabolico, messageErrorFlujoMetabolico, handleFlujoMetabolico,
			aminoacidos, errorAminoacidos, messageErrorAminoacidos, handleAminoacidos,
			dextrosa, errorDextrosa, messageErrorDextrosa, handleDextrosa,
			requerimientoAminoacidos, errorRequerimientoAminoacidos, messageErrorRequerimientoAminoacidos, handleRequerimientoAminoacidos,
			lipidos, errorLipidos, messageErrorLipidos, handleLipidos,
			requerimientoLipidos, errorRequerimientoLipidos, messageErrorRequerimientoLipidos, handleRequerimientoLipidos,
			omegaven, errorOmegaven, messageErrorOmegaven, handleOmegaven,
			dipeptiven, errorDipeptiven, messageErrorDipeptiven, handleDipeptiven,
			////////////////////MACRONUTRIENTES////////////////////////////////////
			sodioTotal, errorSodioTotal, messageErrorSodioTotal, handleSodioTotal,
			potacioTotal, errorPotacioTotal, messageErrorPotacioTotal, handlePotacioTotal,
			fosfato, errorFosfato, messageErrorFosfato, handleFosfato,
			requerimientoFosfato, errorRequerimientoFosfato, messageErrorRequerimientoFosfato, handleRequerimientoFosfato,
			calcio, errorCalcio, messageErrorCalcio, handleCalcio,
			unidades, errorUnidades, messageErrorUnidades, handleUnidades,
			reqCalcio, errorReqCalcio, messageErrorReqCalcio, handleReqCalcio,
			magnesio, errorMagnesio, messageErrorMagnesio, handleMagnesio,
			reqMagnesio, errorReqMagnesio, messageErrorReqMagnesio, handleReqMagnesio,
			elementosTraza, errorElementosTraza, messageErrorElementosTraza, handleElementosTraza,
			reqTraza, errorReqTraza, messageErrorReqTraza, handleReqTraza,
			vitaminasHidrosolubles, errorVitaminasHidrosolubles, messageErrorVitaminasHidrosolubles, handleVitaminasHidrosolubles,
			reqVitHidrosolubles, errorReqVitHidrosolubles, messageErrorReqVitHidrosolubles, handleReqVitHidrosolubles,
			vitaminasLiposolubles, errorVitaminasLiposolubles, messageErrorVitaminasLiposolubles, handleVitaminasLiposolubles,

			estado,

			soluvid_Vitalipid,
			handleSoluvid_Vitalipid,

			vitaminasC, errorVitaminasC, messageErrorVitaminasC, handleVitaminasC,
			acidoFolico, errorAcidoFolico, messageErrorAcidoFolico, handleAcidoFolico,


			newComment, setNewComment,
			saveComments,
			/////////////////////////////////INTEGRACION APIS/////////////////////////////////////////
			loadingSave,
			saveOK,
			valOKAlert,
			messageAPI, setMessageAPI,
			cancelForm,

			saveBorrador,
			openModalFormSavedBorrador,
			handleOpenModalFormSavedBorrador,
			handleCloseModalFormSavedBorrador,

			openModalFormSavedRespon,
			handleOpenModalFormSavedRespon,
			handleCloseModalFormSavedRespon,

			getPrescriptions,
			copyPrescriptions,
			validateAlert,
			validateCampos,

			selectTab, setSelectTab,
			tabsErrors, setTabErrors,
			validateTipoPrecripcion,
			valTabsErrors1, valTabsErrors2
		}}>{children}
		</FormulariosContext.Provider>
	)
};