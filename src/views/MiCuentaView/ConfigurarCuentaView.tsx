import { Box, Button, Checkbox, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colorsKarbono } from '@/themes/colors';

import MiCuentaComponent from './components/MiCuentaComponent';
import EquipoComonent from './components/EquipoComponent';
import { GlobalContext } from '@/context/GlobalContext';

export interface ConfigurarCuentaViewProps { }

const CustomButtonSelect = styled(Button)({
	borderRadius: '10px',
	height: '50px',
	border: '2.5px solid #C4C4C4',
	'& .MuiSvgIcon-root': {
		marginRight: '8px', // Ajusta el margen según tu preferencia
	},
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: 'blue', // Cambia el color de fondo del botón en estado de hover
		color: 'white', // Cambia el color del texto del botón en estado de hover
	  },
});

// Estilo para el Divider

const ConfigurarCuentaView: React.FC<ConfigurarCuentaViewProps> = () => {

	const [selectPerfil, setSelectPerfil] = useState<string>('mi_cuenta');

	const StyledDivider = styled(Divider)({
		backgroundColor: '#B8BDBDB2 ',
		height: '1px',
		position: 'relative',
		zIndex: 1, // Ajusta la posición del Divider
		// Mueve el Divider hacia arriba para que se solape con los botones
	});

	const CustomButtonTab = styled(Button)({
		borderRadius: '10px 10px 0 0', // Bordes superiores redondeados
		height: '40px',
		border: '1px solid #C4C4C4',
		borderBottom: 'none', // Elimina el borde inferior
		'& .MuiSvgIcon-root': {
			marginRight: '8px', // Ajusta el margen según tu preferencia
		},
		textTransform: 'capitalize',
		position: 'relative', // Ajusta la posición del botón
		zIndex: 2,
		bottom: '-1.5px',
	});

	const { getMeRol } = useContext(GlobalContext);

	useEffect(() => {
		console.log('ROL:', getMeRol()[0])
	}, [])

	return (
		<Stack paddingBottom={'20vh'} direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent={'center'}>

			<Stack direction={'column'} width={'30%'} display={{ xs: 'none', md: 'flex' }} >
				<Stack paddingX={6} paddingY={4} direction={'column'} spacing={4}>
					<Typography fontSize={24} fontWeight={800}>
						Configuración
					</Typography>

					<CustomButtonSelect
						onClick={() => setSelectPerfil('mi_cuenta')}
						sx={{
							maxWidth: '200px',
							background: (selectPerfil === 'mi_cuenta') ? colorsKarbono.primary : 'transparent',
							color: (selectPerfil === 'mi_cuenta') ? 'white' : 'black '
						}}
						endIcon={<ArrowForwardIosIcon />}>
						Mi Cuenta
					</CustomButtonSelect>

					{
						(getMeRol()[0] === 'Administrador')
						&&
						<CustomButtonSelect
							onClick={() => setSelectPerfil('equipo')}
							sx={{
								maxWidth: '200px',
								background: (selectPerfil === 'equipo') ? colorsKarbono.primary : 'transparent',
								color: (selectPerfil !== 'mi_cuenta') ? 'white' : 'black '
							}}
							endIcon={<ArrowForwardIosIcon />}>
							Equipo
						</CustomButtonSelect>
					}

				</Stack>

			</Stack>

			<Stack direction={'column'} display={{ xs: 'flex', md: 'none' }} >

				<Stack top={'2px'} direction={'row'} width={'100%'} justifyContent={'center'} spacing={2}>
					<CustomButtonTab
						onClick={() => setSelectPerfil('mi_cuenta')}
						sx={{
							paddingX: '30px',
							maxWidth: '200px',
							background: (selectPerfil === 'mi_cuenta') ? colorsKarbono.primary : 'white',
							color: (selectPerfil === 'mi_cuenta') ? 'white' : '#B8BDBDB2 '
						}}
					>Mi Cuenta
					</CustomButtonTab>

					{
						(getMeRol()[0] === 'Administrador')
						&&
						<CustomButtonTab
							onClick={() => setSelectPerfil('equipo')}
							sx={{
								paddingX: '40px',
								maxWidth: '200px',
								background: (selectPerfil === 'equipo') ? colorsKarbono.primary : 'white',
								color: (selectPerfil !== 'mi_cuenta') ? 'white' : '#B8BDBDB2 '
							}}
						>Equipo
						</CustomButtonTab>
					}
				</Stack>

				<StyledDivider sx={{ backgroundColor: '#B8BDBDB2 ', height: '1px' }} />
			</Stack>

			<Stack direction={'column'} width={{ xs: '100%', md: '80%' }} alignItems={'center'} >
				{(selectPerfil === 'mi_cuenta')
					? <MiCuentaComponent />
					//////////////////////////////////////////////////////////////////////////////////
					: <EquipoComonent />
				}
			</Stack>

		</Stack>
	)
};

export default ConfigurarCuentaView;
