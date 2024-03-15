import React from 'react';
import { Alert, Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { GlobalContext } from '@/context/GlobalContext';
import { mainRoutes } from '@/routes/routes';
import { AuthLoginForm } from '../components/AuthLoginForm';
import NextLink from 'next/link';
import { AuthRegisterForm } from '../components/AuthRegisterForm';
import { useRouter } from 'next/router';

import Image from 'next/image'

export interface RegisterViewProps { }

const RegisterView: React.FC<RegisterViewProps> = () => {

	const {
		errorEmail, messageErrorEmail,
		errorPhone, messageErrorPhone,
		errorPassword, messageErrorPassword,
		errorPasswordConfirm, messageErrorPasswordConfirm,
		errorAuth, authOK

	} = React.useContext(GlobalContext);

	const router = useRouter()

	return (
		<Stack height={'100%'} justifyContent={{ xs: 'space-between', md: 'none' }}>

			<Box display={{ xs: 'flex', md: 'none' }}>
				<Button onClick={() => router.push(mainRoutes.home)}>
					<Image
						src='/assets/1.png'
						width={120}
						height={30}
						alt=''
						style={{ marginTop: '5px', alignItems: 'center', }}
					/>
				</Button>
			</Box>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

				<Typography sx={{ fontSize: { xs: '24px', sm: '30px' } }} fontWeight={600}>
					Registro
				</Typography>

				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2" fontWeight={700}>¿Ya estás registrado?</Typography>

					<Link component={NextLink} href={mainRoutes.login} variant="subtitle2">
						Iniciar sesión
					</Link>
				</Stack>

			</Stack>

			{(authOK)
				? (errorEmail || errorPassword || errorPasswordConfirm || errorPhone)
					? <Alert severity="warning" sx={{ mb: 3, borderRadius: '10px' }}>
						{messageErrorEmail || messageErrorPassword || messageErrorPasswordConfirm || messageErrorPhone}
					</Alert>
					: <Alert severity="success" sx={{ mb: 3, borderRadius: '10px' }}>
						{'Sus datos tienen el formato correcto'}
					</Alert>
				: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)', borderRadius: '10px' }}>
					<Typography sx={{ color: 'white' }}>{errorAuth}</Typography>
				</Alert>
			}

			<AuthRegisterForm />
		</Stack>
	)
};

export default RegisterView;
