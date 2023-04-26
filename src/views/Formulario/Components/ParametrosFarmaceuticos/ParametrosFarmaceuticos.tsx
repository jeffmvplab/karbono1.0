import { colorsKarbono } from '@/themes/colors';
import { Box, Typography, Divider, Stack, Card } from '@mui/material';
import React, { useContext } from 'react';
import { param_farmaceuticos } from '../../data/data';
import { TextParamsNumb } from '../TextParamsNumb';
import { FormulariosContext } from '../../context/FormulariosContext';
import { alarmConcCHOS, alarmConcDeLipidos, alarmConcDeProteinas, alarmConcMagnesio, alarmConcPotasio, alarmConcSodio, alertFactorDePrecipitacion, alertRelacion_Calcio_Fosfato, alertVelInfucion, alertViaDeAdmin, alertVolTotal } from '@/views/ReportePrescripcion/data/alertParams';
import { TextParamsString } from '../TextParamsString';
import { getOsmolaridad } from '@/views/ReportePrescripcion/data/functionsParams';

export interface ParametrosFarmaceuticosProps {
	isMovil?: boolean;
}

const ParametrosFarmaceuticos: React.FC<ParametrosFarmaceuticosProps> = ({ isMovil = false }) => {

	const borderRadius: number = 10;

	const { prescriptionSave, loadingSave } = useContext(FormulariosContext)

	return (
		<Card
			elevation={5}
			sx={{
				borderRadius: isMovil ? 0 : null,
				borderTopLeftRadius: (isMovil) ? null : borderRadius,
				borderTopRightRadius: borderRadius,
				borderBottomLeftRadius: (isMovil) ? null : borderRadius,
				borderBottomRightRadius: borderRadius,
				marginBottom: '20px'
			}}>
			<Box
				// borderRadius={'10px'}
				sx={{ overflow: 'auto', height: { xs: '35.5vh', sm: '30vh', md: '30vh', xl: '30vh' } }}
				paddingX={{ xs: '0px', sm: '5px' }}
				margin='5px'
				marginTop={'10px'}
				bgcolor={'white'}>

				<Typography
					fontSize={'15px'}
					style={{ fontWeight: 700, color: colorsKarbono.secundary }}
				>Parámetros farmacéuticos
				</Typography >

				<Divider />
				<Box padding={1}>
					<TextParamsNumb
						title={'Volumen:'}
						value={alertVolTotal(prescriptionSave!)}
						unidad={'ml'}
						seguridad={'Seguro'}
					/>
					<TextParamsString
						title={'Via de administración:'}
						value={alertViaDeAdmin(prescriptionSave!)}
						seguridad={
							(alertViaDeAdmin(prescriptionSave!) === 'ADECUADA')
								? 'Seguro'
								: ''
						}
					/>
					{/* <TextParamsNumb
						title={'Relación lípidos/aminoácidos:'}
						value={param_farmaceuticos.relación_lipidos_aminoacidos}
					/>
					<TextParamsNumb
						title={'Volumen acumulado:'}
						value={param_farmaceuticos.volumen_acumulado}
					/> */}
					<TextParamsNumb
						title={'Osmolaridad:'}
						value={getOsmolaridad(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsString
						title={'Relación calcio/fosfato:'}
						value={alertRelacion_Calcio_Fosfato(prescriptionSave!)}
						seguridad={
							(alertRelacion_Calcio_Fosfato(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>

					<TextParamsString
						title={'Factor de precipitación:'}
						value={alertFactorDePrecipitacion(prescriptionSave!)}
						seguridad={
							(alertFactorDePrecipitacion(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>


					{/* <Divider />

					<Typography
						fontSize={'20px'}
						paddingY={2}
						style={{ fontWeight: 700, color: colorsKarbono.primary }}
					>Macronutrientes
					</Typography > */}

					<TextParamsNumb
						title={'Velocidad de infusión:'}
						value={alertVelInfucion(prescriptionSave!).toFixed(2)}
					// unidad={'ml'}
					/>
					<TextParamsString
						title={'Concentración de CHO`S(%):'}
						value={alarmConcCHOS(prescriptionSave!)}
						seguridad={
							(alarmConcCHOS(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						} />

					<TextParamsString
						title={'Concentración de Proteína(%):'}
						value={alarmConcDeProteinas(prescriptionSave!)}
						seguridad={
							(alarmConcDeProteinas(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>

					<TextParamsString
						title={'Concentración de Lípidos(%):'}
						value={alarmConcDeLipidos(prescriptionSave!)}
						seguridad={
							(alarmConcDeLipidos(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>

					<TextParamsString
						title={'Concentración de Sodio (mEq/ml):'}
						value={alarmConcSodio(prescriptionSave!)}
						seguridad={
							(alarmConcSodio(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>

					<TextParamsString
						title={'Concentración de Potasio (mEq/ml)'}
						value={alarmConcPotasio(prescriptionSave!)}
						seguridad={
							(alarmConcPotasio(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>

					<TextParamsString
						title={'Concentración de Magnesio (mEq/ml)'}
						value={alarmConcMagnesio(prescriptionSave!)}
						seguridad={
							(alarmConcMagnesio(prescriptionSave!) === 'SEGURA')
								? 'Seguro'
								: ''
						}
					/>
				</Box>
			</Box>
		</Card>
	);
};

export default ParametrosFarmaceuticos;
