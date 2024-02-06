import { Box, Button, Checkbox, CircularProgress, Divider, Fade, Grid, IconButton, Menu, MenuItem, Stack, TextField, Typography, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { colorsKarbono } from '@/themes/colors';
import Image from 'next/image'
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GlobalContext } from '@/context/GlobalContext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export interface EquipoComonentProps { }

const options = [
	'Prescriptor',
	'Preparador NPT',
	'Control de calidad',
];

const EquipoComonent: React.FC<EquipoComonentProps> = () => {

	const { userEquipo, setUserEquipo, setUser, getMeEquipo, user, invitarUsuarios, loadingApi } = useContext(GlobalContext)

	useEffect(() => {
		// getMeEquipo();
		setUserEquipo(
			[{
				nombre_apellidos: 'user 1',
				email: 'user1@getMaxListeners.com',
				rol: 'Prescriptor'
			},
			{
				nombre_apellidos: 'user 2',
				email: 'user2@getMaxListeners.com',
				rol: 'Prescriptor'
			},
			{
				nombre_apellidos: 'user 3',
				email: 'user3@getMaxListeners.com',
				rol: 'Prescriptor'
			}]
		);
	}, [])

	const [anchorEls, setAnchorEls] = useState<(null | HTMLElement)[]>([]);
	const openIndex = anchorEls.findIndex(Boolean);


	const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
		const newAnchorEls = [...anchorEls];
		newAnchorEls[index] = event.currentTarget;
		setAnchorEls(newAnchorEls);
	};

	const handleClose = (index: number) => {
		const newAnchorEls = [...anchorEls];
		newAnchorEls[index] = null;
		setAnchorEls(newAnchorEls);
	};

	const handleChangeRol = (option: string, index: number) => {
		const newUserEquipo = [...userEquipo!];
		newUserEquipo[index] = { ...newUserEquipo[index], rol: option };
		setUserEquipo(newUserEquipo);
	};

	const [inv, setInv] = useState(false);

	return (

		<Stack width={'100%'} paddingTop={{ xs: 0, md: 10 }} direction={'column'} paddingX={{ xs: 0, md: 0 }} paddingRight={{ lg: 20 }} spacing={2} >
			<Typography display={{ xs: 'none', md: 'flex' }} fontSize={16} fontWeight={800}>
				Equipo
			</Typography>
			<Box
				padding={2}
				height={(inv) ? { xs: '55vh', lg: '260px' } : '180px'}
				bgcolor={colorsKarbono.secundary}
			>

				<Stack direction={'row'} justifyContent={{ xs: 'center', md: 'space-between' }}>
					<Stack direction={'column'} alignItems={{ xs: 'center', md: 'start' }} spacing={2} >

						<Stack direction={'row'} justifyContent={{ xs: 'center', md: 'space-between' }}>
							<Stack direction={'column'} spacing={2}>
								<Typography color={'white'} fontSize={14} fontWeight={300}>
									Invitar a las personas con las que trabajas
								</Typography>
								<Typography color={'white'} fontSize={14} fontWeight={500}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Typography>
							</Stack>
						</Stack>

						<Stack direction='row' >
							{
								(!inv)
									? <Button
										onClick={() => setInv(true)}
										sx={{ borderRadius: '8px', height: '30px', color: 'white' }}
										variant='contained'
									// endIcon={<ArrowForwardIosIcon />}
									>
										Invitar personas
									</Button>
									: <Stack
										direction={{ xs: 'column', md: 'row' }}
										spacing={2}
										alignItems={'center'}
										justifyContent={'center'}
										width={{ xs: '80vw', sm: '85vw', md: '50vw' }}
									>

										<Grid container spacing={2}>
											<Grid display={{ xs: 'none', md: 'flex' }} item xs={12} sm={12} md={12} lg={0.5}>
												<IconButton sx={{ paddingTop: '20px' }} onClick={() => { setInv(false) }}><ClearIcon sx={{ color: 'white' }} /></IconButton>
											</Grid>

											<Grid item xs={12} sm={12} md={12} lg={2.5}>
												<TextField
													onChange={(e) => setUser({ ...user, nombre_apellidos: e.target.value })}
													value={user?.nombre_apellidos}
													label="Nomber y Apellidos"

													type="text"
													placeholder='Nomber y Apellidos'
													fullWidth

													inputProps={{ style: { color: 'white', borderBottomColor: 'blue' } }}
													InputProps={{ style: { color: 'white' } }} // Para el color del texto
													sx={{
														bgcolor: 'transparent',
														"& .MuiInputBase-root": { borderRadius: '10px' },
													}}
												/>
											</Grid>

											<Grid item xs={12} sm={12} md={12} lg={2.5}>
												<TextField
													onChange={(e) => setUser({ ...user, email: e.target.value })}
													value={user?.email}
													label="Correo electrónico"

													type="email"
													placeholder='Correo electrónico'
													fullWidth

													inputProps={{ style: { color: 'white', borderBottomColor: 'blue' } }}
													InputProps={{ style: { color: 'white' } }} // Para el color del texto
													sx={{
														bgcolor: 'transparent',
														"& .MuiInputBase-root": { borderRadius: '10px' },
													}}
												/>
											</Grid>

											<Grid item xs={12} sm={12} md={12} lg={2}>
												<TextField
													onChange={(e) => setUser({ ...user, entidad_de_salud: [e.target.value] })}
													value={user?.entidad_de_salud}
													label="Rol"
													type="text"
													placeholder='Rol'
													fullWidth
													select
													inputProps={{ style: { color: 'white', borderBottomColor: 'blue' } }}
													InputProps={{ style: { color: 'white', padding: '0px 12px' } }} // Reducir el padding
													sx={{
														bgcolor: 'transparent',
														"& .MuiInputBase-root": { borderRadius: '10px' },
													}}
												>
													{options.map((option) => (
														<MenuItem
															style={{
																background: "white",
																color: "black",
															}}
															key={option}
															value={option}
														>
															{option}
														</MenuItem>
													))}
												</TextField>
											</Grid>

											<Grid item xs={12} sm={12} md={12} lg={2.5}>
												<TextField
													onChange={(e) => setUser({ ...user, central_mezcla: e.target.value })}
													value={user?.central_mezcla}
													label="Central de mezcla"

													type="textl"
													placeholder='Central de mezcla'
													fullWidth

													inputProps={{ style: { color: 'white', borderBottomColor: 'blue' } }}
													InputProps={{ style: { color: 'white' } }} // Para el color del texto
													sx={{
														bgcolor: 'transparent',
														"& .MuiInputBase-root": { borderRadius: '10px' },
													}}
												/>
											</Grid>

											<Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={2} sx={{ paddingTop: '15px' }}>
												<Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'}>

													<Button
														onClick={() => invitarUsuarios()}
														sx={{ borderRadius: '8px', width: '150px', height: { xs: '40px', md: '50px' }, color: 'white' }}
														variant='contained'
														endIcon={(loadingApi) ? <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' /> : <></>}
													>
														{(loadingApi) ? 'Invitando...' : 'Invitar'}
													</Button>

													<IconButton
														onClick={() => setInv(false)}
														sx={{
															color: 'white'
														}}>
														<ExpandLessIcon />
													</IconButton>
												</Stack>

											</Grid>
										</Grid>
									</Stack>
							}
						</Stack>
					</Stack>

					<Box display={{ xs: 'none', md: 'flex' }}>

						<Image
							src="/illustrations/illustration_dashboard2.jpg"
							width={150}
							height={150}
							alt="Picture of the author" />
					</Box>

				</Stack>
			</Box>

			<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', display: { xs: 'none', md: 'flex' } }} />

			{(userEquipo?.length! > 0)
				? userEquipo?.map((user, index) => {

					return <>
						<Stack direction={'row'} justifyContent={'space-between'} paddingX={'10px'}>

							<Stack direction={'column'} spacing={2}>
								<Typography color={{xs:'blue',md:'black'}} fontSize={14} fontWeight={800}>
									Nombre
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									{user.nombre_apellidos}
								</Typography>
							</Stack>

							<Stack direction={'column'} spacing={2}>
								<Typography color={{xs:'blue',md:'black'}} fontSize={14} fontWeight={800}>
									Correo
								</Typography>
								<Typography fontSize={14} fontWeight={500}>
									{user.email}
								</Typography>
							</Stack>

							<Stack display={{xs:'none',md:'flex'}} direction={'column'} spacing={2}>
								<Typography fontSize={14} fontWeight={800}>
									Rol en el equipo
								</Typography>

								<Stack  direction={'row'} spacing={3}>
									<Typography fontSize={14} fontWeight={500}>
										{user.rol}
									</Typography>
									<div>
										<IconButton
											aria-label="more"
											id={`long-button-${index}`}
											aria-controls={openIndex === index ? 'long-menu' : undefined}
											aria-expanded={openIndex === index ? 'true' : undefined}
											aria-haspopup="true"
											onClick={(event) => handleClick(event, index)}
										>
											<ExpandMoreIcon />
										</IconButton>

										<Menu
											id="long-menu"
											MenuListProps={{
												'aria-labelledby': `long-button-${index}`,
											}}
											anchorEl={anchorEls[index]}
											open={Boolean(anchorEls[index])}
											onClose={() => handleClose(index)}
											PaperProps={{
												style: {
													width: '20ch',
												},
											}}
										>
											{options.map((option) => (
												<MenuItem
													key={option}
													selected={option === user.rol}
													onClick={() => {
														handleChangeRol(option, index);
														handleClose(index);
													}}
												>
													{option}
												</MenuItem>
											))}
										</Menu>
									</div>
								</Stack>
							</Stack>


							<Checkbox sx={{display:{xs:'none',md:'flex'}}} inputProps={{ 'aria-label': '' }} defaultChecked />
						</Stack >

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />
					</>

				})

				: <></>
			}
		</Stack>
	)
};

export default EquipoComonent;
