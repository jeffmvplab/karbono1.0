import { AppBar, Box, Button, Stack, Typography, } from '@mui/material';
import React, { useContext } from 'react';
import { colorsKarbono } from '@/themes/colors';
import { ParametrosFarmaceuticos } from '@/views/Formulario/Components/ParametrosFarmaceuticos';
import { FormulariosContext } from '@/views/Formulario/context/FormulariosContext';
import { ParametrosNutricionales } from '@/views/Formulario/Components/ParametrosNutricionales';
import { typographyKarbono } from '@/themes/typography';

export interface SidebarMovilProps { }

const SidebarMovil: React.FC<SidebarMovilProps> = () => {

	const { open1, open2, handleMenu1, handleMenu2 } = useContext(FormulariosContext);

	// return focus to the button when we transitioned from !open -> open

	return (
		<AppBar
			color='inherit'
			position='fixed'
			sx={{ left: '0px', width: '30px'}}
			style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
			elevation={5}
		>
			<Stack
				paddingTop={1}
				// bgcolor={'red'}
				direction={'column'}
				height={555}
				alignItems={'center'}
			>
				{/* <Button
					onClick={() => { router.push(mainRoutes.home); }}
				>
					<Image
						src={'/assets/iconMenu.png'}
						width={17.5}
						height={25}
						alt=''
						style={{ marginTop: '5px', alignItems: 'center' }}
					/>
				</Button> */}
				<Button
					onClick={() => handleMenu1()}
					style={{
						paddingTop: 10,
						textTransform: 'none',
						fontSize: 14,
						color: 'white',
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
						transform: 'rotate(270deg)',
						background: colorsKarbono.secundary,
						marginTop: 150,
						height: 30,
						width: 240,
					}}>
					<Stack direction={'column'} alignItems='center'>
						<Typography fontFamily={typographyKarbono.outfit}>
							Parámetros farmacéuticos
						</Typography>
						{/* <ArrowForwardIosIcon sx={{ color: 'white', scale: '0.6', transform: 'rotate(90deg)', }} /> */}
					</Stack>
				</Button>

				<Box
					display={{ xs: (open1) ? 'flex' : 'none' }}
					style={{ position: 'absolute', top: '93px', left: '30px' }}
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
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10,
						transform: 'rotate(270deg)',
						background: colorsKarbono.primary,
						marginTop: 210,
						height: 30,
						width: 240,
					}}>
					<Stack direction={'column'} alignItems='center'>
						<Typography fontFamily={typographyKarbono.outfit}>
							Parámetros Nutricionales
						</Typography>
						{/* <ArrowForwardIosIcon sx={{ color: 'white', scale: '0.6', transform: 'rotate(90deg)', }} /> */}
					</Stack>

				</Button>

				<Box
					display={{ xs: (open2) ? 'flex' : 'none' }}
					style={{ position: 'fixed', top: '333px', left: '20px' }}
				>
				<ParametrosNutricionales isMovil={true} />
				</Box>

			</Stack>
		</AppBar>
	);
};

export default SidebarMovil;
