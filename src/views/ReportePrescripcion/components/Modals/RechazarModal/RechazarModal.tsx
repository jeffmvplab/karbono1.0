import React, { useContext } from 'react';
import Image from 'next/image';
import { Modal, Grid, Box, Typography, Stack, CircularProgress } from '@mui/material';
import { ReportesContext } from '@/views/ReportePrescripcion/context/ReportesContext';
import { Suscripciones } from '../Suscripciones';
import { colorsKarbono } from '@/themes/colors';
import { CustomButton } from '@/components/CustomButton';
import { IComment } from '@/domain/models/observaciones.model';
import { StatePrescriptionKeysEnum } from '@/utilities/enums/state_prescription_keys.enum';


const style = {
	position: 'absolute' as 'absolute',
	top: '30%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '350px',
	bgcolor: 'background.paper',
	// border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	minHeight: '200px', // Agregar altura máxima y desplazamiento vertical
	overflowY: 'auto',
};

export interface OrdenarModalProps { }

const RechazarModal: React.FC<OrdenarModalProps> = () => {

	const {
		openModalRechazar,
		handleCloseModalRechazar,
		loadingSave,
		reporte, saveComments
	} = useContext(ReportesContext)

	return (
		<div>
			<Modal
				open={openModalRechazar}
				onClose={handleCloseModalRechazar}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<>
					<Stack direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'} spacing={2}>
						<Image width={30} height={30} src={'/assets/no.png'} alt={''} ></Image>
						<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
							¿Desea rechazar la prescripción?
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
							onClick={() => { handleCloseModalRechazar() }}
							height={40}
							width={100}
							text={'Regresar'}
							sx={{ borderRadius: '10px' }}
							color={colorsKarbono.secundary}
							textColor='white'
						/>

						<CustomButton
							onClick={() => {
								const newComment: IComment = {
									prescriptionId: reporte?._id!,
									// comentario: newObs!,
									estado: StatePrescriptionKeysEnum.rechazada,
								}
								saveComments(newComment)
								handleCloseModalRechazar()
							}}
							height={40}
							sx={{ borderRadius: '10px' }}
							color={'#E4951E '}
							textColor='white'
							text={(loadingSave) ? 'Si' : 'Rechazando...'}
							width={(loadingSave) ? 100 : 130}
							endIcon={
								(loadingSave)
									? <></>
									: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />
					</Stack>
				</>

			</Modal>
		</div>
	);
};

export default RechazarModal;

