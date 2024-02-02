import { Box, Button, Checkbox, Divider, Fade, Grid, IconButton, Menu, MenuItem, Stack, TextField, Typography, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colorsKarbono } from '@/themes/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'
import { PerfilContext } from '../context/PerfilContext';
import { typographyKarbono } from '@/themes/typography';
import { IUserEquipo } from '@/domain/models/equipo_user.model';

export interface EquipoComonentProps { }

const options = [
	'Prescriptor',
	'Preparador NPT',
	'Control de calidad',
];

const EquipoComonent: React.FC<EquipoComonentProps> = () => {

	const { userEquipo, setUserEquipo, getUserByRol, setUserInv, userInv } = useContext(PerfilContext)

	useEffect(() => {
		getUserByRol('');
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


		<Grid item xs={12} sm={12} md={9}>

			<Stack paddingTop={10} direction={'column'} paddingRight={20} spacing={2}>
				<Typography fontSize={16} fontWeight={800}>
					Equipo
				</Typography>

				<Box padding={2} height={'160px'} bgcolor={colorsKarbono.secundary}>
					<Stack direction={'row'} justifyContent={'space-between'}>
						<Stack direction={'column'} alignItems={'start'} spacing={2}>
							<Typography color={'white'} fontSize={14} fontWeight={300}>
								Invitar a las personas con las que trabajas
							</Typography>
							<Typography color={'white'} fontSize={14} fontWeight={500}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</Typography>

							<Stack direction='row' >
								{
									(!inv)
										? <Button
											onClick={() => setInv(true)}
											sx={{ borderRadius: '8px', height: '30px', color: 'white' }}
											variant='contained'
											endIcon={<ArrowForwardIosIcon />}
										>
											Invitar personas
										</Button>
										: <Stack direction={'row'} spacing={2}>
											<TextField
												onChange={(e) => setUserInv({ ...userInv, email: e.target.value })}
												value={userInv?.email}
												label=""

												type="email"
												placeholder='Correo electrónico'
												fullWidth

												inputProps={{ style: { color: 'white', borderBottomColor: 'blue'} }}
												InputProps={{ style: { color: 'white' } }} // Para el color del texto
												sx={{
													bgcolor: 'transparent',
													"& .MuiInputBase-root": { borderRadius: '10px' },
												}}
											/>


											<TextField
												onChange={(e) => setUserInv({ ...userInv, entidad_de_salud: [e.target.value] })}
												value={userInv?.entidad_de_salud}
												label=""
												type="text"
												placeholder=''
												fullWidth
												select
												inputProps={{ style: { color: 'white', borderBottomColor: 'blue'} }}
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


											<Button
												onClick={() => setInv(true)}
												sx={{ borderRadius: '8px', width: '230px', height: '55px', color: 'white' }}
												variant='contained'
												endIcon={<ArrowForwardIosIcon />}
											>
												Invitar
											</Button>
										</Stack>
								}
							</Stack>



						</Stack>

						<Image
							src="/illustrations/illustration_dashboard2.jpg"
							width={100}
							height={100}
							alt="Picture of the author" />
					</Stack>
				</Box>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				{(userEquipo?.length! > 0)
					? userEquipo?.map((user, index) => {

						return <>
							<Stack direction={'row'} justifyContent={'space-between'}>

								<Stack direction={'column'} spacing={2}>
									<Typography fontSize={14} fontWeight={800}>
										Nombre y apellidos
									</Typography>
									<Typography fontSize={14} fontWeight={500}>
										{user.nombre_apellidos}
									</Typography>
								</Stack>

								<Stack direction={'column'} spacing={2}>
									<Typography fontSize={14} fontWeight={800}>
										Correo
									</Typography>
									<Typography fontSize={14} fontWeight={500}>
										{user.email}
									</Typography>
								</Stack>

								<Stack direction={'column'} spacing={2}>
									<Typography fontSize={14} fontWeight={800}>
										Rol en el equipo
									</Typography>
									<Stack direction={'row'} spacing={3}>
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


								<Checkbox inputProps={{ 'aria-label': '' }} defaultChecked />
							</Stack >

							<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />
						</>

					})

					: <></>
				}
			</Stack>
		</Grid >
	)
};

export default EquipoComonent;
