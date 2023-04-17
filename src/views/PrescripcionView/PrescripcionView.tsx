import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography, Button, Box, Grid } from '@mui/material/';
import Link from 'next/link';
import Tabla from './components/Tabla';
import { mainRoutes } from '@/routes/routes';
import { TableReportes } from './components/TableReportes';



export interface PrescripcionViewProps { }

const PrescripcionView: React.FC<PrescripcionViewProps> = () => {

	const router = useRouter();

	return (
		<>
			<Grid container sx={{ marginTop: '100px', paddingRight: '25px', paddingLeft: '25px', marginBottom: '30px' }}>
				<Grid item display='flex' justifyContent='space-between' width='100%'>

					<Typography variant='h5' sx={{ fontWeight: 700, fontSize: { xs: '2vh', sm: '3vh' }, marginTop: { xs: '5px' } }}>Solicitud de órdenes</Typography>
					<Link href='/formulario' style={{ textDecoration: 'none' }}>
						<Box border='solid 1px' display='flex' borderColor='#372FC6' sx={{ paddingTop: '6px', paddingLeft: { xs: '15px', sm: '25px' }, paddingRight: '25px', borderRadius: '10px', paddingBottom: '5px' }}>
							<Typography sx={{ color: '#372FC6', fontSize: { xs: '12px', md: '18px' } }}>
								Agregar nueva
							</Typography>
							<Image
								src='/assets/añadir-icono-landing.png'
								width={20}
								height={20}
								alt=''
								style={{ alignItems: 'center', marginLeft: '10px', paddingTop: '2px', paddingBottom: '2px', paddingLeft: '5px' }}
							/>
						</Box>
					</Link>
				</Grid>
			</Grid>
			<Grid container >
				{/* <Tabla /> */}
				<TableReportes/>
			</Grid>
		</>
	)

};

export default PrescripcionView;
