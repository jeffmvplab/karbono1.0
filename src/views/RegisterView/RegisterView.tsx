import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
export interface RegisterViewProps {}

import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const RegisterView : React.FC<RegisterViewProps> = () => {
	return (
		<Grid container display='flex'
		justifyContent='center'
		 alignItems='center'
		  height='calc(100vh - 200px)'	   
	   >
			<Box sx={{width:'350', padding:'10px 100px'}}>
				 <Grid container 
				 className='box-shadow'
				 sx={{width:{md:550, sm:'400'},
			         backgroundColor:'#eceff2',
					 padding:'3',
					 borderRadius:'2'					 
			      }}
				>    
					<Grid item xs={12}>
						<Typography variant='h5' padding='10px 0' component="h5" textAlign='center'><span style={{paddingRight:'8px'}}><LockOpenOutlinedIcon sx={{fontSize:'20px', paddingTop:'10px 0', color:'#372fc6'}} /></span>Crear cuenta</Typography>
					</Grid >

					<Grid item xs={12} sx={{ mt:'2', padding:'10px 40px',color:'#e8e8e8'}}>
						<TextField 
						label="Nombre completo"
						type="text"
						placeholder='Samuel Delgado'
						fullWidth	
								
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt:'2', padding:'10px 40px',color:'#e8e8e8'}}>
						<TextField 
						label="Correo electrónico"
						type="email"
						placeholder='Correo@google.com'
						fullWidth	
								
						/>
					</Grid>

					<Grid item xs={12}  sx={{ mt:'2', padding:'10px 40px'}}>
						<TextField 
						label="Contraseña"
						type="password"
						placeholder='Contraseña'
						fullWidth						
						/>
					</Grid>
					<Grid container padding='10px'>
						<Grid item  xs={12} display='flex' justifyContent='center'>
							<Button
							type='submit'
							sx={{backgroundColor:'#2fc5c6', color:'#fff', marginBottom:'20px', ':hover':{backgroundColor:'#2fc5c1', color:'#e8e8e2'}}}							
							>
								<Typography variant='body1' padding='3px 40px' textAlign='center'>Ingresar</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Box>		
	   </Grid>
	)
};

export default RegisterView;
