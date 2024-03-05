import Macronutrientes from '@/views/Formulario/Components/Macronutrientes';
import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ReportesContext } from '../context/ReportesContext';
import { getDextrosa, getAminoacidos, getLipidos, getOmegaven, getDipeptiven, getVolTotal, getVelinfusion, getOsmolaridad, getCalTotales, getCalTotalesKgDia, getGramosTotalesNitro, getCaloriasTotalesProteicas, getCaloriasTotalesProteicasKg, getCaloriasNoProteicasCHOS, getCaloriasNoProteicasLIPIDOS, getCaloriasNoProteicasKg, getRelacionCalNoProteicasN, getRelacionCalNoProteicasAminoacidos, getConcentracionDeCHOS, getConcentracionDeProteinas, getConcentracionDeLipidos } from '../data/functionsParams';
import { IPrescriptions } from '@/domain/models/prescriptions.model';
import { alarmConcCHOS, alarmConcDeLipidos, alarmConcDeProteinas, alarmConcMagnesio, alarmConcPotasio, alarmConcSodio, alertFactorDePrecipitacion, alertRelacion_Calcio_Fosfato, alertVelInfucion, alertViaDeAdmin } from '../data/alertParams';

export interface ReportesParametrosProps {
    reporte: IPrescriptions | undefined
    loadingSave: boolean | undefined
}


const ReportesParametros: React.FC<ReportesParametrosProps> = ({ reporte, loadingSave }) => {

    const [ParametrosNutricionales, setParametrosNutricionales] = useState([
        // 'Volument total (ml):',
        // 'Velocidad de infusión (ml/hr):',
        // 'Osmolaridad (mOsm/lt)',
        // 'Vía de administración:',
        'Calorías Totales:',
        'Calorías Totales/kg/día:',
        'Gramos totales de Nitrógeno:',
        'Calorías Totales Protéicas:',
        'Calorías Totales Protéicas/kg (kcal/kg):',
        'Calorías No Protéicas CHO-S:',
        'Calorías No Protéicas LÍPIDOS:',
        'Calorías No Protéicas/kg:',
        'Relación Cal No Protéicas/g N:',
        'Relación: Cal No Protéicas/g Aminoacidos:',
        // 'Concentración de CHO-S (%):',
        // 'Concentración de Proteína (%):',
        // 'Concentración de Lípidos (%):',
        // 'Concentración de Sodio(mEq/L)::',
        // 'Concentración de Potasio (mEq/L)::',
        // 'Concentración de Magnesio (mEq/L)::'
    ]);

    const [ParametrosFarmaceuticos, setParametrosFarmaceuticos] = useState([
        // 'Volument total (ml):',
        // 'Velocidad de infusión (ml/hr):',
        'Osmolaridad (mOsm/lt)',
        'Vía de administración:',
        // 'Calorías Totales:',
        // 'Calorías Totales/kg/día:',
        // 'Gramos totales de Nitrógeno:',
        // 'Calorías Totales Protéicas:',
        // 'Calorías Totales Protéicas/kg (kcal/kg)',
        // 'Calorías No Protéicas CHO-S:',
        // 'Calorías No Protéicas LÍPIDOS:',
        // 'Calorías No Protéicas/kg:',
        // 'Relación Cal No Protéicas/g N:',
        // 'Relación: Cal No Protéicas/g Aminoacidos',
        'Concentración de CHO-S (%):',
        'Concentración de Proteína (%):',
        'Concentración de Lípidos (%):',
        'Concentración de Sodio(mEq/L):',
        'Concentración de Potasio (mEq/L):',
        'Concentración de Magnesio (mEq/L):',
        'Factor de precipitación:',
        'Relación Calcio/Fosfato:'
    ]);

    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'} spacing={4}>

                <Grid item display='block' xs={12} sm={6}>
                    <Stack width={{ xs: '100%' }} direction={'row'} justifyContent={'space-between'} overflow={'scroll'}>

                        <Stack direction={'column'} minWidth={'220px'}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left',paddingLeft: '20px', }}>Parámetros Nutricionales</Typography>
                            <Box sx={{ justifyContent: 'start' }} >
                                <ul style={{}}>
                                    {ParametrosNutricionales.map(lista => {
                                        return <li style={{ listStyleType: 'none' }} key={lista}><Typography>{lista}</Typography></li>
                                    })}
                                </ul>
                            </Box>
                        </Stack>
                        {/* </Grid>
                 <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                        <Stack direction={'column'}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '0px', textAlign: 'left', width: '50%' }}>Valores</Typography>
                            <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

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
                            </Stack>
                        </Stack>
                    </Stack>

                </Grid>

                <Grid item display='block' xs={12} sm={6}>
                    <Stack width={{ xs: '100%' }} direction={'row'} justifyContent={'space-between'} overflow={'scroll'}>

                        <Stack direction={'column'} minWidth={'220px'}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left',paddingLeft: '20px', }}>Parámetros Farmacéuticos</Typography>
                            <Box sx={{ justifyContent: 'start' }} >
                                <ul style={{}}>
                                    {ParametrosFarmaceuticos.map(lista => {
                                        return <li style={{ listStyleType: 'none' }} key={lista}><Typography>{lista}</Typography></li>
                                    })}
                                </ul>
                            </Box>
                        </Stack>
                        {/* </Grid>
<Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                        <Stack direction={'column'}>
                            <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '70px', textAlign: 'left', width: '50%' }}>Valores</Typography>
                            <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                                {/* {(loadingSave)
                                    ? <Typography>
                                        {getVolTotal(reporte!).toFixed(2)}
                                    </Typography>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Typography>
                                        {getVelinfusion(reporte!).toFixed(2)}
                                    </Typography>
                                    : <Skeleton animation="wave" height={30} width="40%" />} */}

                                {(loadingSave)
                                    ? <Typography>
                                        {getOsmolaridad(reporte!).volumen.toFixed(2)}
                                    </Typography>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {reporte?.via_administracion}
                                        </Typography>
                                        <Typography color={alertViaDeAdmin(reporte!).alert === 'INADECUADA' ? 'red' : 'green'}>
                                            {alertViaDeAdmin(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}


                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {getConcentracionDeCHOS(reporte!).volumen.toFixed(2)}
                                        </Typography>
                                        <Typography color={alarmConcCHOS(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alarmConcCHOS(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {getConcentracionDeProteinas(reporte!).volumen.toFixed(2)}
                                        </Typography>
                                        <Typography color={alarmConcDeProteinas(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alarmConcDeProteinas(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {getConcentracionDeLipidos(reporte!).volumen.toFixed(2)}
                                        </Typography>
                                        <Typography color={alarmConcDeLipidos(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alarmConcDeLipidos(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {alarmConcSodio(reporte!).value.toFixed(2)}
                                        </Typography>
                                        <Typography color={alarmConcSodio(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alarmConcSodio(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {alarmConcPotasio(reporte!).value.toFixed(2)}
                                        </Typography>
                                        <Typography color={alarmConcPotasio(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alarmConcPotasio(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}

                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography>
                                            {alarmConcMagnesio(reporte!).value.toFixed(2)}
                                        </Typography>
                                        <Typography color={alarmConcMagnesio(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alarmConcMagnesio(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}


                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        {/* <Typography>
                                            {alertFactorDePrecipitacion(reporte!).value.toFixed(2)}
                                        </Typography> */}
                                        <Typography color={alertFactorDePrecipitacion(reporte!).alert === 'REVISAR' ? 'red' : 'green'}>
                                            {alertFactorDePrecipitacion(reporte!).alert}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}
                            
                                {(loadingSave)
                                    ? <Stack direction={'row'} paddingLeft={'80px'} spacing={2}>
                                        <Typography color={alertRelacion_Calcio_Fosfato(reporte!) === 'INSEGURA' ? 'red' : 'green'}>
                                            {alertRelacion_Calcio_Fosfato(reporte!)}
                                        </Typography>
                                    </Stack>
                                    : <Skeleton animation="wave" height={30} width="40%" />}
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>


            </Grid>
        </>
    )
}

export default ReportesParametros
