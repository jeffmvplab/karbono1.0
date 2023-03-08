import React from 'react';
import { Alert, Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { GlobalContext } from '@/context/GlobalContext';
import { mainRoutes } from '@/routes/routes';
import { AuthLoginForm } from '../components/AuthLoginForm';
import NextLink from 'next/link';
import { AuthRegisterForm } from '../components/AuthRegisterForm';


export interface RegisterViewProps {}

const RegisterView : React.FC<RegisterViewProps> = () => {

	const { errorEmail, messageErrorEmail,
		errorPassword, messageErrorPassword,
	} = React.useContext(GlobalContext);


	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

				<Typography variant="h4">Registro</Typography>

				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2">Ya tiene cuenta?</Typography>

					<Link component={NextLink} href={mainRoutes.register} variant="subtitle2">
						Iniciar sesión
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

			<AuthRegisterForm />

		</>
	)
};

export default RegisterView;
