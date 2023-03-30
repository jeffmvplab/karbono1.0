import { Typography, Grid, Box, MenuItem, Stack, AccordionSummary, AccordionDetails, Accordion, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import DiscreteSliderSteps from './SliderForm'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { colorsKarbono } from '@/themes/colors';
import { FormulariosContext } from '../context/FormulariosContext';

const currencies = [
    { value: 'si', label: 'Si', },
    { value: 'no', label: 'No', }
]

const tiposPacientes = [
    { value: 'Adulto', label: 'Adulto' },
    { value: 'Pediatrico', label: 'Pediatrico' },
    { value: 'Neonato', label: 'Neotato' }]

const viaAdministracion = [
    { value: 'Central', label: 'Central' },
    { value: 'Periférica', label: 'Periférica' }
]



const InformacionPaciente = () => {

    const{stateAcordion1,setStateAcordion1,matches,handleAcordion1}= useContext(FormulariosContext)

    useEffect(()=>{
        setStateAcordion1(matches);
    },[matches])
/////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'}>

            <Accordion onClick={() => handleAcordion1()} expanded={stateAcordion1} elevation={0}>
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <AccordionSummary
                    sx={{
                        display: { sm: 'none' },
                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                            transform: 'rotate(90deg)',
                        },
                    }}
                    expandIcon={<ArrowRightIcon sx={{ color: `${colorsKarbono.primary}` }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        fontSize={16}
                        // paddingY={{sm:2}}
                        style={{ fontWeight: 700, color: colorsKarbono.secundary }}
                    >Información del paciente
                    </Typography >
                </AccordionSummary>

                <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: colorsKarbono.secundary, }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Información del paciente:
                </Typography >
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <AccordionDetails>

                    <Grid container direction='column' >

                        <Box display='flex'>
                            <CustomTextField
                                id='ips'
                                label='Ips'
                                type='text'
                            />
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px', }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        id='no-identificación'
                                        label='No Identificacion'
                                        type='text'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='nombre-del-paciente'
                                        label='Nombre del Paciente*'
                                        type='text'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='servicio'
                                        label='Servicio*'
                                        type='text'
                                    />
                                </Grid>

                            </Grid>

                            {/* <TextFieldInput id='no-identificación' type='text' label='No Identificacion' />
                    <TextFieldInput id='nombre-del-paciente' type='text' label='Nombre del Paciente*' />
                    <TextFieldInput id='servicio' type='text' label='Servicio*' /> */}
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px', }} >

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        id='ubicacion'
                                        label='Ubicación'
                                        type='text'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='cama'
                                        label='Cama'
                                        type='text'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='peso-kg'
                                        label='Peso (kg)*'
                                        type='text'
                                    />
                                </Grid>

                            </Grid>

                            {/* <TextFieldInput id='ubicacion' type='text' label='Ubicación' />
                    <TextFieldInput id='cama' type='text' label='Cama' />
                    <TextFieldInput id='peso-kg' type='text' label='Peso (kg)*' /> */}
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        id='edad'
                                        label='Edad'
                                        type='text'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        id='tipo-edad'
                                        label='Tipo Edad'
                                        type='text'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        id='volumen'
                                        label='Volumen*'
                                        type='text'
                                    />
                                </Grid>

                            </Grid>
                            {/* <TextFieldInput id='edad' type='text' label='Edad' />
                    <TextFieldInput id='tipo-edad' type='text' label='Tipo Edad' />
                    <TextFieldInput id='volumen' type='text' label='Volumen*' /> */}
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px', }} >

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        id='purga'
                                        label='Purga*'
                                        type='text'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <DiscreteSliderSteps nombre='Tiempo de infusión (h) *' />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <DiscreteSliderSteps nombre='Overfill *' />
                                </Grid>
                            </Grid>
                        </Box>



                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        id='filtro'
                                        label='Filtro*'
                                        select={true}
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >


                                    <CustomTextField
                                        id='equipo-fotosensible'
                                        label='Equipo Fotosensible'
                                        type='text'
                                        select
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='tipo-de-paciente'
                                        label='Tipo de paciente *'
                                        type='text'
                                        select
                                    >
                                        {tiposPacientes.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='via-de-administracion'
                                        label='Vía de administración'
                                        type='text'
                                        select
                                    >
                                        {viaAdministracion.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='diagnostico'
                                        label='Diagnóstico(s)'
                                        type='text'
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Stack>

    )
}

export default InformacionPaciente
