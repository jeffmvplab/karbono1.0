import { Modal, Stack, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@/context/GlobalContext';
import { Router, useRouter } from 'next/router';
import { colorsKarbono } from '@/themes/colors';
import WifiOffIcon from '@mui/icons-material/WifiOff';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'rgba(250,250,250,50%)', // Transparente con opacidad 0.8
	// border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	borderRadius: 5, // Agrega borde redondeado
	backdropFilter: 'blur(8px)', // Agrega efecto de desenfoque al fondo
};

export interface RecuprarPasswordModalProps { }

const RecuprarPasswordModal: React.FC<RecuprarPasswordModalProps> = () => {

	const { isOnline, handleOnline, handleOffline } = useContext(GlobalContext);

	useEffect(() => {
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);
		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};

	}, [Router]);
	// // const validacionOK:boolean = true;

	return (

		<Modal
			open={!isOnline}
			onClose={handleOnline}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Stack sx={style}   direction={'column'} alignItems={'center'} spacing={3}>
				<Typography
					sx={{ color: colorsKarbono.error, fontSize: 25 }}
				>No hay conexión a Internet.</Typography>
				<WifiOffIcon sx={{ fontSize: 40 }} />
			</Stack>
		</Modal>
	);
};

export default RecuprarPasswordModal;
