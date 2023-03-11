import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress } from '@mui/material';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import NextLink from 'next/link';
import { mainRoutes } from '@/routes/routes';

export interface AuthRegisterFormProps { }

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = () => {


	const {
		login,register,loadingAuth,
		email, errorEmail, handleEmail,
		name,handleName,
		phone,errorPhone,handlePhone,
		password, errorPassword, handlePassword,
		passwordConfirm,errorPasswordConfirm,handlePasswordConfirm
	} = React.useContext(GlobalContext)

	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>
				
				<Grid item xs={12} paddingBottom={2}>
					<TextField
						onChange={handleName}
						value={name}
						label="Nombre"
						type="name"
						placeholder='Nombre'
						fullWidth
					/>
				</Grid>


				<Grid item xs={12} paddingBottom={2}>
					<TextField
						onChange={handleEmail}
						value={email}
						label="Email"
						type="email"
						placeholder='Email'
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} paddingBottom={2}>
					<TextField
						onChange={handlePhone}
						value={phone}
						label="Teléfono"
						type="number"
						placeholder='Teléfono'
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

				<Grid item xs={12} paddingBottom={2}>
					<TextField
						onChange={handlePasswordConfirm}
						value={passwordConfirm}
						label="Confirmar Contraseña"
						type="password"
						placeholder='Confirmar Contraseña'
						fullWidth
					/>
				</Grid>

				<Grid container padding='10px'>
					<Grid item xs={12} display='flex' justifyContent='center'>

						<CustomButton
							fontSize={'20px'}
							onClick={() => { register() }}
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
							text={(!loadingAuth) ? 'Crear Cuenta' : 'Creando...'}
							endIcon={
								(!loadingAuth)
									? <></>
									: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />


					</Grid>
				</Grid>

				{/* <Link component={NextLink} href={''} variant="subtitle2">
					Recuperar contraseña
				</Link> */}

			</Grid>
		</Stack>
	);
};

export default AuthRegisterForm;
