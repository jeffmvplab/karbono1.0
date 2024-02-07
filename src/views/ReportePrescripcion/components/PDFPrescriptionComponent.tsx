
import { IPrescriptions } from '@/domain/models/prescriptions.model'
import { typographyKarbono } from '@/themes/typography'
import { Grid, Typography, Box, Stack, Skeleton, Divider, Card } from '@mui/material'
import React from 'react'
import ReportesMacronutrientes from './ReportesMacronutrientes'
import ReportesMicronutrientes from './ReportesMicronutrientes'
import ReportesParametros from './ReportesParametros'

export interface PDFPrescriptionComponentProps {
    reporte: IPrescriptions | undefined
    loading: boolean | undefined
}

const PDFPrescriptionComponent: React.FC<PDFPrescriptionComponentProps> = ({ reporte, loading }) => {

    return (
        <>
            {<Stack id='reporte_view' direction={'column'} width={'100%'} spacing={5} >

                <Card>
                    <Stack id='reporte_view' direction={'row'} width={'100%'} overflow={'scroll'} justifyContent={'space-between'} paddingX={'5px'}>
                        {/* <Grid container paddingBottom={5}> */}

                        <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Institucion:</Typography>
                            <Typography sx={{ color: 'black', fontWeight: 400, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.ips}</Typography>
                        </Stack>
                        <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                        <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Servicio:</Typography>
                            <Typography sx={{ color: 'black', fontWeight: 400, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.servicio}</Typography>
                        </Stack>
                        <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                        <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Nombre:</Typography>
                            <Typography sx={{ color: 'black', fontWeight: 400, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.nombre_paciente}</Typography>
                        </Stack>
                        <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                        <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Peso:</Typography>
                            <Typography sx={{ color: 'black', fontWeight: 400, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.peso}</Typography>
                        </Stack>
                        <Divider orientation='vertical' style={{ height: '30px', paddingLeft: '5px' }} />

                        <Stack direction={'row'} display={'flex'} sx={{ alignItems: 'center' }}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>identificación:</Typography>
                            <Typography sx={{ color: 'black', fontWeight: 400, fontSize: '13px', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>{reporte?.no_identificacion}</Typography>
                        </Stack>

                        {/* </Grid> */}
                    </Stack>
                </Card>

                <Stack width={'100%'} paddingBottom={{xs:'0',md:'50px'}} spacing={5} >
                    <Card sx={{padding:'10px'}}>
                        <ReportesMicronutrientes loadingSave={loading} reporte={reporte} />
                    </Card>
                    {/* <Divider orientation='horizontal' style={{ width: '50%' }} /> */}
                    <Card sx={{padding:'10px'}}>
                        <ReportesMacronutrientes loadingSave={loading} reporte={reporte} />
                    </Card>
                    {/* <Divider orientation='horizontal' style={{ width: '50%' }} /> */}
                    <Card sx={{padding:'10px'}}>
                        <ReportesParametros loadingSave={loading} reporte={reporte} />
                    </Card>
                    {/* <Divider orientation='horizontal' style={{ width: '50%' }} /> */}
                </Stack>

            </Stack >}
        </>
    )
}

export default PDFPrescriptionComponent
