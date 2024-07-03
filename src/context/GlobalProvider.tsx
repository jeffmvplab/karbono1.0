
import { UserUseCases } from "@/domain/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { mainRoutes } from "@/routes/routes";
import { CookiesKeysEnum, StorageKeysEnum } from "@/utilities/enums";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FC } from "react";
import { GlobalContext } from "./GlobalContext";

import Cookies from "js-cookie";
import { IUserEquipo } from "@/domain/models/equipo_user.model";
import { RolUsersKeysEnum } from "@/utilities/enums/rol_user_keys.enum";
import { IUser } from "@/domain/models";

type Props = {
	children: JSX.Element,
};


export const GlobalProvider: FC<Props> = ({ children }) => {

	const router = useRouter();
	const localStorageProtocol = new LocalStorageProtocol();

	const [openMainDrawer, setOpenMainDrawer] = useState(false);

	const [isOnline, setIsOnline] = useState(true); // Estado para la conexión a internet
	const handleOnline = async () => await setIsOnline(true);
	const handleOffline = async () => await setIsOnline(false);


	/////////////////////////////////Manejo Email//////////////////////////////////////////
	const isEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	const [email, setEmail] = React.useState('');
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [messageErrorEmail, setMessageErrorEmail] = React.useState('');


	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value || '');
		const email = event.target.value;

		// console.log('Email:', email);

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

		// console.log('Password:', password);

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

		// console.log('PasswordConfirm:', passwordConfirm);

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

		// console.log('nameYApellidos:', nameYApellidos);
	};

	const [name, setName] = React.useState('');
	const [errorName, setErrorName] = React.useState(false);
	const [messageErrorName, setMessageErrorName] = React.useState('');

	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value || '');

		const name = event.target.value;

		// console.log('name:', name);
	};

	const [apellido, setApellido] = React.useState('');
	const [errorApellido, setErrorApellido] = React.useState(false);
	const [messageErrorApellido, setMessageErrorApellido] = React.useState('');

	const handleApellido = (event: React.ChangeEvent<HTMLInputElement>) => {
		setApellido(event.target.value || '');

		const Aapellido = event.target.value;

		// console.log('Apellido:', apellido);
	};

	const [registroMedico, setRegistroMedico] = React.useState('');
	const [errorRegistroMedico, setErrorRegistroMedico] = React.useState(false);
	const [messageErrorRegistroMedico, setMessageErrorRegistroMedico] = React.useState('');

	const handleRegistroMedico = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRegistroMedico(event.target.value || '');

		const registroMedico = event.target.value;

		// console.log('RegistroMedico:', registroMedico);
	};


	const [entidadDeSalud, setEntidadDeSalud] = React.useState('');
	const [errorEntidadDeSalud, setErrorEntidadDeSalud] = React.useState(false);
	const [messageErrorEntidadDeSalud, setMessageErrorEntidadDeSalud] = React.useState('');

	const handleEntidadDeSalud = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEntidadDeSalud(event.target.value || '');

		const entidadDeSalud = event.target.value;

		// console.log('EntidadDeSalud:', entidadDeSalud);
	};

	const [centralDeMezclas, setCentralDeMezclas] = React.useState('');
	const [errorCentralDeMezclas, setErrorCentralDeMezclas] = React.useState(false);
	const [messageErrorCentralDeMezclas, setMessageErrorCentralDeMezclas] = React.useState('');

	const handleCentralDeMezclas = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCentralDeMezclas(event.target.value || '');

		const CentralDeMezclas = event.target.value;

		// console.log('CentralDeMezclas:', CentralDeMezclas);
	};


	const [politica_de_privacidad, setPolitica_de_privacidad] = React.useState<boolean>(false);

	const handlePolitica = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
		setPolitica_de_privacidad(event.target.checked);
		// console.log('Política de Privacidad:', politica_de_privacidad);
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

		// console.log('phone:', phone);

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

	const [codigoVerificacion, setCodigoVerificacion] = React.useState('');
	const [errorCodigoVerificacion, setErrorCodigoVerificacion] = React.useState(false);
	const [messageErrorCodigoVerificacion, setMessageErrorCodigoVerificacion] = React.useState('');

	const handleCodigoVerificacion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCodigoVerificacion(event.target.value || '');

		const codigoVerificacion = event.target.value;

		// console.log('CodigoVerificacion:', codigoVerificacion);

		// if (isPass.test( CodigoVerificacion)) {
		if (codigoVerificacion.length > 6 && !isNaN(parseInt(codigoVerificacion))) {
			setErrorCodigoVerificacion(false);
			setMessageErrorCodigoVerificacion('')
		} else {
			setErrorCodigoVerificacion(true);
			// setMessageErrorCodigoVerificacion('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorCodigoVerificacion('Introduzca un código válido')
		}
	};

	const [rol, setRol] = React.useState('');
	const [errorRol, setErrorRol] = React.useState(false);
	const [messageErrorRol, setMessageErrorRol] = React.useState('');

	const handleRol = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRol(event.target.value || '');

		const Rol = event.target.value;

		// console.log('Rol:', Rol);
	};
	//////////////////////////////////MÉTODOS//////////////////////////////////////////////////////////////////
	/////////////////////////////////AUTH STATUS//////////////////////////////////////////

	const [isAuth, setIsAuth] = React.useState(false);

	const authStatus = (rol?: string) => {

		const myToken = Cookies.get(CookiesKeysEnum.token)
		// console.log('MyToken:',myToken)

		if (myToken === null || myToken === undefined) {
			localStorageProtocol.delete(StorageKeysEnum.user)
		}

		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			// router.push(mainRoutes.home);
			// console.log('IsAuth:', isAuth)
		} else {
			setIsAuth(false);
			Cookies.remove(CookiesKeysEnum.token);
			// console.log('KKKKAAAKKKA:', rol);
			if (rol === 'Administrador') { router.push(mainRoutes.loginEmpleados) }
			else { router.push(mainRoutes.loginCliente) };
			// console.log('IsAuth:', isAuth)
		}

	}

	const getMeRol = () => {

		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			const rol: string[] = localStorageProtocol.get(StorageKeysEnum.user).rol;
			// console.log('ROL:', rol);
			return rol;
		} else {
			setIsAuth(false);
			// console.log('ROL:', []);
			return [];
		}
	}

	const getMeUser= () => {

		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			const user: IUser = localStorageProtocol.get(StorageKeysEnum.user);
		// console.log('User:', user);
		return user;
		} else {
			setIsAuth(false);
		// console.log('ROL:', []);
		return '';
		}
	}

		/////////////////////////////LOGIN//////////////////////////////////////////////
		const useruseCase = new UserUseCases();
		const [loadingAuth, setLoadingAuth] = React.useState(false);
		const [authOK, setAuthOk] = React.useState(true);
		const [errorAuth, setErrorAuth] = React.useState('');

	const login = async () => {
			setLoadingAuth(true);
		// console.log('Loading...')
		const resp = await useruseCase.login(email, password, [entidadDeSalud], centralDeMezclas)
		// console.log('RespAuth:', resp)

		if (resp.statusCode === 201) {
			localStorageProtocol.set(StorageKeysEnum.user, resp.body);
		Cookies.set(CookiesKeysEnum.token, resp.body.token, {sameSite: 'Strict' })
		Cookies.set(CookiesKeysEnum.userName, resp.body.nombre_apellidos, {sameSite: 'Strict' })
		}

		setLoadingAuth(false);

		if (resp.statusCode === 201) {
			setErrorAuth('');
		setAuthOk(true)
		authStatus();
		router.push(mainRoutes.home);
			// console.log('RES_API:', resp)

		} else if (resp.body.statusCode === 400) {
			// console.log('Error Loguin:', resp.body.message)
			setErrorAuth(resp.body.message);
		setAuthOk(false)
		} else if (resp.body.statusCode === 401) {
			// console.log('Error Loguin:', resp.body.message)
			setErrorAuth(resp.body.message);
		setAuthOk(false)
		} else if (resp.statusCode === 408) {

			handleOffline();
		}
	}

		/////////////////////////////LOGIN//////////////////////////////////////////////
		const [captcha, setCaptcha] = useState('');

	const register = async (rol?: string) => {

			setLoadingAuth(true);
		// console.log('Register...')


		// Luego, dentro de tu función de manejo de registro:
		// const isRecaptchaValid = await verifyRecaptchaV3(captcha);
		// console.log('CAPTCHA:',isRecaptchaValid);

		let resp;

		if (captcha !== '') {
			resp = await useruseCase.register(
				// [tipoCliente],
				[rol!],
				nameYApellidos,
				name,
				apellido,
				undefined,
				[entidadDeSalud],
				centralDeMezclas,
				phone,
				email,
				password,
				politica_de_privacidad
			)
			// Procede con el registro
		} else {
			// console.log('CAPTCHA NO VALIDO')
		}

		// console.log('RespRegister:', resp)



		if (resp.body !== undefined) {
			setAuthOk(false);
		// console.log('RES_API:', resp)

		if (resp.body === undefined) {
			localStorageProtocol.set(StorageKeysEnum.user, resp);
		Cookies.set(CookiesKeysEnum.token, resp.token, {sameSite: 'Strict' })
		Cookies.set(CookiesKeysEnum.userName, resp.body.nombre_apellidos, {sameSite: 'Strict' })

		router.push(mainRoutes.login);
			}

		localStorageProtocol.delete(StorageKeysEnum.userInv);

		if (resp.body.statusCode === 400) {
			// console.log('Error Register:', resp.body.message[0])
			setErrorAuth(resp.body.message);
		setAuthOk(false)
			}

		} else if (resp.statusCode === 408) {
			handleOffline();
		}
		else {
			setErrorAuth('');
		setAuthOk(true)
		authStatus();
		router.push(mainRoutes.home);
		}

		setLoadingAuth(false);
	}

		const [loadingApi, setLoadingApi] = useState(false);
		const [errorApi, setErrorApi] = useState('');
		const [userInv, setUserInv] = useState<IUserEquipo | undefined>();


		const [modalInvOpen, setModalInvOpen] = useState(false);

	const handleModalInvClose = () => {
			setModalInvOpen(false);
	};

	const handleModalInvOpen = () => {
			setModalInvOpen(true);
	};

	const invitarUsuarios = async () => {

			setLoadingApi(true);
		console.log('Invitando...:', userInv?.roles!, userInv?.email!, userInv?.nombre_apellidos!)

		const resp = await useruseCase.invitarUsuarios(userInv?.roles!, userInv?.email!, userInv?.nombre_apellidos!)

		console.log('RespApi:', resp)

		if (resp.statusCode === undefined || !resp.message) {

			console.log('RES_API:', resp)
			handleModalInvOpen()
		setErrorApi('');
		} else if (resp.statusCode === 400 || resp.statusCode === 401 || resp.statusCode === 500) {
			console.log('Error :', resp.message)
			setErrorApi(resp.message);
		handleModalInvOpen();
		} else if (resp.statusCode === 408) {

			handleOffline();
		}

		setLoadingApi(false);
	}


	const registerByInvitation = async () => {

			setLoadingApi(true);
		const userInv = localStorageProtocol.get(StorageKeysEnum.userInv)

		// console.log('ROL...:', userInv.roles)
		//  console.log('Register by Inv...:',
		// 	userInv._id,
		// 	email,
		// 	nameYApellidos,
		// 	phone!,
		// 	password,
		// 	registroMedico!,
		// 	name!,
		// 	apellido!,
		// 	userInv.roles[0] === RolUsersKeysEnum.prescriptor ? [entidadDeSalud] : [centralDeMezclas],
		// 	politica_de_privacidad,)

		const resp = await useruseCase.registerByInvitation(
		userInv._id,
		email,
		nameYApellidos,
		phone!,
		password,
		(userInv.roles[0] === RolUsersKeysEnum.prescriptor) ? registroMedico! : undefined,
		name!,
		apellido!,
		[entidadDeSalud],
		politica_de_privacidad,
		)
		// console.log('RespApi:', resp)

		if (resp.statusCode === undefined && resp !== '') {
			// console.log('RES_API:', resp)
			router.push(mainRoutes.login);

		} else if (resp.statusCode === 400) {
			// console.log('Error Loguin:', resp.message)
			setErrorApi(resp.message);
		} else if (resp.statusCode === 401) {
			// console.log('Error Loguin:', resp.message)
			setErrorApi(resp.message);
		} else if (resp.statusCode === 408) {

			handleOffline();
		}

		setLoadingApi(false);
	}

		const [openModalRecoveryPass, setOpenModalRecoveryPass] = useState(false);
	const handleOpenModalRecoveryPass = () => {setOpenModalRecoveryPass(true)};
	const handleCloseModalRecoveryPass = () => setOpenModalRecoveryPass(false);


	const recuperarPassword = async () => {

			setLoadingAuth(true);
		// console.log('Recovery Pass...')
		const resp = await useruseCase.recuperarPassword(email);
		// Procede con el registro
		// console.log('Recovery Pass:', resp.statusCode)

		if (resp.statusCode === undefined) {
			handleOpenModalRecoveryPass(),
			// console.log('RES_API:', resp)
			setErrorAuth('');
		} else if (resp.statusCode === 408) {
			handleOffline();
		}
		else {
			setErrorAuth('404');
		// router.push(mainRoutes.home);
		handleOpenModalRecoveryPass()
		}
		setLoadingAuth(false);
	}

		const [openModalVerifyPass, setOpenModalVerifyPass] = useState(false);
	const handleOpenModalVerifyPass = () => {setOpenModalVerifyPass(true)};
	const handleCloseModalVerifyPass = () => setOpenModalVerifyPass(false);

	const verificarCodigoRecoveryPassword = async () => {

			setLoadingAuth(true);
		// console.log('Verificar Pass...')
		const resp = await useruseCase.verificarCodigoRecuperacion(email, codigoVerificacion, password);
		// Procede con el registro
		// console.log('Verificar Pass:', resp)

		if (resp.statusCode === 201) {
			Cookies.set(CookiesKeysEnum.token, resp.body.token, { sameSite: 'Strict' })
			Cookies.set(CookiesKeysEnum.userName, resp.body.userName, {sameSite: 'Strict' })

		}

		setLoadingAuth(false);

		if (resp.statusCode === undefined) {
			setErrorAuth('');
		setAuthOk(true);
		handleOpenModalVerifyPass();
			// console.log('RES_API:', resp)

		} else if (resp.statusCode === 400) {
			// console.log('Error Verificacion:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 401) {
			// console.log('Error Verificacion:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 404) {
			// console.log('Error Verificacion:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 408) {

			handleOffline();
		}
		setLoadingAuth(false);
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

	const [userInvitado, setuserInvitado] = React.useState('');
		const [erroruserInvitado, setErroruserInvitado] = React.useState(false);
		const [messageErroruserInvitado, setMessageErroruserInvitado] = React.useState('');


	const aceptarInvitacion = async (token: string) => {
			setLoadingAuth(true);
		// console.log('Aceptar Invitacion...')
		const resp = await useruseCase.aceptarInvitacion(token)
		// console.log('RespAuth:', resp)

		if (resp && resp.statusCode === undefined) {
			setErrorAuth('');
		setAuthOk(true)

		await setUserInv({
			central_mezcla: resp.central_de_mezclas,
		email: resp.email,
		primer_nombre: '',
		primer_apellido: '',
		nombre_apellidos: resp.nombre_apellidos,
		roles: resp.roles[0]
			});

		localStorageProtocol.set(StorageKeysEnum.userInv, resp)

		router.push({
			pathname: mainRoutes.register,
		query: {query: 'invitación' }
			});
			// console.log('RES_API:', resp)

		} else if (resp.statusCode === 400) {
			// console.log('Error Loguin:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 401) {
			// console.log('Error Loguin:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 408) {

			handleOffline();
		}
		setLoadingAuth(false);
	}

		const [userEquipo, setUserEquipo] = useState<IUserEquipo[] | undefined>();

	const getMeEquipo = async () => {
			setLoadingAuth(true);
		// console.log('Get Grup...')
		const resp = await useruseCase.getMeGrup()
		// console.log('RespAuth:', resp)

		if (resp) {
			setErrorAuth('');
		setAuthOk(true)
		setUserEquipo(resp);
			// console.log('RES_API:', resp)

		} else if (resp.statusCode === 400) {
			// console.log('Error Loguin:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 401) {
			// console.log('Error Loguin:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 408) {

			handleOffline();
		}
		setLoadingAuth(false);
	}

	const updateMeEquipo = async (email: string, roles: string, group_admin: string) => {
			setLoadingAuth(true);

		// console.log('Update Grup...:', email, roles, group_admin)
		const resp = await useruseCase.upadateMeGrup(email, roles, group_admin)
		// console.log('RespAuth:', resp)

		if (resp) {
			setErrorAuth('');
		setAuthOk(true)
		setUserEquipo(resp);
			// console.log('RES_API:', resp)

		} else if (resp.statusCode === 400) {
			// console.log('Error Loguin:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 401) {
			// console.log('Error Loguin:', resp.message)
			setErrorAuth(resp.message);
		setAuthOk(false)
		} else if (resp.statusCode === 408) {

			handleOffline();
		}
		setLoadingAuth(false);
	}

		const [user, setUser] = useState<IUserEquipo>();

	const getMe = async () => {
				setLoadingAuth(true);
			// console.log('Get Me...')
			const resp = await useruseCase.getMe()
			// console.log('RespAuth:', resp)

			if (resp) {
				setErrorAuth('');
			setAuthOk(true)
			setUser(resp);
			// console.log('RES_API:', resp)

		} else if (resp.statusCode === 400) {
				// console.log('Error Loguin:', resp.message)
				setErrorAuth(resp.message);
			setAuthOk(false)
		} else if (resp.statusCode === 401) {
				// console.log('Error Loguin:', resp.message)
				setErrorAuth(resp.message);
			setAuthOk(false)
		} else if (resp.statusCode === 408) {

				handleOffline();
		}

			setLoadingAuth(false);
	}

	const updateMe = async () => {

				setLoadingAuth(true);
			// console.log('Upadate Me...', user)
			const resp = await useruseCase.upadateMe(user!)
			// console.log('RespAuth:', resp)

			if (resp) {
				setErrorAuth('');
			setAuthOk(true)
			setUser(resp);
			// console.log('RES_API:', resp)

		} else if (resp.statusCode === 400) {
				// console.log('Error Loguin:', resp.message)
				setErrorAuth(resp.message);
			setAuthOk(false)
		} else if (resp.statusCode === 401) {
				// console.log('Error Loguin:', resp.message)
				setErrorAuth(resp.message);
			setAuthOk(false)
		} else if (resp.statusCode === 408) {

				handleOffline();
		}
			getMe();
			setLoadingAuth(false);
	}
	/////////////////////////////LOGOUT//////////////////////////////////////////////
	const logout = async () => {

		const rol = getMeRol()[0];
			localStorageProtocol.delete(StorageKeysEnum.user);
			Cookies.remove(CookiesKeysEnum.token)
			Cookies.remove(CookiesKeysEnum.userName)
			authStatus(rol);
	}
			///////////////////////////////////////////////////////////////////////////////////
			///////////////////////////////////////////////////////////////////////////////////
			return (

			<GlobalContext.Provider value={{

				isOnline,
				handleOnline,
				handleOffline,

				openMainDrawer, setOpenMainDrawer,

				authOK,
				isAuth,
				authStatus,
				getMeRol,
				getMeUser,

				login,
				register,
				registerByInvitation,
				errorAuth,

				logout,
				loadingAuth,

				captcha, setCaptcha,

				tipoCliente, handleTipo,

				name,
				errorName,
				messageErrorName,
				handleName,

				apellido,
				errorApellido,
				messageErrorApellido,
				handleApellido,

				nameYApellidos, setNameYApellidos,
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

				rol, setRol,
				errorRol,
				messageErrorRol,
				handleRol,

				phone,
				errorPhone,
				messageErrorPhone,
				handlePhone,

				email, setEmail,
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
				handlePasswordConfirm,

				codigoVerificacion,
				errorCodigoVerificacion,
				messageErrorCodigoVerificacion,
				handleCodigoVerificacion,

				recuperarPassword, verificarCodigoRecoveryPassword,
				openModalRecoveryPass,
				handleOpenModalRecoveryPass,
				handleCloseModalRecoveryPass,

				openModalVerifyPass,
				handleOpenModalVerifyPass,
				handleCloseModalVerifyPass,

				userInvitado, setuserInvitado,
				erroruserInvitado, setErroruserInvitado,
				messageErroruserInvitado, setMessageErroruserInvitado,
				aceptarInvitacion,

				loadingApi, setLoadingApi,
				errorApi, setErrorApi,
				user, setUser,
				userEquipo, setUserEquipo,
				userInv, setUserInv,
				invitarUsuarios,

				modalInvOpen,
				handleModalInvClose,
				handleModalInvOpen,

				getMeEquipo, getMe, updateMe, updateMeEquipo
			}}>{children}
			</GlobalContext.Provider>
			)
};