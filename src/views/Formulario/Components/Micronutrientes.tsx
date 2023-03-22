import { Box, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import TextFieldInput from './TextField'



const fosfato = [
    {
        value: 'Fosfato de sodio',
        label: 'Fosfato de sodio'
    },
    {
        value: 'Fosfato de potasio',
        label: 'Fosfato de potasio'
    }
]

const elemento = [
    {
        value: 'Adultos',
        label: 'Adultos'
    },
    {
        value: 'Pediátricos',
        label: 'Pediátricos'
    }
]

const Micronutrientes = () => {
    return (
        <Stack direction={'column'}>

            <Typography
                variant='h5'
                paddingY={2}
                style={{ fontWeight: 700, color: '#372FC6' }}
            >Micronutrientes
            </Typography>

            <Grid container direction='column'>

                <Box display='flex' sx={{ width: '100%', }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='Sodio-total'
                                label='Sodio total'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />

                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='potasio-total'
                                label='Potasio tota'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                        </Grid>

                    </Grid>
                    {/* <TextFieldInput id='Sodio-total' type='text' label='Sodio total' />
                    <TextFieldInput id='potasio-total' type='text' label='Potasio total' /> */}
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='fosfato'
                                label='Fosfato'
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
                                {fosfato.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='requerimiento-fosfato'
                                label='Requerimiento fosfato'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                        </Grid>
                    </Grid>
                    {/* <TextFieldInput id='requerimiento-fosfato' type='text' label='Requerimiento fosfato' /> */}
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='calcio'
                                label='Calcio'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='calcio' type='text' label='Calcio' /> */}

                        </Grid>

                        <Grid xs={12} sm={6} md={3} style={{ padding: '10px' }}>
                            <TextField
                                id='unidades '
                                label='Unidades '
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                        </Grid>

                        <Grid xs={12} sm={6} md={3} style={{ padding: '10px' }}>
                            <TextField
                                id='requerimiento'
                                label='Requerimiento'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='sulfato-de-magnesio'
                                label='Sulfato de magnesio'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='sulfato-de-magnesio' type='text' label='Sulfato de magnesio' /> */}
                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='requerimiento-sulfato-de-magnesio'
                                label='Requerimiento sulfato de magnesio'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='requerimiento-sulfato-de-magnesio' type='text' label='Requerimiento sulfato de magnesio' /> */}
                        </Grid>

                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='elementos-traza'
                                label='Elementos traza'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {elemento.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='requerimiento-traza'
                                label='Requerimiento traza'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='requerimiento-traza' type='text' label='Requerimiento traza' /> */}
                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='vitaminas-hidrosolubes'
                                label='Vitaminas hidrosolubes'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {elemento.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='vitaminas-liposolubles'
                                label='Vitaminas liposolubles'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {elemento.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>

                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px', marginBottom: '50px' }}>
                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <TextField
                                id='vitamina-c'
                                label='Vitamina C'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='vitamina-c' type='text' label='Vitamina C' /> */}
                        </Grid>

                        <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <TextField
                                id='acido-folico'
                                label='Acido folico'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                            {/* <TextFieldInput id='acido-folico' type='text' label='Acido folico' /> */}
                        </Grid>

                    </Grid>

                </Box>
            </Grid>
        </Stack>
    )
}

export default Micronutrientes
