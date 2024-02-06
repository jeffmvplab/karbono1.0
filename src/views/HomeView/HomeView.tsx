import React from 'react';
import TarjetaProycon from './components/TarjetaProycon';
import TarjetaPareinf from './components/TarjetaPareinf';
import TarjetaAyudas from './components/TarjetaAyudas';
import { Stack, Typography } from '@mui/material';

export interface HomeViewProps { }


const HomeView: React.FC<HomeViewProps> = () => {
	return (
		<Stack 
		justifyContent={'center'}
		 sx={{ overflow: 'auto'}} 
		direction={'column'} 
		paddingBottom={'10vh'}
		// height={'80vh'} 
		// paddingTop={'1000px'}
		>

			<Typography
				sx={{
					paddingLeft:'30px',
					fontFamily: 'Outfit',
					fontSize: '25px',
					fontWeight: 700,
					lineHeight: '32px',
					letterSpacing: '0.02em',
					textAlign: 'left',
				}}
			>
				Bienvenido, HPabon.
			</Typography>
			<TarjetaProycon />
			<TarjetaPareinf />
			<TarjetaAyudas />
		</Stack >

	)
};

export default HomeView;
