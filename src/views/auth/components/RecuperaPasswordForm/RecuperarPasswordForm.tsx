import { CustomButton } from '@/components/CustomButton';
import { GlobalContext } from '@/context/GlobalContext';
import { colorsKarbono } from '@/themes/colors';
import { Stack, Grid, TextField, CircularProgress,} from '@mui/material';
import React from 'react';
import RecuprarPasswordModal from './components/RecuperarPasswordModal/RecuperarPasswordModal';


export interface RecuperarPasswordFormProps { }

const RecuperarPasswordForm: React.FC<RecuperarPasswordFormProps> = () => {


	const {
		recuperarPassword, loadingAuth,
		email, errorEmail, handleEmail,errorPassword,
	} = React.useContext(GlobalContext)


	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<RecuprarPasswordModal/>
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

				
			
				<Grid container padding='10px' justifyContent='center'>
					<Grid item xs={12} display='flex' justifyContent='center' paddingY={2}>
						
						<CustomButton
							fontSize={'20px'}
							onClick={() => { recuperarPassword() }}
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

export default RecuperarPasswordForm;
