import { Grid, Typography, Box, Stack } from '@mui/material'
import React, { useState } from 'react'

const ReportesMacronutrientes = () => {


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


    return (
        <>
            <Grid container display={'flex'} width={'80%'} paddingTop={'20px'} >
                {/* <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}> */}
                <Stack  width='50%' direction={'row'} justifyContent={'space-between'}>

                    <Stack direction={'column'}>
                        <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '30px', textAlign: 'left' }}>Micronutrientes</Typography>
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

export default ReportesMacronutrientes
