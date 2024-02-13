import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress, Button, FormControlLabel, Checkbox, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { typographyKarbono } from '@/themes/typography';
import { instituciones } from '@/views/ReportePrescripcion/data/instituciones';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReCAPTCHAComponent from '../reCAPTCHA/reCAPTACHA';
import { StorageKeysEnum } from '@/utilities/enums';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { useRouter } from 'next/router';

export interface AuthRegisterFormProps { }

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = () => {

	const {
		login, register,registerByInvitation, loadingAuth,
		email, setEmail, errorEmail, handleEmail,
		name, handleName,
		phone, errorPhone, handlePhone,
		password, errorPassword, handlePassword,
		passwordConfirm, errorPasswordConfirm, handlePasswordConfirm,
		apellido,
		handleApellido,

		nameYApellidos, setNameYApellidos,
		handleNameYApellidos,

		registroMedico,
		handleRegistroMedico,

		entidadDeSalud,
		handleEntidadDeSalud,
		politica_de_privacidad, handlePolitica, handleTipo, tipoCliente,
		captcha, rol, setRol
	} = React.useContext(GlobalContext)

	const fontSize: number = 14;
	const fontSizeMovil: number = 12;

	//////////////////////////////////////////////////////////////////////////
	const [seePassword, setSeePassword] = useState(false);
	const [seeConfPassword, setSeeConfPassword] = useState(false);

	const localStorageProtocol = new LocalStorageProtocol();

	const router = useRouter();
	const query = router.query


	useEffect(() => {
		if (localStorageProtocol.get(StorageKeysEnum.userInv)) {
			const userInv = localStorageProtocol.get(StorageKeysEnum.userInv)
			console.log('USER INV:', userInv)
			console.log('QUERY:', query.query)
			setEmail(userInv.email);
			setNameYApellidos(userInv.nombre_apellidos);
			setRol(userInv.rol);
		}
	}, [])
	//////////////////////////////////////////////////////////////
	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>
				{/* <Grid item xs={12} paddingBottom={3}>
					<Stack direction={'row'} spacing={4}>
						<TextField
							onChange={handleTipo}
							value={tipoCliente}
							label="Tipo de usuario"
							placeholder='Tipo de usuario'
							fullWidth
							select
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
						>

							<MenuItem
								style={{
									background: "white",
									color: "black",
								}}
								value={'Cliente'}
							>
								{'Cliente'}
							</MenuItem>
							<MenuItem
								style={{
									background: "white",
									color: "black",
								}}

								value={'Empleados'}
							>
								{'Empleados'}
							</MenuItem>
						</TextField>
					</Stack>
				</Grid> */}

				<Grid item xs={12} paddingBottom={3}>


					<TextField
						onChange={handleNameYApellidos}
						value={nameYApellidos}
						label="Nombre y Apellidos"
						type="name"
						placeholder='Nombre y Apellidos'
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
							onChange={handleRegistroMedico}
							value={registroMedico}
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
							onChange={handleName}
							value={name}
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
							onChange={handleApellido}
							value={apellido}
							label="Primer apellido"
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
							type={(seePassword)
								? "text"
								: "password"
							}
							placeholder='Contraseña'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
							InputProps={{
								endAdornment: (
									<Button onClick={() => setSeePassword(!seePassword)}>
										{(seePassword)
											? <VisibilityIcon />
											: <VisibilityOffIcon />
										}
									</Button>
								),
							}}
						/>

						<TextField
							onChange={handlePasswordConfirm}
							value={passwordConfirm}
							label="Confirmar Contraseña"
							type={(seeConfPassword)
								? "text"
								: "password"
							}
							placeholder='Confirmar Contraseña'
							fullWidth
							inputProps={{ style: { height: '15PX', } }}
							sx={{
								bgcolor: 'transparent',
								"& .MuiInputBase-root": { borderRadius: '10px' },
							}}
							InputProps={{
								endAdornment: (
									<Button onClick={() => setSeeConfPassword(!seeConfPassword)}>
										{(seeConfPassword)
											? <VisibilityIcon />
											: <VisibilityOffIcon />
										}
									</Button>
								),
							}}
						/>
					</Stack>
				</Grid>

				{(tipoCliente === 'Cliente') && <Grid item xs={12} paddingBottom={3}>
					<Stack direction={'row'} spacing={4}>
						<TextField
							onChange={handleEntidadDeSalud}
							value={entidadDeSalud}
							label="Entidad de salud"
							type="text"
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
					<Stack direction={'row'} paddingY={3}>
						<ReCAPTCHAComponent />
					</Stack>
				</Grid>}

				<FormControlLabel
					control={<Checkbox checked={politica_de_privacidad} onChange={handlePolitica} />}
					label={
						<span>
							He leído y acepto la{' '}
							<a
								style={{ color: colorsKarbono.primary, textDecoration: ' none', textDecorationLine: 'underline' }}
								href="https://purelife.cloud/index.php/politica-privacidad/"
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
							onClick={() => {

								query.query === 'invitación'
								?registerByInvitation()
								: register((rol === '' || rol === null || rol === undefined)
										? "Administrador"
										: rol
									)
							}}
							disabled={(errorEmail || errorPassword || errorPasswordConfirm || captcha === '')}
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
