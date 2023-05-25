
import { Alert, Box, Grid, Link, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';

import { mainRoutes } from '@/routes/routes';
import { AuthLoginForm } from '../components/AuthLoginForm';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';

export interface LoginViewProps { }


const LoginView: React.FC<LoginViewProps> = () => {

	const { errorEmail, messageErrorEmail, authOK,
		errorPassword, messageErrorPassword,
	} = React.useContext(GlobalContext);


	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

				<Typography sx={{fontSize:{xs:'24px',sm:'30px'}}} fontWeight={600}>Inicio de Sesión</Typography>

				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2" fontWeight={700}>Nuevo usuario?</Typography>

					<Link component={NextLink} href={mainRoutes.register} variant="subtitle2">
						Crear cuenta
					</Link>
				</Stack>

			</Stack>

			{(authOK)
				? (errorEmail || errorPassword)
					? <Alert severity="warning" sx={{ mb: 3 ,borderRadius:'10px'}}>
						{messageErrorEmail || messageErrorPassword}
					</Alert>
					: <Alert severity="success" sx={{ mb: 3 ,borderRadius:'10px'}}>
						{'Sus datos tienen el formato correcto'}
					</Alert>
				: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)',borderRadius:'10px' }}>
					<Typography sx={{color:'white'}}>{'Credenciales Inválidas'}</Typography>
				</Alert>
			}

			<AuthLoginForm />

		</>
	)
};

export default LoginView;
