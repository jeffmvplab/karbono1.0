
import { Box, Button, CircularProgress, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { GlobalContext } from '@/context/GlobalContext';
import React from 'react';
import NextLink from 'next/link';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';

export interface LoginViewProps { }


const LoginView: React.FC<LoginViewProps> = () => {

	const {
		login,loadingAuth,
		email, errorEmail, messageErrorEmail,handleEmail,
		password, errorPassword, messageErrorPassword,handlePassword
	} = React.useContext(GlobalContext)

	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
				paddingTop='100px'
			>
				<Box sx={{ width: '350', padding: '10px 100px' }}>

					<Grid container
						className='box-shadow'

						sx={{
							width: { md: 550, sm: '400' },
							backgroundColor: '#eceff2',
							padding: '3',
							borderRadius: '2'
						}}>

						<Grid item xs={12}>
							<Typography
								variant='h5'
								padding='10px 0'
								component="h5"
								textAlign='center'>
								<span style={{ paddingRight: '8px' }}>
									<LoginIcon
										sx={{ fontSize: '20px', paddingTop: '10px 0', color: '#372fc6' }} />
								</span>
								Iniciar sesión
							</Typography>
						</Grid>

						<Grid item xs={12} sx={{ mt: '2', padding: '10px 40px', color: '#e8e8e8' }}>
							<TextField
								onChange={handleEmail}
								value={email}
								label="Correo electrónico"
								type="email"
								placeholder='Correo@google.com'
								fullWidth
							/>
						</Grid>

						<Grid item xs={12} sx={{ mt: '2', padding: '10px 40px' }}>
							<TextField
								onChange={handlePassword}
								value={password}
								label="Contraseña"
								type="password"
								placeholder='Contraseña'
								fullWidth
							/>
						</Grid>

						<Grid container padding='10px'>
							<Grid item xs={12} display='flex' justifyContent='center'>

								<CustomButton
									fontSize={'20px'}
									onClick={() => {login()} }
									disabled={(!errorEmail&&!errorPassword) ? false : true}
									textColorHover={(!errorEmail&&!errorPassword) ? 'white' : null}
									textColor={'white'}
									colorHover={(!errorEmail&&!errorPassword) ? colorsKarbono.primary : ''}
									colorActive={(!errorEmail&&!errorPassword) ? colorsKarbono.primary : ''}
									sx={{
										width: '250px',
										height: '50px',
										color:colorsKarbono.primary
									}}
									variant='contained'
									 text={(!loadingAuth) ? 'Iniciar sesión' : 'Iniciando...'}
									endIcon={
										(!loadingAuth)
											? <></>
											:<CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />}							/>


							</Grid>
						</Grid>

						<Grid item xs={6} display='flex' padding='25px 40px'>
							<NextLink href='/auth/login' passHref>
								<Link underline='always' color='#000'>
									Olvidé mi contraseña
								</Link>
							</NextLink>
						</Grid>

						<Grid item xs={6} display='flex' justifyContent='end' padding='25px 40px'>
							<NextLink href='/auth/register' passHref>
								<Link underline='always' color='#000'>
									¿No tienes cuenta?
								</Link>
							</NextLink>
						</Grid>

					</Grid>

				</Box>

			</Grid>


			{
				(errorEmail || errorPassword)
					? <Box
						borderRadius={'10px'}
						marginTop='40px'
						bgcolor='rgba(221,0,0,25%)'
						width='400px'
						height='150px'>
						<Typography
							color={'red'}
							marginTop={'20px'}
							typography={'h6'}
							padding='3px 40px'
							textAlign='center'>
							ERROR
						</Typography>

						<Typography
							variant='body1'
							padding='3px 40px'
							textAlign='center'>
							{messageErrorEmail || messageErrorPassword}
						</Typography>

					</Box>
					: null
			}

		</Stack>
	)
};

export default LoginView;
