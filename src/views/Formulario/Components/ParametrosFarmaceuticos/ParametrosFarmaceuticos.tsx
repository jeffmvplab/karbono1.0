import { colorsKarbono } from '@/themes/colors';
import { Box, Typography, Divider, Stack, Card } from '@mui/material';
import React from 'react';
import { param_farmaceuticos } from '../../data/data';
import { TextParams } from '../TextParams';

export interface ParametrosFarmaceuticosProps {
	isMovil?:boolean;
 }

const ParametrosFarmaceuticos: React.FC<ParametrosFarmaceuticosProps> = ({isMovil=false}) => {
	
	const borderRadius:number=10;

	return (
		<Card 
		elevation={5} 
		sx={{ 
			borderRadius:isMovil?0:null,
			 borderTopLeftRadius:(isMovil)?null:borderRadius,
			 borderTopRightRadius:borderRadius,
			 borderBottomLeftRadius:(isMovil)?null:borderRadius,
			 borderBottomRightRadius:borderRadius,
			marginBottom:'20px'
			}}>
			<Box
				// borderRadius={'10px'}
				sx={{ overflow: 'auto', height:{xs:'35.5vh', sm:'34vh',md:'35.5vh',xl:'35.5vh'}}}
				paddingX={{ xs: '0px', sm: '20px' }}
				margin='5px'
				marginTop={'20px'}
				bgcolor={'white'}>

				<Typography
					fontSize={'20px'}
					paddingY={2}
					style={{ fontWeight: 700, color: colorsKarbono.secundary }}
				>Parámetros farmacéuticos
				</Typography >

				<Divider />
				<Box padding={1}>
					<TextParams
						title={'Volumen:'}
						value={param_farmaceuticos.volumen}
						unidad={'ml'}
						seguridad={'Seguro'}
					/>
					<TextParams
						title={'Via de administración:'}
						value={param_farmaceuticos.via_de_administración}
					/>
					<TextParams
						title={'Relación lípidos/aminoácidos:'}
						value={param_farmaceuticos.relación_lipidos_aminoacidos}
					/>
					<TextParams
						title={'Volumen acumulado:'}
						value={param_farmaceuticos.volumen_acumulado}
					/>
					<TextParams
						title={'Osmolaridad:'}
						value={param_farmaceuticos.volumen_acumulado}
					/>
					<TextParams
						title={'Relación calcio/fosfato:'}
						value={param_farmaceuticos.relacion_calcio_fosfato}
					/>
					<TextParams
						title={'Factor de precipitación:'}
						value={param_farmaceuticos.factor_de_precipitación}
					/>

					<Divider />

					<Typography
						fontSize={'20px'}
						paddingY={2}
						style={{ fontWeight: 700, color: colorsKarbono.primary }}
					>Macronutrientes
					</Typography >

					<TextParams
						title={'Volumen dextrosa 50%:'}
						value={param_farmaceuticos.volumen_dextrosa50}
						unidad={'ml'}
					/>

					<TextParams
						title={'Volumen aminoácidos:'}
						value={param_farmaceuticos.volumen_aminoácidos}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen lípidos:'}
						value={param_farmaceuticos.volumen_lipidos}
						unidad={'ml'}
					/>

					<Typography
						fontSize={'20px'}
						paddingY={2}
						style={{ fontWeight: 700, color: colorsKarbono.primary }}
					>Micronutientes
					</Typography >

					<TextParams
						title={'Volumen sodio:'}
						value={param_farmaceuticos.volumen_sodio}
						unidad={'ml'}
					/>

					<TextParams
						title={'Volumen potasio:'}
						value={param_farmaceuticos.volumen_potacio}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen fosfato:'}
						value={param_farmaceuticos.volumen_fosfato}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen calcio:'}
						value={param_farmaceuticos.volumen_calsio}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen sulfato:'}
						value={param_farmaceuticos.volumen_sulfato_magnesio}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen traza:'}
						value={param_farmaceuticos.volumen_traza}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen vitaminas:'}
						value={param_farmaceuticos.volumen_vitaminas}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen vitaminas Comp:'}
						value={param_farmaceuticos.volumen_vitamina_C}
						unidad={'ml'}
					/>
					<TextParams
						title={'Volumen vitaminas C:'}
						value={param_farmaceuticos.volumen_vitamina_C}
						unidad={'ml'}
					/>
					<TextParams
						title={'Ácido fólico:'}
						value={param_farmaceuticos.acido_folico}
						unidad={'ml'}
					/>


				</Box>
			</Box>
		</Card>
	);
};

export default ParametrosFarmaceuticos;
