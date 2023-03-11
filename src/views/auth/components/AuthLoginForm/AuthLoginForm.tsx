import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress } from '@mui/material';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import NextLink from 'next/link';
import { mainRoutes } from '@/routes/routes';

export interface AuthLoginFormProps { }

const AuthLoginForm: React.FC<AuthLoginFormProps> = () => {


	const {
		login, loadingAuth,
		email, errorEmail, handleEmail,
		password, errorPassword, handlePassword
	} = React.useContext(GlobalContext)

	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12} paddingBottom={2}>
					<TextField
						onChange={handleEmail}
						value={email}
						label="Correo electrónico"
						type="email"
						placeholder='Correo@google.com'
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} paddingBottom={2}>
					<TextField
						onChange={handlePassword}
						value={password}
						label="Contraseña"
						type="password"
						placeholder='Contraseña'
						fullWidth
					/>
				</Grid>

				<Link component={NextLink} href={''} variant="subtitle2">
					Olvidé la contraseña
				</Link>


				<Grid container padding='10px'>
					<Grid item xs={12} display='flex' justifyContent='center'>

						<CustomButton
							fontSize={'20px'}
							onClick={() => { login() }}
							disabled={(!errorEmail && !errorPassword) ? false : true}
							textColorHover={(!errorEmail && !errorPassword) ? 'white' : null}
							textColor={'white'}
							colorHover={(!errorEmail && !errorPassword) ? colorsKarbono.primary : ''}
							colorActive={(!errorEmail && !errorPassword) ? colorsKarbono.primary : ''}
							sx={{
								width: '250px',
								height: '50px',
								color: colorsKarbono.primary
							}}
							variant='contained'
							text={(!loadingAuth) ? 'Iniciar sesión' : 'Iniciando...'}
							endIcon={
								(!loadingAuth)
									? <></>
									: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />
					</Grid>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default AuthLoginForm;
