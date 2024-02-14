import { Modal, Avatar, Button, Stack, Box, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { FormulariosContext } from '../../context/FormulariosContext';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { colorsKarbono } from '@/themes/colors';
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/routes/routes';
import { typographyKarbono } from '@/themes/typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LoadingComponent from '@/components/LoadingComponent/LoadingComponent';

export interface FormSavedModalProps { }

const FormSavedBorradorModal: React.FC<FormSavedModalProps> = () => {

	const {
		openModalFormSavedBorrador,
		handleCloseModalFormSavedBorrador,
		handleOpenModalFormSavedBorrador,
		messageAPI,saveOK
	} = useContext(FormulariosContext)

	const router = useRouter();

	const style = {
		position: 'absolute' as 'absolute',
		top: '30%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		minHeight: '200px', // Agregar altura máxima y desplazamiento vertical
		overflowY: 'auto',
	};

	return (
		<div>
			<Modal
				open={openModalFormSavedBorrador}
				onClose={handleOpenModalFormSavedBorrador}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			><>

					<Stack spacing={2} direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'}>
						<Image width={30} height={30}
							src={!saveOK
								? '/assets/no.png'
								: '/assets/borrar.png'}
							alt={''} ></Image>
						<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
							{!saveOK
								? messageAPI
								: '¡Se ha guardado un borrador!'
							}
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
							onClick={() => { handleCloseModalFormSavedBorrador();router.push(mainRoutes.prescripcion) }}
							height={40}
							width={100}
							text={'OK'}
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

export default FormSavedBorradorModal;
