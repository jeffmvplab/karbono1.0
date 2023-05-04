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
						title={'Volumen: '}
						value={alertVolTotal(prescriptionSave!).toFixed(2)}
						unidad={'ml'}
						// seguridad={'Seguro'}
					/>
					<TextParamsString
						title={'Via de administración: '}
						seguridad={alertViaDeAdmin(prescriptionSave!).alert}
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
						title={'Osmolaridad: '}
						value={getOsmolaridad(prescriptionSave!).toFixed(2)}
					/>
					<TextParamsString
						title={'Relación calcio/fosfato: '}
						// value={alertRelacion_Calcio_Fosfato(prescriptionSave!)}
						seguridad={alertRelacion_Calcio_Fosfato(prescriptionSave!)}
					/>

					<TextParamsString
						title={'Factor de precipitación: '}
						value={alertFactorDePrecipitacion(prescriptionSave!).value.toFixed(2)}
						seguridad={alertFactorDePrecipitacion(prescriptionSave!).alert}
					/>


					{/* <Divider />

					<Typography
						fontSize={'20px'}
						paddingY={2}
						style={{ fontWeight: 700, color: colorsKarbono.primary }}
					>Macronutrientes
					</Typography > */}

					<TextParamsNumb
						title={'Velocidad de infusión: '}
						value={alertVelInfucion(prescriptionSave!).toFixed(2)}
					// unidad={'ml'}
					/>
					<TextParamsString
						title={'Concentración de CHO`S(%): '}
						value={alarmConcCHOS(prescriptionSave!).value.toFixed(2)}
						seguridad={alarmConcCHOS(prescriptionSave!).alert} />

					<TextParamsString
						title={'Concentración de Proteína(%): '}
						value={alarmConcDeProteinas(prescriptionSave!).value.toFixed(2)}
						seguridad={alarmConcDeProteinas(prescriptionSave!).alert}
					/>

					<TextParamsString
						title={'Concentración de Lípidos(%): '}
						value={alarmConcDeLipidos(prescriptionSave!).value.toFixed(2)}
						seguridad={alarmConcDeLipidos(prescriptionSave!).alert}
					/>

					<TextParamsString
						title={'Concentración de Sodio (mEq/ml): '}
						value={alarmConcSodio(prescriptionSave!).value.toFixed(2)}
						seguridad={alarmConcSodio(prescriptionSave!).alert}
					/>

					<TextParamsString
						title={'Concentración de Potasio (mEq/ml): '}
						value={alarmConcPotasio(prescriptionSave!).value.toFixed(2)}
						seguridad={alarmConcPotasio(prescriptionSave!).alert}
					/>

					<TextParamsString
						title={'Concentración de Magnesio (mEq/ml): '}
						value={alarmConcMagnesio(prescriptionSave!).value.toFixed(2)}
						seguridad={alarmConcMagnesio(prescriptionSave!).alert}
					/>
				</Box>
			</Box>
		</Card>
	);
};

export default ParametrosFarmaceuticos;
