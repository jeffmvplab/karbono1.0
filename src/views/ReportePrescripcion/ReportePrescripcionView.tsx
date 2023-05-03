import Image from 'next/image';

import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import { Typography, Button, Box, Grid, TableContainer, Table, TableHead, TableRow, TableCell, Stack } from '@mui/material/';
import Link from 'next/link';
import { Divider } from '@material-ui/core';
import ReportesMacronutrientes from './components/ReportesMacronutrientes';
import ReportesMicronutrientes from './components/ReportesMicronutrientes';
import ReportesParametros from './components/ReportesParametros';
import BannerOrdenar from './components/BannerOrdenar';
import { useContext, useEffect } from 'react';
import { ReportesContext } from './context/ReportesContext';
import { DescargarModal } from './components/Modals/DescargarModal';
import { OrdenarModal } from './components/Modals/OrdenarModal';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';

export interface ReportePrescripcionViewProps { }

const ReportePrescripcionView: React.FC<ReportePrescripcionViewProps> = () => {


	const { getPrescriptionsByNumber, handleOpenModalDescargar, reporte } = useContext(ReportesContext)

	useEffect(() => {
		getPrescriptionsByNumber();
	}, [])


	return (
		<>
			<DescargarModal />
			<OrdenarModal />
			<Grid container sx={{ marginTop: '30px', paddingRight: '25px', paddingLeft: '15px', marginBottom: '30px' }}>

				<Grid item display='flex' justifyContent='space-between' width='100%' paddingBottom={'30px'}>

					<Typography variant='h5' sx={{ fontWeight: 700 }}>Reporte prescripción</Typography>

					<CustomButton text={'Descargar'}
						onClick={handleOpenModalDescargar}
						width='180px'
						height='44px'
						variant='outlined'
						color='secundary'
						fontSize={'16px'}
						textColor={colorsKarbono.secundary}
						borderColor={colorsKarbono.secundary}
						endIcon={<GetAppOutlinedIcon style={{ color: '#372fc6', paddingLeft: '5px', scale: '1.5' }} />}
						sx={{ borderRadius: '10px' }}
					/>

					{/* <Link href='' style={{ textDecoration: 'none' }}>
						<Box border='solid 1px' display='flex' borderColor='#372FC6' sx={{ paddingTop: '6px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px', paddingBottom: '5px' }}>
							<Typography sx={{ color: '#372FC6' }}>
								Descargar
							</Typography>
							<GetAppOutlinedIcon style={{ color: '#372fc6', paddingLeft: '5px' }} />
						</Box>

					</Link> */}

				</Grid>



				<Grid item display={'flex'} sx={{ width: '100px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '10px 0 0 0' }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>IPS:{reporte?.ips}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '200px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0 0 0 0' }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Servicio:{reporte?.servicio}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '400px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0 0' }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Nombres y Apellidos:{reporte?.nombre_paciente}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
					{/* <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Apellidos:</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} /> */}
				</Grid>

				<Grid item display={'flex'} sx={{ width: '100px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0 0' }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Peso:{reporte?.peso}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0 0' }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Identificación:{reporte?.no_identificacion}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Infusión continua por (hr):{reporte?.tiempo_infusion}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Volumen de purga:{reporte?.purga}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Vía de administración:{reporte?.via_administracion}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px  0px', }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Volumen total NPT + purga:{(reporte?.volumen! + reporte?.purga!)}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Volumen total NPT:{reporte?.volumen}</Typography>
					<Divider orientation='vertical' style={{ height: '60%' }} />
				</Grid>

				<Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 10px 0px', }}>
					<Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center' }}>Flujo metabólico:{reporte?.flujo_metabolico}</Typography>

				</Grid>

				<Stack width={'100%'} paddingBottom={'50px'} >
					<ReportesMicronutrientes />
					<Divider orientation='horizontal' style={{ width: '50%' }} />

					<ReportesMacronutrientes />
					<Divider orientation='horizontal' style={{ width: '50%' }} />

					<ReportesParametros />
					<Divider orientation='horizontal' style={{ width: '50%' }} />
					<BannerOrdenar />
				</Stack>

			</Grid >

		</>
	)

};

export default ReportePrescripcionView;
