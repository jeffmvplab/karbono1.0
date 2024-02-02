import { Box, Button, Checkbox, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colorsKarbono } from '@/themes/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'
import MiCuentaComponent from './components/MiCuentaComponent';
import EquipoComonent from './components/EquipoComponent';

export interface ConfigurarCuentaViewProps { }

const CustomButtonSelect = styled(Button)({
	color: 'black',
	borderRadius: '10px',
	height: '50px',
	border: '2.5px solid black',
	'& .MuiSvgIcon-root': {
		marginRight: '8px', // Ajusta el margen según tu preferencia
	},
});

const CustomButtonEditar = styled(Button)({
	color: 'black',
	backgroundColor: '#B8BDBDB2 ',
	'&:hover': {
		backgroundColor: colorsKarbono.primary,
	},
});

const ConfigurarCuentaView: React.FC<ConfigurarCuentaViewProps> = () => {

	const [selectPerfil, setSelectPerfil] = useState<string>('mi_cuenta');

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={12} md={3}>
				<Stack paddingX={6} paddingY={4} direction={'column'} spacing={4}>
					<Typography fontSize={24} fontWeight={800}>
						Configuración
					</Typography>

					<CustomButtonSelect
						onClick={() => setSelectPerfil('mi_cuenta')}
						sx={{ background: (selectPerfil === 'mi_cuenta') ? colorsKarbono.primary : 'transparent' }}
						endIcon={<ArrowForwardIosIcon />}>
						Mi Cuenta
					</CustomButtonSelect>

					<CustomButtonSelect
						onClick={() => setSelectPerfil('equipo')}
						sx={{ background: (selectPerfil === 'equipo') ? colorsKarbono.primary : 'transparent' }}
						endIcon={<ArrowForwardIosIcon />}>
						Equipo
					</CustomButtonSelect>
				</Stack>
			</Grid>

				{(selectPerfil === 'mi_cuenta')
					? <MiCuentaComponent />
					//////////////////////////////////////////////////////////////////////////////////
					: <EquipoComonent />
				}
		</Grid>
	)
};

export default ConfigurarCuentaView;
