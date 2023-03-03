import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
export interface LoginViewProps {}

const LoginView : React.FC<LoginViewProps> = () => {
	return(
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
						<Typography variant='h5' padding='10px 0' component="h5" textAlign='center'><span style={{paddingRight:'8px'}}><LoginIcon sx={{fontSize:'20px', paddingTop:'10px 0', color:'#372fc6'}}/></span>Iniciar sesión</Typography>
					</Grid >

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
							sx={{backgroundColor:'#2fc5c6', color:'#fff',  ':hover':{backgroundColor:'#2fc5c1', color:'#e8e8e2'}}}							
							>
								<Typography variant='body1' padding='3px 40px' textAlign='center'>Iniciar sesión</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid item xs={6} display='flex'  padding='25px 40px'>
						<NextLink href='/auth/login' passHref>
							<Link underline='always' color='#000'>
							  Olvidé mi contraseña
							</Link>
						</NextLink>						
					</Grid>

					<Grid item xs={6} display='flex' justifyContent='end' padding='25px 40px'>
						<NextLink href='/auth/register' passHref>
							<Link underline='always' color='#000'>
							  ¿No tienes cuenta?
							</Link>
						</NextLink>
						
					</Grid>
				</Grid>

			</Box>
			



		</Grid>
	)
};

export default LoginView;
