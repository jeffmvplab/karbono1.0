

import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { Box, Stack, TextField, Typography, Card, MenuItem, Skeleton, Grid, Button, styled, Alert } from '@mui/material';

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
import { FormSavedBorradorModal } from './Components/FormSavedBorradorModal';
import CustomTextField from './Components/CustomTextField';

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

	const tipoPrescripciones = [
		{ value: 'Por requerimientos', label: 'Por requerimientos' },
		{ value: 'Por volúmenes', label: 'Por volúmenes' }
	]
	const {
		getMovilHeight, savePrescription,
		numOrder, handleNumOrder,
		fechaCreacion, handleFechaCreacion,
		fechaActual,
		getPrescriptionsByNumber,
		loadingSave,
		cancelForm,
		getPrescriptions,
		valTabsErrors1, valTabsErrors2, validateAlert, validateCampos,
		handleOpenModalFormSaved, getMaxNumPresc, validateTipoPrecripcion,
		handleOpenModalFormCancel, setSelectTab, selectTab, maxNumOrder, saveBorrador,
		handleTipoPrescripcion, messageErrorTipoPrescripcion, tipoPrescripcion,
	} = useContext(FormulariosContext)



	useEffect(() => {
		fechaActual();
		getPrescriptionsByNumber()
		getMaxNumPresc()
	}, [])


	useEffect(() => {
		getPrescriptions();
	}, [loadingSave])

	const validate_and_sig = () => {
		if (selectTab === 0) {
			valTabsErrors1()

			setSelectTab(selectTab + 1)
		} else if (selectTab === 1) {
			valTabsErrors2()
			setSelectTab(selectTab + 1)
		} else if (selectTab === 2) {
			setSelectTab(selectTab + 1)
		} else if (selectTab === 3) {
			validateCampos()
			validateAlert()
				? () => { savePrescription(), console.log('Save') }
				: () => { console.log('NoSave'), getPrescriptions(), handleOpenModalFormSaved() }
		}
	}

	validateTipoPrecripcion(tipoPrescripcion);
	console.log('TPD:', tipoPrescripcion)

	return (
		// <Card >
		// <>{(maxNumOrder)
		//&&
		<Stack
			direction={'column'}
			marginBottom={{ xs: 25, sm: 10 }} >

			<FormSavedModal />
			<FormCancelModal />
			<FormSavedBorradorModal />
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
							: <>
								{
									(tipoPrescripcion) && <Card elevation={10} sx={{ borderRadius: 4 }}>
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

												<Grid item xs={12} sm={4} md={4}>

													<TextField
														onChange={handleNumOrder}
														id='Numero-de-orden'
														label='Número de Orden'
														type='text'
														value={numOrder === '' ? (maxNumOrder! + 1) : numOrder}
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

												<Grid item xs={12} sm={4} md={4}>

													<CustomTextField
														onChange={handleTipoPrescripcion}
														onClick={getPrescriptions}
														onKeyPress={getPrescriptions}
														value={tipoPrescripcion}
														defaulValue={tipoPrescripcion}
														id='tipo-prescripción*'
														label='Tipo Prescripción*'
														select={true}
														helperText={messageErrorTipoPrescripcion}
													>
														{tipoPrescripciones.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</CustomTextField>

													{/* </CustomToolTip> */}
												</Grid>

												<Grid item xs={12} sm={4} md={4} >
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
							</>
						}
						{(loadingSave) && <>
							<Card elevation={10} sx={{ borderRadius: 4 }} >

								<Box

									paddingX={{ xs: '20px', md: '10px' }}
									marginTop={'10px'}
									bgcolor={'white'}>

									{(valTabsErrors1() || valTabsErrors2()) && <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)', borderRadius: '10px' }}>
										<Typography sx={{ color: 'white' }}>Hay campos obligatorios vacíos en la prescripción</Typography>
									</Alert>}

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
												borderColor: valTabsErrors1() ? 'red' : colorsKarbono.primary,
												minWidth: '200px',
												background: (selectTab === 0) ? colorsKarbono.primary : 'white',
												color: (selectTab === 0) ? 'white' : '#B8BDBDB2 '
											}}
										>Información del paciente
										</CustomButtonTab>

										<CustomButtonTab
											onClick={() => setSelectTab(1)}
											sx={{
												borderColor: valTabsErrors2() ? 'red' : colorsKarbono.primary,
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
						</>}
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

					<Stack direction={{ xs: (selectTab === 3) ? 'column-reverse' : 'row', md: 'row' }} spacing={2}>
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
							onClick={() => saveBorrador()}
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
									style={{ alignItems: 'center' }}
								/>
							}
						/>}

						<CustomButton
							// disabled={!valOKAlert}
							onClick={() => validate_and_sig()}
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
		// }
		// </>
	)

};

export default FormView;
