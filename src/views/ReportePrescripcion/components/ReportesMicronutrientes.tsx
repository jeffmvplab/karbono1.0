import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ReportesContext } from '../context/ReportesContext';
import { IParamNumeric, getAgua, getAminoacidos, getCalcio, getDextrosa, getDipeptiven, getFosforo, getLipidos, getMagnesio, getOmegaven, getPotacio, getSodio, getVit_C } from '../data/functionsParams';

const ReportesMicronutrientes = () => {


    const [Micronutrientes, setMicronutrientes] = useState([
        'Sodio (req./ml):',
        'Potasio (req./ml):',
        'Calcio (req./ml):',
        'Fósforo (req./ml)',
        'Magnesio (req./ml):',
        'Oligoelementos (ml):',
        'Vitaminas hidro. (ml):',
        'Vitaminas lipo. (ml):',
        'Vit. C (mg):',
        'Acido fólico (mg):'

    ]);
    const { reporte, loadingSave } = useContext(ReportesContext)
    
    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'}>
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='50%' direction={'row'} justifyContent={'space-between'}>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left' }}>Micronutrientes</Typography>
                        <Box sx={{ justifyContent: 'start' }} >
                            <ul style={{}}>
                                {Micronutrientes.map(lista => {
                                    return <li style={{ listStyleType: 'none' }} key={lista}>{lista}</li>
                                })}
                            </ul>
                        </Box>
                    </Stack>
                    {/* </Grid>
                <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Requerimiento</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getSodio(reporte!).requerimiento.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getPotacio(reporte!).requerimiento.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalcio(reporte!).requerimiento.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getFosforo(reporte!).requerimiento.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getMagnesio(reporte!).requerimiento.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}


                            {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVit_C(reporte!).requerimiento}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {reporte?.acido_folico}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}
                        </Stack>

                    </Stack>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Volumen</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getSodio(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getPotacio(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalcio(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getFosforo(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getMagnesio(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}


                            {(loadingSave)
                                ? <Typography>
                                    {reporte?.req_elementos_traza}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                     {reporte?.req_vit_hidrosolubles}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {reporte?.req_vit_liposolubles}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                      { getVit_C(reporte!).volumen}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                  -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}
                        </Stack>
                    </Stack>
                    {/* </Grid> */}
                </Stack>


            </Grid>
        </>
    )
}

export default ReportesMicronutrientes

