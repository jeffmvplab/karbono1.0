import { FC, useContext, useState } from "react";
import { PerfilContext } from "./PerfilContext";
import { UserUseCases } from "@/domain/usecases";
import { GlobalContext } from "@/context/GlobalContext";
import { IUser } from "@/domain/models";
import { IUserEquipo } from "@/domain/models/equipo_user.model";
import { getMaxListeners } from "events";

type Props = {
	children: JSX.Element | JSX.Element[]
};

const userEquEj: IUserEquipo[] = [
	{
		nombre_apellidos: 'user 1',
		email: 'user1@getMaxListeners.com',
		rol: 'Prescriptor'
	},
	{
		nombre_apellidos: 'user 2',
		email: 'user2@getMaxListeners.com',
		rol: 'Prescriptor'
	},
	{
		nombre_apellidos: 'user 3',
		email: 'user3@getMaxListeners.com',
		rol: 'Prescriptor'
	}


]

export const PerfilProvider: FC<Props> = ({ children }) => {

	const [loadingApi, setLoadingApi] = useState(false);
	const [errorApi, setErrorApi] = useState('');

	const { handleOffline } = useContext(GlobalContext);

	const useruseCase = new UserUseCases();

	const [user, setUser] = useState<IUser>();

	const [userEquipo, setUserEquipo] = useState<IUserEquipo[] | undefined>();

	const [userInv, setUserInv] = useState<IUserEquipo | undefined>();

	const getUserByRol = async (rol: string) => {

		setUserEquipo(userEquEj);

		// setLoadingApi(true);
		// console.log('Loading...')
		// const resp = await useruseCase.getUserByRol(rol)
		// console.log('RespApi:', resp)

		// if (resp.statusCode === 201) {

		// 	console.log('RES_API:', resp)

		// } else if (resp.body.statusCode === 400) {
		// 	console.log('Error Loguin:', resp.body.message)
		// 	setErrorApi(resp.body.message);
		// } else if (resp.body.statusCode === 401) {
		// 	console.log('Error Loguin:', resp.body.message)
		// 	setErrorApi(resp.body.message);
		// } else if (resp.statusCode === 408) {

		// 	handleOffline();
		// }

		setLoadingApi(false);
	}

	const invitarUsuarios = async (
		roles: string[],
		central_de_mezclas: string,
		email: string,) => {

		setLoadingApi(true);
		console.log('Invitabdo...')

		const resp = await useruseCase.invitarUsuarios(roles, central_de_mezclas, email)
		console.log('RespApi:', resp)

		if (resp.statusCode === 201) {

			console.log('RES_API:', resp)

		} else if (resp.body.statusCode === 400) {
			console.log('Error Loguin:', resp.body.message)
			setErrorApi(resp.body.message);
		} else if (resp.body.statusCode === 401) {
			console.log('Error Loguin:', resp.body.message)
			setErrorApi(resp.body.message);
		} else if (resp.statusCode === 408) {

			handleOffline();
		}

		setLoadingApi(false);
	}

	const aceptarInvitacion = async (token: string) => {

		setLoadingApi(true);
		console.log('Aceptar Inv...')

		const resp = await useruseCase.aceptarInvitacion(token)
		console.log('RespApi:', resp)

		if (resp.statusCode === 201) {

			console.log('RES_API:', resp)

		} else if (resp.body.statusCode === 400) {
			console.log('Error Loguin:', resp.body.message)
			setErrorApi(resp.body.message);
		} else if (resp.body.statusCode === 401) {
			console.log('Error Loguin:', resp.body.message)
			setErrorApi(resp.body.message);
		} else if (resp.statusCode === 408) {

			handleOffline();
		}

		setLoadingApi(false);
	}


	const registerByInvitation = async () => {

		setLoadingApi(true);
		console.log('Register by Inv...')

		const resp = await useruseCase.registerByInvitation(
			userInv?.id!,
			userInv?.email!,
			userInv?.nombre_apellidos!,
			userInv?.telefono!,
			userInv?.password!,
			userInv?.registro_medico!,
			userInv?.primer_nombre!,
			userInv?.primer_apellido!,
			userInv?.entidad_de_salud!,
			userInv?.he_leido!,
		)
		console.log('RespApi:', resp)

		if (resp.statusCode === 201) {

			console.log('RES_API:', resp)

		} else if (resp.body.statusCode === 400) {
			console.log('Error Loguin:', resp.body.message)
			setErrorApi(resp.body.message);
		} else if (resp.body.statusCode === 401) {
			console.log('Error Loguin:', resp.body.message)
			setErrorApi(resp.body.message);
		} else if (resp.statusCode === 408) {

			handleOffline();
		}

		setLoadingApi(false);
	}



	//////////////////////////////////////////////////////////////////////////////////

	return (
		<PerfilContext.Provider value={{
			loadingApi, setLoadingApi,
			errorApi, setErrorApi,
			user, setUser,
			userEquipo, setUserEquipo,
			getUserByRol,

			userInv, setUserInv,
			invitarUsuarios,
			aceptarInvitacion,
			registerByInvitation
		}}>{children}
		</PerfilContext.Provider>
	)
};