
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { PrescripcionContext } from "./PrescripcionContext";
import { PrescriptionsUseCases } from "@/domain/usecases/prescriptions.usecases";
import { IPrescriptions } from "@/domain/models/prescriptions.model";

type Props = {
	children: JSX.Element | JSX.Element[]
};


export const PrescripcionProvider: FC<Props> = ({ children }) => {

	const prescriptionsUseCase = new PrescriptionsUseCases();
	const [loadingGet, setLoadingGet] = React.useState(false);
	const [getOK, setGetOk] = React.useState(true);
	const [messageAPI, setMessageAPI] = React.useState('');

	const [reportes, setReportes] = React.useState<IPrescriptions[]>([]);

	const [limit, setLimit] = React.useState(10);

	const getAll = async (limit?: number) => {

		setLoadingGet(false);
		console.log('Loading...')
		const resp = await prescriptionsUseCase.prescripcionsAll(limit!)
		console.log('Resp:', resp.body.message)


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
		const repoPresc: IPrescriptions[] = resp.body
        console.log('RESP by Num:',resp)
		if (resp.statusCode === 200) {
			setReportes(repoPresc);
			setErrorSearch(false)

			if(resp.body.length===0){
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
		} else {
			setErrorSearch(true)
			setApiOk(false)
		}

		setLoadingApi(true);
	}

	const getPrescriptionsByName = async (name: string) => {
		setLoadingApi(false);

		const resp = await prescriptionsUseCase.prescripcionsByName(name);
		const repoPresc: IPrescriptions[] = resp.body
		console.log('RESP by Name:',resp)
		if (resp.statusCode === 201) {
			setReportes(repoPresc);
			setErrorSearch(false)
			
			if(resp.body.length===0){
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
		const repoPresc: IPrescriptions[] = resp.body
		console.log('RESP by Ips:',resp)

		if (resp.statusCode === 201) {
			setReportes(repoPresc);
			setErrorSearch(false)

			if(resp.body.length===0){
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
		const repoPresc: IPrescriptions[] = resp.body
		console.log('RESP by Id:',resp)

		if (resp.statusCode === 201) {
			setReportes(repoPresc);
			setErrorSearch(false)

			if(resp.body.length===0){
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
		} else {
			setMessageAPI(resp.body.message)
			setApiOk(false)
			setErrorSearch(true)
		}
		setLoadingApi(true);
	}

	const handleFilterSearch = async () => {
		switch (selectedFilter) {
			case 'a':await getPrescriptionsByName(search)
				break;
			case 'b':await getPrescriptionsByIps(search)
				break;
			case 'c':await getPrescriptionsById(search)
				break;
			case 'd':await getPrescriptionsByNumber(search)
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

			openModalSearch,
			handleOpenModalSearch,
			handleCloseModalSearch,

			search,
			errorSearch,
			messageErrorSearch,
			handleSearch,

			selectedFilter,
			handleChangeFilter,

			loadingApi,
			apiOK,
			handleFilterSearch,
			prescSearch


		}}>{children}
		</PrescripcionContext.Provider>
	)
};