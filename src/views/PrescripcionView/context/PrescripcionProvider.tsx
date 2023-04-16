
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { PrescripcionContext } from "./PrescripcionContext";
import { PrescriptionsUseCases } from "@/domain/usecases/prescriptions.usecases";

type Props = {
	children: JSX.Element | JSX.Element[]
};


export const PrescripcionProvider: FC<Props> = ({ children }) => {

	const prescriptionsUseCase = new PrescriptionsUseCases();
	const [loadingGet, setLoadingGet] = React.useState(false);
	const [getOK, setGetOk] = React.useState(true);
	const [messageAPI, setMessageAPI] = React.useState('');

	const getAll = async () => {

		setLoadingGet(false);
		console.log('Loading...')
		const resp = await prescriptionsUseCase.prescripcionsAll()
		console.log('Resp:', resp)

		setLoadingGet(true);

		if (resp.statusCode === 201) {
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
	}


	return (
		<PrescripcionContext.Provider value={{
			
			loadingGet,
			getOK,
			messageAPI,
            getAll,

		}}>{children}
		</PrescripcionContext.Provider>
	)
};