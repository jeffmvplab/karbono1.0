import { Box, Container, Divider, Grid, Stack, TextField, Typography, styled } from "@mui/material";
import Image from 'next/image'
import { colorsKarbono } from "@/themes/colors";
import BarEtiqueta from "../ReportePrescripcion/components/BarEtiqueta/BaEtiqueta";
import { useContext, useEffect, useState } from "react";
import { ReportesContext } from "../ReportePrescripcion/context/ReportesContext";
import { convertirFecha, convertirFechaLote } from "@/utilities/get_String_from_Date_Esp";
import { correccionPurga, getAgua, getAminoacidos, getCalTotales, getCalTotalesKgDia, getCalcio, getCaloriasNoProteicasCHOS, getCaloriasNoProteicasKg, getCaloriasNoProteicasLIPIDOS, getCaloriasTotalesProteicas, getCaloriasTotalesProteicasKg, getConcentracionDeCHOS, getConcentracionDeLipidos, getDextrosa, getDipeptiven, getFosforo, getGramosTotalesNitro, getLipidos, getMagnesio, getOligoelementos, getOmegaven, getOsmolaridad, getPotacio, getRelacionCalNoProteicasAminoacidos, getRelacionCalNoProteicasN, getSodio, getSoluv_Vit, getVelinfusion, getVitHidroSolubles, getVitLiposSolubles, getVit_C, getVolTotal, peso_teorico, tipo_bolsa } from "../ReportePrescripcion/data/functionsParams";
import { alertFactorDePrecipitacion } from "../ReportePrescripcion/data/alertParams";
import { ContainerText } from "./components/ContainerText";


export interface EtiquetaViewProps { }

const EtiquetaView: React.FC<EtiquetaViewProps> = () => {

	const { getPrescriptionsByNumber, loadingSave, reporte } = useContext(ReportesContext)

	useEffect(() => {
		getPrescriptionsByNumber();
		// console.log('ROLLLL:', getMeRol()[0])
	}, [])

	const [pesoReal, setPesoReal] = useState(0);
	const [hora, setHora] = useState('');
	const [caducidad, setCaducidad] = useState('');
	const [instalado, setInstalado] = useState('');

	const fechaActual = new Date();
	fechaActual.setDate(fechaActual.getDate() + 2);
	const fechaConAdelantoISOString = fechaActual.toISOString();

	// const CustomTextField = styled(TextField)({
	// 	// '& .MuiInput-underline:before': {
	// 	// 	borderBottom: 'none',
	// 	// },
	// 	'& .MuiInput-underline:after': {
	// 		borderBottom: 'none',
	// 	},
	// });
	return (
		<Stack
			// width={{ xs: '1281px', sm: '100%' }}
			// height={{ xs: '1925px', sm: '100%' }}
			direction={'column'}
			overflow={'scroll'}
			paddingBottom={20}
			alignItems={{ xs: 'normal', sm: 'center' }}
		>

			<Box
				// maxWidth="100vw"
				id='etiqueta_view'
				sx={{
					width: '1281px',
					height: '1925px',
					paddingX: '10px',
					// marginX:'50px',
					backgroundColor: '#ccc',
					borderRadius: '10px',
					display: 'block',
					alignItems: 'center',
					justifyContent: 'center',
					paddingY: '30px'
				}}
			>
				<Stack
					display={'block'}
					paddingX={6}
					borderRadius={2}
					bgcolor={'white'}
					width={'100%'}
					height={'100%'}
					direction={'column'}
					spacing={2}
				>
					{//////////////Fecha-Version-etc///////////////////////////////////////////////
					}
					<Stack paddingTop={3} direction={'row'} justifyContent={'end'} spacing={3}>
						<Typography>
							{`Versión 4,Fecha de aprobación:${convertirFecha(reporte?.updatedAt)}`}
						</Typography>
						<Typography>
							Plantilla OyM-5605
						</Typography>
					</Stack>

					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>

							<Grid item xs={3}>
								{/*  */}
								<Stack
									height={'100%'}
									direction={'column'}
									justifyContent={'center'}>
									<Image
										src='/assets/1.png'
										width={240}
										height={50}
										alt=''
										style={{ marginTop: '5px', alignItems: 'center', }}
									/>
								</Stack>
							</Grid>

							<Grid item xs={4}>

							</Grid>
							<Grid item xs={2}>
								<Stack
									height={'100%'}
									direction={'column'}
									justifyContent={'end'}>
									<ContainerText title="Fecha" value={convertirFecha(new Date())} />
								</Stack>
							</Grid>


							<Grid item xs={3}>
								<Stack direction={'column'} spacing={2}>
									<ContainerText titleSize="24px" title="Lote" value={`NPT${convertirFechaLote(new Date())}-${reporte?.no_identificacion}`} />
									<ContainerText title="Número ID" value={reporte?.no_identificacion!} />
								</Stack>
							</Grid>

						</Grid>
					</Stack>
					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}

					<Divider sx={{ paddingY: 1 }} />

					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>

							<Grid item xs={5}>
								<Stack direction={'column'}>
									<ContainerText title="Institución" value={reporte?.ips!} />
								</Stack>
							</Grid>

							<Grid item xs={5}>
								<Stack direction={'column'}>
									<ContainerText title="Apellidos y nombre" value={reporte?.nombre_paciente!} />
								</Stack>
							</Grid>


							<Grid item xs={3}>
								<Stack direction={'column'}>
									<ContainerText title={`Edad (${reporte?.tipo_edad})`} value={`${reporte?.edad!}`} />
								</Stack>
							</Grid>

						</Grid>
					</Stack>
					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>

							<Grid item xs={4}>
								<Stack direction={'column'}>
									<ContainerText title="Servicio" value={reporte?.servicio!} />
								</Stack>
							</Grid>

							<Grid item xs={4}>
								<Stack direction={'column'}>
									<ContainerText title="Cama" value={reporte?.cama!} />
								</Stack>
							</Grid>


							<Grid item xs={4}>
								<Stack direction={'column'}>
									<ContainerText title="Ubicación" value={reporte?.ubicacion!} />
								</Stack>
							</Grid>

						</Grid>
					</Stack>
					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Divider sx={{ paddingY: 1 }} />
					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>

							<Grid item xs={6}>
								<Stack direction={'column'}>
									<ContainerText title="Velocidad de infunsión" value={`${getVelinfusion(reporte!).toFixed(2)}`} />
								</Stack>
							</Grid>

							<Grid item xs={6}>
								<Stack direction={'column'}>
									<ContainerText title="Infusión continua por" value={`${reporte?.tiempo_infusion!}`} />
								</Stack>
							</Grid>

						</Grid>
					</Stack>

					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>

							<Grid item xs={4}>
								<Stack direction={'column'}>
									<ContainerText title="Volumen (mL)" value={`${reporte?.volumen!}`} />
								</Stack>
							</Grid>

							<Grid item xs={4}>
								<Stack direction={'column'}>
									<ContainerText title="Overfill" value={`${reporte?.overfill!}`} />
								</Stack>
							</Grid>


							<Grid item xs={4}>
								<Stack direction={'column'}>
									<ContainerText title="Peso (Kg)" value={`${reporte?.peso!}`} />
								</Stack>
							</Grid>

						</Grid>
					</Stack>
					{/* <Divider sx={{ paddingY: 1 }} /> */}

					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Stack paddingTop={1} direction={'row'} justifyContent={'end'} paddingY={2}>

						<Grid container spacing={2}>

							<Grid item xs={6}>
								<Box
									sx={{
										borderRadius: 3,
										borderColor: '#EDF1F1',
										borderWidth: 3,
										borderStyle: 'solid',
									}}
								>
									<Stack width={'100%'} direction={'column'} alignItems={'start'} padding={2} spacing={1}>

										<Stack width={'100%'} direction={'row'} justifyContent={'space-between'} paddingY={2}>
											<Typography fontSize='16px' color={colorsKarbono.primary} fontWeight={700} textAlign={"center"} >
												COMPONENTES
											</Typography>
											<Typography fontSize='16px' color={colorsKarbono.primary} fontWeight={700}>
												VOLUMEN (ml)
											</Typography>
										</Stack>

										<ContainerText isUpper title="OMEGAVEN 10%" value={`${getOmegaven(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.lipidos!}`} value={`${getLipidos(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="GLUTAMINA DIPEPTIDO 20%" value={`${getDipeptiven(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.aminoacidos!}`} value={`${getAminoacidos(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="DEXTROSA 50%" value={`${getDextrosa(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="AGUA ESTERIL" value={`${getAgua(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.fosfato!}`} value={`${getFosforo(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.elementos_traza!}`} value={`${getOligoelementos(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="CLORURO DE SODIO 2 MEQ/ML" value={`${getSodio(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="CLORURO DE POTACIO 2 MEQ/ML" value={`${getPotacio(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.magnesio!}`} value={`${getMagnesio(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="SOLUVIT_VITALIPID" value={`${getSoluv_Vit(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title={(reporte?.tipo_paciente === 'Adulto')
											? 'VITALIPID ADULT'
											: 'VITALIPID INFANT'} value={`${getVitLiposSolubles(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.vit_hidrosolubles!}`} value={`${getVitHidroSolubles(reporte!).conPurga.toFixed(2)}`} />
										<ContainerText isUpper title="VITAMINA C" value={`${getVit_C(reporte!).conPurga}`} />
										<ContainerText isUpper title="ACIDO FOLICO" value={`${reporte?.acido_folico}`} />
										<ContainerText isUpper transform="uppercase" title={`${reporte?.calcio!}`} value={`${getCalcio(reporte!).conPurga.toFixed(2)}`} />

									</Stack>
								</Box>
							</Grid>

							<Grid item xs={6}>
								<Box
									sx={{
										borderRadius: 3,
										borderColor: '#EDF1F1',
										borderWidth: 3,
										borderStyle: 'solid',
									}}
								>
									<Stack width={'100%'} direction={'column'} alignItems={'start'} padding={3} spacing={1}>
										<Stack width={'100%'} direction={'row'} justifyContent={'space-between'} paddingY={2}>
											<Typography fontSize='16px' color={colorsKarbono.primary} fontWeight={700} textAlign={"center"} >
												PARÁMETROS NUTRICIONALES
											</Typography>
											<Typography fontSize='16px' color={colorsKarbono.primary} fontWeight={700} paddingRight={3} >
												(ml)
											</Typography>
										</Stack>
										<ContainerText isUpper title="Calorías Totales" value={`${getCalTotales(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Calorías Totales/kg/día" value={`${getCalTotalesKgDia(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Gramos totales de Nitrógeno" value={`${getGramosTotalesNitro(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Calorías Totales Protéicas" value={`${getCaloriasTotalesProteicas(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Calorías Totales Protéicas/kg" value={`${getCaloriasTotalesProteicasKg(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Calorías No Protéicas CHO´S" value={`${getCaloriasNoProteicasCHOS(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Calorías No Protéicas LÍPIDOS" value={`${getCaloriasNoProteicasLIPIDOS(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Calorías No Protéicas/kg" value={`${getCaloriasNoProteicasKg(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Relación Cal No Protéicas/g N" value={`${getRelacionCalNoProteicasN(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Relación: Cal No Protéicas/g AA" value={`${getRelacionCalNoProteicasAminoacidos(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Concentración de CHO`S (%)" value={`${getConcentracionDeCHOS(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Concentración de Lípidos (%)" value={`${getConcentracionDeLipidos(reporte!).volumen.toFixed(2)}`} />
										<ContainerText isUpper title="Subtotal" value={`${(getVolTotal(reporte!) - getAgua(reporte!).volumen).toFixed(2)}`} />
										<ContainerText isUpper title="VOLUMEN TOTAL (mL)" value={`${getVolTotal(reporte!).toFixed(2)}`} />

										<Divider sx={{ paddingY: 1 }} />
										<Box width={'100%'} paddingY={2}>
											<ContainerText isUpper title="TIPO DE BOLSA" value={tipo_bolsa(reporte?.volumen!)} />
										</Box>

									</Stack>
								</Box>
							</Grid>
						</Grid>
					</Stack>
					{///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}


					<Stack paddingTop={1} direction={'row'} paddingY={2}>
						<Box
							sx={{
								borderRadius: 3,
								borderColor: '#EDF1F1',
								borderWidth: 3,
								borderStyle: 'solid',
								padding: 3,
								width: '100%',
							}}>


							<Grid container spacing={10}>
								<Grid item xs={6}>

									<Typography fontSize='16px' color={colorsKarbono.primary} fontWeight={700} textAlign={"start"} paddingY={2}>
										PARÁMETROS FARMACÉUTICOS
									</Typography>

									<Box width={'100%'} paddingY={1}>

										<ContainerText isUpper title="Osmolaridad (mOsm/L)" value={`${getOsmolaridad(reporte!).volumen.toFixed(2)}`} />
									</Box>
									<Box width={'100%'} paddingY={1}>
										<ContainerText isUpper title="Factor de precipitación" value={`${alertFactorDePrecipitacion(reporte!).alert}`} />
									</Box>
								</Grid>

								<Grid item xs={6}>
									<Box width={'100%'} paddingY={7}>
										<ContainerText isUpper title="Vía de administración" value={`${reporte?.via_administracion!}`} />
									</Box>
								</Grid>
							</Grid>
						</Box>

					</Stack>

					{///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Stack paddingTop={1} direction={'row'}>
						<Box
							sx={{
								borderRadius: 3,
								borderColor: '#EDF1F1',
								borderWidth: 3,
								borderStyle: 'solid',
								padding: 3,
								width: '100%',
							}}>

							<Stack direction={'row'}>
								<Grid container spacing={10}>
									<Grid item xs={6}>
										<ContainerText isUpper title="REVISA:" color={colorsKarbono.primary} value={reporte?.controlador_de_calidad.nombre_apellidos ? `${reporte?.controlador_de_calidad!.nombre_apellidos}` : '-'} />
									</Grid>
									<Grid item xs={6}>
										<ContainerText isUpper title="PREPARA:" color={colorsKarbono.primary} value={reporte?.preparador.nombre_apellidos ? `${reporte?.preparador!.nombre_apellidos}` : '-'} />
									</Grid>
								</Grid>
							</Stack>

							<Divider sx={{ paddingY: 1 }} />

							<Grid container spacing={10} paddingY={0}>
								<Grid item xs={6}>
									<Stack height={'100%'} direction={'column'} justifyContent={'end'}>

										<Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
											<Typography width={'100%'} fontSize='14px' fontWeight={600} textAlign={"start"} >
												Peso Real:
											</Typography>

											<TextField
												sx={{
													background: '#EDF1F1',
													borderRadius: '12px',
													'& .MuiInput-underline:before': {
														borderBottom: 'none',
													},
													'& .MuiInput-underline:after': {
														borderBottom: 'none',
													},
												}}
												variant="standard"
												value={pesoReal}
												onChange={(e) => setPesoReal(parseInt(e.target.value))}
												type="number"
											/>

										</Stack>
									</Stack>
								</Grid>

								<Grid item xs={6}>
									<Stack height={'100%'} direction={'column'} justifyContent={'end'} spacing={1}>
										<Box width={'100%'}>
											<ContainerText isUpper title="D.E +3%:" color={colorsKarbono.primary} value={`${(peso_teorico(reporte!) + (peso_teorico(reporte!) * 3 / 100)).toFixed(2)}`} />
										</Box>
										<Box width={'100%'}>
											<ContainerText isUpper title="D.E -3%:" color={colorsKarbono.primary} value={`${(peso_teorico(reporte!) - (peso_teorico(reporte!) * 3 / 100)).toFixed(2)}`} />
										</Box>
										<Box width={'100%'}>
											<ContainerText isUpper title="Peso Teórico (g):" color={colorsKarbono.primary} value={`${peso_teorico(reporte!).toFixed(2)}`} />
										</Box>
									</Stack>
								</Grid>
							</Grid>
						</Box>


					</Stack>

					<Typography
						// bgcolor={'red'}
						fontSize='16px'
						// paddingY={2}
						width={'100%'}
						height={'20px'}
						style={{ transform: 'rotate(-90deg)', position: 'relative', right: '-605px', top: '-520px' }}
					>
						Conservar en cadena de frio y protegidos de la luz
					</Typography>


					<Grid container width={'80%'} paddingLeft={1} direction={'row'} justifyContent={'space-between'}>

						<Grid xs={4} item>
							<Stack direction={'row'} alignItems={'center'} paddingRight={2}>
								<Typography width={'100%'} fontSize='14px' fontWeight={700} textAlign={"start"} paddingY={2}>
									Hora de preparación:
								</Typography>
								<TextField
									sx={{ width: '100%' }}
									variant="standard"
									value={hora}
									onChange={(e) => setHora(e.target.value)}
									type="text"
								/>
							</Stack>
						</Grid>
						<Grid xs={4} item>
							<Stack direction={'row'} alignItems={'center'} paddingRight={2}>
								<Typography width={'100%'} fontSize='14px' fontWeight={700} textAlign={"start"} paddingY={2}>
									Fecha caducidad:
								</Typography>
								<Typography sx={{ textDecoration: 'underline' }} width={'100%'} fontSize='14px' fontWeight={700} textAlign={"start"} paddingY={2}>
									{convertirFecha(fechaConAdelantoISOString)}
								</Typography>
								{/* <TextField
									sx={{ width: '100%' }}
									variant="standard"
									value={caducidad}
									onChange={(e) => setCaducidad(e.target.value)}
									type="text"
								/> */}
							</Stack>
						</Grid>
						<Grid xs={4} item>
							<Stack direction={'row'} alignItems={'center'} paddingRight={2}>
								<Typography width={'100%'} fontSize='14px' fontWeight={700} textAlign={"start"} paddingY={2}>
									Instalado por:
								</Typography>
								<TextField
									sx={{ width: '100%' }}
									variant="standard"
									value={instalado}
									onChange={(e) => setInstalado(e.target.value)}
									type="text"
								/>
							</Stack>
						</Grid>
					</Grid>

				</Stack>
			</Box >


			<BarEtiqueta idDescargar='etiqueta_view' title="Etiqueta" />

		</Stack >
	)

};

export default EtiquetaView;

