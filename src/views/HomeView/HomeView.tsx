import React from 'react';
import Tarjetas from './components/Tarjetas';
export interface HomeViewProps {}

const HomeView : React.FC<HomeViewProps> = () => {
	return (
		<>
	     	<Tarjetas />

		    <h1>hola</h1>		 	
		</>
	)
};

export default HomeView;
