import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { getCalcio, getFosforo, getMagnesio, getOligoelementos, getOmegaven, getPotacio, getSodio, getVitHidroSolubles, getVitLiposSolubles, getVit_C } from '../data/functionsParams';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

export interface ReportesMicronutrientesProps {
    reporte: IPrescriptions | undefined
    loadingSave: boolean | undefined
}
const ReportesMicronutrientes: React.FC<ReportesMicronutrientesProps> = ({ reporte, loadingSave }) => {

    const [Micronutrientes, setMicronutrientes] = useState([
        'Cloruro de Sodio',
        'Cloruro de Potasio',
        'Calcio',
        'Fósforo',
        'Magnesio',
        'Oligoelementos ',
        'Vitaminas hidro. ',
        'Vitaminas lipo. ',
        'Vit. C ',
        'Acido fólico '
    ]);

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
                            <Typography>{Micronutrientes[0]} :</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[1]} :</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[2]} [ {reporte?.calcio} ]:</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[3]} [ {reporte?.fosfato} ]:</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[4]} [ {reporte?.magnesio} ]:</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[5]} [ {reporte?.elementos_traza} ]</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[6]} [ {reporte?.vit_hidrosolubles} ]</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[7]}:</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[8]} :</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{Micronutrientes[9]} :</Typography>
                        </Box>
                    </Stack>
                    {/* </Grid>
                 <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '60%' }}>Requerimiento</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getSodio(reporte!).requerimiento.toFixed(2)}    (mEq/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}


                            {(loadingSave)
                                ? <Typography>
                                    {getPotacio(reporte!).requerimiento.toFixed(2)}    (mEq/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getCalcio(reporte!).requerimiento.toFixed(2)}    (mEq/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getFosforo(reporte!).requerimiento.toFixed(2)}    (mmol/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getMagnesio(reporte!).requerimiento.toFixed(2)}   (mEq/kg/día)
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
                                    {getVit_C(reporte!).requerimiento}  (mg)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {reporte?.acido_folico} (mg)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}
                        </Stack>

                    </Stack>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Volumen(ml)</Typography>
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
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '100%' }}>Corrección de Purga(ml) </Typography>
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

