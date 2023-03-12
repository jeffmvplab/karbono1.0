
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { PrescripcionContext } from "./PrescripcionContext";

type Props = {
	children: JSX.Element | JSX.Element[]
};


export const PrescripcionProvider: FC<Props> = ({ children }) => {

	const router = useRouter();

	const [ruta, setRuta ] =  useState(' ');

	const mostrarRuta = () => {

		setRuta (router.asPath);


	}

	const cambiarRuta = () => {

		setRuta (mainRoutes.prescripcion);


	}

	const [ancho, setAncho] = useState(false)

	
	const cambiarAncho = () => {


		if(ancho){
			setAncho(false)

		}else{
			setAncho(true)
		}


	}


    

	
	return (
		<PrescripcionContext.Provider value={{

			ruta,
			mostrarRuta,
			cambiarRuta,
			ancho,
			cambiarAncho,
            

		}}>{children}
		</PrescripcionContext.Provider>
	)
};