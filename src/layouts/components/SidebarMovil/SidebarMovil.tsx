import { AppBar, Box, Stack, Typography, } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { colorsKarbono } from '@/themes/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export interface SidebarMovilProps { }

const SidebarMovil: React.FC<SidebarMovilProps> = () => {
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
				height={605}
				alignItems={'center'}
			>
				<Image
					src={'/assets/iconMenu.png'}
					width={17.5}
					height={25}
					alt=''
					style={{ marginTop: '5px', alignItems: 'center' }}
				/>

				<Stack
					// direction={'row'}
					marginTop={'120px'}
					height={240}
					width={50}
					justifyContent={'center'}
					alignItems={'center'}
					paddingBottom={8}
					bgcolor={colorsKarbono.secundary}>

					{/* <Stack direction={'row'}> */}
						<Typography
							width={'240px'}
							color='white'
							style={{ 
								marginRight:10,
								fontSize: 14, 
								fontWeight: 700,
								 transform: 'rotate(270deg)' 
								 }}>
							Parámetros farmacéuticos
						</Typography>
						<ArrowForwardIosIcon sx={{ position:'absolute',marginTop:8, left:'25px', color: 'white', scale: '0.7' }} />
					{/* </Stack> */}
				</Stack>

				<Stack
					// direction={'row'}
					height={240}
					width={50}
					justifyContent={'center'}
					alignItems={'center'}
					paddingBottom={8}
					bgcolor={colorsKarbono.primary}
				>
					{/* <Stack direction={'row'} > */}
						<Typography
							width={'240px'}
							color='white'
							style={{ 
								marginRight:10,
								fontSize: 14, 
								fontWeight: 700,
								 transform: 'rotate(270deg)' 
								 }}>
							Parámetros Nutricionales
						</Typography>
						<ArrowForwardIosIcon sx={{ position: 'absolute',marginTop:8, left:'25px', color: 'white', scale: '0.7' }} />
					{/* </Stack> */}
				</Stack>



			</Stack>
		</AppBar>
	);
};

export default SidebarMovil;
