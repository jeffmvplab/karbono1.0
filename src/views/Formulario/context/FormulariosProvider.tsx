
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
		}else {
			setOpen1(true);
			setOpen2(false);
		}
	};

	const handleMenu2 = () => {
		if (open2) {
			setOpen2(false);
		}else {
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


		}}>{children}
		</FormulariosContext.Provider>
	)
};