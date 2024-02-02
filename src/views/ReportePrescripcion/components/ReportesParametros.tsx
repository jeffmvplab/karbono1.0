import Macronutrientes from '@/views/Formulario/Components/Macronutrientes';
import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ReportesContext } from '../context/ReportesContext';
import { getDextrosa, getAminoacidos, getLipidos, getOmegaven, getDipeptiven, getVolTotal, getVelinfusion, getOsmolaridad, getCalTotales, getCalTotalesKgDia, getGramosTotalesNitro, getCaloriasTotalesProteicas, getCaloriasTotalesProteicasKg, getCaloriasNoProteicasCHOS, getCaloriasNoProteicasLIPIDOS, getCaloriasNoProteicasKg, getRelacionCalNoProteicasN, getRelacionCalNoProteicasAminoacidos, getConcentracionDeCHOS, getConcentracionDeProteinas, getConcentracionDeLipidos } from '../data/functionsParams';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

export interface ReportesParametrosProps {
    reporte: IPrescriptions | undefined
    loadingSave: boolean | undefined
}


const ReportesParametros : React.FC<ReportesParametrosProps> = ({ reporte, loadingSave }) => {

    const [Parametros, setParametros] = useState([
        'Volument total (ml):',
        'Velocidad de infusión (ml/hr):',
        'Osmolaridad (mOsm/lt)',
        'Vía de administración:',
        'Calorías Totales:',
        'Calorías Totales/kg/día:',
        'Gramos totales de Nitrógeno:',
        'Calorías Totales Protéicas:',
        'Calorías Totales Protéicas/kg (kcal/kg)',
        'Calorías No Protéicas CHO-S:',
        'Calorías No Protéicas LÍPIDOS:',
        'Calorías No Protéicas/kg:',
        'Relación Cal No Protéicas/g N:',
        'Relación: Cal No Protéicas/g Aminoacidos=',
        'Concentración de CHO-S (%):',
        'Concentración de Proteína (%):',
        'Concentración de Lípidos (%):'
    ]);

    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'}>
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='50%' direction={'row'} justifyContent={'space-between'}>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left' }}>Parametros</Typography>
                        <Box sx={{ justifyContent: 'start' }} >
                            <ul style={{}}>
                                {Parametros.map(lista => {
                                    return <li style={{ listStyleType: 'none' }} key={lista}><Typography>{lista}</Typography></li>
                                })}
                            </ul>
                        </Box>
                    </Stack>
                    {/* </Grid>
                <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Valores</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getVolTotal(reporte!).toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVelinfusion(reporte!).toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getOsmolaridad(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {reporte?.via_administracion}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalTotales(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalTotalesKgDia(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getGramosTotalesNitro(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCaloriasTotalesProteicas(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCaloriasTotalesProteicasKg(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCaloriasNoProteicasCHOS(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCaloriasNoProteicasLIPIDOS(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCaloriasNoProteicasKg(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getRelacionCalNoProteicasN(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getRelacionCalNoProteicasAminoacidos(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getConcentracionDeCHOS(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getConcentracionDeProteinas(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getConcentracionDeLipidos(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}


                        </Stack>
                    </Stack>
                    {/* <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Requerimiento</Typography>
                    </Stack> */}

                    {/* <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Volumen</Typography>
                    </Stack> */}
                    {/* </Grid> */}
                </Stack>

            </Grid>
        </>
    )
}

export default ReportesParametros
