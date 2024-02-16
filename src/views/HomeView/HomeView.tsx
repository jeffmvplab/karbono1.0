import React from 'react';
import TarjetaProycon from './components/TarjetaProycon';
import TarjetaPareinf from './components/TarjetaPareinf';
import TarjetaAyudas from './components/TarjetaAyudas';
import { Stack, Typography } from '@mui/material';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { StorageKeysEnum } from '@/utilities/enums';

export interface HomeViewProps { }


const HomeView: React.FC<HomeViewProps> = () => {

	const localStorage=new LocalStorageProtocol();
	const email=localStorage.get(StorageKeysEnum.user)?localStorage.get(StorageKeysEnum.user).email:''

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
				Bienvenido, {email}.
			</Typography>
			<TarjetaProycon />
			<TarjetaPareinf />
			<TarjetaAyudas />
		</Stack >

	)
};

export default HomeView;
