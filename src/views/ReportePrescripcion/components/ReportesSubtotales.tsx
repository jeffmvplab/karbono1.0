import { Grid, Typography, Box, Stack, Skeleton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { getAgua, getAportesFosfato, getCalcio, getFosforo, getMagnesio, getOligoelementos, getOmegaven, getPotacio, getPotacioTotal, getSodio, getSodioTotal, getSoluv_Vit, getVitHidroSolubles, getVitLiposSolubles, getVit_C, getVolTotal } from '../data/functionsParams';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

export interface ReportesSubtotalesProps {
    reporte: IPrescriptions | undefined
    loadingSave: boolean | undefined
}
const ReportesSubtotales: React.FC<ReportesSubtotalesProps> = ({ reporte, loadingSave }) => {

    const [subtotal, setSubtotal] = useState([
        'Subtotal',
        'Agua',

    ]);

    return (
        <>
            <Grid container display={'flex'} width={'100%'} paddingTop={'20px'} paddingRight={'20px'}>
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='100%' direction={'row'} justifyContent={'space-between'} overflow={'scroll'} spacing={2}>

                    <Stack direction={'column'} minWidth={'70px'}>
                        {/* <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', textAlign: 'left', paddingBottom: '10px' }}></Typography> */}

                        {/* <Box sx={{ justifyContent: 'start' }} >
                            <ul style={{}}>
                                {Micronutrientes.map(lista => {
                                    return <li style={{ listStyleType: 'none' }} key={lista}><Typography>{lista}</Typography></li>
                                })}
                            </ul>
                        </Box> */}

                        <Box paddingTop={6} sx={{ justifyContent: 'end' }} >
                            <Typography>{subtotal[0]} :</Typography>
                        </Box>

                        <Box sx={{ justifyContent: 'end' }} >
                            <Typography>{subtotal[1]} :</Typography>
                        </Box>

                    </Stack>
                    {/* </Grid>
                 <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'} minWidth={'100px'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '60%' }}>Unidades</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    (ml)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    (ml)
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}
                        </Stack>

                    </Stack>

                    <Stack direction={'column'}  minWidth={'120px'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Volumen(ml)</Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>

                            {(loadingSave)
                                ? <Typography>
                                    {(getVolTotal(reporte!) - getAgua(reporte!).volumen).toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAgua(reporte!).volumen.toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                        </Stack>
                    </Stack>

                    <Stack direction={'column'} minWidth={'250px'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '100%' }}>Corrección de Purga(ml) </Typography>
                        <Stack direction={'column'} alignItems={'center'} paddingTop='15px'>
                            {(loadingSave)
                                ? <Typography>
                                    {(getVolTotal(reporte!) - getAgua(reporte!).conPurga).toFixed(2)}
                                </Typography>
                                : <Skeleton animation="wave" height={30} width="40%" />}

                            {(loadingSave)
                                ? <Typography>
                                    {getAgua(reporte!).conPurga.toFixed(2)}    (ml)
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

export default ReportesSubtotales

