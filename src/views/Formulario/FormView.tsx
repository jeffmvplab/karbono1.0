

import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { Grid } from '@material-ui/core';
import { styled, Box, Stack, TextField, Typography, Card, Divider } from '@mui/material';

import React, { useContext } from 'react';
import InformacionPaciente from './Components/InformacionPaciente';
import Macronutrientes from './Components/Macronutrientes';
import Micronutrientes from './Components/Micronutrientes';
import { ParametrosFarmaceuticos } from './Components/ParametrosFarmaceuticos';
import { ParametrosNutricionales } from './Components/ParametrosNutricionales';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { FormulariosContext } from './context/FormulariosContext';

export interface FormViewProps { }

const FormView: React.FC<FormViewProps> = () => {

	const{stateAcordion1,stateAcordion2,stateAcordion3,}= useContext(FormulariosContext)

	const getMovilHeight=()=>{

		if(stateAcordion1&&stateAcordion2&&stateAcordion3){return '3450px'}
		if(!stateAcordion1&&stateAcordion2&&stateAcordion3){return '2000px'}
		if(stateAcordion1&&!stateAcordion2&&stateAcordion3){return '2780px'}
		if(stateAcordion1&&stateAcordion2&&!stateAcordion3){return '2275px'}
		if(!stateAcordion1&&!stateAcordion2&&!stateAcordion3){return'150px'}
		if(stateAcordion1&&!stateAcordion2&&!stateAcordion3){return'1600px'}
		if(!stateAcordion1&&stateAcordion2&&!stateAcordion3){return'820px'}
		if(!stateAcordion1&&!stateAcordion2&&stateAcordion3){return'1330px'}
        
	}


	return (

		// <Card >
		<Stack direction={'column'} marginBottom={{xs:25,sm:0}}>

			<Typography variant='h5' padding={1} style={{ fontWeight: 700, }}>
				Nueva Orden
			</Typography>

			<Grid container  >

				<Grid item xs={12} sm={8} md={9} style={{ paddingRight: '20px' }}>

					<Card elevation={10} sx={{ borderRadius: 4 }}>
						<Box
							sx={{
								bgcolor: '#F0F0F0',
								padding: { xs: '1px', sm: 0.2 },
								borderRadius: '15px',
								// maxHeight:'80vh',
								overflow:'clip',
							}}>

							<Grid container spacing={2} style={{ padding: '10px' }}>

								<Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
									{/* <CustomToolTip
									tip={'Escriba el numero de orden'}
									placeTip={'top'}> */}
									<TextField
										id='Numero-de-orden'
										label='Número de Orden'
										type='text'
										variant='outlined'
										color='secondary'
										sx={{ bgcolor: 'transparent' }}
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
										sx={{ bgcolor: 'transparent' }}
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
										sx={{ bgcolor: 'transparent' }}
										fullWidth
									/>
								</Grid>

							</Grid>

							<Box
								// borderRadius={'10px'}
								sx={{ 
									overflow: {sm:'auto'},
									// overflow:'auto' ,
									height:{
										xs:getMovilHeight(),
										sm:'55vh',md:'60vh',xl:'68vh'}
								 }}
								paddingX={{ xs: '0px', sm: '20px' }}
								marginTop={'10px'}
								bgcolor={'white'}>

								<InformacionPaciente />
								<Macronutrientes />
								<Micronutrientes />
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item sm={4} md={3}>
					<Box display={{xs:'none',sm:'block'}}>
						{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
						<ParametrosFarmaceuticos />
						<ParametrosNutricionales />
						{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
					</Box>
				</Grid>
                   
					<Stack 
					
					   position={{xs:'fixed',sm:'initial'}}
					   bottom='120px'
					   left='5px'
					   marginY={2} 
					   paddingX={{xs:2}}
					   height={'40px'} 
					   minWidth={'100%'} 
					   direction={'row'}
					   justifyContent='space-between'
					   >

                      <CustomButton 
					   width={127}
					  text={'Cancelar'}	
					  textColor={colorsKarbono.secundary}
					  color='white'
					  startIcon={<CloseIcon sx={{color:colorsKarbono.secundary}}/>}		   
					  />
					  <CustomButton 
					  width={127}
					  text={'Guardar'}	
					  sx={{borderRadius:'10px'}}
					  color={colorsKarbono.secundary}
					  textColor='white'
					  startIcon={
						<Image
						src='/assets/save.png'
						width={20}
						height={20}
						alt=''
						style={{ marginTop: '5px', alignItems: 'center' }}
					  />
					  }		   
					  />
					</Stack>
			</Grid>
		</Stack >
	)

};

export default FormView;
