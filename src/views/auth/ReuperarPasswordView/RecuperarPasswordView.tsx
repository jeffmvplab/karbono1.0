
import { Alert, Stack, Typography } from '@mui/material';
import React from 'react';
import { GlobalContext } from '@/context/GlobalContext';
import { RecuperarPasswordForm } from '../components/RecuperaPasswordForm';

export interface RecuperarPasswordViewProps { }


const RecuperarPasswordView: React.FC<RecuperarPasswordViewProps> = () => {

	const { errorEmail, messageErrorEmail, authOK, email,
		errorPassword, messageErrorPassword, errorAuth
	} = React.useContext(GlobalContext);


	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

				<Typography sx={{ fontSize: { xs: '24px', sm: '30px' } }} fontWeight={600}>Recuperar contraseña</Typography>

				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2" fontWeight={700}>Ingresa el correo electrónico</Typography>
				</Stack>

			</Stack>

			{(authOK)
				? (errorEmail || errorPassword)
					? <Alert severity="warning" sx={{ mb: 3, borderRadius: '10px' }}>
						{messageErrorEmail || messageErrorPassword}
					</Alert>
					: 
					(email !== '') 
						&& <Alert severity="success" sx={{ mb: 3, borderRadius: '10px' }}>
						{'Sus datos tienen el formato correcto'}
					</Alert>
			: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)', borderRadius: '10px' }}>
				<Typography sx={{ color: 'white' }}>{errorAuth}</Typography>
			</Alert>
			}

			<RecuperarPasswordForm />

		</>
	)
};

export default RecuperarPasswordView;
