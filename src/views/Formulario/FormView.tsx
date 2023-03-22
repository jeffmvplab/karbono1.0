import { Grid } from '@material-ui/core';
import { Box, Stack, TextField, Typography } from '@mui/material';
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

				<Grid container direction='column' xs={12} sm={8} md={9} style={{ padding: 6 }}>

					<Grid container spacing={2}>

						<Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
							<TextField
								id='Numero-de-orden'
								label='Número de Orden'
								type='text'
								variant='outlined'
								color='secondary'
								fullWidth
							/>
						</Grid>
						<Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
							<TextField
								id='Tipo-de-prescripción'
								label='Tipo de prescripción'
								type='text'
								variant='outlined'
								color='secondary'
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
								fullWidth
							/>
						</Grid>

					</Grid>

					<InformacionPaciente />
					<Macronutrientes />
					<Micronutrientes />



				</Grid>


				<Grid 
				container 
				direction='column'  
				sm={4} md={3} 
				style={{padding:6,backgroundColor:'aquamarine'}}>

				</Grid>

			</Grid>

		</Stack>
	)

};

export default FormView;
