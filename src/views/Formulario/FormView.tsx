
import { CustomButton } from '@/components/CustomButton';
import { CustomToolTip } from '@/components/CustomToolTip';
import { colorsKarbono } from '@/themes/colors';
import { Grid } from '@material-ui/core';
import { Box, Card, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';
import InformacionPaciente from './Components/InformacionPaciente';
import Macronutrientes from './Components/Macronutrientes';
import Micronutrientes from './Components/Micronutrientes';


export interface FormViewProps { }

const FormView: React.FC<FormViewProps> = () => {

	// /////////////////////////////METODOS DEL DRAWER////////////////////////////
	// const [state, setState] = React.useState(false);

	// const toggleDrawer = (open: boolean) =>
	// 	(event: React.KeyboardEvent | React.MouseEvent) => {
	// 		if (
	// 			event &&
	// 			event.type === 'keydown' &&
	// 			((event as React.KeyboardEvent).key === 'Tab' ||
	// 				(event as React.KeyboardEvent).key === 'Shift')
	// 		) {
	// 			return;
	// 		}

	// 		setState(open);
	// 	};

	//////////////////////////////////////////////////////////////////////////////
	return (

		<Stack direction={'column'}>

			{/* <Drawer
				anchor={'right'}
				open={state}
				onClose={toggleDrawer(false)}
			><Stack bgcolor={'red'} width={'250px'}>

				</Stack>

			</Drawer> */}

			{/* <CustomButton
				onClick={toggleDrawer(true)}
				sx={{
					borderRadius: '20px',
					zIndex: 20,
					position: 'fixed',
					display: { sm: 'none', md: 'none', xl: 'none' },
					bottom: '50px', right: '20px'
				}}
				textColor={'white'}
				text={'Parámetros'}
			/> */}

			<Typography variant='h5' padding={2} style={{ fontWeight: 700, }}>
				Nueva Orden
			</Typography>

			<Grid container>

				<Grid container direction='column' xs={12} sm={8} md={9} style={{ padding: 2 }}>

					<Box
						sx={{
							bgcolor: '#F0F0F0',
							padding:{xs:'0px',sm:1},
							borderRadius: '15px',
						}}>

						<Grid container spacing={2} style={{ padding:'10px' }}>

							<Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >

								<CustomToolTip
									tip={'Escriba el numero de orden'}
									placeTip={'top'}>
									<TextField
										id='Numero-de-orden'
										label='Número de Orden'
										type='text'
										variant='outlined'
										color='secondary'
										sx={{bgcolor:'transparent'}}
										fullWidth
									/>

								</CustomToolTip>
							</Grid>

							<Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
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
							<Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
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

				<Grid
					container
					direction='column'
				   sm={4} md={3}
					style={{ backgroundColor: 'aquamarine'}}>
				
				</Grid>

			</Grid>

		</Stack >
	)

};

export default FormView;
