import { colorsKarbono } from '@/themes/colors';
import { AppBar, Toolbar, IconButton, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
	return (
		<AppBar
			position="fixed"
			sx={{
				height: {xs:'120px',sm:'82px',md:'42px'},
				top: 'auto',
				bottom: 0,
				bgcolor: `${colorsKarbono.footer}`
			}}
		>
			{/* <Toolbar> */}
			<Stack
				paddingX={2}
				direction={{xs:'column', sm:'row'}}
				justifyContent='space-between'
			>
				<Stack 
				direction={{xs:'column', sm:'row'}} 
				alignItems={{xs:'start'}}
				spacing={{sm:6}}>
					
					<IconButton sx={{paddingTop:1.5}}>
						<Image
							src={'/assets/logo.png'}
							width={60}
							height={15}
							alt=''
						/>
					</IconButton>

					<Typography
						padding={{sm:1}}
						paddingLeft={{xs:1}}
						color={colorsKarbono.footerText}
						fontSize={14}
					>
						© 2023. Todos los derechos reservados
					</Typography>


				</Stack>


				<Typography
					padding={1}
					color={colorsKarbono.footerText}
					fontSize={14}
				>
				Políticas de privacidad  |  Términos y condiciones
				</Typography>

			</Stack>
			{/* </Toolbar> */}
		</AppBar>
	);
};

export default Footer;
