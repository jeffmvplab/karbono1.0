import { AppBar, Box, Button, Fade, Grow, Menu, MenuItem, Stack, Typography, } from '@mui/material';
import React, { useContext } from 'react';
import Image from 'next/image';
import { colorsKarbono } from '@/themes/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ParametrosFarmaceuticos } from '@/views/Formulario/Components/ParametrosFarmaceuticos';
import { FormulariosContext } from '@/views/Formulario/context/FormulariosContext';
import { ParametrosNutricionales } from '@/views/Formulario/Components/ParametrosNutricionales';
import router from 'next/router';
import { mainRoutes } from '@/routes/routes';
import { typographyKarbono } from '@/themes/typography';

export interface SidebarMovilProps { }

const SidebarMovil: React.FC<SidebarMovilProps> = () => {

	const { open1, open2, handleMenu1, handleMenu2 } = useContext(FormulariosContext);

	// return focus to the button when we transitioned from !open -> open

	return (
		<AppBar
			color='inherit'
			position='fixed'
			sx={{ left: '0px', width: '50px' }}
			elevation={5}
		>
			<Stack
				paddingTop={1}
				// bgcolor={'red'}
				direction={'column'}
				height={555}
				alignItems={'center'}
			>
				<Button
					onClick={() => { router.push(mainRoutes.home); }}
				>
					<Image
						src={'/assets/iconMenu.png'}
						width={17.5}
						height={25}
						alt=''
						style={{ marginTop: '5px', alignItems: 'center' }}
					/>
				</Button>
				<Button
					onClick={() => handleMenu1()}
					style={{
						paddingTop: 10,
						textTransform: 'none',
						fontSize: 14,
						color: 'white',
						borderRadius: 0,
						transform: 'rotate(270deg)',
						background: colorsKarbono.secundary,
						marginTop: 150,
						height: 50,
						width: 240,
					}}>
					<Stack direction={'column'} alignItems='center'>
						<Typography fontFamily={typographyKarbono.outfit}>
							Parámetros farmacéuticos
						</Typography>
						<ArrowForwardIosIcon sx={{ color: 'white', scale: '0.6', transform: 'rotate(90deg)', }} />
					</Stack>
				</Button>

				<Box
					display={{ xs: (open1) ? 'flex' : 'none' }}
					style={{ position: 'absolute', top: '93px', left: '50px' }}
				><ParametrosFarmaceuticos isMovil={true} />
					{/* <ParametrosNutricionales /> */}
				</Box>

				<Button
					onClick={() => handleMenu2()}
					style={{
						paddingTop: 10,
						textTransform: 'none',
						fontSize: 14,
						color: 'white',
						borderRadius: 0,
						transform: 'rotate(270deg)',
						background: colorsKarbono.primary,
						marginTop: 190,
						height: 50,
						width: 240,
					}}>
					<Stack direction={'column'} alignItems='center'>
						<Typography fontFamily={typographyKarbono.outfit}>
							Parámetros Nutricionales
						</Typography>
						<ArrowForwardIosIcon sx={{ color: 'white', scale: '0.6', transform: 'rotate(90deg)', }} />
					</Stack>

				</Button>

				<Box
					display={{ xs: (open2) ? 'flex' : 'none' }}
					style={{ position: 'fixed', top: '333px', left: '50px' }}
				><ParametrosNutricionales isMovil={true} />
				</Box>

			</Stack>
		</AppBar>
	);
};

export default SidebarMovil;
