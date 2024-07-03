import { colorsKarbono } from '@/themes/colors';
import { Box, Card, Divider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { param_nutricionales } from '../../data/data';
import { TextParamsNumb } from '../TextParamsNumb';
import { FormulariosContext } from '../../context/FormulariosContext';
import { getCalTotales, getCalTotalesKgDia, getCaloriasNoProteicasCHOS, getCaloriasNoProteicasKg, getCaloriasNoProteicasLIPIDOS, getCaloriasTotalesProteicas, getCaloriasTotalesProteicasKg, getGramosTotalesNitro, getRelacionCalNoProteicasAminoacidos, getRelacionCalNoProteicasN } from '@/views/ReportePrescripcion/data/functionsParams';

export interface ParametrosNutricionalesProps {
	isMovil?: boolean;
}

const ParametrosNutricionales: React.FC<ParametrosNutricionalesProps> = ({ isMovil = false }) => {

	const borderRadius: number = 10;
	const { prescriptionSave, loadingSave } = useContext(FormulariosContext)

	return (

		<Card
			elevation={5}
			sx={{
				borderRadius: isMovil ? 0 : null,
				borderTopLeftRadius: (isMovil) ? null : borderRadius,
				borderTopRightRadius: borderRadius,
				borderBottomLeftRadius: borderRadius,
				borderBottomRightRadius: borderRadius,
				marginBottom: '20px',
				// marginX:'10px'
			}}>
			<Box
				// borderRadius={'10px'}
				sx={{ overflow: 'auto', height: { xs: '32.5vh', sm: '100%' } }}
				paddingX={{ xs: '0px', sm: '5px' }}
				margin='5px'
				marginTop={'20px'}
				bgcolor={'white'}>

				<Typography
					fontSize={'15px'}
					style={{ fontWeight: 700, color: colorsKarbono.secundary }}
				>Parámetros Nutricionales
				</Typography >

				<Divider />
				<Box padding={1}>
					<TextParamsNumb
						title={'Calorías totales:'}
						value={getCalTotales(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales/kg/día:'}
						value={getCalTotalesKgDia(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Gramos totales de Nitrógeno:'}
						value={getGramosTotalesNitro(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales Protéicas:'}
						value={getCaloriasTotalesProteicas(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales Protéicas/kg (kcal/kg):'}
						value={getCaloriasTotalesProteicasKg(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales No Protéicas CHO’S:'}
						value={getCaloriasNoProteicasCHOS(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales No Protéicas Lípidos:'}
						value={getCaloriasNoProteicasLIPIDOS(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Relación: Cal No Protéicas Protéicas/g Nitrogeno:'}
						value={getRelacionCalNoProteicasN(prescriptionSave!).volumen.toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías No Protéicas/kg:'}
						value={getCaloriasNoProteicasKg(prescriptionSave!).volumen.toFixed(2)}
					/>

					<TextParamsNumb
						title={'Relación: Cal No Protéicas Protéicas/g Aminoacidos:'}
						value={getRelacionCalNoProteicasAminoacidos(prescriptionSave!).volumen.toFixed(2)}
					/>
				</Box>
			</Box>
		</Card>
	);
};

export default ParametrosNutricionales;
