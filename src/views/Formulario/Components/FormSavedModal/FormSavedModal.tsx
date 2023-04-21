import { Modal, Avatar, Button, Stack, Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { FormulariosContext } from '../../context/FormulariosContext';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { colorsKarbono } from '@/themes/colors';
import { CustomButton } from '@/components/CustomButton';
import { LoadingComponent } from '@/components/LoadingComponent';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/routes/routes';

export interface FormSavedModalProps { }

const FormSavedModal: React.FC<FormSavedModalProps> = () => {

	const {
		saveOK, valAllForm, loadingSave,messageAPI,
		openModalFormSaved,
		handleCloseModalFormSaved,
	} = useContext(FormulariosContext)

	const router=useRouter();

	const validacionOK = true;

	return (

		<Modal
			open={openModalFormSaved}
			onClose={handleCloseModalFormSaved}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{
				'& .MuiBackdrop-root': { background: validacionOK ? 'rgba(55,47,198,70%)' : 'rgba(255,37,37,70%)' },
				overflow: 'auto',
				top: '20%', left: { xs: '20%', sm: '40%' },
			}}>
			<>
				<Avatar
					sx={{
						top: '15px',
						right: { xs: '-250px', sm: validacionOK ? '-400px' : '-450px' },
						background: 'red',
						width: '25px',
						height: '25px'
					}}>
					<Button onClick={handleCloseModalFormSaved}>
						<CloseIcon sx={{ color: 'white' }} />
					</Button>
				</Avatar>

				<Stack
					direction='row'
					alignItems='center'
					sx={{
						width: { xs: '200px', sm: '450px', md: '500px', lg: '500px', xl: '500px' },
						// bgcolor: 'background.paper',
						// boxShadow: 24,
						borderRadius: 4,
					}}>
					<Box
						borderRadius={'10px'}
						bgcolor={'white'}
						minWidth={{ xs: '300px', sm: '440px' }}
						minHeight={'200px'}
					>

						{
							(loadingSave)
								? <Stack margin={'25px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>

									<Image
										src={
											validacionOK
												? (saveOK)
													? '/assets/OK.png' : '/assets/WARNING.png'
												: '/assets/WARNING.png'
										}
										width={37}
										height={37}
										alt=''
										style={{ marginTop: '5px', alignItems: 'center' }}
									/>

									<Typography
										paddingY={2}
										fontSize={16}
										textAlign={'center'}
										//  paddingX={{sm:2}}
										style={{ 
											fontWeight: 700, 
											color: validacionOK 
											        ?(saveOK)
												     ?colorsKarbono.secundary : 'red' 
													:'black'
													}}
									>{validacionOK
												? (saveOK)
													? '¡Se ha guardado con éxito!'
													:(messageAPI)
													  ?'El número de orden que esta tratando de guardar ya existe. Por favor escriba otro número de orden'
													  :messageAPI
												: 'Error en la prescripción'}
									</Typography >

									{
										(!validacionOK)
										&& <Typography
											paddingX={{ xs: 0, sm: 4 }}
											paddingBottom={2}
											fontSize={16}
											textAlign={'center'}
											// paddingY={{sm:2}}
											style={{ fontWeight: 400, color: 'black' }}
										>Revisa nuevamente los valores que
											has registrado en el formulario, ya
											que es posible que hayan parámetros
											que no se encuentren dentro de los límites
											o valores permitidos.
										</Typography >
									}

									<CustomButton
										onClick={
											
											()=>{(saveOK)?router.push(mainRoutes.reportePrescripcion):handleCloseModalFormSaved()}
										}
										height={50}
										width={137}
										text={validacionOK ?(saveOK)? 'Ver reporte':'Ok' : 'Ok'}
										sx={{ borderRadius: '10px' }}
										color={colorsKarbono.secundary}
										textColor='white'
									/>

								</Stack>
								: <Stack padding={6}>
									<LoadingComponent
										color={colorsKarbono.secundary}
										sizeLoading={'50px'}
										typography='h4'
										text='Guardando...'
									/>
								</Stack>
						}
					</Box>

				</Stack>
			</>
		</Modal>

	);
};

export default FormSavedModal;
