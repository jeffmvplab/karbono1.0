
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FC } from "react";
import { GlobalContext } from "./GlobalContext";

type Props = {
	children: JSX.Element,
};


export const GlobalProvider: FC<Props> = ({ children }) => {
    
	const router=useRouter();
	const localStorageProtocol = new LocalStorageProtocol();

	/////////////////////////////////Manejo Email//////////////////////////////////////////
	const isEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	const [email, setEmail] = React.useState('');
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [messageErrorEmail, setMessageErrorEmail] = React.useState('');


	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value || '');
		const email = event.target.value;

		console.log('Email:', email);

		if (isEmail.test(email)) {
			setErrorEmail(false);
			setMessageErrorEmail('')
		} else {
			setErrorEmail(true);
			setMessageErrorEmail('El correo no es válido')
		}
	};

	/////////////////////////////////Manejo Password//////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [password, setPassword] = React.useState('');
	const [errorPassword, setErrorPassword] = React.useState(false);
	const [messageErrorPassword, setMessageErrorPassword] = React.useState('');

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value || '');

		const password = event.target.value;

		console.log('Password:', password);

		// if (isPass.test( password)) {
		if (password.length > 7) {
			setErrorPassword(false);
			setMessageErrorPassword('')
		} else {
			setErrorPassword(true);
			// setMessageErrorPassword('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPassword('Su contraseña debe contener mínimo 8 caracteres')
		}
	};
////////////////////////////////////////MÉTODOS//////////////////////////////////////////////////////////////////
	/////////////////////////////////AUTH STATUS//////////////////////////////////////////
   
	const [isAuth, setIsAuth] = React.useState(false);

	const authStatus = () => {
		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
				setIsAuth(true) 
				router.push(mainRoutes.home);
				console.log('IsAuth:',isAuth)
			}else { 
				setIsAuth(false);
				router.push(mainRoutes.login);
				console.log('IsAuth:',isAuth) 
				}
	}

	/////////////////////////////LOGIN//////////////////////////////////////////////
	const useruseCase = new UserUseCases();
	const [loadingAuth, setLoadingAuth] = React.useState(false);

	const login = async () => {
		setLoadingAuth(true);
		console.log('Loading...')
		const resp = await useruseCase.login(email, password)
		console.log('RespAuth:', resp)

		localStorageProtocol.set(StorageKeysEnum.user, resp);

		setLoadingAuth(false);
		authStatus();
	}
	/////////////////////////////LOGOUT//////////////////////////////////////////////
	const logout = async () => {
		localStorageProtocol.delete(StorageKeysEnum.user);
		authStatus();
	}
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
	useEffect(() => {
		
	}, [])
	
	return (
		<GlobalContext.Provider value={{
            
			isAuth,
			login,
			logout,
			loadingAuth,

			email,
			errorEmail,
			messageErrorEmail,
			handleEmail,

			password,
			errorPassword,
			messageErrorPassword,
			handlePassword

		}}>{children}
		</GlobalContext.Provider>
	)
};