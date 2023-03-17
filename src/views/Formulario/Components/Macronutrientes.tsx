import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import TextFieldInput from './TextField'



const tipoPrescripcion = [
    {
        value: 'Por requerimientos ',
        label: 'Por requerimientos '
    },
    {
        value: 'Por volúmenes',
        label: 'Por volúmenes'
    }
]

const aminoacidos = [
    {
        value: 'Adultos',
        label: 'Adultos'
    },
    {
        value: 'Pediátricos',
        label: 'Pediátricos'
    }
]

const Macronutrientes = () => {
    return (
        <>
            <Grid container direction='column' marginTop='20px'  width='100%' >
                <Typography variant='h5' style={{ fontWeight: 700, color: '#372FC6', marginBottom: '20px', }} >Macronutrientes</Typography>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                    }}
                >
                    <TextField
                        id='tipo-prescripción*'
                        label='Tipo Prescripción*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    >
                        {tipoPrescripcion.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='aminoácidos'
                        label='Aminoácidos*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    >
                        {aminoacidos.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextFieldInput id='requerimiento-aminoacidos' type='text' label='Requerimiento aminoácidos' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextFieldInput id='lipidos' type='text' label='Lípidos' />
                    <TextFieldInput id='requerimiento-lipidos' type='text' label='Requerimiento Lípidos' />
                </Box>


                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextFieldInput id='omegaven' type='text' label='Omegaven' />
                    <TextFieldInput id='dipeptiven' type='text' label='Dipeptiven' />
                </Box>


            </Grid>

        </>
    )
}


export default Macronutrientes
