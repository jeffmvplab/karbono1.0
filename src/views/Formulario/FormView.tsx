

import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { Box, Stack, TextField, Typography, Card, MenuItem, Skeleton, Grid, Button, styled } from '@mui/material';

import React, { useContext, useEffect, useState } from 'react';
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
import { FormCancelModal } from './Components/FormCancelModal';
import { color } from 'html2canvas/dist/types/css/types/color';
import Observaciones from './Components/Observaciones';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export interface FormViewProps { }


const FormView: React.FC<FormViewProps> = () => {

	// const localStorageProtocol = new LocalStorageProtocol();

	const CustomButtonTab = styled(Button)({
		borderRadius: '10px 10px 10px 10px', // Bordes superiores redondeados
		height: '40px',
		border: `1px solid ${colorsKarbono.primary}`,// Elimina el borde inferior
		'& .MuiSvgIcon-root': {
			marginRight: '8px', // Ajusta el margen según tu preferencia
		},
		textTransform: 'capitalize',
		'&:hover': { // Cambia el color de fondo del botón al pasar el mouse por encima
			backgroundColor: colorsKarbono.primary,
			color: 'white'
		},
	});

	const {
		getMovilHeight, savePrescription,
		numOrder, handleNumOrder,
		fechaCreacion, handleFechaCreacion,
		fechaActual,
		getPrescriptionsByNumber,
		loadingSave,
		cancelForm,
		getPrescriptions,
		valOKAlert, validateCampos, validateAlert,
		handleOpenModalFormSaved, getMaxNumPresc,
		handleOpenModalFormCancel, setSelectTab, selectTab
	} = useContext(FormulariosContext)

	useEffect(() => {
		fechaActual();
		getPrescriptionsByNumber()
		getMaxNumPresc()
	}, [])

	useEffect(() => {
		getPrescriptions();
	}, [loadingSave])


	return (
		// <Card >
		<Stack
			direction={'column'}
			marginBottom={{ xs: 25, sm: 10 }} >

			<FormSavedModal />
			<FormCancelModal />
			<Typography variant='h5' padding={1} style={{ fontWeight: 700, }}>
				Nueva Orden
			</Typography>

			<Grid container >

				<Grid item xs={12} sm={8} md={9} style={{ paddingRight: '20px' }} >

					<Stack direction={'column'} spacing={2}>
						{(!loadingSave)
							? <Skeleton
								variant="rectangular"
								sx={{ marginX: '10px', paddingRight: '20px', borderRadius: '10px', maxHeight: { xs: '90vh', sm: '80vh', md: '60vh', xl: '90vh' }, }}
								width='100%' height={700} />
							:
							<Card elevation={10} sx={{ borderRadius: 4 }}>
								<Box
									sx={{
										bgcolor: 'white',
										padding: { xs: '1px', sm: 0.2 },
										borderRadius: '15px',
										//  maxHeight:'80%',
										// maxHeight: { xs: `${getMovilHeight()}+100px`, sm: '80vh', md: '60vh', xl: '90vh' },
										overflow: 'clip',
									}}>

									<Grid container spacing={2} style={{ padding: '10px' }}>

										<Grid item xs={12} sm={6} md={6}>

											<TextField
												onChange={handleNumOrder}
												id='Numero-de-orden'
												label='Número de Orden'
												type='text'
												value={numOrder}
												variant='outlined'
												color='secondary'
												sx={{
													bgcolor: 'transparent',
													"& .MuiInputBase-root": { borderRadius: '10px' },
												}}
												fullWidth
											/>

											{/* </CustomToolTip> */}
										</Grid>

										<Grid item xs={12} sm={6} md={6} >
											<TextField
												onChange={handleFechaCreacion}
												id='Fecha-de-creación'
												label='Fecha de creación'
												type='text'
												value={fechaCreacion}
												variant='outlined'
												color='secondary'
												sx={{
													bgcolor: 'transparent',
													"& .MuiInputBase-root": { borderRadius: '10px' },
												}}
												fullWidth
											/>
										</Grid>

									</Grid>
								</Box>
							</Card>

						}


						<Card elevation={10} sx={{ borderRadius: 4 }} >
							<Box

								paddingX={{ xs: '20px', md: '10px' }}
								marginTop={'10px'}
								bgcolor={'white'}>


								<Stack
									paddingX={1}
									direction={'row'}
									paddingY={4}
									width={{ xs: '100%', md: '70%' }}
									justifyContent={'space-between'}
									overflow={'scroll'}
									spacing={1}
								>

									<CustomButtonTab
										onClick={() => setSelectTab(0)}
										sx={{

											minWidth: '200px',
											background: (selectTab === 0) ? colorsKarbono.primary : 'white',
											color: (selectTab === 0) ? 'white' : '#B8BDBDB2 '
										}}
									>Información del paciente
									</CustomButtonTab>

									<CustomButtonTab
										onClick={() => setSelectTab(1)}
										sx={{

											minWidth: '150px',
											background: (selectTab === 1) ? colorsKarbono.primary : 'white',
											color: (selectTab === 1) ? 'white' : '#B8BDBDB2 '
										}}
									>Macronutrientes
									</CustomButtonTab>

									<CustomButtonTab
										onClick={() => setSelectTab(2)}
										sx={{

											minWidth: '150px',
											background: (selectTab === 2) ? colorsKarbono.primary : 'white',
											color: (selectTab === 2) ? 'white' : '#B8BDBDB2 '
										}}
									>Micronutrientes
									</CustomButtonTab>

									<CustomButtonTab
										onClick={() => setSelectTab(3)}
										sx={{

											minWidth: '150px',
											background: (selectTab === 3) ? colorsKarbono.primary : 'white',
											color: (selectTab === 3) ? 'white' : '#B8BDBDB2 '
										}}
									>Observaciones
									</CustomButtonTab>

								</Stack>

								{(selectTab === 0) && <InformacionPaciente />}
								{(selectTab === 1) && <Macronutrientes />}
								{(selectTab === 2) && <Micronutrientes />}
								{(selectTab === 3) && <Observaciones />}

							</Box>

						</Card>
					</Stack>
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
					bottom={'160px'}
					left='5px'
					marginY={0}
					paddingX={{ xs: 6 }}
					height={'40px'}
					minWidth={'100%'}
					direction={'row'}
					spacing={2}
					justifyContent='space-between'
				>
					<CustomButton
						// onClick={() => cancelForm(mainRoutes.prescripcion)}
						
						onClick={
							(selectTab === 0)
								? () => handleOpenModalFormCancel()
								: () => setSelectTab(selectTab - 1)

						}
						width={127}
						text={(selectTab === 0) ? 'Cancelar' : 'Anterior'}
						textColor={'white'}
						color={(selectTab === 0) ? 'red' : colorsKarbono.secundary}
						startIcon={(selectTab === 0) ? <CloseIcon sx={{ color: 'white' }} /> : <ChevronLeftIcon sx={{ color: 'white' }} />}
					/>

					<Stack direction={{xs:(selectTab===3)?'column-reverse':'row',md:'row'}} spacing={2}>
						{(selectTab === 3) && <CustomButton
							// disabled={!valOKAlert}
							onClick={() => { }}
							width={127}
							text={'Eliminar'}
							sx={{ borderRadius: '10px' }}
							color={'#D03939'}
							textColor='white'
							startIcon={<CloseIcon sx={{ color: 'white' }} />}
						/>}

						{(selectTab === 3) && <CustomButton
							// disabled={!valOKAlert}
							onClick={() => { }}
							width={210}
							text={'Guardar borrador'}
							sx={{ borderRadius: '10px' }}
							color={'#FFA800'}
							textColor='white'
							startIcon={
								(selectTab === 3) && <Image
									src='/assets/goma.png'
									width={20}
									height={20}
									alt=''
									style={{alignItems: 'center' }}
								/>
							}
							/>}

						<CustomButton
							// disabled={!valOKAlert}
							onClick={
								// ()=>{savePrescription()}
								(selectTab === 3)
									? validateAlert()
										? () => { savePrescription(), console.log('Save') }
										: () => { console.log('NoSave'), validateCampos(), getPrescriptions(), handleOpenModalFormSaved() }
									: () => setSelectTab(selectTab + 1)
							}
							width={127}
							text={(selectTab === 3) ? 'Guardar' : 'Siguiente'}
							sx={{ borderRadius: '10px' }}
							color={(selectTab === 3) ? colorsKarbono.primary : colorsKarbono.secundary}
							textColor='white'
							startIcon={
								(selectTab === 3) && <Image
									src='/assets/save2.png'
									width={20}
									height={20}
									alt=''
									style={{ marginTop: '5px', alignItems: 'center' }}
								/>
							}
							endIcon={(selectTab !== 3) && < ChevronRightIcon sx={{ color: 'white' }} />}
						/>
					</Stack>



				</Stack>
			</Grid>
		</Stack >
	)

};

export default FormView;
