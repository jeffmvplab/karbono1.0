import Image from 'next/image';

import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import { Typography, Button, Box, Grid, TableContainer, Table, TableHead, TableRow, TableCell } from '@mui/material/';
import Link from 'next/link';
import { Divider } from '@material-ui/core';
import ReportesMacronutrientes from './components/ReportesMacronutrientes';
import ReportesMicronutrientes from './components/ReportesMicronutrientes';
import ReportesParametros from './components/ReportesParametros';

export interface ReportePrescripcionViewProps { }

const ReportePrescripcionView: React.FC<ReportePrescripcionViewProps> = () => {


	return (
		<>
			<Grid container sx={{ marginTop: '100px', paddingRight: '25px', paddingLeft: '25px', marginBottom: '30px' }}>
				<Grid item display='flex' justifyContent='space-between' width='100%'>

					<Typography variant='h5' sx={{ fontWeight: 700 }}>Reporte prescripción</Typography>
					<Link href='' style={{ textDecoration: 'none' }}>
						<Box border='solid 1px' display='flex' borderColor='#372FC6' sx={{ paddingTop: '6px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px', paddingBottom: '5px' }}>
							<Typography sx={{ color: '#372FC6' }}>
								Descargar
							</Typography>
							<GetAppOutlinedIcon style={{ color: '#372fc6', paddingLeft: '5px' }} />
						</Box>

					</Link>

				</Grid>
				<Grid item display={'flex'} sx={{ width: '100%', marginTop: '30px', marginRight: '5px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '10px 10px 0 0' }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '20%', textAlign: 'center' }}>IPS:</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '20%', textAlign: 'center' }}>Servicio:</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '20%', textAlign: 'center' }}>Nombres:</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '20%', textAlign: 'center' }}>Apellidos:</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '20%', textAlign: 'center' }}>Peso:</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '20%', textAlign: 'center' }}>Identificación:</Typography>
				</Grid>
				<ReportesMacronutrientes />
				<Divider orientation='horizontal' style={{ width: '50%' }} />

				<ReportesMicronutrientes />
				<Divider orientation='horizontal' style={{ width: '50%' }} />

				<ReportesParametros />
				<Divider orientation='horizontal' style={{ width: '50%', boxShadow: '0px 5px 12px rgba(105, 92, 92, 0.2);' }} />
			</Grid>

		</>
	)

};

export default ReportePrescripcionView;
