
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import { Typography, Grid, Stack, Divider } from '@mui/material';
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
import { typographyKarbono } from '@/themes/typography';
import { convertirAPDF } from '@/utilities/view_pdf_convert';
import PDFComponent from './components/PDFPrescriptionComponent';
import PDFPrescriptionComponent from './components/PDFPrescriptionComponent';

export interface ReportePrescripcionViewProps { }

const ReportePrescripcionView: React.FC<ReportePrescripcionViewProps> = () => {


	const { getPrescriptionsByNumber,loadingSave, handleOpenModalDescargar, reporte } = useContext(ReportesContext)

	useEffect(() => {
		getPrescriptionsByNumber();
	}, [])



	return (<>
		<DescargarModal />
		<OrdenarModal />

		<Grid container sx={{ marginTop: '30px', paddingRight: '25px', paddingLeft: '15px', marginBottom: '30px' }}>

			<Grid item display='flex' justifyContent='space-between' width='100%' paddingBottom={'30px'}>

				<Typography variant='h5' sx={{ fontWeight: 700 }}>Reporte prescripción</Typography>

				<CustomButton text={'Descargar'}
					// onClick={handleOpenModalDescargar}
					onClick={() => convertirAPDF('reporte_view', reporte?.nombre_paciente!)}
					width='180px'
					height='44px'
					variant='outlined'
					color='secundary'
					fontSize={'16px'}
					textColor={colorsKarbono.secundary}
					borderColor={colorsKarbono.secundary}
					endIcon={
						<GetAppOutlinedIcon
							style={{ color: '#372fc6', paddingLeft: '5px', scale: '1.5' }} />
					}
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
			<PDFPrescriptionComponent reporte={reporte} loading={loadingSave}/>
			<BannerOrdenar />
		</Grid >
	</>
	)

};

export default ReportePrescripcionView;
