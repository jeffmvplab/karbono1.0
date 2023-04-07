import Macronutrientes from '@/views/Formulario/Components/Macronutrientes';
import { Grid, Typography, Box, Stack } from '@mui/material'
import React, { useState } from 'react'

const ReportesParametros = () => {

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
            <Grid container display={'flex'} width={'80%'} >
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack width='50%' direction={'row'} justifyContent={'space-between'}>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '30px', textAlign: 'left' }}>Parametros</Typography>
                        <Box sx={{ justifyContent: 'start' }} >
                            <ul style={{}}>
                                {Parametros.map(lista => {
                                    return <li style={{ listStyleType: 'none' }} key={lista}>{lista}</li>
                                })}
                            </ul>
                        </Box>
                    </Stack>
                    {/* </Grid>
                <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}> */}
                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Requerimiento</Typography>
                    </Stack>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Volumen</Typography>
                    </Stack>
                    {/* </Grid> */}
                </Stack>

            </Grid>
        </>
    )
}

export default ReportesParametros
