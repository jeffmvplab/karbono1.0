import { Typography, TextField, Grid, Box, MenuItem, FormHelperText } from '@mui/material'
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
        <>
            <Grid container direction='column' >
                <Typography variant='h5' style={{ fontWeight: 700, color: '#372FC6', marginBottom: '10px' }} >Información del paciente:</Typography>
                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='ips'
                        label='Ips'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { textAlign: 'center', height: '17PX', marginRight: '10px' } }}
                        sx={{
                            marginRight:'10px'
                        }}
                    />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextFieldInput id='no-identificación' type='text' label='No Identificacion' />
                    <TextFieldInput id='nombre-del-paciente' type='text' label='Nombre del Paciente*' />
                    <TextFieldInput id='servicio' type='text' label='Servicio*' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextFieldInput id='ubicacion' type='text' label='Ubicación' />
                    <TextFieldInput id='cama' type='text' label='Cama' />
                    <TextFieldInput id='peso-kg' type='text' label='Peso (kg)*' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextFieldInput id='edad' type='text' label='Edad' />
                    <TextFieldInput id='tipo-edad' type='text' label='Tipo Edad' />
                    <TextFieldInput id='volumen' type='text' label='Volumen*' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='purga'
                        label='Purga*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            width: '33.55%',
                        }}
                    />
                    <DiscreteSliderSteps nombre='Tiempo de infusión (h) *' />
                    <DiscreteSliderSteps nombre='Overfill *' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='filtro'
                        label='Filtro*'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        // helperText='Obligatorio'
                        inputProps={{ style: { height: '10PX' } }}
                        sx={{   width: '32.25%', marginRight:'10px' }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id='equipo-fotosensible'
                        label='Equipo Fotosensible'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        // helperText='Obligatorio'
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{ width: '32.25%', marginRight:'10px' }}

                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id='tipo-de-paciente'
                        label='Tipo de paciente *'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        // helperText='Obligatorio'
                        inputProps={{ style: { height: '5PX' } }}
                        sx={{  width: '32.25%',  }}
                    >
                        {tiposPacientes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='via-de-administracion'
                        label='Vía de administración'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        select
                        // helperText='Obligatorio'
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            width: '32.25%',
                        }}
                    >
                        {viaAdministracion.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>                    
                    <TextField
                        id='diagnostico'
                        label='Diagnóstico(s)'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        inputProps={{ style: { height: '22PX' } }}
                        sx={{
                            width: '32.25%',
                            margin: ' 0 10px'
                        }}
                    />
                </Box>
            </Grid>
        </>
    )
}

export default InformacionPaciente
