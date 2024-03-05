import Macronutrientes from '@/views/Formulario/Components/Macronutrientes';
import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ReportesContext } from '../context/ReportesContext';
import { getAgua, getAminoacidos, getAportesAminoacidos, getAportesLipidos, getDextrosa, getDipeptiven, getFlujoMetabolico, getLipidos, getOmegaven, getPotacio, getSodio } from '../data/functionsParams';
import { IPrescriptions } from '@/domain/models/prescriptions.model';


export interface ReportesMacronutrientesProps {
    reporte: IPrescriptions | undefined
    loadingSave: boolean | undefined
}

const ReportesMacronutrientes: React.FC<ReportesMacronutrientesProps> = ({ reporte, loadingSave }) => {


    const [Macronutrientes, setMacronutrientes] = useState([
        'Flujo Metabólico:',
        'Dextrosa',
        'Aminoácidos:',
        '*Aporte de Sodio:',
        '*Aporte de Potasio:',
        '*Aporte de Magnesio:',
        '*Aporte de Fósforo:',
        '*Aporte de Cloruro:',
        'Lípidos',
        '*Aporte de Fósforo:',
        '*Aporte de Sodio:',
        'Omegaven',
        'Dipeptiven',
        '*Aporte total de L-glutamina',
        // 'Agua'
    ]);

    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'} >
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='100%' direction={'row'} justifyContent={'space-between'} overflow={'scroll'} spacing={2}>

                    <Stack direction={'column'} minWidth={'150px'} maxWidth={'220px'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left', paddingBottom: '15px' }}>Macronutrientes</Typography>
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
                            <Typography>{Macronutrientes[1]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[2]} [ {reporte?.aminoacidos} ] :</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[3]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[4]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[5]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[6]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[7]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[8]} [ {reporte?.lipidos} ] :</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[9]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[10]}</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[11]} :</Typography>
                        </Box>
                        <Box sx={{ justifyContent: 'start' }} >
                            <Typography>{Macronutrientes[12]} :</Typography>
                        </Box>
                        {/* <Box sx={{ justifyContent: 'start' }}  >
                            <Typography>{Macronutrientes[14]} :</Typography>
                        </Box> */}
                    </Stack>
                    {/* </Grid>
                <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'} minWidth={'150px'}>
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
                                    } (g/kg/dia)
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
                                    {getAportesAminoacidos(reporte!).a_sodio.toFixed(2)}    (Meq/Kg/Dia)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAportesAminoacidos(reporte!).a_potacio.toFixed(2)}    (Meq/Kg/Dia)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAportesAminoacidos(reporte!).a_magnesio.toFixed(2)}    (Meq/Kg/Dia)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAportesAminoacidos(reporte!).a_fosforo.toFixed(2)}    (Meq/Kg/Dia)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAportesAminoacidos(reporte!).a_cloruro.toFixed(2)}    (Meq/Kg/Dia)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}


                            {(loadingSave)
                                ? <Typography>
                                    {getLipidos(reporte!).requerimiento.toFixed(2)}    (g/kg/día)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAportesLipidos(reporte!).a_fosforo.toFixed(2)}    (Meq/Kg/Dia)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAportesLipidos(reporte!).a_sodio.toFixed(2)}    (Meq/Kg/Dia)
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

                            {/* {(loadingSave)
                                ? <Typography>
                                    -
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />} */}
                        </Stack>
                    </Stack>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', paddingRight: '15px', textAlign: 'left', width: '50%' }}>Volumen(ml)</Typography>
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
                                    {getLipidos(reporte!).volumen.toFixed(2)}
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
                                    {getOmegaven(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDipeptiven(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {/* {(loadingSave)
                                ? <Typography>
                                    {getAgua(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />} */}

                        </Stack>
                    </Stack>

                    <Stack direction={'column'} minWidth={'260px'}>
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
                                    {getLipidos(reporte!).conPurga.toFixed(2)}
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
                                    {getOmegaven(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getDipeptiven(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}
{/* 
                            {(loadingSave)
                                ? <Typography>
                                    {getAgua(reporte!).conPurga.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />} */}

                        </Stack>
                    </Stack>
                    {/* </Grid> */}
                </Stack>


            </Grid>
        </>
    )
}

export default ReportesMacronutrientes
