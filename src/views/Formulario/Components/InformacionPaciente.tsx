import { Typography, Grid, Box, MenuItem, Stack, AccordionSummary, AccordionDetails, Accordion, useMediaQuery, Slider } from '@mui/material'
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
    { value: 'Neonato', label: 'Neotato' }
]

const viaAdministracion = [
    { value: 'Central', label: 'Central' },
    { value: 'Periférica', label: 'Periférica' }
]

const marks1 = [
    { value: 10, label: '10', },
    { value: 11, label: '', },
    { value: 12, label: '', },
    { value: 13, label: '', },
    { value: 14, label: '14', },
    { value: 15, label: '', },
    { value: 16, label: '', },
    { value: 17, label: '17', },
    { value: 18, label: '', },
    { value: 19, label: '', },
    { value: 20, label: '', },
    { value: 21, label: '21', },
    { value: 22, label: '', },
    { value: 23, label: '', },
    { value: 24, label: '24', },

];

const marks2 = [
    { value: 0, label: '0', },
    { value: 2, label: '', },
    { value: 4, label: '', },
    { value: 6, label: '', },
    { value: 8, label: '8', },
    { value: 10, label: '', },
    { value: 12, label: '', },
    { value: 14, label: '', },
    { value: 16, label: '16', },
    { value: 18, label: '', },
    { value: 20, label: '', },
    { value: 22, label: '', },
    { value: 24, label: '24', },
    { value: 26, label: '', },
    { value: 28, label: '', },
    { value: 30, label: '30', },
];



const InformacionPaciente = () => {

    const { stateAcordion1, setStateAcordion1, matches, handleAcordion1,

        ips, errorIps, messageErrorIps, handleIps,
        numIden, errorNumIden, messageErrorNumIden, handleNumIden,
        namePaciente, errorNamePaciente, messageErrorNamePaciente, handleNamePaciente,
        servicio, errorServicio, messageErrorServicio, handleServicio,
        ubicacion, errorUbicacion, messageErrorUbicacion, handleUbicacion,
        cama, errorCama, messageErrorCama, handleCama,
        pesoKg, errorPesoKg, messageErrorPesoKg, handlePesoKg,
        edad, errorEdad, messageErrorEdad, handleEdad,
        tipoEdad, errorTipoEdad, messageErrorTipoEdad, handleTipoEdad,
        volumen, errorVolumen, messageErrorVolumen, handleVolumen,
        purga, errorPurga, messageErrorPurga, handlePurga,
        tiempoDeInfucion, errorTiempoDeInfucion, messageErrorTiempoDeInfucion, handleTiempoDeInfucion,
        overfill, errorOverfill, messageErrorOverfill, handleOverfill,
        filtro, errorFiltro, messageErrorFiltro, handleFiltro,
        eqFotosencible, errorEqFotosencible, messageErrorEqFotosencible, handleEqFotosencible,
        tipoPaciente, errorTipoPaciente, messageErrorTipoPaciente, handleTipoPaciente,
        viaAdmin, errorViaAdmin, messageErrorViaAdmin, handleViaAdmin,
        diagnostico, errorDiagnostico, messageErrorDiagnostico, handleDiagnostico,


    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion1(matches);
        
    }, [matches])
    /////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'}>

            <Accordion onClick={() => { !matches && handleAcordion1() }} expanded={stateAcordion1} elevation={0}>
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
                                onChange={handleIps}
                                id='ips'
                                label='Ips'
                                type='text'
                                value={ips}
                            />
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px', }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        onChange={handleNumIden}
                                        id='no-identificación'
                                        label='No Identificacion*'
                                        type='text'
                                        value={numIden}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleNamePaciente}
                                        id='nombre-del-paciente'
                                        label='Nombre del Paciente*'
                                        type='text'
                                        value={namePaciente}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleServicio}
                                        id='servicio'
                                        label='Servicio*'
                                        type='text'
                                        value={servicio}
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
                                        onChange={handleUbicacion}
                                        id='ubicacion'
                                        label='Ubicación'
                                        type='text'
                                        value={ubicacion}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleCama}
                                        id='cama'
                                        label='Cama'
                                        type='text'
                                        value={cama}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handlePesoKg}
                                        id='peso-kg'
                                        label='Peso (kg)*'
                                        type='text'
                                        value={pesoKg}
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
                                        onChange={handleEdad}
                                        id='edad'
                                        label='Edad'
                                        type='text'
                                        value={edad}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        onChange={handleTipoEdad}
                                        id='tipo-edad'
                                        label='Tipo Edad'
                                        type='text'
                                        value={tipoEdad}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        onChange={handleVolumen}
                                        id='volumen'
                                        label='Volumen*'
                                        type='text'
                                        value={volumen}
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
                                        onChange={handlePurga}
                                        id='purga'
                                        label='Purga*'
                                        type='text'
                                        value={purga}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <Box sx={{ justifyContent: 'left' }}>
                                        <Typography style={{ marginLeft: '15px' }}>
                                            Tiempo de infusión (h) *
                                        </Typography>

                                        <Slider
                                            value={tiempoDeInfucion}
                                            onChange={handleTiempoDeInfucion}
                                            sx={{ margin: '0 5px', marginTop: '0px' }}
                                            aria-label="Small steps"
                                            defaultValue={1}
                                            // getAriaValueText={valuetext}
                                            step={1}
                                            min={10}
                                            max={24}
                                            valueLabelDisplay="auto"
                                            marks={marks1}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                    <Box sx={{ justifyContent: 'left' }}>
                                        <Typography style={{ marginLeft: '15px' }}>
                                            Overfill *
                                        </Typography>

                                        <Slider
                                            value={overfill}
                                            onChange={handleOverfill}
                                            sx={{ margin: '0 5px', marginTop: '0px' }}
                                            aria-label="Small steps"
                                            defaultValue={1}
                                            // getAriaValueText={valuetext}
                                            step={1}
                                            min={0}
                                            max={30}
                                            valueLabelDisplay="auto"
                                            marks={marks2}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>



                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                    <CustomTextField
                                        onChange={handleFiltro}
                                        value={filtro}
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
                                        onChange={handleEqFotosencible}
                                        value={eqFotosencible}
                                        id='equipo-fotosensible'
                                        label='Equipo Fotosensible'
                                        type='text'
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
                                        onChange={handleTipoPaciente}
                                        value={tipoPaciente}
                                        id='tipo-de-paciente'
                                        label='Tipo de paciente *'
                                        type='text'
                                        select={true}
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
                                        onChange={handleViaAdmin}
                                        value={viaAdmin}
                                        id='via-de-administracion'
                                        label='Vía de administración*'
                                        type='text'
                                        select={true}
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
                                        onChange={handleDiagnostico}
                                        value={diagnostico}
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
