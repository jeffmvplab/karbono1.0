
import { Box, Grid, MenuItem, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomTextField from './CustomTextField'
import { FormulariosContext } from '../context/FormulariosContext';
import { LightTooltip } from '../style/styleToolTips';
import { convertComaAPunto } from '@/views/ReportePrescripcion/data/comaTopoint';
import { getDextrosa } from '@/views/ReportePrescripcion/data/functionsParams';

const aminoAdultos = [
    { value: 'Aminoven 15% SE', label: 'Aminoven 15% SE' },
    { value: 'TravasolPlus 15% SE', label: 'TravasolPlus 15% SE' },
    { value: 'Aminoplasmal 10% SE', label: 'Aminoplasmal 10% SE' },
    { value: 'Aminoplasmal 10% CE', label: 'Aminoplasmal 10% CE' },
    // { value: 'Aminosteril', label: 'Aminosteril N-Hepa 8%' },
]

const aminoPediatrico = [
    { value: 'Aminoven Inft 10% SE', label: 'Aminoven Inft 10% SE' },
    { value: 'Primene 10% SE', label: 'Primene 10% SE' },
    // { value: 'Aminoplasmal', label: 'Aminoplasmal 10%' },
    // { value: 'Trophamine', label: 'Trophamine' },
]

const tiposLipidos = [
    { value: 'Smoflipid 20%', label: 'Smoflipid 20%' },
    { value: 'Clinoleic 20%', label: 'Clinoleic 20%' },
    { value: 'Lipoplus 20%', label: 'Lipoplus 20%' },
    { value: 'Lipofundin MCT/LCT 20%', label: 'Lipofundin MCT/LCT 20%' },
    // { value: 'Lipovenoes', label: 'Lipovenoes' },
    // { value: 'LipovenoesMCT', label: 'LipovenoesMCT' },
    // { value: 'Fresomega', label: 'Fresomega' },
]


const Macronutrientes = () => {

    const {
        tipoPaciente,
        setStateAcordion2, matches,
        tipoPrescripcion,
        flujoMetabolico, handleFlujoMetabolico, messageErrorFlujoMetabolico,
        aminoacidos, handleAminoacidos,
        dextrosa, handleDextrosa, messageErrorDextrosa,
        requerimientoAminoacidos, handleRequerimientoAminoacidos, messageErrorRequerimientoAminoacidos,
        lipidos, handleLipidos,
        requerimientoLipidos, handleRequerimientoLipidos,
        omegaven, handleOmegaven,
        dipeptiven, handleDipeptiven,
        getPrescriptions, pesoKg, tiempoDeInfucion
    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion2(matches);
    }, [matches])


    const getDextrosaByFlujo = (flujo: string) => {
        console.log('DDDD:', parseFloat(flujo), parseFloat(pesoKg))

        const result = (parseFloat(flujo) * ((tiempoDeInfucion * 60) / 1000)).toFixed(2).toString()

        if (flujo !== '') {
            return result;
        } else {
            return 0.00
        }
    }

    return (

        <Stack direction={'column'}
            height={'100%'}
            paddingBottom={{ xs: '80px' }}
            padding={1}
            overflow={'scroll'}>

            {/* <Accordion
                //  expanded={stateAcordion2}
                expanded={true}
                elevation={0}
            > */}
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
                        <Typography
                            onClick={() => !matches && handleAcordion2()}
                            fontSize={16}
                            // paddingY={2}
                            style={{ fontWeight: 700, color: colorsKarbono.secundary }}
                        >Macronutrientes
                        </Typography >
                    </AccordionSummary>
                </Box> */}
            {/* 
            <Typography
                variant='h6'
                paddingY={2}
                style={{ fontWeight: 700, color: colorsKarbono.secundary, }}
                sx={{ display: { xs: 'none', sm: 'flex' } }}
            >Macronutrientes:
            </Typography > */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* <AccordionDetails> */}

            <Grid container direction='column' >
                {/* <Box display='flex' sx={{ marginTop: '20px' }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                onChange={handleTipoPrescripcion}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={tipoPrescripcion}
                                defaulValue={tipoPrescripcion}
                                id='tipo-prescripción*'
                                label='Tipo Prescripción*'
                                select={true}
                                helperText={messageErrorTipoPrescripcion}
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
                </Box> */}

                <Box display='flex' sx={{ marginTop: '20px' }}>
                    <Grid container>

                        <LightTooltip
                            title='Requerimiento recomendado de carbohidratos en mg/kg/min es:
                                    Neonatos: 4 - 12  
                                    Pediátricos: 5 - 10
                                    Adultos: 1 - 4 '
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                <CustomTextField
                                    onChange={handleFlujoMetabolico}
                                    onClick={getPrescriptions}
                                    onKeyPress={getPrescriptions}
                                    disabled={tipoPrescripcion !== 'Por requerimientos'}
                                    value={
                                        tipoPrescripcion !== 'Por requerimientos'
                                            ? '-'
                                            : convertComaAPunto(flujoMetabolico)}
                                    id='flujo-metabolico'
                                    label={'Flujo metabólico*'}
                                    endAdornament={
                                        <Typography
                                            textTransform={'lowercase'}>
                                            {(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mg/kg/min'
                                                : 'ml'}
                                        </Typography>
                                    }
                                    type='text'
                                // helperText={messageErrorFlujoMetabolico}
                                />
                            </Grid>
                        </LightTooltip>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                onChange={handleDextrosa}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                disabled={tipoPrescripcion === 'Por requerimientos'}
                                value={
                                    tipoPrescripcion === 'Por requerimientos'
                                        ? getDextrosaByFlujo(flujoMetabolico)
                                        : convertComaAPunto(dextrosa)
                                }
                                id='dextrosa'
                                label={'Dextrosa*'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/dia'
                                            : 'ml'}
                                    </Typography>
                                }
                                type='text'
                            // helperText={messageErrorDextrosa}
                            />

                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ marginTop: '20px' }}>
                    <Grid container>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleAminoacidos}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
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
                                            <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                        : (tipoPaciente === 'Pediatrico')
                                            ? aminoPediatrico.map((option) => (
                                                <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>))
                                            : aminoPediatrico.map((option) => (
                                                <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                }
                            </CustomTextField>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleRequerimientoAminoacidos}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(requerimientoAminoacidos)}
                                id='requerimiento-aminoacidos'
                                label={(tipoPrescripcion === 'Por requerimientos')
                                    ? 'Requerimiento aminoácidos*'
                                    : 'Volumen aminoácidos*'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/día'
                                            : 'ml'}
                                    </Typography>
                                }
                                type='text'
                                helperText={messageErrorRequerimientoAminoacidos}
                            />
                            {/* <TextFieldInput id='requerimiento-aminoacidos' type='text' label='Requerimiento aminoácidos' /> */}
                        </Grid>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ marginTop: '20px', }}>
                    <Grid container>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleLipidos}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(lipidos)}
                                defaulValue={convertComaAPunto(lipidos)}
                                id='lipidos'
                                label='Lípidos'
                                type='text'
                                select={true}
                            >
                                {tiposLipidos.map((option) => (
                                    <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>
                            {/* <TextFieldInput id='lipidos' type='text' label='Lípidos' /> */}
                        </Grid>

                        <LightTooltip
                            title='Requerimiento recomendado de lípidos en g/kg/día es:
                                    Neonatos: 1 - 4 
                                    Pediátricos: 2 - 3
                                    Adultos: 1 - 2.5 '
                            placement="top"
                            arrow
                        >
                            <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                <CustomTextField
                                    onChange={handleRequerimientoLipidos}
                                    value={convertComaAPunto(requerimientoLipidos)}
                                    id='requerimiento-lipidos'
                                    label={(tipoPrescripcion === 'Por requerimientos')
                                        ? 'Requerimiento Lípidos*'
                                        : 'Volumen Lípidos*'}
                                    endAdornament={
                                        <Typography
                                            textTransform={'lowercase'}>
                                            {(tipoPrescripcion === 'Por requerimientos')
                                                ? 'g/kg/día'
                                                : 'ml'}
                                        </Typography>
                                    }
                                    type='text'
                                />
                                {/* <TextFieldInput id='requerimiento-lipidos' type='text' label='Requerimiento Lípidos' /> */}
                            </Grid>
                        </LightTooltip>
                    </Grid>
                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>
                    <Grid item container>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleOmegaven}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(omegaven)}
                                id='omegaven'
                                label={'Omegaven'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/día'
                                            : 'ml'}
                                    </Typography>
                                }
                                type='text'
                            />
                            {/* <TextFieldInput id='omegaven' type='text' label='Omegaven' /> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                            <CustomTextField
                                onChange={handleDipeptiven}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(dipeptiven)}
                                id='dipeptiven'
                                label={'Dipeptiven'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'g/kg/día'
                                            : 'ml'}
                                    </Typography>
                                }
                                type='text'
                            />
                            {/*  <TextFieldInput id='dipeptiven' type='text' label='Dipeptiven' />*/}
                        </Grid>
                    </Grid>
                </Box>


            </Grid>
            {/* </AccordionDetails> */}
            {/* </Accordion> */}
        </Stack>
    )
}


export default Macronutrientes
