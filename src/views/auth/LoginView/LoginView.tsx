
import { Alert, Box, Link, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

import { mainRoutes } from '@/routes/routes';
import { AuthLoginForm } from '../components/AuthLoginForm';
import { GlobalContext } from '@/context/GlobalContext';

export interface LoginViewProps { }


const LoginView: React.FC<LoginViewProps> = () => {

	const { errorEmail, messageErrorEmail,
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

			{
				(errorEmail || errorPassword)
					? <Alert severity="warning" sx={{ mb: 3 }}>
						{messageErrorEmail || messageErrorPassword}
					</Alert>
					: <Alert severity="success" sx={{ mb: 3 }}>
						{'Sus datos tienen el formato correcto'}
					</Alert>
			}

			<AuthLoginForm />



		</>
	)
};

export default LoginView;
