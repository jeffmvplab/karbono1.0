
import { Alert, Box, Button, CircularProgress, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { mainRoutes } from '@/routes/routes';
import { GlobalContext } from '@/context/GlobalContext';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { typographyKarbono } from '@/themes/typography';
import { register } from 'module';
import { useRouter } from 'next/router';

export interface AceptarInvitacionViewProps { }


const AceptarInvitacionView: React.FC<AceptarInvitacionViewProps> = () => {

	const {
		erroruserInvitado,
		messageErroruserInvitado,
		loadingAuth,
		aceptarInvitacion
	} = React.useContext(GlobalContext);

	const fontSize: number = 14;
	const fontSizeMovil: number = 12;

	const router = useRouter();

	const { token } = router.query;
	const invToken: any = token;

	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

				<Typography sx={{ fontSize: { xs: '24px', sm: '30px' } }} fontWeight={600}>Invitación</Typography>

				<Typography sx={{ fontSize: { xs: '16px', sm: '24px' } }} fontWeight={600}>
					Usted a sido invitado a la plataforma Pure Life
				</Typography>

				<Grid container paddingY={3} >
					<Grid item xs={12} display='flex' justifyContent='center' >

						<Button
							variant='outlined'
							onClick={() => router.push(mainRoutes.home)}
							sx={{
								width: '150px',
								height: '40px',
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
							onClick={() => { console.log('Token:', invToken), aceptarInvitacion(invToken) }}
							fontSize={'14px'}
							textColor={'white'}
							sx={{
								width: '150px',
								height: '40px',
								color: colorsKarbono.primary
							}}
							variant='contained'
							text={(!loadingAuth) ? 'Aceptar' : 'Aceptando...'}
							endIcon={
								(!loadingAuth)
									? <></>
									: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />
					</Grid>
				</Grid>

			</Stack >

			{(erroruserInvitado)
				? <Alert severity="warning" sx={{ mb: 3, borderRadius: '10px' }}>
					{messageErroruserInvitado}
				</Alert>
				: <></>
			}

		</>
	)
};

export default AceptarInvitacionView;
