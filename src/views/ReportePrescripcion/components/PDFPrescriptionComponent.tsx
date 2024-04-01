
import { IPrescriptions } from '@/domain/models/prescriptions.model'
import { typographyKarbono } from '@/themes/typography'
import { Grid, Typography, Box, Stack, Skeleton, Divider, Card } from '@mui/material'
import React from 'react'
import ReportesMacronutrientes from './ReportesMacronutrientes'
import ReportesMicronutrientes from './ReportesMicronutrientes'
import ReportesParametros from './ReportesParametros'
import ReportesSubtotales from './ReportesSubtotales'
import { alertVelInfucion } from '../data/alertParams'

export interface PDFPrescriptionComponentProps {
    reporte: IPrescriptions | undefined
    loading: boolean | undefined
    print?: boolean
}

const PDFPrescriptionComponent: React.FC<PDFPrescriptionComponentProps> = ({ reporte, loading, print = false }) => {

    return (
        <>
            {<Stack id='reporte_view' direction={'column'}
                maxWidth={'1500px'}
                minWidth={{ xs: print ? '1000px' : '100%', md: '100%' }}
                overflow={'scroll'}
                spacing={5} >

                <Stack>
                    <Card>
                        <Stack id='reporte_view' direction={'row'} width={'100%'} overflow={'scroll'} justifyContent={'space-between'} paddingX={'5px'}>
                            {/* <Grid container paddingBottom={5}> */}

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Institucion:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.ips}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Servicio:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.servicio}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Nombre:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.nombre_paciente}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            {/* <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Peso:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.peso}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} /> */}

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>identificación:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.no_identificacion}</Typography>
                            </Stack>

                            {/* </Grid> */}
                        </Stack>
                    </Card>

                    <Card>
                        <Stack id='reporte_view' direction={'row'} width={'100%'} overflow={'scroll'} justifyContent={'space-between'} paddingX={'5px'}>
                            {/* <Grid container paddingBottom={5}> */}

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Peso (kg):</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.peso}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Edad(años):</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.edad}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Tiempo de infusión (h):</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.tiempo_infusion}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />
                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Velocidad de infusión:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{alertVelInfucion(reporte!).toFixed(2)}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Volumen(ml):</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.volumen}</Typography>
                            </Stack>
                            <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                            <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                                <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Overfill:</Typography>
                                <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.overfill}</Typography>
                            </Stack>

                            {/* </Grid> */}
                        </Stack>
                    </Card>
                </Stack>

                <Stack width={'100%'} paddingBottom={{ xs: '0', md: '50px' }} spacing={5} >
                    <Card sx={{ padding: '10px' }}>
                        <ReportesMacronutrientes loadingSave={loading} reporte={reporte} />
                    </Card>
                    <Card sx={{ padding: '10px' }}>
                        <ReportesMicronutrientes loadingSave={loading} reporte={reporte} />
                    </Card>
                    <Card sx={{ padding: '10px' }}>
                        <ReportesSubtotales loadingSave={loading} reporte={reporte} />
                    </Card>
                    {/* <Divider orientation='horizontal' style={{ width: '50%' }} /> */}
                    {/* <Divider orientation='horizontal' style={{ width: '50%' }} /> */}
                    <Card sx={{ padding: '10px' }}>
                        <ReportesParametros loadingSave={loading} reporte={reporte} />
                    </Card>
                    {/* <Divider orientation='horizontal' style={{ width: '50%' }} /> */}
                </Stack>

                <Stack direction={'row'} width={'100%'} paddingBottom={{ xs: '0', md: '50px' }} spacing={5} justifyContent={'center'} >

                    <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Prescriptor:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.user.nombre_apellidos}</Typography>
                    </Stack>

                    <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Registro Médico:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.no_identificacion}</Typography>
                    </Stack>

                    <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Teléfono:</Typography>
                        <Typography sx={{ color: 'black', fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.user.telefono}</Typography>
                    </Stack>
                </Stack>



            </Stack >}
        </>
    )
}

export default PDFPrescriptionComponent
