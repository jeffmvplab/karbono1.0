
import { Alert, Box, Link, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

import { mainRoutes } from '@/routes/routes';
import { AuthLoginForm } from '../components/AuthLoginForm';
import { GlobalContext } from '@/context/GlobalContext';
<<<<<<< HEAD
=======
import { colorsKarbono } from '@/themes/colors';
>>>>>>> adafd1ffa4939af5ba98c4620f5a6e99b8c752f5

export interface LoginViewProps { }


const LoginView: React.FC<LoginViewProps> = () => {

<<<<<<< HEAD
	const { errorEmail, messageErrorEmail,
=======
	const { errorEmail, messageErrorEmail,authOK,
>>>>>>> adafd1ffa4939af5ba98c4620f5a6e99b8c752f5
		errorPassword, messageErrorPassword,
	} = React.useContext(GlobalContext);


	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

				<Typography variant="h4">Inicio de Sesión</Typography>

				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2">Nuevo usuario?</Typography>

					<Link component={NextLink} href={mainRoutes.register} variant="subtitle2">
						Crear cuenta
					</Link>
				</Stack>

			</Stack>

<<<<<<< HEAD
			{
				(errorEmail || errorPassword)
=======
			{(authOK)
				?(errorEmail || errorPassword)
>>>>>>> adafd1ffa4939af5ba98c4620f5a6e99b8c752f5
					? <Alert severity="warning" sx={{ mb: 3 }}>
						{messageErrorEmail || messageErrorPassword}
					</Alert>
					: <Alert severity="success" sx={{ mb: 3 }}>
						{'Sus datos tienen el formato correcto'}
					</Alert>
<<<<<<< HEAD
=======
					:<Alert severity="error" sx={{ mb: 3,bgcolor:'rgba(221,50,50,60%)'}}>
					{'Credenciales Inválidas'}
				</Alert>
>>>>>>> adafd1ffa4939af5ba98c4620f5a6e99b8c752f5
			}

			<AuthLoginForm />



		</>
	)
};

export default LoginView;
