

import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { Box, Stack, TextField, Typography, Card, MenuItem, Skeleton, Grid } from '@mui/material';

import React, { useContext, useEffect } from 'react';
import InformacionPaciente from './Components/InformacionPaciente';
import Macronutrientes from './Components/Macronutrientes';
import Micronutrientes from './Components/Micronutrientes';
import { ParametrosFarmaceuticos } from './Components/ParametrosFarmaceuticos';
import { ParametrosNutricionales } from './Components/ParametrosNutricionales';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { FormulariosContext } from './context/FormulariosContext';
import { FormSavedModal } from './Components/FormSavedModal';
import { mainRoutes } from '@/routes/routes';


export interface FormViewProps { }


const FormView: React.FC<FormViewProps> = () => {

	// const localStorageProtocol = new LocalStorageProtocol();

	const {
		getMovilHeight, savePrescription,
		numOrder, handleNumOrder,
		fechaCreacion, handleFechaCreacion,
		fechaActual,
		getPrescriptionsByNumber,
		loadingSave,
		cancelForm,
		getPrescriptions,
		valOKAlert,validateAlert,validateCampos,
		handleOpenModalFormSaved
	} = useContext(FormulariosContext)

	useEffect(() => {
		fechaActual();
		getPrescriptionsByNumber()
	}, [])

	useEffect(() => {
		getPrescriptions();
		//  validateAlert();
	

	}, [loadingSave])

	
	return (

		// <Card >
		<Stack
			direction={'column'}
			marginBottom={{ xs: 25, sm: 0 }}>

			<FormSavedModal />

			<Typography variant='h5' padding={1} style={{ fontWeight: 700, }}>
				Nueva Orden
			</Typography>

			<Grid container  >

				<Grid item xs={12} sm={8} md={9} style={{ paddingRight: '20px' }}>

					{(!loadingSave)
						? <Skeleton
							variant="rectangular"
							sx={{ marginX: '10px', paddingRight: '20px', borderRadius: '10px' }}
							width='100%' height={700} />
						: <Card elevation={10} sx={{ borderRadius: 4 }}>
							<Box
								sx={{
									bgcolor: '#F0F0F0',
									padding: { xs: '1px', sm: 0.2 },
									borderRadius: '15px',
									// maxHeight:'80vh',
									overflow: 'clip',
								}}>

								<Grid container spacing={2} style={{ padding: '10px' }}>

									<Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
						
										<TextField
											onChange={handleNumOrder}
											id='Numero-de-orden'
											label='Número de Orden'
											type='text'
											value={numOrder}
											variant='outlined'
											color='secondary'
											sx={{ bgcolor: 'transparent' }}
											fullWidth
										/>

										{/* </CustomToolTip> */}
									</Grid>

									<Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
										<TextField
											onChange={handleFechaCreacion}
											id='Fecha-de-creación'
											label='Fecha de creación'
											type='text'
											value={fechaCreacion}
											variant='outlined'
											color='secondary'
											sx={{ bgcolor: 'transparent' }}
											fullWidth
										/>
									</Grid>

								</Grid>

								<Box
									// borderRadius={'10px'}
									sx={{
										overflow: { sm: 'auto' },
										// overflow:'auto' ,
										height: {
											xs: getMovilHeight(),
											sm: '55vh', md: '58vh', xl: '58vh'
										}
									}}
									paddingX={{ xs: '20px', sm: '20px' }}
									marginTop={'10px'}
									bgcolor={'white'}>

									<InformacionPaciente />
									<Macronutrientes />
									<Micronutrientes />
								</Box>
							</Box>
						</Card>}
				</Grid>

				<Grid item sm={4} md={3}>
					<Box display={{ xs: 'none', sm: 'block' }}>
						{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
						{(!loadingSave)
							? <Skeleton
								variant="rectangular"
								sx={{

									overflow: 'auto',
									borderRadius: '10px',
									height: { xs: '35.5vh', sm: '30vh', md: '30vh', xl: '30vh' },
								}} />
							: <ParametrosFarmaceuticos />}

						{(!loadingSave)
							? <Skeleton
								variant="rectangular"
								sx={{
									overflow: 'auto',
									borderRadius: '10px',
									height: { xs: '35.5vh', sm: '30vh', md: '30vh', xl: '30vh' },
									marginTop: '20px',
									marginBottom: '20px'
								}} />
							: <ParametrosNutricionales />}
						{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
					</Box>
				</Grid>

				<Stack
					zIndex={100}
					position={{ xs: 'fixed', sm: 'initial' }}
					bottom='160px'
					left='5px'
					marginY={0}
					paddingX={{ xs: 6 }}
					height={'40px'}
					minWidth={'100%'}
					direction={'row'}
					justifyContent='space-between'
				>
					<CustomButton
						onClick={() => cancelForm(mainRoutes.prescripcion)}
						width={127}
						text={'Cancelar'}
						textColor={colorsKarbono.secundary}
						color='white'
						startIcon={<CloseIcon sx={{ color: colorsKarbono.secundary }} />}
					/>

					<CustomButton
						// disabled={!valOKAlert}
						onClick={
							// ()=>{savePrescription()}
							valOKAlert
							?()=>{savePrescription()}
							:()=>{validateCampos(),getPrescriptions(),handleOpenModalFormSaved()}
						}
						width={127}
						text={'Guardar'}
						sx={{ borderRadius: '10px' }}
						color={colorsKarbono.secundary}
						textColor='white'
						startIcon={
							<Image
								src='/assets/save.png'
								width={20}
								height={20}
								alt=''
								style={{ marginTop: '5px', alignItems: 'center' }}
							/>
						}
					/>
				</Stack>
			</Grid>
		</Stack >
	)

};

export default FormView;
