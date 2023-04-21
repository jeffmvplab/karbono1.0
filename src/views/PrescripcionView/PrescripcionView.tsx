import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography, Button, Box, Grid } from '@mui/material/';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tabla from './components/Tabla';
import { mainRoutes } from '@/routes/routes';
import { TableReportes } from './components/TableReportes';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { useContext } from 'react';
import { PrescripcionContext } from './context/PrescripcionContext';
import { SearchModal } from './components/SearchModal';



export interface PrescripcionViewProps { }

const PrescripcionView: React.FC<PrescripcionViewProps> = () => {

	const { goAddNew } = useContext(PrescripcionContext)

	return (
		<>
			<Grid container sx={{ marginTop: '150px', paddingRight: '25px', paddingLeft: '25px', marginBottom: '30px' }}>
				<Grid item display='flex' justifyContent='space-between' width='100%'>
                <SearchModal/>
					<Typography
						variant='h5'
						sx={{ fontWeight: 700, fontSize: { xs: '1.5vh', sm: '2.5vh' }, marginTop: { xs: '5px' } }}>
						Solicitud de órdenes
					</Typography>
					<CustomButton text={'Agregar Nueva'}
						onClick={() => { goAddNew(mainRoutes.form) }}
						width='200px'
						height='44px'
						variant='outlined'
						color='secundary'
						fontSize={'16px'}
						textColor={colorsKarbono.secundary}
						borderColor={colorsKarbono.secundary}
						endIcon={<AddCircleOutlineIcon style={{ color: '#372fc6', paddingLeft: '5px', scale: '1.5' }} />}
						sx={{ borderRadius: '10px' }}
					/>

				</Grid>
			</Grid>
			<Grid container >
				{/* <Tabla /> */}
				<TableReportes />
			</Grid>
		</>
	)

};

export default PrescripcionView;
