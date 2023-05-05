import { Grid, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export interface SuscripcionesProps { }

const Suscripciones: React.FC<SuscripcionesProps> = () => {
	return (
			<>
				<Grid container sx={{ width: '100%', marginTop: '10px' }}>
					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
						<Typography variant='h6' sx={{ fontWeight: 700, marginLeft: '20px', width: '40%', textAlign: 'left' }}>Beneficios</Typography>
						<Typography variant='h6' sx={{ fontWeight: 700, marginLeft: '20px', width: '20%', textAlign: 'center' }}>Básico</Typography>
						<Typography variant='h6' sx={{ fontWeight: 700, marginLeft: '20px', width: '20%', textAlign: 'center' }}>Estándar</Typography>
						<Typography variant='h6' sx={{ fontWeight: 700, marginLeft: '20px', width: '20%', textAlign: 'center' }}>Premium</Typography>
					</Grid>

					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '40%', textAlign: 'left' }}>Calcular prescripciones precisas.</Typography>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center' }}>10</Typography>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center' }}>Ilimitado</Typography>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center' }}>Ilimitado</Typography>
					</Grid>

					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: '5px' }}>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '40%', textAlign: 'left' }}>Recibir alertas y sugerencias en la formulación.</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingRight: '14px' }}>
							<Image
								src='/assets/si.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingRight: '8px' }}>
							<Image
								src='/assets/si.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px' }}>
							<Image
								src='/assets/si.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
					</Grid>
					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: '5px' }}>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '40%', textAlign: 'left' }}>Descargar la prescripción para anexar a la historia clínica.</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingLeft: '20px' }}>
							<Image
								src='/assets/no.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center', marginTop: '8px' }}>5</Typography>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center', marginTop: '8px' }}>Ilimitado</Typography>
					</Grid>
					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '40%', textAlign: 'left' }}>Recibir alertas y sugerencias en la formulación.</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingLeft: '20px' }}>
							<Image
								src='/assets/no.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center', marginTop: '8px' }}>5</Typography>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center', marginTop: '8px' }}>Ilimitado</Typography>
					</Grid>
					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '40%', textAlign: 'left' }}>Seguimiento en tiempo real de la producción de la NPT.</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingLeft: '0px', paddingRight: '18px' }}>
							<Image
								src='/assets/no.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingLeft: '0px', paddingRight: '10px' }}>
							<Image
								src='/assets/si.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingLeft: '0px' }}>
							<Image
								src='/assets/si.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
					</Grid>
					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: '8px' }}>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '40%', textAlign: 'left' }}>Contactar y recibir acompañamiento por de QF.</Typography>
						<Box sx={{ display: 'flex', justifyContent: 'center', width: '20%', marginTop: '8px', paddingLeft: '22px', paddingRight: '0px' }}>
							<Image
								src='/assets/no.png'
								width={15}
								height={15}
								alt=''
								style={{}}
							/>
						</Box>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center', marginTop: '8px' }}>5</Typography>
						<Typography variant='body1' sx={{ marginLeft: '20px', width: '20%', textAlign: 'center', marginTop: '8px' }}>Ilimitado</Typography>
					</Grid>
					<Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop: '15px' }}>
						<Box sx={{ width: '40%', }}>

						</Box>
						<Box sx={{ width: '20%', justifyContent: 'center', display: 'flex' }}>
							<Button sx={{ backgroundColor: '#BFBFBF', color: '#fff', padding: '3px 20px', borderRadius: '10px', ':hover': { backgroundColor: '#372FC6', color: '#e8e8e2' } }}>
								Gratuito
							</Button>
						</Box>
						<Box sx={{ width: '20%', justifyContent: 'center', display: 'flex' }}>
							<Button id='estandar' sx={{ backgroundColor: '#372FC6', color: '#fff', padding: '3px 20px', borderRadius: '10px', ':hover': { backgroundColor: '#372FC6', color: '#e8e8e2' } }}>
								$45.000
							</Button>
						</Box>
						<Box sx={{ width: '20%', justifyContent: 'center', display: 'flex' }}>
							<Button id='premium' sx={{ backgroundColor: '#372FC6', color: '#fff', padding: '3px 20px', borderRadius: '10px', ':hover': { backgroundColor: '#372FC6', color: '#e8e8e2' } }}>
								$95.000
							</Button>
						</Box>
					</Grid>
				</Grid>

			</>
		);
	}

	export default Suscripciones;
