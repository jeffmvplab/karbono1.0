import { colorsKarbono } from '@/themes/colors';
import { Box, Card, Divider, Typography } from '@mui/material';
import React from 'react';
import { param_farmaceuticos, param_nutricionales } from '../../context/FormulariosProvider';
import { TextParams } from '../TextParams';
export interface ParametrosNutricionalesProps {}

const ParametrosNutricionales : React.FC<ParametrosNutricionalesProps> = () => {
	return (	
		<Card elevation={5} sx={{ borderRadius: 4 }}>
		<Box
			// borderRadius={'10px'}
			sx={{ overflow: 'auto',height:{xs:'35.5vh', sm:'34vh',md:'35.5vh',xl:'35.5vh'}}}
			paddingX={{ xs: '0px', sm: '20px' }}
			margin='5px'
			marginTop={'20px'}
			bgcolor={'white'}>

			<Typography
				fontSize={'20px'}
				paddingY={2}
				style={{ fontWeight: 700, color: colorsKarbono.secundary }}
			>Parámetros Nutricionales
			</Typography >

			<Divider />
			<Box padding={1}>
				<TextParams
					title={'Calorías totales:'}
					value={param_nutricionales.calorias}
					unidad={'ml'}
					seguridad={'Seguro'}
				/>
				<TextParams
					title={'Calorías totales/kg/día:'}
					value={param_nutricionales.calorias_totalesKgDia}
				/>
				<TextParams
					title={'Gramos totales de Nitrógeno:'}
					value={param_nutricionales.gramos_totales_de_nitrogeno}
				/>
				<TextParams
					title={'Calorías totales Protéicas:'}
					value={param_nutricionales.calorias_totales_proteicasKg}
				/>
				<TextParams
					title={'Calorías totales Protéicas/kg:'}
					value={param_nutricionales.calorias_totales_proteicasKg}
				/>
				<TextParams
					title={'Calorías totales no Protéicas CHO’S:'}
					value={param_nutricionales.calorias_totales_no_proteicasCHOS}
				/>
				<TextParams
					title={'Calorías totales no Protéicas Lípidos:'}
					value={param_nutricionales.calorias_totales_no_proteicas_lipidos}
				/>
				<TextParams
					title={'Relación: Cal No Protéicas Protéicas/g AA:'}
					value={param_nutricionales.relacion_Cal_No_proteicas_gAA}
				/>

				<Divider />

				<Typography
					fontSize={'20px'}
					paddingY={2}
					style={{ fontWeight: 700, color: colorsKarbono.primary }}
				>Distribución Porcentual
				</Typography >

				<TextParams
					title={'Porcentaje de proteína:'}
					value={param_nutricionales.porcentaje_de_proteina}
					unidad={'ml'}
				/>

				<TextParams
					title={'Porcentaje de lípidos:'}
					value={param_nutricionales.porcentaje_de_lipidos}
					unidad={'ml'}
				/>
				<TextParams
					title={'Porcentaje de carbohidratos:'}
					value={param_nutricionales.porcentaje_de_carbohidratos}
					unidad={'ml'}
				/>
			</Box>
		</Box>
	</Card>
	);
};

export default ParametrosNutricionales;
