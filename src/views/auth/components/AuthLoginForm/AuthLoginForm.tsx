import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress, MenuItem, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { typographyKarbono } from '@/themes/typography';
import { centrales_de_mezclas, instituciones } from '@/views/ReportePrescripcion/data/instituciones';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { mainRoutes } from '@/routes/routes';
import { useRouter } from 'next/router';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';


export interface AuthLoginFormProps { }

const AuthLoginForm: React.FC<AuthLoginFormProps> = () => {


	const {
		login, loadingAuth,
		email, errorEmail, handleEmail, userInv,
		password, errorPassword, handlePassword, getMeUser,
		entidadDeSalud, handleEntidadDeSalud, centralDeMezclas, handleCentralDeMezclas
	} = React.useContext(GlobalContext)

	const fontSize: number = 14;
	const fontSizeMovil: number = 12;

	const [seePassword, setSeePassword] = useState(false);

	// const [queryRol, setQueryRol] = useState();
	const router = useRouter();
	const { user } = router.query;
	const loguinRol = user;



	// useEffect(() => {
	// 	setQueryRol(loguinRol!)
	// }, [router.pathname])



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
						inputProps={{ style: { height: '15PX', } }}
						sx={{
							bgcolor: 'transparent',
							"& .MuiInputBase-root": { borderRadius: '10px' },
						}}
					/>
				</Grid>

				<Grid item xs={12} paddingBottom={2}>
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
				</Grid>
				{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
				{(loguinRol)
					? loguinRol === 'clientes'
						? <Grid item xs={12} paddingBottom={2}>
							<TextField
								onChange={loguinRol === 'clientes' ? handleEntidadDeSalud : handleCentralDeMezclas}
								value={loguinRol === 'clientes' ? entidadDeSalud : centralDeMezclas}
								label="Institución"
								type="text"
								placeholder='Institución'
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
								))

								}
							</TextField>
						</Grid>

						: <Grid item xs={12} paddingBottom={2}>
							<TextField
								onChange={loguinRol === 'clientes' ? handleEntidadDeSalud : handleCentralDeMezclas}
								value={loguinRol === 'clientes' ? entidadDeSalud : centralDeMezclas}
								label="Institución"
								type="text"
								placeholder='Institución'
								fullWidth
								select

								inputProps={{ style: { height: '15PX', } }}
								sx={{
									bgcolor: 'transparent',
									"& .MuiInputBase-root": { borderRadius: '10px' },
								}}
							>
								{centrales_de_mezclas.map((option) => (
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
								))
								}
							</TextField>
						</Grid>

					: userInv?.roles === RolUsersKeysEnum.prescriptor
						? <Grid item xs={12} paddingBottom={2}>
							<TextField
								onChange={loguinRol === 'clientes' ? handleEntidadDeSalud : handleCentralDeMezclas}
								value={loguinRol === 'clientes' ? entidadDeSalud : centralDeMezclas}
								label="Institución"
								type="text"
								placeholder='Institución'
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
								))

								}
							</TextField>
						</Grid>

						: <></>
				}
				{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

				<Grid container padding='10px' justifyContent='center'>
					<Grid item xs={12} display='flex' justifyContent='center' paddingY={2}>
						<Button
							onClick={() => router.push(`${mainRoutes.home}`)}
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
							fontSize={'14px'}
							onClick={() => { login() }}
							disabled={(errorEmail || errorPassword)}
							textColorHover={(!errorEmail || !errorPassword) ? 'white' : null}
							textColor={'white'}
							colorHover={(!errorEmail || !errorPassword) ? colorsKarbono.primary : ''}
							colorActive={(!errorEmail || !errorPassword) ? colorsKarbono.primary : ''}
							sx={{
								width: '250px',
								height: '50px',
								color: colorsKarbono.primary
							}}
							variant='contained'
							text={(!loadingAuth) ? 'Ingresar' : 'Ingresando...'}
							endIcon={
								(!loadingAuth)
									? <></>
									: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />
					</Grid>

					<Link component={NextLink} href={mainRoutes.recuperar_password} variant="subtitle2">
						Recuperar contraseña
					</Link>

				</Grid>
			</Grid>
		</Stack>
	);
};

export default AuthLoginForm;
