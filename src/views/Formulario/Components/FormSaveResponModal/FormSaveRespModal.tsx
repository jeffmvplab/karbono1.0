import { Modal,Stack, Box, Typography, CircularProgress } from '@mui/material';
import React, { useContext, useState } from 'react';
import { FormulariosContext } from '../../context/FormulariosContext';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { colorsKarbono } from '@/themes/colors';
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/routes/routes';

export interface FormSaveRespoModalProps { }

const FormSaveRespoModal: React.FC<FormSaveRespoModalProps> = () => {

	const {
		loadingSave,
		openModalFormSavedRespon,
		handleOpenModalFormSavedRespon,
		handleCloseModalFormSavedRespon
	} = useContext(FormulariosContext)

	const router = useRouter();

	const style = {
		position: 'absolute' as 'absolute',
		top: '30%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '380px',
		bgcolor: 'background.paper',
		// border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		minHeight: '200px', // Agregar altura máxima y desplazamiento vertical
		overflowY: 'auto',
	};

	return (
		<div>
			<Modal
				open={openModalFormSavedRespon}
				onClose={handleOpenModalFormSavedRespon}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			><>

					<Stack direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'}>
						<Image width={30} height={30} src={'/assets/OK.png'} alt={''} ></Image>
						<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
							¡Se ha guardado con éxito!
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
							onClick={() => { handleCloseModalFormSavedRespon(), router.push(mainRoutes.reportePrescripcion) }}
							height={40}
							width={190}
							text={'Ver reporte'}
							sx={{ borderRadius: '10px' }}
							color={colorsKarbono.secundary}
							textColor='white'
						/>
					</Stack>
				</>

			</Modal>
		</div>
	);
};

export default FormSaveRespoModal;
