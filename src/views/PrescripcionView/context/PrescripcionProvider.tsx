
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
		// console.log('Resp:', resp)


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


	return (
		<PrescripcionContext.Provider value={{

			loadingGet,
			getOK,
			messageAPI,
			getAll,
			reportes,

		}}>{children}
		</PrescripcionContext.Provider>
	)
};