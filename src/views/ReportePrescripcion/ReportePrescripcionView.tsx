
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import { Typography, Grid, Stack, Card, Button, CircularProgress, Drawer, IconButton } from '@mui/material';
import BannerOrdenar from './components/BannerOrdenar';
import { useContext, useEffect, useState } from 'react';
import { ReportesContext } from './context/ReportesContext';
import { DescargarModal } from './components/Modals/DescargarModal';
import { OrdenarModal } from './components/Modals/OrdenarModal';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { convertirAPDF } from '@/utilities/view_pdf_convert';
import PDFPrescriptionComponent from './components/PDFPrescriptionComponent';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TelegramIcon from '@mui/icons-material/Telegram';
import CloseIcon from '@mui/icons-material/Close';

export interface ReportePrescripcionViewProps { }

const ReportePrescripcionView: React.FC<ReportePrescripcionViewProps> = () => {


	const { getPrescriptionsByNumber, loadingSave, handleOpenModalDescargar, reporte, } = useContext(ReportesContext)
	const [openDrawer, setOpenDrawer] = useState(false);

	useEffect(() => {
		getPrescriptionsByNumber();
	}, [])



	return (<>

		<Stack
			direction={'row'}
			display='flex'
			justifyContent='space-between'
			width='100%'
			padding={'20px'}>

			<Typography sx={{ fontWeight: 700, fontSize: { xs: '20px', md: '32px' } }}>Reporte prescripción</Typography>

			<CustomButton text={'Descargar'}
				// onClick={handleOpenModalDescargar}
				onClick={() => convertirAPDF('reporte_view', reporte?.nombre_paciente!)}
				width='160px'
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


		</Stack>
		<DescargarModal />
		<OrdenarModal />

		<Drawer
			anchor="right"
			open={openDrawer}
			onClose={() => setOpenDrawer(false)}
			PaperProps={{
				sx: {
					borderRadius: '10px 0 0 10px', // Bordes izquierdos redondeados
					height: '80vh', // Altura igual al tamaño de la ventana menos 50px en la parte superior e inferior
					top: '80px', // Desplazamiento desde el borde superior
					bottom: '50px', // Desplazamiento desde el borde inferior
				},
			}}
		>
			{/* Contenido del Drawer */}
			<Stack direction="column" sx={{ width: '70vw', padding: '10px' }}>
				{/* Botón de cerrar Drawer */}
				<IconButton
					sx={{ alignSelf: 'flex-end' }}
					onClick={() => setOpenDrawer(false)}
				>
					<CloseIcon />
				</IconButton>

				<Stack direction="row" justifyContent={'center'}>
					<Typography color={'#372fc6'} fontSize={'16px'} fontWeight={700} gutterBottom>
						Observaciones y Cambios
					</Typography>

					<Stack direction="column" overflow={'scroll'}>

					</Stack>

					{/* Otro contenido del Drawer */}
				</Stack>
			</Stack>
		</Drawer>

		<Grid  container sx={{ marginTop: '30px', marginBottom: { xs: '0px', md: '30px' } }} spacing={{ xs: 0, md: 2 }}>

			<Grid item xs={12} md={8} paddingX='15px'>
				<PDFPrescriptionComponent reporte={reporte} loading={loadingSave} />
			</Grid>

			
			<Grid item xs={12} md={4} display={{ xs: 'none', md: 'block' }}  paddingBottom={{ xs: '150px', md: '0' }}>
				<Card>
					<Stack  paddingX='15px'  direction={'column'} minHeight={'50vh'} height={'100%'} overflow={'scroll'} alignItems={'center'}>
						<Typography color={'#372FC6'} sx={{ fontWeight: 600, fontSize: '20px' }}>Observaciones y Cambios.</Typography>
					</Stack>
				</Card>
			</Grid>
			{/* <BannerOrdenar /> */}


			<Stack direction={'column'} display={{ xs: 'flex', md: 'none' }} paddingBottom={{ xs: '150px', md: '0' }}>

				<Stack
					bgcolor={'#2FC5C6'}
					height={'70px'}
					width={'100%'}
					direction={'row'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Button onClick={() => setOpenDrawer(true)}>
						<Typography color={'white'} sx={{ fontWeight: 700, fontSize: '20px' }}>Observaciones y Cambios</Typography>
						<ArrowRightIcon sx={{ color: 'white', fontSize: '34px' }} />
					</Button>
				</Stack>

				<Stack direction={'row'} width={'100%'} padding={'30px'} spacing={4}>
					<CustomButton
						fontSize={'22px'}
						onClick={() => { }}
						textColor={'white'}
						color='#372FC6'
						sx={{
							width: '200px',
							height: '40px',
						}}
						variant='contained'
						text={(loadingSave) ? 'Enviar' : 'Enviando...'}
						startIcon={<TelegramIcon sx={{ color: 'white', fontSize: '34px' }} />}
						endIcon={
							(loadingSave)
								? <></>
								: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='20px' />} />
					<Typography color={'black'} sx={{ fontWeight: 500, fontSize: '16px', letterSpacing: '3%', lineHeight: '20px' }}>Ordena tu prescripción a la Central de Mezclas de tu preferencia en tan solo segundos.</Typography>

				</Stack>
			</Stack>
		</Grid >
	</>
	)

};

export default ReportePrescripcionView;
