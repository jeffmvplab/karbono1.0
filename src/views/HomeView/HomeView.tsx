import React from 'react';
import TarjetaAyudas from './components/TarjetaAyudas';
import TarjetaPareinf from './components/TarjetaPareinf';
import TarjetaProycon from './components/TarjetaProycon';
export interface HomeViewProps {}

const HomeView : React.FC<HomeViewProps> = () => {
	return (
		<>
		  <TarjetaProycon />
		  <TarjetaPareinf />
		  <TarjetaAyudas />
		
		</>
	)
};

export default HomeView;
