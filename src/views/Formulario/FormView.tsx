
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { Grid } from '@material-ui/core';
import { Box, Stack, TextField, Typography } from '@mui/material';

import React from 'react';
import InformacionPaciente from './Components/InformacionPaciente';
import Macronutrientes from './Components/Macronutrientes';
import Micronutrientes from './Components/Micronutrientes';


export interface FormViewProps { }

const FormView: React.FC<FormViewProps> = () => {

	return (

		<Stack direction={'column'}>

			<Typography variant='h5' padding={2} style={{ fontWeight: 700, }}>
				Nueva Orden
			</Typography>

			<Grid container>

				<Grid item xs={12} sm={8} md={9} style={{ padding: 2 }}>

					<Box
						sx={{
							bgcolor: '#F0F0F0',
							padding:{xs:'0px',sm:1},
							borderRadius: '15px',
						}}>

						<Grid container spacing={2} style={{ padding:'10px' }}>

							<Grid item xs={12} sm={6}  md={4} style={{ padding: '10px' }} >

								{/* <CustomToolTip
									tip={'Escriba el numero de orden'}
									placeTip={'top'}> */}
									<TextField
										id='Numero-de-orden'
										label='Número de Orden'
										type='text'
										variant='outlined'
										color='secondary'
										sx={{bgcolor:'transparent'}}
										fullWidth
									/>

								{/* </CustomToolTip> */}
							</Grid>

							<Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
								<TextField
									id='Tipo-de-prescripción'
									label='Tipo de prescripción'
									type='text'
									variant='outlined'
									color='secondary'
									sx={{bgcolor:'transparent'}}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
								<TextField
									id='Fecha-de-creación'
									label='Fecha de creación'
									type='text'
									variant='outlined'
									color='secondary'
									sx={{bgcolor:'transparent'}}
									fullWidth
								/>
							</Grid>

						</Grid>

						<Box paddingX={{xs:'0px',sm:'20px'}} marginTop={'20px'} bgcolor={'white'}>
							<InformacionPaciente />
							<Macronutrientes />
							<Micronutrientes />
						</Box>


					</Box>
				</Grid>

				<Grid item sm={4} md={3} style={{ backgroundColor: 'aquamarine'}}>
				</Grid>

			</Grid>

		</Stack >
	)

};

export default FormView;
