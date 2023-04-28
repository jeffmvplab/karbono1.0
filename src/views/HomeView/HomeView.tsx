import React from 'react';
import TarjetaProycon from './components/TarjetaProycon';
import TarjetaPareinf from './components/TarjetaPareinf';
import TarjetaAyudas from './components/TarjetaAyudas';
import MenuItem from '@material-ui/core/MenuItem';
import CustomTextField from '../Formulario/Components/CustomTextField';
import { Box, Grid } from '@mui/material';
import { LightTooltip } from '../Formulario/style/styleToolTips';

export interface HomeViewProps { }


const HomeView: React.FC<HomeViewProps> = () => {
	return (
		<>
			<TarjetaProycon />
			<TarjetaPareinf />
			<TarjetaAyudas />
		</>
	)
};

export default HomeView;
