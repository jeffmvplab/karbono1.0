import { Grid, Typography, Box } from '@mui/material'
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
        'Calorías Totales Protéicas/kg:',
        'Calorías No Protéicas CHO-S:',
        'Calorías No Protéicas LÍPIDOS:',
        'Calorías No Protéicas/kg:',
        'Relación Cal No Protéicas/g N:',
        'Relación: Cal No Protéicas/g AA:',
        'Concentración de CHO-S (%):',
        'Concentración de Proteína (%):',
        'Concentración de Lípidos (%):'
    ]);


    return (
        <>
            <Grid container display={'flex'} width={'60%'} >
                <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}>
                    <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '30px', textAlign: 'left' }}>Parámetros</Typography>
                    <Box sx={{justifyContent:'start'}} >
                        <ul style={{  }}>
                            {Parametros.map(lista2 => {
                                return <li style={{  listStyleType:'none' }} key={lista2}>{lista2}</li>
                            })}
                        </ul>
                    </Box>

                </Grid>
                <Grid item display={'flex'} sx={{ marginTop: '30px', marginBottom: '30px', width: '60%' }}>
                    <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Requerimiento</Typography>
                    <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '10px', textAlign: 'left', width: '50%' }}>Volumen</Typography>
                </Grid>

            </Grid>


        </>
    )
}

export default ReportesParametros
