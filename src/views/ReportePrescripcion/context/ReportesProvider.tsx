
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import {ReportesContext } from "./ReportesContext";

type Props = {
	children: JSX.Element | JSX.Element[]
};



export const ReportesProvider: FC<Props> = ({ children }) => {


	return (

		<ReportesContext.Provider value={{
			
		}}>{children}
		</ReportesContext.Provider>
	)
};