import { Box, Button, Checkbox, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colorsKarbono } from '@/themes/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'

export interface MiCuentaViewProps { }

const CustomButtonSelect = styled(Button)({
	color: 'black',
	borderRadius: '10px',
	height: '50px',
	border: '2.5px solid black',
	'& .MuiSvgIcon-root': {
		marginRight: '8px', // Ajusta el margen según tu preferencia
	},
});

const CustomButtonEditar = styled(Button)({
	color: 'black',
	backgroundColor: '#B8BDBDB2 ',
	'&:hover': {
		backgroundColor: colorsKarbono.primary,
	},
});

const MiCuentaView: React.FC<MiCuentaViewProps> = () => {

	const [selectPerfil, setSelectPerfil] = useState<string>('mi_cuenta');

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={12} md={3}>
				<Stack paddingX={6} paddingY={4} direction={'column'} spacing={4}>
					<Typography fontSize={24} fontWeight={800}>
						Configuración
					</Typography>

					<CustomButtonSelect
						onClick={() => setSelectPerfil('mi_cuenta')}
						sx={{ background: (selectPerfil === 'mi_cuenta') ? colorsKarbono.primary : 'transparent' }}
						endIcon={<ArrowForwardIosIcon />}>
						Mi Cuenta
					</CustomButtonSelect>

					<CustomButtonSelect
						onClick={() => setSelectPerfil('equipo')}
						sx={{ background: (selectPerfil === 'equipo') ? colorsKarbono.primary : 'transparent' }}
						endIcon={<ArrowForwardIosIcon />}>
						Equipo
					</CustomButtonSelect>
				</Stack>
			</Grid>

			<Grid item xs={12} sm={12} md={9}>


				{(selectPerfil === 'mi_cuenta')
					? <Stack paddingTop={10} direction={'column'} paddingRight={20} spacing={2}>
						<Typography fontSize={16} fontWeight={800}>
							Configuración
						</Typography>
						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Typography fontSize={14} fontWeight={800}>
							Institución
						</Typography>

						<Stack direction={'row'} justifyContent={'space-between'}>
							<Typography fontSize={14} fontWeight={500}>
								Corpauk s a s
							</Typography>
							<CustomButtonEditar>
								Editar
							</CustomButtonEditar>
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Typography fontSize={14} fontWeight={800}>
							Correo electrónico
						</Typography>
						<Stack direction={'row'} justifyContent={'space-between'}>
							<Typography fontSize={14} fontWeight={500}>
								correo@gmail.com
							</Typography>
							<CustomButtonEditar>
								Editar
							</CustomButtonEditar>
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Typography fontSize={14} fontWeight={800}>
							Nombre y apellidos
						</Typography>
						<Stack direction={'row'} justifyContent={'space-between'}>
							<Typography fontSize={14} fontWeight={500}>
								Corpauk s a s
							</Typography>
							<CustomButtonEditar>
								Editar
							</CustomButtonEditar>
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Typography fontSize={14} fontWeight={800}>
							Registro Médico
						</Typography>
						<Stack direction={'row'} justifyContent={'space-between'}>
							<Typography fontSize={14} fontWeight={500}>
								1234567
							</Typography>
							<CustomButtonEditar>
								Editar
							</CustomButtonEditar>
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Typography fontSize={14} fontWeight={800}>
							Teléfono
						</Typography>
						<Stack direction={'row'} justifyContent={'space-between'}>
							<Typography fontSize={14} fontWeight={500}>
								325252343423
							</Typography>
							<CustomButtonEditar>
								Editar
							</CustomButtonEditar>
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Typography fontSize={14} fontWeight={800}>
							Entidad de Salud
						</Typography>
						<Stack direction={'row'} justifyContent={'space-between'}>
							<Typography fontSize={14} fontWeight={500}>
								Clinics SOMA, Clínica las Américas
							</Typography>
							<CustomButtonEditar>
								Editar
							</CustomButtonEditar>
						</Stack>

					</Stack>
					//////////////////////////////////////////////////////////////////////////////////
					: <Stack paddingTop={10} direction={'column'} paddingRight={20} spacing={2}>
						<Typography fontSize={16} fontWeight={800}>
							Equipo
						</Typography>
						
						<Box padding={2} height={'140px'} bgcolor={colorsKarbono.secundary}>
							<Stack direction={'row'} justifyContent={'space-between'}>
								<Stack direction={'column'} alignItems={'start'} spacing={2}>
									<Typography color={'white'} fontSize={14} fontWeight={300}>
										Invitar a las personas con las que trabajas
									</Typography>
									<Typography color={'white'} fontSize={14} fontWeight={500}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</Typography>

									<Button
										sx={{ borderRadius: '8px', height: '30px', color: 'white' }}
										variant='contained'
										endIcon={<ArrowForwardIosIcon />}
									>
										Invitar personas
									</Button>
								</Stack>

								<Image
									src="/illustrations/illustration_dashboard2.jpg"
									 width={100}
									height={100}
									alt="Picture of the author" />
							</Stack>
						</Box>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Stack direction={'row'} justifyContent={'space-between'}>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Nombre y apellidos
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									Angel Antonio
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Correo
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									antonio@gmail.com
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Rol en el equipo
								</Typography>
								<Stack direction={'row'} spacing={3}>
									<Typography fontSize={14} fontWeight={500}>
										Prescriptor
									</Typography>
									<ExpandMoreIcon />

								</Stack>
							</Stack>

							<Checkbox inputProps={{ 'aria-label': '' }} defaultChecked />
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Stack direction={'row'} justifyContent={'space-between'}>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Nombre y apellidos
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									Angel Antonio
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Correo
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									antonio@gmail.com
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Rol en el equipo
								</Typography>
								<Stack direction={'row'} spacing={3}>
									<Typography fontSize={14} fontWeight={500}>
										Prescriptor
									</Typography>
									<ExpandMoreIcon />

								</Stack>
							</Stack>

							<Checkbox inputProps={{ 'aria-label': '' }} defaultChecked />
						</Stack>

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

						<Stack direction={'row'} justifyContent={'space-between'}>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Nombre y apellidos
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									Angel Antonio
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Correo
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									antonio@gmail.com
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Rol en el equipo
								</Typography>
								<Stack direction={'row'} spacing={3}>
									<Typography fontSize={14} fontWeight={500}>
										Prescriptor
									</Typography>
									<ExpandMoreIcon />

								</Stack>
							</Stack>

							<Checkbox inputProps={{ 'aria-label': '' }} defaultChecked />
						</Stack>
					</Stack>
				}



			</Grid>
		</Grid>
	)
};

export default MiCuentaView;
