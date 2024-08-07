import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, TextField, CircularProgress, Button, } from '@mui/material';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface VerificarCodigoRecuperacionFormProps { }

const VerificarCodigoRecuperacionForm: React.FC<VerificarCodigoRecuperacionFormProps> = () => {


	const {
		login, loadingAuth,
		email, errorEmail, handleEmail,
		password, errorPassword, handlePassword,
		passwordConfirm, errorPasswordConfirm, handlePasswordConfirm,
		codigoVerificacion, errorCodigoVerificacion, handleCodigoVerificacion,
		verificarCodigoRecoveryPassword
	} = React.useContext(GlobalContext)

	const [seePassword, setSeePassword] = useState(false);
	const [seeConfPassword, setSeeConfPassword] = useState(false);

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
						onChange={handleCodigoVerificacion}
						value={codigoVerificacion}
						label="Código"
						type="text"
						placeholder='00000'
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

				<Grid item xs={12} paddingBottom={2}>
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
				</Grid>



				<Grid container padding='10px' justifyContent='center'>
					<Grid item xs={12} display='flex' justifyContent='center' paddingY={2}>

						<CustomButton
							fontSize={'14px'}
							onClick={() => {(!(errorEmail || errorPassword || errorPasswordConfirm )&&codigoVerificacion)&& verificarCodigoRecoveryPassword() }}
							disabled={(errorEmail || errorPassword || errorPasswordConfirm )}
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
							text={(!loadingAuth) ? 'Confirmar' : 'Confirmando...'}
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

export default VerificarCodigoRecuperacionForm;
