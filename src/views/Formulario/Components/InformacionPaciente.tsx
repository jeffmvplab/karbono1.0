import { Typography, TextField, Grid, Box, MenuItem, FormHelperText, Stack } from '@mui/material'
import React from 'react'
import DiscreteSliderSteps from './SliderForm'
import TextFieldInput from './TextField'




const currencies = [
    {
        value: 'si',
        label: 'Si',
    },
    {
        value: 'no',
        label: 'No',
    }]

const tiposPacientes = [
    {
        value: 'Adulto',
        label: 'Adulto'
    },
    {
        value: 'Pediatrico',
        label: 'Pediatrico'
    },
    {
        value: 'Neonato',
        label: 'Neotato'
    }]

const viaAdministracion = [
    {
        value: 'Central',
        label: 'Central'
    },
    {
        value: 'Periférica',
        label: 'Periférica'
    }
]

const InformacionPaciente = () => {

    const paciente = { nombre: '' }

    const Información = {
        id: '',
        label: '',
        type: '',
    }


    return (
        <Stack direction={'column'}>

            <Typography 
              variant='h5'
              paddingY={2}
              style={{ fontWeight: 700, color: '#372FC6'}}
              >Información del paciente:
            </Typography >

            <Grid container direction='column' >

                <Box display='flex'>

                    <TextField
                        id='ips'
                        label='Ips'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                    />
                </Box>

                <Box display='flex' sx={{ marginTop: '20px', }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='no-identificación'
                                label='No Identificacion'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='nombre-del-paciente'
                                label='Nombre del Paciente*'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='servicio'
                                label='Servicio*'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>

                    </Grid>

                    {/* <TextFieldInput id='no-identificación' type='text' label='No Identificacion' />
                    <TextFieldInput id='nombre-del-paciente' type='text' label='Nombre del Paciente*' />
                    <TextFieldInput id='servicio' type='text' label='Servicio*' /> */}
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px', }} >

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                            <TextField
                                id='ubicacion'
                                label='Ubicación'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='cama'
                                label='Cama'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='peso-kg'
                                label='Peso (kg)*'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>

                    </Grid>

                    {/* <TextFieldInput id='ubicacion' type='text' label='Ubicación' />
                    <TextFieldInput id='cama' type='text' label='Cama' />
                    <TextFieldInput id='peso-kg' type='text' label='Peso (kg)*' /> */}
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                            <TextField
                                id='edad'
                                label='Edad'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='tipo-edad'
                                label='Tipo Edad'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='volumen'
                                label='Volumen*'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>

                    </Grid>
                    {/* <TextFieldInput id='edad' type='text' label='Edad' />
                    <TextFieldInput id='tipo-edad' type='text' label='Tipo Edad' />
                    <TextFieldInput id='volumen' type='text' label='Volumen*' /> */}
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px', }} >

                    <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                        <TextField
                            id='purga'
                            label='Purga*'
                            type='text'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                        />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                        <DiscreteSliderSteps nombre='Tiempo de infusión (h) *' />
                    </Grid>

                    <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                        <DiscreteSliderSteps nombre='Overfill *' />
                    </Grid>
                </Box>



                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='filtro'
                                label='Filtro*'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >


                            <TextField
                                id='equipo-fotosensible'
                                label='Equipo Fotosensible'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='tipo-de-paciente'
                                label='Tipo de paciente *'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {tiposPacientes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='via-de-administracion'
                                label='Vía de administración'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                select
                            >
                                {viaAdministracion.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <TextField
                                id='diagnostico'
                                label='Diagnóstico(s)'
                                type='text'
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Stack>
    )
}

export default InformacionPaciente
