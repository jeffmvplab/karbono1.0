// 'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import Cookies from "js-cookie";
import { CookiesKeysEnum, StorageKeysEnum } from '@/utilities/enums';
import { GlobalContext } from '@/context/GlobalContext';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';
import TarjetaPres from './components/TarjetaPres';
import TarjetaInf from './components/TarjetaInf';
import TarjetaAyudas from './components/TarjetaAyudas';
import TarjetaConf from './components/TarjetaConf';
import TarjetaPar from './components/TarjetaPar';
// import { LocalStorageProtocol } from "@/protocols/cache/local_cache";


export interface HomeViewProps { }


const HomeView: React.FC<HomeViewProps> = () => {

	const { getMeRol } = useContext(GlobalContext)
	const [name, setName] = useState('');

	useEffect(() => {
		const name = Cookies.get(CookiesKeysEnum.userName) ? Cookies.get(CookiesKeysEnum.userName) : ''
		setName(name!)
	}, [])
	// const localStorage = new LocalStorageProtocol();
	// let email=localStorage.get(StorageKeysEnum.user) ? localStorage.get(StorageKeysEnum.user).email : '';

	return (
		<>
			{

				<Stack
					justifyContent={'center'}
					sx={{ overflow: 'auto' }}
					direction={'column'}
					paddingBottom={'10vh'}
				// height={'80vh'} 
				// paddingTop={'1000px'}
				>

					<Typography
						sx={{
							paddingLeft: '30px',
							fontFamily: 'Outfit',
							fontSize: '25px',
							fontWeight: 700,
							lineHeight: '32px',
							letterSpacing: '0.02em',
							textAlign: 'left',
						}}
					>
						Bienvenido, {name ? name : ''}.
					</Typography>
					<Grid container>
						<TarjetaPres />
						<TarjetaConf />
					</Grid>

					<Grid container>
						{Array.isArray(getMeRol()) && getMeRol()[0] !== RolUsersKeysEnum.prescriptor
							&&
							<TarjetaPar />
						}
						<TarjetaInf />

						<TarjetaAyudas />
					</Grid>
				</Stack >}
		</>

	)
};

export default HomeView;
