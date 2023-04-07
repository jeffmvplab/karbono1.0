import { Grid, Typography, Box } from '@mui/material'
import React, { useState } from 'react'

const ReportesMicronutrientes = () => {

    const [Micronutrientes, setMicronutrientes] = useState([
        'Sodio (req./ml):',
        'Potasio (req./ml):',
        'Calcio (req./ml):',
        'Fosfato de sodio(req./ml)',
        'Fosfato de potasio(req./ml)',
        'Magnesio (req./ml):',
        'Oligoelementos (ml):',
        'Vitaminas hidro. (ml):',
        'Vitaminas lipo. (ml):',
        'Vit. C (mg):',
        'Acido fólico (mg):'
    ]);


    return (
        <>
            <Grid container display={'flex'} width={'60%'} >
                <Grid item display='block' sx={{ marginTop: '30px', marginBottom: '15px', width: '40%', paddingLeft:'0' }}>
                    <Typography sx={{ color: '#372FC6', fontWeight: 600, fontSize: '20px', paddingLeft: '30px', textAlign: 'left' }}>Micronutrientes</Typography>
                    <Box sx={{justifyContent:'start'}} >
                        <ul style={{  }}>
                            {Micronutrientes.map(lista => {
                                return <li style={{  listStyleType:'none' }} key={lista}>{lista}</li>
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

export default ReportesMicronutrientes
