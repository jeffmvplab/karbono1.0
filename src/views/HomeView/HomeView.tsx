import React from 'react';
import TarjetaProycon from './components/TarjetaProycon';
import TarjetaPareinf from './components/TarjetaPareinf';
import TarjetaAyudas from './components/TarjetaAyudas';

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
