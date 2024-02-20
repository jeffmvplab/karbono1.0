import React, { useContext } from 'react';
import Image from 'next/image';
import { Modal, Grid, Box, Typography, Stack, CircularProgress } from '@mui/material';
import { ReportesContext } from '@/views/ReportePrescripcion/context/ReportesContext';
import { colorsKarbono } from '@/themes/colors';
import { CustomButton } from '@/components/CustomButton';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/routes/routes';
import { IComment } from '@/domain/models/observaciones.model';
import { StatePrescriptionKeysEnum } from '@/utilities/enums/state_prescription_keys.enum';


const style = {
	position: 'absolute' as 'absolute',
	top: '30%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '350px',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	minHeight: '200px', // Agregar altura máxima y desplazamiento vertical
	overflowY: 'auto',
};


export interface OrdenarModalProps { }

const CancelVerificarModal: React.FC<OrdenarModalProps> = () => {

	const {
		reporte, saveComments,
		openModalCancelVerificar,
		handleCloseModalCancelVerificar,
		loadingSave,
	} = useContext(ReportesContext)

	const router = useRouter();

	return (
		<div>
			<Modal
				open={openModalCancelVerificar}
				onClose={handleCloseModalCancelVerificar}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			><>

					<Stack direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'}>
						<Image width={30} height={30} src={'/assets/borrador.png'} alt={''} ></Image>
						<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
							¿Deseas salir sin verificar la prescripción?
						</Typography>
					</Stack>

					<Stack sx={{
						position: 'absolute' as 'absolute',
						top: '35%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
						direction={'row'} spacing={3}>

						<CustomButton
							onClick={() => {
								handleCloseModalCancelVerificar()
							}}
							height={40}
							sx={{ borderRadius: '10px' }}
							color={' #C2C2C2'}
							textColor='white'
							text={'Continuar'}
							width={100}
							endIcon={
								(loadingSave)
									? <></>
									: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />

						<CustomButton text={'Salir'}
							//onClick={handleOpenModalDescargar}
							onClick={() => { router.push(mainRoutes.prescripcion) }}
							width='160px'
							height='44px'
							// variant='outlined'
							color='#D03939'
							fontSize={'16px'}
							textColor={'white'}
							borderColor={colorsKarbono.secundary}
							startIcon={
								<LogoutRoundedIcon sx={{ color: 'white', width: '30px', height: '30px', }} />
							}
							sx={{ borderRadius: '10px' }}
						/>
					</Stack>
				</>

			</Modal>
		</div>
	);
};

export default CancelVerificarModal;

