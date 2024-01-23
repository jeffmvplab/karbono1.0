import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ReportesContext } from '../context/ReportesContext';
import { getCalcio, getFosforo, getMagnesio, getOligoelementos, getOmegaven, getPotacio, getSodio, getVitHidroSolubles, getVitLiposSolubles, getVit_C } from '../data/functionsParams';

const ReportesMicronutrientes = () => {

    const [Micronutrientes, setMicronutrientes] = useState([
        'Sodio',
        'Potasio',
        'Calcio',
        'Fósforo',
        'Magnesio',
        'Oligoelementos ',
        'Vitaminas hidro. ',
        'Vitaminas lipo. ',
        'Vit. C ',
        'Acido fólico '
    ]);

    const { reporte, loadingSave } = useContext(ReportesContext)

    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'}>
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='60%' direction={'row'} justifyContent={'space-between'}>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left', paddingBottom: '10px' }}>Micronutrientes</Typography>

                        {/* <Box sx={{ justifyContent: 'start' }} >
                            <ul style={{}}>
                                {Micronutrientes.map(lista => {
                                    return <li style={{ listStyleType: 'none' }} key={lista}><Typography>{lista}</Typography></li>
                                })}
                            </ul>
                        </Box> */}

                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[0]}  (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[1]}  (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[2]} [ {reporte?.calcio} ] (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[3]} [ {reporte?.fosfato} ] (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[4]} [ {reporte?.magnesio} ] (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[5]} [ {reporte?.elementos_traza} ] (ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[6]} [ {reporte?.vit_hidrosolubles} ] (ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[7]} (ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[8]} (mg):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[9]} (mg):</Typography>
                        </Box>
                    </Stack>
                    {/* </Grid>
                 <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Requerimiento</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getSodio(reporte!).requerimiento.toFixed(2)}  mEq/kg/día
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getPotacio(reporte!).requerimiento.toFixed(2)}  mEq/kg/día
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalcio(reporte!).requerimiento.toFixed(2)}  mEq/kg/día
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getFosforo(reporte!).requerimiento.toFixed(2)}  mmol/kg/día
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getMagnesio(reporte!).requerimiento.toFixed(2)}  mEq/kg/día
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
                                    {getOligoelementos(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVitHidroSolubles(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVitLiposSolubles(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVit_C(reporte!).volumen}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}
                        </Stack>
                    </Stack>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '100%' }}>Corrección de Purga (ml) </Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getSodio(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getPotacio(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalcio(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getFosforo(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getMagnesio(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}


                            {(loadingSave)
                                ? <Typography>
                                    {getOligoelementos(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVitHidroSolubles(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVitLiposSolubles(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getVit_C(reporte!).conPurga.toFixed(2)}
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

