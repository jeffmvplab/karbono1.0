
import { Typography, Grid, Box, Stack, AccordionSummary, AccordionDetails, Accordion, useMediaQuery, Slider, Tooltip, TooltipProps, styled, tooltipClasses, MenuItem } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { colorsKarbono } from '@/themes/colors';
import { FormulariosContext } from '../context/FormulariosContext';
import { LightTooltip } from '../style/styleToolTips';
import { instituciones } from '@/views/ReportePrescripcion/data/instituciones';


const currencies = [
    { value: 'si', label: 'Si', },
    { value: 'no', label: 'No', }
]

const tipoEdades = [
    { value: 'años', label: 'años', },
    { value: 'meses', label: 'meses', },
    { value: 'días', label: 'días', }
]

const tiposPacientes = [
    { value: 'Adulto', label: 'Adulto' },
    { value: 'Pediatrico', label: 'Pediatrico-Neonato' },
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

        ips, handleIps,
        numIden, handleNumIden, errorNumIden, messageErrorNumIden,
        namePaciente, handleNamePaciente, errorNamePaciente, messageErrorNamePaciente,
        servicio, handleServicio, errorServicio, messageErrorServicio,
        cama, handleCama,
        pesoKg, handlePesoKg, errorPesoKg, messageErrorPesoKg,
        edad, handleEdad,
        tipoEdad, handleTipoEdad,
        volumen, handleVolumen, errorVolumen, messageErrorVolumen,
        purga, handlePurga, errorPurga, messageErrorPurga,
        tiempoDeInfucion, handleTiempoDeInfucion, errorTiempoDeInfucion, messageErrorTiempoDeInfucion,
        tipoPaciente, handleTipoPaciente, errorTipoPaciente, messageErrorTipoPaciente,
        viaAdmin, handleViaAdmin, errorViaAdmin, messageErrorViaAdmin,
        diagnostico, handleDiagnostico,
        getPrescriptions,
    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion1(matches);

    }, [matches])
    /////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'}
            height={'100%'}
            paddingBottom={{ xs: '80px' }}
            padding={1}
            overflow={'scroll'}>

            {/* <Accordion expanded={stateAcordion1} elevation={0}> */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* <Box sx={{ display: { sm: 'none' }, }}>
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
                        {/* <Typography
                            onClick={() => { !matches && handleAcordion1(), console.log('FFFF') }}
                            fontSize={16}
                            // paddingY={{sm:2}}
                            style={{ fontWeight: 700, color: colorsKarbono.secundary }}
                        >Información del paciente
                        </Typography> */}
            {/* </AccordionSummary>
                </Box> */}
            {/* <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: colorsKarbono.secundary, }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Información del paciente:
                </Typography > */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* <AccordionDetails
                    sx={{
                        // overflow: { sm: 'scroll' },
                        minHeight: '500px'
                    }}> */}

            <Grid container direction='column' >

                <Box display='flex'>
                    <CustomTextField
                        select
                        onChange={handleIps}
                        id='ips'
                        label='Ips'
                        type='text'
                        value={ips}
                        defaulValue={ips}
                    >
                        {instituciones.map((option) => (
                            <MenuItem
                                style={{
                                    background: "white",
                                    color: "black",
                                }}
                                key={option.value}
                                value={option.label}
                            >
                                {option?.label!}
                            </MenuItem>
                        ))}
                    </CustomTextField>
                </Box>

                <Box display='flex' sx={{ marginTop: '20px', }}>

                    <Grid container spacing={2}>

                        <LightTooltip
                            title='Registra el número de identificación sin espacios, puntos ni comas'
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                <CustomTextField
                                    onChange={handleNumIden}
                                    id='no-identificación'
                                    label='No Identificación*'
                                    type='text'
                                    value={numIden}
                                    defaulValue={numIden!}
                                    helperText={messageErrorNumIden}
                                />
                            </Grid>
                        </LightTooltip>

                        <LightTooltip
                            title='Es importante registrar el nombre completo del paciente'
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                <CustomTextField
                                    onChange={handleNamePaciente}
                                    id='nombre-del-paciente'
                                    label='Nombre del Paciente*'
                                    type='text'
                                    value={namePaciente}
                                    defaulValue={namePaciente}
                                    helperText={messageErrorNamePaciente}
                                />
                            </Grid>
                        </LightTooltip>

                        <LightTooltip
                            title='Determina los aminoácidos, vitaminas y oligoelementos'
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                <CustomTextField
                                    onChange={handleTipoPaciente}
                                    value={tipoPaciente}
                                    defaulValue={tipoPaciente}
                                    id='tipo-de-paciente'
                                    label='Tipo de paciente *'
                                    type='text'
                                    select
                                    helperText={messageErrorTipoPaciente}
                                >
                                    {tiposPacientes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextField>

                            </Grid>
                        </LightTooltip>
                    </Grid>

                    {/* <TextFieldInput id='no-identificación' type='text' label='No Identificacion' />
                    <TextFieldInput id='nombre-del-paciente' type='text' label='Nombre del Paciente*' />
                    <TextFieldInput id='servicio' type='text' label='Servicio*' /> */}
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px', }} >

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleServicio}
                                id='servicio'
                                label='Servicio*'
                                type='text'
                                value={servicio}
                                defaulValue={servicio}
                                helperText={messageErrorServicio}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleCama}
                                id='cama'
                                label='Cama'
                                type='text'
                                value={cama}
                                defaulValue={cama}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handlePesoKg}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                id='peso-kg'
                                label='Peso*'
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {'kg'}
                                    </Typography>
                                }
                                type='text'
                                value={pesoKg}
                                defaulValue={pesoKg}
                                helperText={messageErrorPesoKg}
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
                                defaulValue={edad}
                            />

                        </Grid>

                        <LightTooltip
                            title='Registra la edad en años, meses o días según el tipo de paciente'
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                <CustomTextField
                                    onChange={handleTipoEdad}
                                    id='tipo-edad'
                                    label='Tipo Edad'
                                    type='text'
                                    value={tipoEdad}
                                    defaulValue={tipoEdad}
                                    select
                                >
                                    {tipoEdades.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextField>
                            </Grid>
                        </LightTooltip>

                        <LightTooltip
                            title='El volúmen no debe superar los 3000 mL'
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                                <CustomTextField
                                    onChange={handleVolumen}
                                    onClick={getPrescriptions}
                                    onKeyPress={getPrescriptions}
                                    id='volumen'
                                    label='Volumen total NPT*'
                                    type='text'
                                    value={volumen}
                                    defaulValue={volumen}
                                    helperText={messageErrorVolumen}
                                />
                            </Grid>
                        </LightTooltip>

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
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                id='purga'
                                label='Purga*'
                                type='text'
                                value={purga}
                                defaulValue={purga}
                                helperText={messageErrorPurga}
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
                                {(errorTiempoDeInfucion)
                                    && <Typography style={{ marginLeft: '15px', color: 'red', paddingTop: '7px' }}>
                                        {messageErrorTiempoDeInfucion}
                                    </Typography>}
                            </Box>
                        </Grid>
                        <LightTooltip
                            title='Seleccion vía de administración central para una osmolaridad igual o superior a 800 mOsm/L'
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                                <CustomTextField
                                    onChange={handleViaAdmin}
                                    onClick={getPrescriptions}
                                    onKeyPress={getPrescriptions}
                                    value={viaAdmin}
                                    defaulValue={viaAdmin}
                                    id='via-de-administracion'
                                    label='Vía de administración*'
                                    type='text'
                                    select={true}
                                    helperText={messageErrorViaAdmin}
                                >
                                    {viaAdministracion.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextField>


                            </Grid>
                        </LightTooltip>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleDiagnostico}
                                value={diagnostico}
                                defaulValue={diagnostico}
                                id='diagnostico'
                                label='Diagnóstico(s)'
                                type='text'
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >

                        </Grid>

                    </Grid>
                </Box>
            </Grid>
            {/* </AccordionDetails>
            </Accordion > */}


        </Stack >

    )
}

export default InformacionPaciente
