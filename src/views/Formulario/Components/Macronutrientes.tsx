import { Box, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
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
        <Stack direction={'column'}>
            <Typography
                variant='h5'
                paddingY={2}
                style={{ fontWeight: 700, color: '#372FC6' }}
            >Macronutrientes
            </Typography>

            <Grid container direction='column' >

                <Box display='flex' sx={{ marginTop: '20px' }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='tipo-prescripción*'
                                label='Tipo Prescripción*'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {tipoPrescripcion.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='flujo-metabolico'
                                label='Flujo metabólico'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                        </Grid>

                    </Grid>
                </Box>

                <Box display='flex' sx={{ marginTop: '20px' }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <TextField
                                id='aminoácidos'
                                label='Aminoácidos*'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {aminoacidos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <TextField
                                id='requerimiento-aminoacidos'
                                label='Requerimiento aminoácidos'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='requerimiento-aminoacidos' type='text' label='Requerimiento aminoácidos' /> */}
                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ marginTop: '20px', }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <TextField
                                id='lipidos'
                                label='Lípidos'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='lipidos' type='text' label='Lípidos' /> */}
                        </Grid>
                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <TextField
                                id='requerimiento-lipidos'
                                label='Requerimiento Lípidos'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='requerimiento-lipidos' type='text' label='Requerimiento Lípidos' /> */}
                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <TextField
                                id='omegaven'
                                label='Omegaven'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='omegaven' type='text' label='Omegaven' /> */}
                        </Grid>
                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <TextField
                                id='dipeptiven'
                                label='Dipeptiven'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/*  <TextFieldInput id='dipeptiven' type='text' label='Dipeptiven' />*/}
                        </Grid>
                    </Grid>
                </Box>


            </Grid>

        </Stack>
    )
}


export default Macronutrientes
