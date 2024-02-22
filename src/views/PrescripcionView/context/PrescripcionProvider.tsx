
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FC } from "react";
import { PrescripcionContext } from "./PrescripcionContext";
import { PrescriptionsUseCases } from "@/domain/usecases/prescriptions.usecases";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { GlobalContext } from "@/context/GlobalContext";
import { ILogs } from "@/domain/models/logs.model";

type Props = {
	children: JSX.Element | JSX.Element[]
};


export const PrescripcionProvider: FC<Props> = ({ children }) => {

	const prescriptionsUseCase = new PrescriptionsUseCases();
	const [loadingGet, setLoadingGet] = React.useState(false);
	const [getOK, setGetOk] = React.useState(true);
	const { handleOffline } = useContext(GlobalContext)
	const [messageAPI, setMessageAPI] = React.useState('');

	const [reportes, setReportes] = React.useState<IPrescriptions[]>([]);

	const [openActionsDrawer, setOpenActionsDrawer] = useState(false);

	const getAll = async (limit?: number) => {

		setLoadingGet(false);
		console.log('Loading...')
		const resp = await prescriptionsUseCase.prescripcionsAll(limit!)
		console.log('Resp:', resp.body)


		if (resp.statusCode === 200) {
			setReportes(resp.body);
			setGetOk(true);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setGetOk(false)
		} else if (resp.statusCode === 404) {
			setGetOk(false)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setGetOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setGetOk(false)
		}
		setLoadingGet(true);
		//  return resp.body;
	}


	const [logs, setLogs] = useState<ILogs[]>();

	const getLogsByNumber = async () => {

		const storagePredsc = localStorageProtocol.get(StorageKeysEnum.prescripcionOrden)

		console.log('Preds:', storagePredsc);
		setLoadingGet(false);
		console.log('Loading...')
		// const resp = await prescriptionsUseCase.prescripcionsByNumber(storagePredsc.number);
		const resp = await prescriptionsUseCase?.getLogs(storagePredsc.number);

		setLoadingGet(true);
		if (resp.statusCode === 200) {

			console.log('Logs:', resp)
			setLogs(resp.body)

		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)

		} else if (resp.statusCode === 404) {

		} else if (resp.statusCode === 401 && resp.statusCode === 500) {

		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {

		}
	}


	const getPrescripcionsByLab = async () => {

		setLoadingGet(false);
		console.log('Loading PrescripcionsByLab...')
		const resp = await prescriptionsUseCase.getPrescripcionsByLab()
		console.log('PrescripcionsByLab Resp:', resp.body)


		if (resp.statusCode === 200) {
			setReportes(resp.body);
			setGetOk(true);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setGetOk(false)
		} else if (resp.statusCode === 404) {
			setGetOk(false)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setGetOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setGetOk(false)
		}
		setLoadingGet(true);
		//  return resp.body;
	}

	const [preparador, setPreparador] = useState<string>()
	const [controlador_de_calidad, setControlador_de_calidad] = useState<string>()
	const [prescripcionID, setPrescripcionID] = useState<string>()

	const setQuimicos = async () => {

		setLoadingGet(false);
		console.log('Loading PrescripcionsByLab...')
		const resp = await prescriptionsUseCase.setQuimicos(
			prescripcionID!, preparador!, controlador_de_calidad!
		);
		console.log('PrescripcionsByLab Resp:', resp.body)


		if (resp.statusCode === 200) {
			setReportes(resp.body);
			setGetOk(true);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setGetOk(false)
		} else if (resp.statusCode === 404) {
			setGetOk(false)
		} else if (resp.statusCode === 401 && resp.statusCode === 500) {
			setGetOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setGetOk(false)
		}
		setLoadingGet(true);
		//  return resp.body;
	}

	const localStorageProtocol = new LocalStorageProtocol();
	const router = useRouter();

	const goEdit = (orden: number) => {

		const prescripcion = { number: orden, }
		localStorageProtocol.set(StorageKeysEnum.prescripcionOrden, prescripcion);
		router.push(mainRoutes.form)
	}

	const goReporte = (orden: number) => {

		const prescripcion = { number: orden, }
		localStorageProtocol.set(StorageKeysEnum.prescripcionOrden, prescripcion);
		router.push(mainRoutes.reportePrescripcion)
	}

	const goActions = (orden: number) => {

		const prescripcion = { number: orden, }
		localStorageProtocol.set(StorageKeysEnum.prescripcionOrden, prescripcion);
		setOpenActionsDrawer(true)
	}

	const goAddNew = (route: string) => {
		localStorageProtocol.delete(StorageKeysEnum.prescripcionOrden);
		router.push(route)
	}

	const [openModalSearch, setOpenModalSearch] = useState(false);
	const handleOpenModalSearch = () => { setOpenModalSearch(true) };
	const handleCloseModalSearch = () => setOpenModalSearch(false);

	const [search, setSearch] = React.useState('');
	const [errorSearch, setErrorSearch] = React.useState(false);
	const [messageErrorSearch, setMessageErrorSearch] = React.useState('');

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		// const prescripcion = event.target.value;
	};

	const [searchName, setSearchName] = React.useState('');

	const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchName(event.target.value);
		// const prescripcion = event.target.value;
	};

	const [searchId, setSearchId] = React.useState('');
	const handleSearchId = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchId(event.target.value);
		// const prescripcion = event.target.value;
	};

	const [searchNumber, setSearchNumber] = React.useState('');
	const handleSearchNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchNumber(event.target.value);
		// const prescripcion = event.target.value;
	};

	const [searchFecha, setSearchFecha] = React.useState('');
	const handleSearchFecha = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchFecha(event.target.value);
		// const prescripcion = event.target.value;
	};

	const [selectedFilter, setSelectedFilter] = React.useState('a');
	const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFilter(event.target.value);
		console.log('Filter:', event.target.value)
	};

	/////////////////////////////////Integración de Busquedas///////////////////////////////////////////////
	const [loadingApi, setLoadingApi] = React.useState(true);
	const [apiOK, setApiOk] = React.useState(true);
	const [prescSearch, setPrescSearch] = React.useState<IPrescriptions>();

	const getPrescriptionsByNumber = async (number: string) => {
		setLoadingApi(false);

		const resp = await prescriptionsUseCase.prescripcionsByNumber(number);
		let repoPresc: IPrescriptions[] = []

		if (resp.body.length) {
			repoPresc = resp.body
		} else {
			repoPresc[0] = resp.body
		}

		console.log('RESP by Num:', repoPresc)
		if (resp.statusCode === 200) {
			setReportes(repoPresc);
			setErrorSearch(false)

			if (resp.body.length === 0) {
				setMessageAPI('No se encontró ninguna prescripción')
				setErrorSearch(true)
			}
			setApiOk(false)
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setErrorSearch(true)
			setApiOk(false)
		} else if (resp.statusCode === 404) {
			setMessageAPI(resp.body.message)
			setErrorSearch(true)
			setApiOk(false)
		} else if (resp.statusCode === 401 || resp.statusCode === 500) {
			setMessageAPI(resp.body.message)
			setErrorSearch(true)
			setApiOk(false)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setErrorSearch(true)
			setApiOk(false)
		}

		setLoadingApi(true);
	}

	const getPrescriptionsByName = async (name: string) => {
		setLoadingApi(false);

		const resp = await prescriptionsUseCase.prescripcionsByName(name);
		let repoPresc: IPrescriptions[] = []

		if (resp.body.length > 0) {
			repoPresc = resp.body
		} else {
			repoPresc = []
		}
		console.log('RESP by Name:', resp.body)
		if (resp.statusCode === 201) {

			setReportes(repoPresc);
			setErrorSearch(false)

			if (resp.body.length === 0) {
				setMessageAPI('No se encontró ninguna prescripción')
				setErrorSearch(true)
			}
			setApiOk(false);
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 404) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 401 || resp.statusCode === 500) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		}
		setLoadingApi(true);
	}

	const getPrescriptionsByIps = async (ips: string) => {
		setLoadingApi(false);
		const resp = await prescriptionsUseCase.prescripcionsByIps(ips);
		let repoPresc: IPrescriptions[] = []

		if (resp.body.length) {
			repoPresc = resp.body
		} else {
			repoPresc[0] = resp.body
		}
		console.log('RESP by Ips:', resp)

		if (resp.statusCode === 201) {
			setReportes(repoPresc);
			setErrorSearch(false)

			if (resp.body.length === 0) {
				setMessageAPI('No se encontró ninguna prescripción')
				setErrorSearch(true)
			}
			setApiOk(false)
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 404) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 401 || resp.statusCode === 500) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		}
		setLoadingApi(true);
	}

	const getPrescriptionsById = async (id: string) => {
		setLoadingApi(false);
		const resp = await prescriptionsUseCase.prescripcionsById(id);
		let repoPresc: IPrescriptions[] = []

		if (resp.body.length > 0) {
			repoPresc = resp.body
		} else {
			repoPresc = []
		}
		console.log('RESP by Id:', resp)

		if (resp.statusCode === 201) {
			setReportes(repoPresc);
			setErrorSearch(false)

			if (resp.body.length === 0) {
				setMessageAPI('No se encontró ninguna prescripción')
				console.log(resp.body)
				setErrorSearch(true)
			}
			setApiOk(false)
		} else if (resp.statusCode === 400) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 404) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 401 || resp.statusCode === 500) {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		} else if (resp.statusCode === 408) {
			handleOffline();
		} else {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		}
		setLoadingApi(true);
	}

	const handleFilterSearch = async () => {
		switch (selectedFilter) {
			case 'a': (isNaN(parseInt(search)))
				? await getPrescriptionsByName(search)
				: await getPrescriptionsByNumber(search)
				break;
			case 'b': (isNaN(parseInt(search)))
				? await getPrescriptionsByIps(search)
				: await getPrescriptionsByNumber(search)
				break;
			case 'c': (!isNaN(parseInt(search)))
				? (search.length > 7)
					? await getPrescriptionsById(search)
					: await getPrescriptionsByNumber(search)
				: await getPrescriptionsByName(search)
				break;
			case 'd': (!isNaN(parseInt(search)))
				? await getPrescriptionsByNumber(search)
				: await getPrescriptionsByName(search)
				break;
				break;
		}
	}

	//////////////////////////////////////////////////////////////////////////////////

	return (
		<PrescripcionContext.Provider value={{

			loadingGet,
			getOK,
			messageAPI,
			getAll,
			reportes,
			goEdit,
			goReporte,
			goAddNew,

			openActionsDrawer, setOpenActionsDrawer,
			goActions,logs,

			openModalSearch,
			handleOpenModalSearch,
			handleCloseModalSearch,

			search,
			handleSearch,

			searchName,
			handleSearchName,

			searchId,
			handleSearchId,

			searchNumber,
			handleSearchNumber,

			searchFecha,
			handleSearchFecha,

			selectedFilter,
			handleChangeFilter,

			loadingApi,
			apiOK,
			handleFilterSearch,
			prescSearch,
			getPrescriptionsByName,
			getPrescriptionsById,
			getPrescriptionsByNumber,

			getLogsByNumber,

		}}>{children}
		</PrescripcionContext.Provider>
	)
};
