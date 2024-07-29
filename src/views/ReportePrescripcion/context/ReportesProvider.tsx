
import React, { useContext, useEffect, useState } from "react";
import { FC } from "react";
import { ReportesContext } from "./ReportesContext";
import { PrescriptionsUseCases } from "@/domain/usecases/prescriptions.usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { StorageKeysEnum } from "@/utilities/enums/storage_keys.enum";
import { IPrescriptions } from "@/domain/models/prescriptions.model";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context/GlobalContext";
import { IComment } from "@/domain/models/observaciones.model";

type Props = {
	children: JSX.Element | JSX.Element[]
};

export const ReportesProvider: FC<Props> = ({ children }) => {

	const { handleOffline } = useContext(GlobalContext)

	const [print,setPrint]=useState(false);
	/////////////////////////////HANDLE MODALS////////////////////
	const [openModalDescargar, setOpenModalDescargar] = useState(false);
	const handleOpenModalDescargar = () => { setOpenModalDescargar(true) };
	const handleCloseModalDescargar = () => setOpenModalDescargar(false);

	const [openModalOrdenar, setOpenModalOrdenar] = useState(false);
	const handleOpenModalOrdenar = () => { setOpenModalOrdenar(true) };
	const handleCloseModalOrdenar = () => setOpenModalOrdenar(false);

	const [openModalVerificar, setOpenModalVerificar] = useState(false);
	const handleOpenModalVerificar = () => { setOpenModalVerificar(true) };
	const handleCloseModalVerificar = () => setOpenModalVerificar(false);

	const [openModalRechazar, setOpenModalRechazar] = useState(false);
	const handleOpenModalRechazar = () => { setOpenModalRechazar(true) };
	const handleCloseModalRechazar = () => setOpenModalRechazar(false);

	const [openModalCancelVerificar, setOpenModalCancelVerificar] = useState(false);
	const handleOpenModalCancelVerificar = () => { setOpenModalCancelVerificar(true) };
	const handleCloseModalCancelVerificar = () => setOpenModalCancelVerificar(false);

	////////////////////////////////////////////////////////////
	const prescriptionsUseCase = new PrescriptionsUseCases();
	const localStorageProtocol = new LocalStorageProtocol();

	const [loadingSave, setLoadingSave] = React.useState(false);
	const [saveOK, setSaveOk] = React.useState(true);
	const [messageAPI, setMessageAPI] = React.useState('');

	const [reporte, setReporte] = React.useState<IPrescriptions | undefined>();

	const getPrescriptionsByNumber = async () => {

		const storagePredsc = localStorageProtocol.get(StorageKeysEnum.prescripcionOrden)
		// console.log('Preds:', storagePredsc);
		setLoadingSave(false);
		// console.log('Loading...')
		// const resp = await prescriptionsUseCase.prescripcionsByNumber(storagePredsc.number);
		const resp = await prescriptionsUseCase?.prescripcionsByNumber(storagePredsc.number);

		setLoadingSave(true);

		if (resp.statusCode === 200) {
			setSaveOk(true);

			const repoPresc: IPrescriptions = resp.body
			// console.log('Reporte DDD:', repoPresc)
			setReporte(repoPresc);

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

	const router = useRouter();

	const saveComments = async (comment: IComment) => {

		setLoadingSave(false);
		// console.log('Loading Commenst...:', comment)
		let resp = await prescriptionsUseCase.createComments(comment);
		// console.log('Resp:', resp)
		setLoadingSave(true);

		if (resp.statusCode === 201) {
			setSaveOk(true);
			setMessageAPI(resp.body.message);
			getPrescriptionsByNumber();
		} else if (resp.statusCode === 200) {
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


	return (

		<ReportesContext.Provider value={{
			print,setPrint,
			
			getPrescriptionsByNumber,
			loadingSave,
			saveOK,
			messageAPI,

			reporte,

			openModalDescargar,
			handleOpenModalDescargar,
			handleCloseModalDescargar,

			openModalOrdenar,
			handleOpenModalOrdenar,
			handleCloseModalOrdenar,

			openModalRechazar,
			handleOpenModalRechazar,
			handleCloseModalRechazar,

			openModalVerificar,
			handleOpenModalVerificar,
			handleCloseModalVerificar,

			openModalCancelVerificar,
			handleOpenModalCancelVerificar,
			handleCloseModalCancelVerificar,
			// goEdit,
			saveComments,
		}}>{children}
		</ReportesContext.Provider>
	)
};