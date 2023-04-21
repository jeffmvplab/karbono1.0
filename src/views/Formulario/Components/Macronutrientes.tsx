import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FormulariosContext } from '../context/FormulariosContext';


const tipoPrescripciones = [
    { value: 'Por requerimientos', label: 'Por requerimientos' },
    { value: 'Por volúmenes', label: 'Por volúmenes' }
]

const aminoAdultos = [
    { value: 'Aminoven', label: 'Aminoven 15%' },
    { value: 'TravasolPlus', label: 'TravasolPlus 15%' },
    { value: 'Aminoplasmal', label: 'Aminoplasmal 15%' },
    { value: 'Aminosteril', label: 'Aminosteril N-Hepa 8%' },
]

const aminoPediatrico = [
    { value: 'Aminoven', label: 'Aminoven 10%' },
    { value: 'Aminoplasmal', label: 'Aminoplasmal 10%' },
    { value: 'Trophamine', label: 'Trophamine' },
]



const tiposLipidos = [
    { value: 'Smoflipid', label: 'Smoflipid' },
    { value: 'Clinoleic', label: 'Clinoleic' },
    { value: 'Lipovenoes', label: 'Lipovenoes' },
    { value: 'LipovenoesMCT', label: 'LipovenoesMCT' },
    { value: 'Fresomega', label: 'Fresomega' },
]


const Macronutrientes = () => {

    const {
        tipoPaciente,

        stateAcordion2, setStateAcordion2, matches, handleAcordion2,
        tipoPrescripcion, errorTipoPrescripcion, messageErrorTipoPrescripcion, handleTipoPrescripcion,
        flujoMetabolico, errorFlujoMetabolico, messageErrorFlujoMetabolico, handleFlujoMetabolico,
        aminoacidos, errorAminoacidos, messageErrorAminoacidos, handleAminoacidos,
        dextrosa, errorDextrosa, messageErrorDextrosa, handleDextrosa,
        requerimientoAminoacidos, errorRequerimientoAminoacidos, messageErrorRequerimientoAminoacidos, handleRequerimientoAminoacidos,
        lipidos, errorLipidos, messageErrorLipidos, handleLipidos,
        requerimientoLipidos, errorRequerimientoLipidos, messageErrorRequerimientoLipidos, handleRequerimientoLipidos,
        omegaven, errorOmegaven, messageErrorOmegaven, handleOmegaven,
        dipeptiven, errorDipeptiven, messageErrorDipeptiven, handleDipeptiven,

    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion2(matches);
    }, [matches])

    return (

        <Stack direction={'column'}>

            <Accordion onClick={() => !matches && handleAcordion2()} expanded={stateAcordion2} elevation={0}>
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
                        // paddingY={2}
                        style={{ fontWeight: 700, color: colorsKarbono.secundary }}
                    >Macronutrientes
                    </Typography >
                </AccordionSummary>

                <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: colorsKarbono.secundary, }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Macronutrientes:
                </Typography >
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <AccordionDetails>

                    <Grid container direction='column' >
                        <Box display='flex' sx={{ marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleTipoPrescripcion}
                                        value={tipoPrescripcion}
                                        defaulValue={tipoPrescripcion}
                                        id='tipo-prescripción*'
                                        label='Tipo Prescripción*'
                                        select={true}
                                    >
                                        {tipoPrescripciones.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                </Grid>

                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleFlujoMetabolico}
                                        value={flujoMetabolico}
                                        id='flujo-metabolico'
                                        label={'Flujo metabólico*'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mg/kg/min'
                                            : 'ml'}
                                        type='text'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleDextrosa}
                                        disabled={true}
                                        value={dextrosa}
                                        id='dextrosa'
                                        label={'Dextrosa*'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/dia'
                                            : 'ml'}
                                        type='text'
                                    />

                                </Grid>


                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleAminoacidos}
                                        value={aminoacidos}
                                        defaulValue={aminoacidos}
                                        id='aminoácidos'
                                        label='Aminoácidos*'
                                        type='text'
                                        select={true}
                                    >
                                        {
                                            (tipoPaciente === 'Adulto')
                                                ? aminoAdultos.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))
                                                : (tipoPaciente === 'Pediatrico')
                                                    ? aminoPediatrico.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>))
                                                    : aminoPediatrico.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))
                                        }
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleRequerimientoAminoacidos}
                                        value={requerimientoAminoacidos}
                                        id='requerimiento-aminoacidos'
                                        label={'Requerimiento aminoácidos*'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/dían'
                                            : 'ml'}
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='requerimiento-aminoacidos' type='text' label='Requerimiento aminoácidos' /> */}
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px', }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleLipidos}
                                        value={lipidos}
                                        defaulValue={lipidos}
                                        id='lipidos'
                                        label='Lípidos'
                                        type='text'
                                        select={true}
                                    >
                                        {tiposLipidos.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                    {/* <TextFieldInput id='lipidos' type='text' label='Lípidos' /> */}
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        onChange={handleRequerimientoLipidos}
                                        value={requerimientoLipidos}
                                        id='requerimiento-lipidos'
                                        label={'Requerimiento Lípidos'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/día'
                                            : 'ml'}
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='requerimiento-lipidos' type='text' label='Requerimiento Lípidos' /> */}
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>
                            <Grid item container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                <CustomTextField
                                        onChange={handleOmegaven}
                                        value={omegaven}
                                        id='omegaven'
                                        label={'Omegaven'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/día'
                                            : 'ml'}
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='omegaven' type='text' label='Omegaven' /> */}
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                <CustomTextField
                                        onChange={handleDipeptiven}
                                        value={dipeptiven}
                                        id='dipeptiven'
                                        label={ 'Dipeptiven'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/día'
                                            : 'ml'}
                                        type='text'
                                    />
                                    {/*  <TextFieldInput id='dipeptiven' type='text' label='Dipeptiven' />*/}
                                </Grid>
                            </Grid>
                        </Box>


                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Stack>
    )
}


export default Macronutrientes
