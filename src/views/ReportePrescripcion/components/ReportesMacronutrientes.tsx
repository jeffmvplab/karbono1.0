import Macronutrientes from '@/views/Formulario/Components/Macronutrientes';
import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ReportesContext } from '../context/ReportesContext';
import { getAgua, getAminoacidos, getDextrosa, getDipeptiven, getFlujoMetabolico, getLipidos, getOmegaven, getPotacio, getSodio } from '../data/functionsParams';

const ReportesMacronutrientes = () => {


    const [Macronutrientes, setMacronutrientes] = useState([
        'Flujo Metabólico:',
        'Dextrosa',
        'Aminoácidos:',
        'Lípidos',
        'Omegaven',
        'Dipeptiven',
        'Agua'
    ]);

    const { reporte, loadingSave } = useContext(ReportesContext)

    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'} >
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='60%' direction={'row'} justifyContent={'space-between'}>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left',paddingBottom: '10px' }}>Macronutrientes</Typography>
                        {/* <Box sx={{ justifyContent: 'start' }} >
                            <ul style={{}}>
                                {Macronutrientes.map(lista => {
                                    return <li style={{ listStyleType: 'none' }} key={lista}><Typography>{lista}</Typography></li>
                                })}
                            </ul>
                        </Box> */}
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[0]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[1]} (g/kg/dia):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[2]} [ {reporte?.aminoacidos} ] (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[3]} [ {reporte?.lipidos} ] (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[4]} (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[5]} (req./ml):</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }}  >
                            <Typography>{Macronutrientes[6]} (ml):</Typography>
                        </Box>
                    </Stack>
                    {/* </Grid>
                <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '6w0%' }}>Requerimiento</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {getFlujoMetabolico(reporte!).requerimiento === 0
                                        ? '-'
                                        : getFlujoMetabolico(reporte!).requerimiento.toFixed(2)
                                    }  (mg/kg/min)
                                    {/* {
                                       ( reporte?.flujo_metabolico === '0')
                                            ? '-'
                                            : reporte?.flujo_metabolico
                                    } */}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {
                                        (reporte?.tipo_prescripcion !== 'Por requerimientos')
                                            ? '-'
                                            : getDextrosa(reporte!).requerimiento.toFixed(2)
                                    } 
                                    {/* {getDextrosa(reporte!).requerimiento.toFixed(2)} */}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAminoacidos(reporte!).requerimiento.toFixed(2)}    (g/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getLipidos(reporte!).requerimiento.toFixed(2)}    (g/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getOmegaven(reporte!).requerimiento.toFixed(2)}   (g/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDipeptiven(reporte!).requerimiento.toFixed(2)}    (g/kg/día)
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
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', paddingRight: '15px', textAlign: 'left', width: '50%' }}>Volumen</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDextrosa(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAminoacidos(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getLipidos(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getOmegaven(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDipeptiven(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAgua(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                        </Stack>
                    </Stack>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', paddingRight: '15px', textAlign: 'left', width: '100%' }}>Corrección de Purga (ml)</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDextrosa(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAminoacidos(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getLipidos(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getOmegaven(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDipeptiven(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAgua(reporte!).conPurga.toFixed(2)}
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

export default ReportesMacronutrientes
