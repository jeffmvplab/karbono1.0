
import { IPrescriptions } from '@/domain/models/prescriptions.model'
import { typographyKarbono } from '@/themes/typography'
import { Grid, Typography, Box, Stack, Skeleton, Divider } from '@mui/material'
import React from 'react'
import ReportesMacronutrientes from './ReportesMacronutrientes'
import ReportesMicronutrientes from './ReportesMicronutrientes'
import ReportesParametros from './ReportesParametros'

export interface PDFPrescriptionComponentProps {
    reporte:   IPrescriptions|undefined
    loading:boolean|undefined
}

const PDFPrescriptionComponent: React.FC<PDFPrescriptionComponentProps>  = ({reporte,loading}) => {

    return (
        <>
           { <Stack  id='reporte_view' direction={'column'} width={'100%'} >

                <Grid container paddingBottom={5}>

                    <Grid item display={'flex'} sx={{ width: '100px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '10px 0 0 0' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>IPS:{reporte?.ips}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '200px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0 0 0 0' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Servicio:{reporte?.servicio}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '400px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0 0' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Nombres y Apellidos:{reporte?.nombre_paciente}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                        {/* <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '100%', textAlign: 'center',fontFamily: typographyKarbono.outfit }}>Apellidos:</Typography>
       <Divider orientation='vertical' style={{ height: '60%' }} /> */}
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '100px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0 0' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '15px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Peso:{reporte?.peso}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0 0' }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Identificación:{reporte?.no_identificacion}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Infusión continua por (hr):{reporte?.tiempo_infusion}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Volumen de purga:{reporte?.purga}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Vía de administración:{reporte?.via_administracion}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px  0px', }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Volumen total NPT + purga:{(reporte?.volumen! + reporte?.purga!)}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 0px 0px', }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Volumen total NPT:{reporte?.volumen}</Typography>
                        <Divider orientation='vertical' style={{ height: '60%' }} />
                    </Grid>

                    <Grid item display={'flex'} sx={{ width: '150px', backgroundColor: '#F0F0F0', height: '50px', alignItems: 'center', borderRadius: '0px 0px 10px 0px', }}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '13px', paddingLeft: '10px', width: '100%', textAlign: 'center', fontFamily: typographyKarbono.outfit }}>Flujo metabólico:{reporte?.flujo_metabolico}</Typography>

                    </Grid>

                </Grid>

                <Stack width={'100%'} paddingBottom={'50px'} spacing={5}>
                    <ReportesMicronutrientes loadingSave={loading} reporte={reporte} />
                    <Divider orientation='horizontal' style={{ width: '50%' }} />

                    <ReportesMacronutrientes loadingSave={loading} reporte={reporte} />
                    <Divider orientation='horizontal' style={{ width: '50%' }} />

                    <ReportesParametros loadingSave={loading} reporte={reporte} />
                    <Divider orientation='horizontal' style={{ width: '50%' }} />
                </Stack>

            </Stack >}
        </>
    )
}

export default PDFPrescriptionComponent
