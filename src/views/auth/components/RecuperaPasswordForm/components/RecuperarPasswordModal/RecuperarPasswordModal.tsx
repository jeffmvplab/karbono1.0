import { Modal, Avatar, Button, Stack, Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { GlobalContext } from '@/context/GlobalContext';
import { typographyKarbono } from '@/themes/typography';
import { colorsKarbono } from '@/themes/colors';
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/routes/routes';

export interface RecuprarPasswordModalProps { }

const RecuprarPasswordModal: React.FC<RecuprarPasswordModalProps> = () => {


	const { openModalRecoveryPass,
		handleCloseModalRecoveryPass, errorAuth, recuperarPassword
	} = useContext(GlobalContext)
	// const validacionOK:boolean = true;

	const router = useRouter();
	return (

		<Modal
			open={openModalRecoveryPass}
			onClose={handleCloseModalRecoveryPass}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{
				'& .MuiBackdrop-root': { background: 'transparent' },
				overflow: 'auto',
				top: '20%', left: { xs: '20%', sm: '40%' },
			}}>
			<>
				<Avatar
					sx={{
						top: '15px',
						right: { xs: '-250px', sm: '-400px' },
						background: 'red',
						width: '25px',
						height: '25px'
					}}>
					<Button onClick={handleCloseModalRecoveryPass}>
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
						<Stack margin={'25px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
							<Image
								src={(errorAuth !== '404')
									? '/assets/OK.png' : '/assets/WARNING.png'
								}
								width={37}
								height={37}
								alt=''
								style={{ marginTop: '5px', alignSelf: 'center' }}
							/>

							<Typography
								fontFamily={typographyKarbono.outfit}
								paddingY={2}
								fontSize={16}
								width={'300px'}
								textAlign={'center'}
								//  paddingX={{sm:2}}
								style={{
									fontWeight: 700,
									color: (errorAuth !== '404') ? colorsKarbono.secundary : 'red'

								}}
							>{(errorAuth !== '404')
								? 'Hemos enviado un correo con tu código de recuperación'
								: 'No se pudo enviar el correo'}
							</Typography >


							<CustomButton
								onClick={

									() => {
										(errorAuth !== '404')
											? router.push(mainRoutes.verificar_codigo_recuperacion)
											: handleCloseModalRecoveryPass(),

											handleCloseModalRecoveryPass()
									}
								}
							height={50}
							width={170}
							text={(errorAuth !== '404') ? 'Ir a Verificar' : 'Ir a reenviar'}
							sx={{ borderRadius: '10px' }}
							color={colorsKarbono.secundary}
							textColor='white'
							/>
						</Stack>

					</Box>


				</Stack>
			</>
		</Modal>

	);
};

export default RecuprarPasswordModal;
