import { Box, Button, Checkbox, CircularProgress, Divider, Fade, Grid, IconButton, Menu, MenuItem, Modal, Stack, TextField, Typography, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { colorsKarbono } from '@/themes/colors';
import Image from 'next/image'
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GlobalContext } from '@/context/GlobalContext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CustomButton } from '@/components/CustomButton';
import { error } from 'console';
import { userInvNull } from '@/domain/models/equipo_user.model';

export interface EquipoComonentProps { }

const optionsUser = [
	'Prescriptor',
	'Preparador NPT',
	'Control de Calidad',
	'Quitar del equipo'
];

const optionsCreateUser = [
	'Prescriptor',
	'Preparador NPT',
	'Control de Calidad',
];

const EquipoComonent: React.FC<EquipoComonentProps> = () => {

	const {
		userInv,
		setUserInv,
		userEquipo,
		setUserEquipo,
		getMeEquipo,
		invitarUsuarios, loadingApi, loadingAuth,
		modalInvOpen, handleModalInvClose,
		errorApi, updateMeEquipo, setErrorApi
	} = useContext(GlobalContext)

	useEffect(() => {
		getMeEquipo();
		setErrorApi('');
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
		newUserEquipo[index] = { ...newUserEquipo[index], roles: option };
		setUserEquipo(newUserEquipo);
	};


	function InviteUserModal() {

		const style = {
			position: 'absolute' as 'absolute',
			top: '30%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '320px',
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
			minHeight: '320px', // Agregar altura máxima y desplazamiento vertical
			overflowY: 'auto',
		};

		return (
			<div>
				<Modal
					open={modalInvOpen}
					onClose={handleModalInvClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				><>
						<Stack direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'}>
							<Image width={30} height={30}
								src={errorApi
									? '/assets/no.png'
									: '/assets/OK.png'}
								alt={''} ></Image>
							<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
								{errorApi
									? errorApi
									: 'Se ha realizado la invitación correctamente'
								}
							</Typography>
						</Stack>


						<Stack sx={{
							position: 'absolute' as 'absolute',
							top: errorApi ? '45%' : '35%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
							direction={'row'} spacing={3}>
							<CustomButton
								onClick={() => { handleModalInvClose(); setInv(false) }}
								height={40}
								width={100}
								text={'OK'}
								sx={{ borderRadius: '10px' }}
								color={colorsKarbono.secundary}
								textColor='white'
							/>

						</Stack>
					</>

				</Modal>
			</div>
		);
	}

	const [inv, setInv] = useState(false);

	return (

		<Stack width={'100%'} paddingTop={{ xs: 0, md: 10 }} direction={'column'} paddingX={{ xs: 0, md: 0 }} paddingRight={{ lg: 20 }} spacing={2} >

			<InviteUserModal />

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
									Invita a unirse a las personas de tu equipo
								</Typography>
								<Typography color={'white'} fontSize={14} fontWeight={300}>
									Invita a los prescriptores de NPT asignados por las IPS clientes, y a las personas que en tú CM cumplen la función de realizar el control de calidad y la preparación de NPTs.								</Typography>
							</Stack>
						</Stack>

						<Stack direction='row' >
							{
								(!inv)
									? <Button
										onClick={() => { setInv(true), setUserInv(userInvNull) }}
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
													onChange={(e) => setUserInv({ ...userInv, nombre_apellidos: e.target.value })}
													value={userInv?.nombre_apellidos}
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
													onChange={(e) => setUserInv({ ...userInv, email: e.target.value })}
													value={userInv?.email}
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
													onChange={(e) => setUserInv({ ...userInv, roles: e.target.value })}
													value={userInv?.roles}
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
													{optionsCreateUser.map((option) => (
														<MenuItem
															sx={{ backgroundColor: 'white' }}
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
												{/* <TextField
													onChange={(e) => setUserInv({ ...userInv, central_mezcla: e.target.value })}
													value={userInv?.central_mezcla}
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
												/> */}
											</Grid>

											<Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={2} sx={{ paddingTop: '15px' }}>
												
												<Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'}>
													
													<Button
														disabled={loadingApi}
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

			{(Array.isArray(userEquipo))
				? userEquipo?.map((user, index) => {
					return <>
						{(!loadingAuth)
							? <Stack direction={'row'} justifyContent={'space-between'} paddingX={'10px'}>

								<Stack direction={'column'} spacing={2}>
									<Typography color={{ xs: 'blue', md: 'black' }} fontSize={14} fontWeight={800}>
										Nombre
									</Typography>
									<Typography fontSize={14} fontWeight={500}>
										{user.nombre_apellidos}
									</Typography>
								</Stack>

								<Stack direction={'column'} spacing={2}>
									<Typography color={{ xs: 'blue', md: 'black' }} fontSize={14} fontWeight={800}>
										Correo
									</Typography>
									<Typography fontSize={14} fontWeight={500}>
										{user.email}
									</Typography>
								</Stack>

								<Stack display={{ xs: 'none', md: 'flex' }} direction={'column'} spacing={2}>
									<Typography fontSize={14} fontWeight={800}>
										Rol en el equipo
									</Typography>

									<Stack direction={'row'} spacing={3}>
										<Typography fontSize={14} fontWeight={500}>
											{user.roles}
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
												{optionsUser.map((option) => (
													<MenuItem
														sx={{ backgroundColor: 'white' }}
														key={option}
														selected={option === user.roles}
														onClick={
															(option !== 'Quitar del equipo') ? async () => {
																await updateMeEquipo(user?.email!, option, user?.group_admin!);
																handleChangeRol(option, index);
																getMeEquipo()
																handleClose(index);
															}
																: async () => {
																	await updateMeEquipo(user?.email!, option, ' ');
																	handleChangeRol(option, index);
																	getMeEquipo()
																	handleClose(index);
																}
														}>
														{option}
													</MenuItem>
												))}
											</Menu>
										</div>
									</Stack>
								</Stack>


								<Checkbox sx={{ display: { xs: 'none', md: 'flex' } }} inputProps={{ 'aria-label': '' }} defaultChecked />
							</Stack >
							: <h2 key={index}>Actualizando...</h2>
						}

						<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />
					</>

				})

				: <></>
			}
		</Stack>
	)
};

export default EquipoComonent;
