import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress, Button, FormControlLabel, Checkbox, MenuItem } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { typographyKarbono } from '@/themes/typography';
import {
	GoogleReCaptchaProvider,
	withGoogleReCaptcha
  } from 'react-google-recaptcha-v3';

export interface AuthRegisterFormProps { }

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = () => {

	const instituciones = [
		{ value: '0', label: 'Institucion 1', },
		{ value: '1', label: 'Institucion 2', },
		{ value: '2', label: 'Institucion 3', },
		{ value: '3', label: 'Institucion 4', },
		{ value: '4', label: 'Institucion 5', },
		{ value: '5', label: 'Institucion 6', },
		// { value: '2', label: 'Big Data', },
	];

	const {
		login, register, loadingAuth,
		email, errorEmail, handleEmail,
		name, handleName,
		phone, errorPhone, handlePhone,
		password, errorPassword, handlePassword,
		passwordConfirm, errorPasswordConfirm, handlePasswordConfirm
	} = React.useContext(GlobalContext)

	const fontSize: number = 14;
	const fontSizeMovil: number = 12;

	const [politica_de_privacidad, setPolitica_de_privacidad] = React.useState<boolean>(false);

	const handlePolitica = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
		setPolitica_de_privacidad(event.target.checked);
		console.log('Política de Privacidad:', politica_de_privacidad);
	}

	//////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////
	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>

				<Grid item xs={12} paddingBottom={3}>
					<TextField
						onChange={handleName}
						value={name}
						label="Nombre y apellidos"
						type="name"
						placeholder='Nombre y apellidos'
						fullWidth
						inputProps={{ style: { height: '15PX', } }}
						sx={{
							bgcolor: 'transparent',
							"& .MuiInputBase-root": { borderRadius: '10px' },
						}}
					/>
				</Grid>


				<Grid item xs={12} paddingBottom={3}>
					<TextField
						onChange={handleEmail}
						value={email}
						label="Correo electrónico"
						type="email"
						placeholder='Correo electrónico'
						fullWidth
						inputProps={{ style: { height: '15PX', } }}
						sx={{
							bgcolor: 'transparent',
							"& .MuiInputBase-root": { borderRadius: '10px' },
						}}
					/>
				</Grid>
				<Grid item xs={12} paddingBottom={3}>
					<Stack direction={'row'} spacing={4}>
						<TextField
							// onChange={handlePhone}
							// value={phone}
							label="Registro médico"
							type="number"
							placeholder='Registro médico'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						/>

						<TextField
							onChange={handlePhone}
							value={phone}
							label="Teléfono"
							type="number"
							placeholder='Teléfono'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						/>
					</Stack>

				</Grid>

				<Grid item xs={12} paddingBottom={3}>
					<Stack direction={'row'} spacing={4}>
						<TextField
							// onChange={handlePhone}
							// value={phone}
							label="Primer nombre"
							type="text"
							placeholder='Primer nombre'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						/>

						<TextField
							// onChange={handlePhone}
							// value={phone}
							label="Primer Apellido"
							type="text"
							placeholder='Primer Apellido'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						/>
					</Stack>

				</Grid>

				<Grid item xs={12} paddingBottom={3}>
					<Stack direction={'row'} spacing={4}>
						<TextField
							onChange={handlePassword}
							value={password}
							label="Contraseña"
							type="password"
							placeholder='Contraseña'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						/>

						<TextField
							onChange={handlePasswordConfirm}
							value={passwordConfirm}
							label="Confirmar Contraseña"
							type="password"
							placeholder='Confirmar Contraseña'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						/>
					</Stack>
				</Grid>

				<Grid item xs={12} paddingBottom={3}>
					<Stack direction={'row'} spacing={4}>
						<TextField
							onChange={handlePassword}
							value={password}
							label="Entidad de salud"
							type="password"
							placeholder='Entidad de salud'
							fullWidth
							select
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						>
							{instituciones.map((option) => (
								<MenuItem
									style={{
										background: "white",
										color: "black",
									}}
									key={option.value}
									value={option.label}
								>
									{option?.label!}
								</MenuItem>
							))}
						</TextField>
					</Stack>
				</Grid>

				<FormControlLabel
					control={<Checkbox checked={politica_de_privacidad} onChange={handlePolitica} />}
					label={
						<span>
							He leído y acepto la{' '}
							<a
								style={{ color: colorsKarbono.primary, textDecoration: ' none', textDecorationLine: 'underline' }}
								href="https://startbook.net/privacy-policy/"
								target="_blank"
								rel="noopener noreferrer">
								política de privacidad de datos
							</a>
						</span>
					}
				/>

				

				<Grid container paddingY={3} >
					<Grid item xs={12} display='flex' justifyContent='center' >

						<Button
							variant='outlined'

							sx={{
								width: '200px',
								height: '50px',
								borderRadius: '12px',
								borderColor: 'grey'
							}}
						>
							<Typography
								fontFamily={typographyKarbono.outfit}
								color={'grey'}
								textTransform='initial'
								sx={{
									fontSize: { xs: fontSizeMovil, sm: fontSize },
									fontWeight: '1px'
								}}
							>Cancelar</Typography>
						</Button>
						<Box width={10}></Box>
						<CustomButton
							fontSize={'20px'}
							onClick={() => { register() }}
							disabled={(errorEmail || errorPassword || errorPasswordConfirm)}
							textColorHover={(!errorEmail || !errorPassword || !errorPasswordConfirm) ? 'white' : null}
							textColor={'white'}
							colorHover={(!errorEmail || !errorPassword || !errorPasswordConfirm) ? colorsKarbono.primary : ''}
							colorActive={(!errorEmail || !errorPassword || !errorPasswordConfirm) ? colorsKarbono.primary : ''}
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
