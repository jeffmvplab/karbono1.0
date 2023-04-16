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
				marginBottom: '20px'
			}}>
			<Box
				// borderRadius={'10px'}
				sx={{ overflow: 'auto', height: { xs: '35.5vh', sm: '34vh', md: '35.5vh', xl: '35.5vh' } }}
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
					<TextParamsNumb
						title={'Calorías totales:'}
						value={getCalTotales(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales/kg/día:'}
						value={getCalTotalesKgDia(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Gramos totales de Nitrógeno:'}
						value={getGramosTotalesNitro(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales Protéicas:'}
						value={getCaloriasTotalesProteicas(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales Protéicas/kg (kcal/kg):'}
						value={getCaloriasTotalesProteicasKg(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales No Protéicas CHO’S:'}
						value={getCaloriasNoProteicasCHOS(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías totales No Protéicas Lípidos:'}
						value={getCaloriasNoProteicasLIPIDOS(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Relación: Cal No Protéicas Protéicas/g Nitrogeno:'}
						value={getRelacionCalNoProteicasN(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsNumb
						title={'Calorías No Protéicas/kg:'}
						value={getCaloriasNoProteicasKg(prescriptionSave!).toFixed(2)}
					/>

					<TextParamsNumb
						title={'Relación: Cal No Protéicas Protéicas/g Aminoacidos:'}
						value={getRelacionCalNoProteicasAminoacidos(prescriptionSave!).toFixed(2)}
					/>

					{/* <Divider />

					<Typography
						fontSize={'20px'}
						paddingY={2}
						style={{ fontWeight: 700, color: colorsKarbono.primary }}
					>Distribución Porcentual
					</Typography >

					<TextParamsNumb
						title={'Porcentaje de proteína:'}
						value={param_nutricionales.porcentaje_de_proteina}
						unidad={'ml'}
					/>

					<TextParamsNumb
						title={'Porcentaje de lípidos:'}
						value={param_nutricionales.porcentaje_de_lipidos}
						unidad={'ml'}
					/>
					<TextParamsNumb
						title={'Porcentaje de carbohidratos:'}
						value={param_nutricionales.porcentaje_de_carbohidratos}
						unidad={'ml'}
					/> */}
				</Box>
			</Box>
		</Card>
	);
};

export default ParametrosNutricionales;
