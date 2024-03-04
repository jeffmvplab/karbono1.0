
import { Typography, Grid, Stack, Card, Button, CircularProgress, Drawer, IconButton } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ReportesContext } from './context/ReportesContext';
import { DescargarModal } from './components/Modals/DescargarModal';
import { OrdenarModal } from './components/Modals/OrdenarModal';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import PDFPrescriptionComponent from './components/PDFPrescriptionComponent';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TelegramIcon from '@mui/icons-material/Telegram';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send'; import CustomTextField from '../Formulario/Components/CustomTextField';
import { IComment } from '@/domain/models/observaciones.model';
import { formatearFechaEsp } from '@/utilities/get_String_from_Date';


import { GlobalContext } from '@/context/GlobalContext';
import { VerificarModal } from './components/Modals/VerificarModal';
import { CancelVerificarModal } from './components/Modals/CancelVerificarModal';

import BarReporteNPT from './components/BarReporteNPT/BarReporteNPT';
import BarReporteQF from './components/BarReporteQF/BarReporteQF';
import BarReporteQF_Calidad from './components/BarReporteQF_Calidad/BarReporteQF_Calidad';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';



export interface ReportePrescripcionViewProps { }

const ReportePrescripcionView: React.FC<ReportePrescripcionViewProps> = () => {

	const { getPrescriptionsByNumber, loadingSave, reporte, saveComments } = useContext(ReportesContext)
	const { getMeRol } = useContext(GlobalContext)

	const [openDrawer, setOpenDrawer] = useState(false);

	const [rol, setRol] = useState('');

	useEffect(() => {
		getPrescriptionsByNumber();
		const rol = getMeRol()[0];
		setRol(rol)
		console.log('ROLLLL:', getMeRol()[0])
	}, [])


	const [isNew, setIsNew] = useState<boolean>(false);
	const [newObs, setnewObs] = useState<string>();

	// 
	return (
		<>
			{(rol !== '')
				&& <>
					<Card sx={{ display: { xs: 'none', md: 'flex' }, position: 'fixed', width: '100%', bottom: '40px', left: '0px' }} >
						{(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
							? <BarReporteNPT />
							: (getMeRol()[0] === RolUsersKeysEnum.preparador)
								? <BarReporteQF />
								: <BarReporteQF_Calidad />
						}
					</Card>

					<VerificarModal />
					<CancelVerificarModal />

					<>
						<Stack
							direction={'row'}
							display='flex'
							justifyContent='space-between'
							width='100%'
							padding={'20px'}>

							<Typography sx={{ fontWeight: 700, fontSize: { xs: '20px', md: '32px' } }}>Reporte prescripción</Typography>
							<Typography sx={{ fontWeight: 700, fontSize: { xs: '20px', md: '32px' } }}>Orden: {reporte?.no_orden}</Typography>

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


								<Stack direction="column" overflow={'scroll'} width={'100%'}>

									<Typography color={'#372fc6'} fontSize={'16px'} fontWeight={700} gutterBottom>
										Observaciones y Cambios
									</Typography>
									<Stack direction={'row'} paddingY={2}>
										<CustomButton
											// disabled={!valOKAlert}
											onClick={
												(!isNew)
													? () => { setIsNew(true) }
													: () => {
														const newComment: IComment = {
															prescriptionId: reporte?._id!,
															comentario: newObs!,
															// estado:' ',
															// estado: StatePrescriptionKeysEnum.pendiente,
														}
														saveComments(newComment)
														setIsNew(false)
													}
											}
											width={220}
											height={50}
											text={(isNew) ? 'Guardar' : 'Crear Observacion'}
											sx={{ borderRadius: '10px' }}
											color={colorsKarbono.primary}
											textColor='white'
											endIcon={(!isNew) ? <SendIcon sx={{ color: 'white' }} /> : <></>}
										/>
									</Stack>

									{isNew
										&& <Stack direction={'row'} padding={4} >
											<CustomTextField
												onChange={(e) => setnewObs(e.target.value)}
												id='Observacion'
												label='Agrega una observación o comentario.'
												type='text'
												value={newObs}
											// defaulValue={numIden!}
											// helperText={messageErrorNumIden}
											/>
										</Stack>
									}

									<Stack direction={'row'} padding={1} >

										<Stack direction={'column'} spacing={3} width={'100%'}>
											{reporte?.observaciones?.map((item, index) => {
												return (
													<ContainerComments
														key={index}
														user={item.usuario}
														rol={item.rol![0]}
														date={formatearFechaEsp(item.fecha!.toString())}
														content={item.comentario}
													/>

												)
											})
											}
										</Stack>
									</Stack>
								</Stack>

								{/* Otro contenido del Drawer */}
							</Stack>
						</Drawer>

						<Grid container sx={{ marginTop: '30px', marginBottom: { xs: '0px', md: '30px' } }} paddingBottom={'100px'} spacing={{ xs: 0, md: 2 }}>

							<Grid item xs={12} md={8} paddingX='15px'>
								<PDFPrescriptionComponent reporte={reporte} loading={loadingSave} />
							</Grid>


							<Grid item xs={12} md={4} display={{ xs: 'none', md: 'block' }} paddingBottom={{ xs: '150px', md: '0' }}>
								<Card>
									<Stack paddingX='15px' direction={'column'} minHeight={'50vh'} height={'100%'} overflow={'scroll'} alignItems={'center'}>
										<Typography color={'#372FC6'} sx={{ fontWeight: 600, fontSize: '20px' }}>Observaciones y Cambios.</Typography>

										<Stack width={'100%'} direction={'column'} minHeight={200} justifyContent={'end'}>


											<Stack direction={'row'} justifyContent={'flex-end'} paddingY={2}>
												<CustomButton
													// disabled={!valOKAlert}
													onClick={
														(!isNew)
															? () => { setIsNew(true) }
															: () => {
																const newComment: IComment = {
																	prescriptionId: reporte?._id!,
																	comentario: newObs!,
																	// estado:' ',
																	// estado: StatePrescriptionKeysEnum.pendiente,
																}
																saveComments(newComment)
																setIsNew(false)
															}
													}
													width={220}
													height={50}
													text={(isNew) ? 'Guardar' : 'Crear Observacion'}
													sx={{ borderRadius: '10px' }}
													color={colorsKarbono.primary}
													textColor='white'
													endIcon={(!isNew) ? <SendIcon sx={{ color: 'white' }} /> : <></>}
												/>
											</Stack>

											{isNew
												&& <Stack direction={'row'} padding={4} >
													<CustomTextField
														onChange={(e) => setnewObs(e.target.value)}
														id='Observacion'
														label='Agrega una observación o comentario.'
														type='text'
														value={newObs}
													// defaulValue={numIden!}
													// helperText={messageErrorNumIden}
													/>
												</Stack>
											}

											<Stack direction={'row'} padding={1} >

												<Stack direction={'column'} spacing={3} width={'100%'}>
													{reporte?.observaciones?.map((item, index) => {
														return (
															<ContainerComments
																key={index}
																user={item.usuario}
																rol={item.rol![0]}
																date={formatearFechaEsp(item.fecha!.toString())}
																content={item.comentario}
															/>
															// <CustomTextField
															// 	key={index}
															// 	// onChange={handleNumIden}
															// 	id='Observacion'
															// 	label='Observaciones'
															// 	type='text'
															// 	value={item}
															// // defaulValue={numIden!}
															// // helperText={messageErrorNumIden}
															// />
														)
													})
													}
												</Stack>
											</Stack>
										</Stack>

									</Stack>
								</Card>
							</Grid>
							{/* <BannerOrdenar /> */}


							<Stack
								overflow={'scroll'}
								direction={'column'}
								display={{ xs: 'flex', md: 'none' }}
								paddingBottom={{ xs: '150px', md: '0' }}>


								{(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
									? <BarReporteNPT />
									: (getMeRol()[0] === RolUsersKeysEnum.preparador)
										? <BarReporteQF />
										: <BarReporteQF_Calidad />
								}

							</Stack>
						</Grid >
					</>
				</>}
		</>
	)

};

export default ReportePrescripcionView;

export interface ContainerCommentsProps {
	user?: string,
	rol?: string,
	date?: string,
	content?: string
}

export const ContainerComments: React.FC<ContainerCommentsProps> = ({ user, rol, date, content }) => {
	return (

		<Stack direction={'column'} alignContent={'center'}
			sx={{
				border: '1px solid #ccc',
				borderRadius: '8px',
				padding: '4px',
				width: '100%',
			}}>

			<Typography color={'black'} sx={{ fontWeight: 500, fontSize: '14px', letterSpacing: '3%', lineHeight: '20px' }}>
				{user}-{rol}-{date}
			</Typography>

			<Typography color={' #656474'} sx={{ fontWeight: 500, fontSize: '14px', letterSpacing: '3%', lineHeight: '20px' }}>
				{content}
			</Typography>
		</Stack>
	)
}