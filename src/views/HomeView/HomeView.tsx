import { Box, Container,  } from '@mui/material';
import React from 'react';
import TarjetaAyudas from './components/TarjetaAyudas';
import TarjetaConfiguracion from './components/TarjetaConfiguracion';
import TarjetaInformes from './components/TarjetaInformes';
import TarjetaParametros from './components/TarjetaParametros';
import TarjetaProduccion from './components/TarjetaProduccion';
export interface HomeViewProps {}

const HomeView : React.FC<HomeViewProps> = () => {
	return (
		<>
		<Box display='flex'>
			<TarjetaProduccion  />
			<TarjetaConfiguracion />
		</Box> 	
		<Box  display='flex'>
			<TarjetaParametros />
			<TarjetaInformes />
		</Box > 	
		<Box  display='flex' marginBottom='40px' width='92%'>
			<TarjetaAyudas />

		</Box>
		</>
	)
};

export default HomeView;
