import { Typography, TextField, Grid, Box, MenuItem } from '@mui/material'
import React from 'react'
import DiscreteSliderSteps from './SliderForm'




const currencies = [
    {
        value: 'si',
        label: 'Si',
    },
    {
        value: 'no',
        label: 'No',
    }]

const InformacionPaciente = () => {
    return (
        <>
            <Grid container direction='column'>
                <Typography variant='h5' style={{ fontWeight: 700, color: '#372FC6', marginBottom: '20px' }} >Información del paciente:</Typography>
                <TextField
                    id='ips'
                    label='Ips'
                    type='text'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    inputProps={{ style: { textAlign: 'center', height: '17PX' } }}
                    sx={{

                    }}
                />
                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='no-identificación'
                        label='No. Identificación*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

                        }}
                    />

                    <TextField
                        id='nombre-del-paciente'
                        label='Nombre del Paciente'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            margin: ' 0 20px'
                        }}
                    />
                    <TextField
                        id='servicio'
                        label='Servicio'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

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
                    <TextField
                        id='ubicacion'
                        label='Ubicación'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

                        }}
                    />

                    <TextField
                        id='cama'
                        label='Cama'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            margin: ' 0 20px'
                        }}
                    />
                    <TextField
                        id='peso-kg'
                        label='Peso (kg)*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

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
                    <TextField
                        id='edad'
                        label='Edad'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

                        }}
                    />

                    <TextField
                        id='Tipo-edad'
                        label='Tipo Edad'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            margin: ' 0 20px'
                        }}
                    />
                    <TextField
                        id='volumen'
                        label='Volumen *'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

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
                    <TextField
                        id='purga'
                        label='Purga*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            width: '32.25%'
                        }}
                    />
                    <DiscreteSliderSteps />
                    <DiscreteSliderSteps />
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
                        label='Filtro'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '10PX' } }}
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
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            margin: ' 0 20px'
                        }}
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
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{

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
                    <TextField
                        id='via-de-administracion'
                        label='Vía de administración'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            width: '32.25%'
                        }}
                    />
                    <TextField
                        id='diagnostico'
                        label='Diagnóstico(s)'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            width: '32.25%',
                            margin: ' 0 20px'
                        }}
                    />
                </Box>
            </Grid>
        </>
    )
}

export default InformacionPaciente
