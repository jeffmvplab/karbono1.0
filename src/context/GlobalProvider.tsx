
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { GlobalContext } from "./GlobalContext";

type Props = {
	children: JSX.Element,
};


export const GlobalProvider: FC<Props> = ({ children }) => {

	const router = useRouter();
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
	/////////////////////////////////Manejo Confirmar Password //////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [passwordConfirm, setPasswordConfirm] = React.useState('');
	const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState(false);
	const [messageErrorPasswordConfirm, setMessageErrorPasswordConfirm] = React.useState('');

	const handlePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordConfirm(event.target.value || '');

		const passwordConfirm = event.target.value;

		console.log('PasswordConfirm:', passwordConfirm);

		// if (isPass.test( passwordConfirm)) {
		if (passwordConfirm.length > 7) {
			setErrorPasswordConfirm(false);
			setMessageErrorPasswordConfirm('')
			if (passwordConfirm === password) {
				setErrorPasswordConfirm(false)
				setMessageErrorPasswordConfirm('')
			}
			else {
				setErrorPasswordConfirm(true);
				setMessageErrorPasswordConfirm('La contraseñas no coincide')
			}
		} else {
			setErrorPasswordConfirm(true);
			// setMessageErrorPasswordConfirm('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPasswordConfirm('Su contraseña debe contener mínimo 8 caracteres')
		}
	};
	/////////////////////////////////Manejo Password//////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [name, setName] = React.useState('');
	const [errorName, setErrorName] = React.useState(false);
	const [messageErrorName, setMessageErrorName] = React.useState('');

	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value || '');

		const name = event.target.value;

		console.log('name:', name);

		// if (isPass.test( name)) {
		// if (name.length > 7) {
		// 	setErrorName(false);
		// 	setMessageErrorName('')
		// } else {
		// 	setErrorName(true);
		// 	// setMessageErrorName('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
		// 	setMessageErrorName('')
		// }
	};

	const [phone, setPhone] = React.useState('');
	const [errorPhone, setErrorPhone] = React.useState(false);
	const [messageErrorPhone, setMessageErrorPhone] = React.useState('');

	const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(event.target.value || '');

		const phone = event.target.value;

		console.log('phone:', phone);

		// if (isPass.test( phone)) {
		if (phone.length > 7 && !isNaN(parseInt(phone))) {
			setErrorPhone(false);
			setMessageErrorPhone('')
		} else {
			setErrorPhone(true);
			// setMessageErrorPhone('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPhone('Introduzca un número de telefono válido')
		}
	};
	//////////////////////////////////MÉTODOS//////////////////////////////////////////////////////////////////
	/////////////////////////////////AUTH STATUS//////////////////////////////////////////

	const [isAuth, setIsAuth] = React.useState(false);

	const authStatus = () => {
		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			router.push(mainRoutes.home);
			console.log('IsAuth:', isAuth)
		} else {
			setIsAuth(false);
			router.push(mainRoutes.login);
			console.log('IsAuth:', isAuth)
		}
	}

	/////////////////////////////LOGIN//////////////////////////////////////////////
	const useruseCase = new UserUseCases();
	const [loadingAuth, setLoadingAuth] = React.useState(false);
	const [authOK, setAuthOk] = React.useState(true);

	const login = async () => {
		setLoadingAuth(true);
		console.log('Loading...')
		const resp = await useruseCase.login(email, password)
		console.log('RespAuth:', resp)

		localStorageProtocol.set(StorageKeysEnum.user, resp);

		setLoadingAuth(false);
		if (resp !== 401 && resp !== 400 && resp !== 500) {
			authStatus();
			setAuthOk(true);
		} else {
			setAuthOk(false)
		}
	}

	/////////////////////////////LOGIN//////////////////////////////////////////////
	const register = async () => {

		setLoadingAuth(true);
		console.log('Register...')
		const resp = await useruseCase.register(name, phone, email, password)
		console.log('RespRegister:', resp)

		localStorageProtocol.set(StorageKeysEnum.user, resp);

		setLoadingAuth(false);
		if (resp !== 401 && resp !== 400 && resp !== 500) {
			authStatus();
			setAuthOk(true);
		} else {
			setAuthOk(false)
		}
	}
	/////////////////////////////LOGOUT//////////////////////////////////////////////
	const logout = async () => {
		localStorageProtocol.delete(StorageKeysEnum.user);
		authStatus();
	}
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	return (

		<GlobalContext.Provider value={{

			authOK,
			isAuth,

			login,
			register,

			logout,
			loadingAuth,

			name,
			errorName,
			messageErrorName,
			handleName,

			phone,
			errorPhone,
			messageErrorPhone,
			handlePhone,

			email,
			errorEmail,
			messageErrorEmail,
			handleEmail,

			password,
			errorPassword,
			messageErrorPassword,
			handlePassword,

			passwordConfirm,
			errorPasswordConfirm,
			messageErrorPasswordConfirm,
			handlePasswordConfirm

		}}>{children}
		</GlobalContext.Provider>
	)
};