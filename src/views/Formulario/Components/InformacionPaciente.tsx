
import { Typography, Grid, Box, Stack, AccordionSummary, AccordionDetails, Accordion, useMediaQuery, Slider, Tooltip, TooltipProps, styled, tooltipClasses, MenuItem } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CustomTextField from './CustomTextField'
import { FormulariosContext } from '../context/FormulariosContext';
import { LightTooltip } from '../style/styleToolTips';
import { instituciones, obtenerOverfillPorLabel } from '@/views/ReportePrescripcion/data/instituciones';
import { convertComaAPunto } from '@/views/ReportePrescripcion/data/comaTopoint';


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

const si_no = [
    { value: 'Si', label: 'Si' },
    { value: 'No', label: 'No' }
]

const marks1 = [

    { value: 0, label: '0', },
    { value: 1, label: '', },
    { value: 2, label: '', },
    { value: 3, label: '', },
    { value: 4, label: '4', },
    { value: 5, label: '', },
    { value: 6, label: '', },
    { value: 7, label: '', },
    { value: 8, label: '8', },
    { value: 9, label: '', },
    { value: 10, label: '', },
    { value: 11, label: '', },
    { value: 12, label: '12', },
    { value: 13, label: '', },
    { value: 14, label: '', },
    { value: 15, label: '', },
    { value: 16, label: '16', },
    { value: 17, label: '', },
    { value: 18, label: '', },
    { value: 19, label: '', },
    { value: 20, label: '20', },
    { value: 21, label: '', },
    { value: 22, label: '', },
    { value: 23, label: '', },
    { value: 24, label: '24', },

];

const marks2 = [
    { value: 0, label: '0', },
    { value: 8, label: '8', },
    { value: 15, label: '15', },
    { value: 23, label: '23', },
    { value: 50, label: '50', },
];


const servicios = [
    { value: 'GINECOBSTETRICIA', label: 'GINECOBSTETRICIA', },
    { value: 'HOSPITALIZACIÓN', label: 'HOSPITALIZACIÓN', },
    { value: 'LACTANTES', label: 'LACTANTES', },
    { value: 'ONCOLOGIA', label: 'ONCOLOGIA', },
    { value: 'PEDIATRIA', label: 'PEDIATRIA', },
    { value: 'UCE ADULTOS', label: 'UCE ADULTOS', },
    { value: 'UCE PEDIATRIA', label: 'UCE PEDIATRIA', },
    { value: 'UCI ADULTOS', label: 'UCI ADULTOS', },
    { value: 'UCI NEONATOS', label: 'UCI NEONATOS', },
    { value: 'UCI PEDIATRIA', label: 'UCI PEDIATRIA', },
    { value: 'URGENCIAS', label: 'URGENCIAS', },
];

const InformacionPaciente = () => {

    const {
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

        handleUbicacion, ubicacion,
        handleFiltro, filtro,
        overfill, handleOverfill, errorOverfill, setOverfill,
    } = useContext(FormulariosContext)


    /////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'}
            height={'100%'}
            paddingBottom={{ xs: '80px' }}
            padding={1}
            overflow={'scroll'}>

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
                                    onChange={handleServicio}
                                    id='serviios'
                                    label='Servicios'
                                    type='text'
                                    value={servicio}
                                    defaulValue={servicio}
                                    select
                                >
                                    {servicios.map((option) => (
                                        <MenuItem
                                            sx={{ backgroundColor: 'white' }}
                                            key={option.value}
                                            value={option.value}>
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
                                onChange={handleUbicacion}
                                id='ubicacion'
                                label='Ubicación'
                                type='text'
                                value={ubicacion}
                                defaulValue={ubicacion}
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
                                value={convertComaAPunto(pesoKg)}
                                defaulValue={convertComaAPunto(pesoKg)}
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
                                            sx={{ backgroundColor: 'white' }}
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
                                    value={convertComaAPunto(volumen)}
                                    defaulValue={convertComaAPunto(volumen)}
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
                                    defaultValue={tiempoDeInfucion}
                                    // getAriaValueText={valuetext}
                                    step={1}
                                    min={0}
                                    max={24}
                                    valueLabelDisplay="on"
                                    marks={marks1}

                                />
                                {(errorTiempoDeInfucion)
                                    && <Typography style={{ marginLeft: '15px', color: 'red', paddingTop: '7px' }}>
                                        {messageErrorTiempoDeInfucion}
                                    </Typography>}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <Box sx={{ justifyContent: 'left' }}>
                                <Typography style={{ marginLeft: '15px' }}>
                                    Overfill*
                                </Typography>

                                <Slider
                                    value={overfill === 0 ? obtenerOverfillPorLabel(ips)! : overfill}
                                    onChange={handleOverfill}
                                    sx={{ margin: '0 5px', marginTop: '0px' }}
                                    aria-label="Small steps"
                                    defaultValue={obtenerOverfillPorLabel(ips) ? obtenerOverfillPorLabel(ips)! : overfill}
                                    // getAriaValueText={valuetext}
                                    step={1}
                                    min={0}
                                    max={50}
                                    valueLabelDisplay="on"
                                    marks={marks2}

                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Box display='flex' sx={{ width: '100%', marginTop: '20px', }} >

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }}>

                            <CustomTextField
                                onChange={handleFiltro}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={filtro}
                                defaulValue={filtro}
                                id='filtro'
                                label='Filtro'
                                type='text'
                                select={true}
                            >
                                {si_no.map((option) => (
                                    <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} style={{ padding: '10px' }} >
                            <Box sx={{ justifyContent: 'left' }}>
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
                                        <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextField>
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
                                        <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
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
