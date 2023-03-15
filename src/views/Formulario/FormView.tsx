import { Grid } from '@material-ui/core';
import { Box, TextField, Typography } from '@mui/material';
import InformacionPaciente from './Components/InformacionPaciente';
import Macronutrientes from './Components/Macronutrientes';
import Micronutrientes from './Components/Micronutrientes';


export interface FormViewProps { }

const FormView: React.FC<FormViewProps> = () => {


	return (
		<>
			<Grid container direction='column' style={{marginLeft:'15px'}}>
				<Typography variant='h5' style={{ fontWeight: 700, }}>Nueva Orden</Typography>
				<Box
					component='form'
					display='flex'
					sx={{
						width: '80%',
						marginTop: '20px',
					}}
				>
					<TextField
						id='Numero-de-orden'
						label='Número de Orden'
						type='text'
						variant='outlined'
						color='secondary'
						fullWidth
						inputProps={{style:{ height:'17PX'}}}             

						sx={{

						}}
					/>

					<TextField
						id='Tipo-de-prescripción'
						label='Tipo de prescripción'
						type='text'
						variant='outlined'
						color='secondary'
						fullWidth
						inputProps={{style:{ height:'17PX'}}}             
						sx={{
							margin: '0 20px'
						}}
					/>
					<TextField
						id='Fecha-de-creación'
						label='Fecha de creación'
						type='text'
						variant='outlined'
						color='secondary'
						fullWidth						
						inputProps={{style:{ height:'17PX',}}}             
						sx={{
							
						}}
					/>
				</Box>
				<Box
					component='form'
					display='block'
					sx={{
						width: '80%',
						marginTop: '20px',
					}}
				>
					<InformacionPaciente />
					<Macronutrientes />
					<Micronutrientes />

				</Box>

			</Grid>

		</>
	)

};

export default FormView;
