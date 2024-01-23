
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { CookiesKeysEnum, StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { GlobalContext } from "./GlobalContext";

import Cookies from "js-cookie";
import axios from "axios";

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

	const [nameYApellidos, setNameYApellidos] = React.useState('');
	const [errorNameYApellidos, setErrorNameYApellidos] = React.useState(false);
	const [messageErrorNameYApellidos, setMessageErrorNameYApellidos] = React.useState('');

	const handleNameYApellidos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameYApellidos(event.target.value || '');

		const nameYApellidos = event.target.value;

		console.log('nameYApellidos:', nameYApellidos);
	};

	const [name, setName] = React.useState('');
	const [errorName, setErrorName] = React.useState(false);
	const [messageErrorName, setMessageErrorName] = React.useState('');

	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value || '');

		const name = event.target.value;

		console.log('name:', name);
	};

	const [apellido, setApellido] = React.useState('');
	const [errorApellido, setErrorApellido] = React.useState(false);
	const [messageErrorApellido, setMessageErrorApellido] = React.useState('');

	const handleApellido = (event: React.ChangeEvent<HTMLInputElement>) => {
		setApellido(event.target.value || '');

		const Aapellido = event.target.value;

		console.log('Apellido:', apellido);
	};

	const [registroMedico, setRegistroMedico] = React.useState('');
	const [errorRegistroMedico, setErrorRegistroMedico] = React.useState(false);
	const [messageErrorRegistroMedico, setMessageErrorRegistroMedico] = React.useState('');

	const handleRegistroMedico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRegistroMedico(event.target.value || '');

		const registroMedico = event.target.value;

		console.log('RegistroMedico:', registroMedico);
	};


	const [entidadDeSalud, setEntidadDeSalud] = React.useState('');
	const [errorEntidadDeSalud, setErrorEntidadDeSalud] = React.useState(false);
	const [messageErrorEntidadDeSalud, setMessageErrorEntidadDeSalud] = React.useState('');

	const handleEntidadDeSalud = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEntidadDeSalud(event.target.value || '');

		const entidadDeSalud = event.target.value;

		console.log('EntidadDeSalud:', entidadDeSalud);
	};

	const [centralDeMezclas, setCentralDeMezclas] = React.useState('');
	const [errorCentralDeMezclas, setErrorCentralDeMezclas] = React.useState(false);
	const [messageErrorCentralDeMezclas, setMessageErrorCentralDeMezclas] = React.useState('');

	const handleCentralDeMezclas = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCentralDeMezclas(event.target.value || '');

		const CentralDeMezclas = event.target.value;

		console.log('CentralDeMezclas:', CentralDeMezclas);
	};


	const [politica_de_privacidad, setPolitica_de_privacidad] = React.useState<boolean>(false);

	const handlePolitica = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
		setPolitica_de_privacidad(event.target.checked);
		console.log('Política de Privacidad:', politica_de_privacidad);
	}

	const [tipoCliente, setTipoCliente] = useState('Cliente')
	const handleTipo = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
		setTipoCliente(event?.target?.value!)
	}

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

		const myToken = Cookies.get(CookiesKeysEnum.token)
		// console.log('MyToken:',myToken)

		if (myToken === null || myToken === undefined) {
			localStorageProtocol.delete(StorageKeysEnum.user)
		}
		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			// router.push(mainRoutes.home);
			console.log('IsAuth:', isAuth)
		} else {
			setIsAuth(false);
			Cookies.remove(CookiesKeysEnum.token)
			router.push(mainRoutes.login);
			console.log('IsAuth:', isAuth)
		}
	}

	/////////////////////////////LOGIN//////////////////////////////////////////////
	const useruseCase = new UserUseCases();
	const [loadingAuth, setLoadingAuth] = React.useState(false);
	const [authOK, setAuthOk] = React.useState(true);
	const [errorAuth, setErrorAuth] = React.useState('');

	const login = async () => {
		setLoadingAuth(true);
		console.log('Loading...')
		const resp = await useruseCase.login(email, password,[entidadDeSalud],centralDeMezclas)
		console.log('RespAuth:', resp)

		if (resp.statusCode === 201) {
			localStorageProtocol.set(StorageKeysEnum.user, resp.body);
			Cookies.set(CookiesKeysEnum.token, resp.body.token, { sameSite: 'Strict' })
		}

		setLoadingAuth(false);

		if (resp.statusCode === 201) {
			setErrorAuth('');
			setAuthOk(true)
			authStatus();
			router.push(mainRoutes.home);
			console.log('RES_API:', resp)

		} else if (resp.body.statusCode === 400) {
			console.log('Error Loguin:', resp.body.message)
			setErrorAuth(resp.body.message);
			setAuthOk(false)
		} else if (resp.body.statusCode === 401) {
			console.log('Error Loguin:', resp.body.message)
			setErrorAuth(resp.body.message);
			setAuthOk(false)
		}
	}

	/////////////////////////////LOGIN//////////////////////////////////////////////
	const [captcha,setCaptcha]=useState('');

	const register = async () => {

		setLoadingAuth(true);
		console.log('Register...')

		// Luego, dentro de tu función de manejo de registro:
		// const isRecaptchaValid = await verifyRecaptchaV3(captcha);
		// console.log('CAPTCHA:',isRecaptchaValid);
		
		let resp;

		if (captcha!=='') {
			resp = await useruseCase.register(
				// [tipoCliente],
				['Administrador'],
				nameYApellidos,
				name,
				apellido,
				registroMedico,
				[entidadDeSalud],
				'Corpaul',
				phone,
				email,
				password,
				politica_de_privacidad
			)
		  // Procede con el registro
		} else {
		 console.log('CAPTCHA NO VALIDO')
		}

		console.log('RespRegister:', resp)

		if (resp.body === undefined) {
			localStorageProtocol.set(StorageKeysEnum.user, resp);
			Cookies.set(CookiesKeysEnum.token, resp.token, { sameSite: 'Strict' })
		}

		setLoadingAuth(false);

		if (resp.body !== undefined) {
			setAuthOk(false);
			console.log('RES_API:', resp)

			if (resp.body.statusCode === 400) {
				// console.log('Error Register:', resp.body.message[0])
				setErrorAuth(resp.body.message);
				setAuthOk(false)
			}
		}
		else {
			setErrorAuth('');
			setAuthOk(true)
			authStatus();
			router.push(mainRoutes.home);
		}

	}

	// const verifyRecaptchaV3 = async (recaptchaValue:any) => {
	// 	const secretKey = '6LeEcFYpAAAAAC99TBteoPgycDo_qXSovKaAKZP6'; // Reemplaza con tu clave secreta
	// 	// const secretKey = '6LfWYFYpAAAAAIbQqOJyXqq61Diq_AL1jI9xlZq2'; // Reemplaza con tu clave secreta

	// 	const response = await axios.post(
	// 	  'https://www.google.com/recaptcha/api/siteverify',
	// 	  null,
	// 	  {
	// 		params: {
	// 		  secret: secretKey,
	// 		  response: recaptchaValue,
	// 		},
	// 	  }
	// 	);
	  
	// 	return response.data.success;
	//   };
	  
	  
	  
	/////////////////////////////LOGOUT//////////////////////////////////////////////
	const logout = async () => {
		localStorageProtocol.delete(StorageKeysEnum.user);
		Cookies.remove(CookiesKeysEnum.token)
		authStatus();
	}
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	return (

		<GlobalContext.Provider value={{

			authOK,
			isAuth,
			authStatus,

			login,
			register,
			errorAuth,

			logout,
			loadingAuth,

			captcha,setCaptcha,

			tipoCliente, handleTipo,

			name,
			errorName,
			messageErrorName,
			handleName,

			apellido,
			errorApellido,
			messageErrorApellido,
			handleApellido,

			nameYApellidos,
			errorNameYApellidos,
			messageErrorNameYApellidos,
			handleNameYApellidos,

			politica_de_privacidad, handlePolitica,

			registroMedico,
			errorRegistroMedico,
			messageErrorRegistroMedico,
			handleRegistroMedico,

			entidadDeSalud,
			errorEntidadDeSalud,
			messageErrorEntidadDeSalud,
			handleEntidadDeSalud,

			centralDeMezclas,
			errorCentralDeMezclas,
			messageErrorCentralDeMezclas,
			handleCentralDeMezclas,

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