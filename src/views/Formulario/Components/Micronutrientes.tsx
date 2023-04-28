import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid,Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FormulariosContext } from '../context/FormulariosContext';
import { LightTooltip } from '../style/styleToolTips';
import MenuItem from '@material-ui/core/MenuItem';

const tipoFosfato = [
    { value: 'Fosfato de sodio', label: 'Fosfato de sodio' },
    { value: 'Fosfato de potasio', label: 'Fosfato de potasio' }
]

const trazaAdulto = [
    { value: 'Nulanza', label: 'Nulanza' },
    { value: 'Sencitrace', label: 'Sencitrace' }
]

const trazaPediatrico = [
    { value: 'Peditrace', label: 'Peditrace' }
]

const trazaNeonato = [
    { value: 'Peditrace', label: 'Peditrace' }
]


const tipoCalcio = [
    { value: 'Gluconato de Calcio', label: 'Gluconato de Calcio' },
    { value: 'Calcio Elemental', label: 'Calcio Elemental' }
]

const tipoMagnesio = [
    { value: 'Sulfato de Magnesio', label: 'Sulfato de Magnesio' },
    { value: 'Magnesio Elemental', label: 'Magnesio Elemental' }
]

const hidrosolublesAdulto = [
    { value: 'Soluvit', label: 'Soluvit' },
    { value: 'Cernevit', label: 'Cernevit' }
]
const hidrosolublesPediatricos = [
    { value: 'Soluvit', label: 'Soluvit' },
    { value: 'Multi12Potasio', label: 'Multi12Potasio' }
]



const Micronutrientes = () => {

    const {
        tipoPrescripcion, tipoPaciente,
        stateAcordion3, setStateAcordion3, matches, handleAcordion3,

        sodioTotal, handleSodioTotal,
        potacioTotal, handlePotacioTotal,
        fosfato, handleFosfato,
        requerimientoFosfato, handleRequerimientoFosfato,
        calcio, handleCalcio,
        unidades, handleUnidades,
        reqCalcio, handleReqCalcio,
        magnesio, handleMagnesio,
        reqMagnesio, handleReqMagnesio,
        elementosTraza, handleElementosTraza,
        reqTraza, handleReqTraza,
        vitaminasHidrosolubles, handleVitaminasHidrosolubles,
        reqVitHidrosolubles, handleReqVitHidrosolubles,
        vitaminasLiposolubles, handleVitaminasLiposolubles,
        vitaminasC, handleVitaminasC,
        acidoFolico, handleAcidoFolico,

    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion3(matches);
    }, [matches])
    /////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'} paddingBottom={{ xs: '80px' }} >

            <Accordion onClick={() => !matches && handleAcordion3()} expanded={stateAcordion3} elevation={0}>
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Box sx={{ display: { sm: 'none' }, }}>
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
                        >Micronutrientes
                        </Typography >
                    </AccordionSummary>
                </Box>

                <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: colorsKarbono.secundary, }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Micronutrientes:
                </Typography >
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <AccordionDetails sx={{ maxHeight: '200px' }}>


                    <Grid container>

                        <Box display='flex' sx={{ width: '100%', }}>
                            <Grid container spacing={2}>

                                <LightTooltip
                                    title='Requerimiento recomendado de sodio en g/kg/día es:
                                    Neonatos: 2 - 5
                                    Pediátricos: 1 - 2
                                    Adultos: 1 - 2.'
                                    placement="top"
                                    arrow
                                >
                                    <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                        <CustomTextField
                                            onChange={handleSodioTotal}
                                            value={sodioTotal}
                                            id='Sodio-total'
                                            label={'Sodio total'}
                                            endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mEq/kg/día'
                                                : 'ml'}
                                            type='text'
                                        />

                                    </Grid>
                                </LightTooltip>

                                <LightTooltip
                                    title='Requerimiento recomendado de potasio en g/kg/día es:
                                    Neonatos: 2 - 4
                                    Pediátricos: 1 - 2
                                    Adultos: 1 - 2.'
                                    placement="top"
                                    arrow
                                >
                                    <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                        <CustomTextField
                                            onChange={handlePotacioTotal}
                                            value={potacioTotal}
                                            id='potasio-total'
                                            label={'Potasio total'}
                                            endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mEq/kg/día'
                                                : 'ml'}
                                            type='text'
                                        />
                                        {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                    </Grid>
                                </LightTooltip>
                            </Grid>
                            {/* <TextFieldInput id='Sodio-total' type='text' label='Sodio total' />
                    <TextFieldInput id='potasio-total' type='text' label='Potasio total' /> */}
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>
                                <LightTooltip
                                    title='Requerimiento recomendado de fósforo en mmol/kg/día en pacientes neonatales o pediátricos es:
                                    Neonatos: 1 - 2 
                                    Pediátricos: 0.3 - 0.6 
                                    Requerimiento recomendado de fósforo en mmol/día en pacientes adultos es:
                                    Adultos: 20 - 40'
                                    placement="top"
                                    arrow
                                >
                                    <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                        <CustomTextField
                                            onChange={handleFosfato}
                                            value={fosfato}
                                            defaulValue={fosfato}
                                            id='fosfato'
                                            label='Fosfato'
                                            type='text'
                                            select
                                        >
                                            {tipoFosfato.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </CustomTextField>

                                    </Grid>
                                </LightTooltip>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleRequerimientoFosfato}
                                        value={requerimientoFosfato}
                                        id='requerimiento-fosfato'
                                        label={'Requerimiento fosfato'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mmol/kg/día'
                                            : 'ml'}
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                </Grid>
                            </Grid>
                            {/* <TextFieldInput id='requerimiento-fosfato' type='text' label='Requerimiento fosfato' /> */}
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleCalcio}
                                        value={calcio}
                                        defaulValue={calcio}
                                        id='calcio'
                                        label='Calcio'
                                        type='text'
                                        select
                                    >
                                        {tipoCalcio.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>

                                    {/* <TextFieldInput id='calcio' type='text' label='Calcio' /> */}

                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleReqCalcio}
                                        value={reqCalcio}
                                        id='requerimiento_calcio'
                                        label={
                                            (calcio === 'Gluconato de Calcio')
                                                ? 'Gluconato de calcio'
                                                : 'Calcio Elemental'


                                        }
                                        endAdornament={
                                            (calcio === 'Gluconato de Calcio')
                                                ? (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'mg/kg/día'
                                                    : 'ml'
                                                : (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'mEq/kg/día'
                                                    : 'ml'

                                        }
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleMagnesio}
                                        value={magnesio}
                                        defaulValue={magnesio}
                                        id='magnesio'
                                        label='Magnesio'
                                        type='text'
                                        select
                                    >
                                        {tipoMagnesio.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>

                                    {/* <TextFieldInput id='sulfato-de-magnesio' type='text' label='Sulfato de magnesio' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleReqMagnesio}
                                        value={reqMagnesio}
                                        id='requerimiento-sulfato-de-magnesio'
                                        label={
                                            (magnesio === 'Sulfato de magnesio')
                                                ? 'Sulfato de magnesio'
                                                : 'Magnesio Elemental '
                                        }
                                        endAdornament={
                                            (magnesio === 'Sulfato de magnesio')
                                                ? (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'mg/kg/día'
                                                    : 'ml'
                                                : (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'mEq/kg/día'
                                                    : 'ml'
                                        }
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='requerimiento-sulfato-de-magnesio' type='text' label='Requerimiento sulfato de magnesio' /> */}
                                </Grid>

                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleElementosTraza}
                                        value={elementosTraza}
                                        defaulValue={elementosTraza}
                                        id='elementos-traza'
                                        label='Elementos traza'
                                        type='text'
                                        select
                                    >
                                        {
                                            (tipoPaciente === 'Adulto')
                                                ? trazaAdulto.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>))
                                                : (tipoPaciente === 'Pediatrico')
                                                    ? trazaPediatrico.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>))
                                                    : trazaNeonato.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>))
                                        }
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleReqTraza}
                                        value={reqTraza}
                                        id='requerimiento-traza'
                                        label={'Requerimiento traza'}
                                        endAdornament={
                                            (tipoPrescripcion === 'Por requerimientos')
                                                ? 'ml/día'
                                                : 'ml'
                                        }
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='requerimiento-traza' type='text' label='Requerimiento traza' /> */}
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleVitaminasHidrosolubles}
                                        value={vitaminasHidrosolubles}
                                        defaulValue={vitaminasHidrosolubles}
                                        id='vitaminas-hidrosolubes'
                                        label={'Vitaminas hidrosolubes'}
                                        type='text'
                                        select
                                    >
                                        {
                                            (tipoPaciente === 'Adulto')
                                                ? hidrosolublesAdulto.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))
                                                : (tipoPaciente === 'Pediatrico')
                                                    ? hidrosolublesPediatricos.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))
                                                    : hidrosolublesPediatricos.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))
                                        }
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleReqVitHidrosolubles}
                                        value={reqVitHidrosolubles}
                                        id='req-vitaminas-hidrosolubles'
                                        label={'Requerimientos Vitaminas hidrosolubes'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'ml/día'
                                            : 'ml'}
                                        type='text'
                                    />
                                </Grid>

                            </Grid>

                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>


                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleVitaminasLiposolubles}
                                        value={vitaminasLiposolubles}
                                        id='vitaminas-liposolubles'
                                        label={
                                            (tipoPaciente === 'Adulto')
                                                ? 'Vitalipid adult (ml/día)'
                                                : 'Vitalipid infant (ml/día)'
                                        }
                                        endAdornament={
                                            (tipoPaciente === 'Adulto')
                                                ? 'ml/día'
                                                : 'ml'
                                        }
                                        type='text'
                                    />
                                </Grid>

                            </Grid>

                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px', marginBottom: { xs: '50px', sm: '0px' } }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleVitaminasC}
                                        value={vitaminasC}
                                        id='vitamina-c'
                                        label={'Vitamina C'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mg/día'
                                            : 'ml'
                                        }
                                    />
                                    {/* <TextFieldInput id='vitamina-c' type='text' label='Vitamina C' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleAcidoFolico}
                                        value={acidoFolico}
                                        id='acido-folico'
                                        label={'Acido folico (mg/día)'}
                                        endAdornament={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mg/día'
                                            : 'ml'
                                        }
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='acido-folico' type='text' label='Acido folico' /> */}
                                </Grid>

                            </Grid>

                        </Box>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Stack>
    )
}

export default Micronutrientes
