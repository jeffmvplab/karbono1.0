import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FormulariosContext } from '../context/FormulariosContext';

const tipoFosfato = [
    { value: 'Fosfato de sodio', label: 'Fosfato de sodio' },
    { value: 'Fosfato de potasio', label: 'Fosfato de potasio' }
]

const elemento = [
    { value: 'Nulanza/Sencitrace', label: 'Nulanza/Sencitrace' },
    { value: 'Peditrace', label: 'Peditrace' }
]


const tipoCalcio = [
    { value: 'Gluconato de Calcio', label: 'Gluconato de Calcio' },
    { value: 'Calcio Elemental', label: 'Calcio Elemental' }
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

        sodioTotal, errorSodioTotal, messageErrorSodioTotal, handleSodioTotal,
        potacioTotal, errorPotacioTotal, messageErrorPotacioTotal, handlePotacioTotal,
        fosfato, errorFosfato, messageErrorFosfato, handleFosfato,
        requerimientoFosfato, errorRequerimientoFosfato, messageErrorRequerimientoFosfato, handleRequerimientoFosfato,
        calcio, errorCalcio, messageErrorCalcio, handleCalcio,
        unidades, errorUnidades, messageErrorUnidades, handleUnidades,
        requerimiento, errorRequerimiento, messageErrorRequerimiento, handleRequerimiento,
        sulfatoDeMagnesio, errorSulfatoDeMagnesio, messageErrorSulfatoDeMagnesio, handleSulfatoDeMagnesio,
        reqSulfatoDeMagnesio, errorReqSulfatoDeMagnesio, messageErrorReqSulfatoDeMagnesio, handleReqSulfatoDeMagnesio,
        elementosTraza, errorElementosTraza, messageErrorElementosTraza, handleElementosTraza,
        reqTraza, errorReqTraza, messageErrorReqTraza, handleReqTraza,
        vitaminasHidrosolubles, errorVitaminasHidrosolubles, messageErrorVitaminasHidrosolubles, handleVitaminasHidrosolubles,
        vitaminasLiposolubles, errorVitaminasLiposolubles, messageErrorVitaminasLiposolubles, handleVitaminasLiposolubles,
        vitaminasC, errorVitaminasC, messageErrorVitaminasC, handleVitaminasC,
        acidoFolico, errorAcidoFolico, messageErrorAcidoFolico, handleAcidoFolico,

    } = useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion3(matches);
    }, [matches])
    /////////////////////////////////////////////////////////////////////

    return (

        <Stack direction={'column'} paddingBottom={{ xs: '80px' }} >

            <Accordion onClick={() => !matches && handleAcordion3()} expanded={stateAcordion3} elevation={0}>
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
                    >Micronutrientes
                    </Typography >
                </AccordionSummary>

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

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleSodioTotal}
                                        value={sodioTotal}
                                        id='Sodio-total'
                                        label={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'Sodio total (mEq/kg/día)'
                                            : 'Sodio total (ml)'}
                                        type='text'
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handlePotacioTotal}
                                        value={potacioTotal}
                                        id='potasio-total'
                                        label={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'Potasio tota (mEq/kg/día)'
                                            : 'Potasio tota (ml)'}
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                </Grid>

                            </Grid>
                            {/* <TextFieldInput id='Sodio-total' type='text' label='Sodio total' />
                    <TextFieldInput id='potasio-total' type='text' label='Potasio total' /> */}
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleFosfato}
                                        value={fosfato}
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

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleRequerimientoFosfato}
                                        value={requerimientoFosfato}
                                        id='requerimiento-fosfato'
                                        label={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'Requerimiento fosfato (mmol/kg/día)'
                                            : 'Requerimiento fosfato (ml)'}
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

                                <Grid item xs={12} sm={6} md={3} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleUnidades}
                                        value={unidades}
                                        id='unidades '
                                        label={
                                            (tipoPaciente === 'Adulto')
                                                ? (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'Gluconato de calcio (mg/kg/día)'
                                                    : 'Gluconato de calcio (ml)'
                                                : (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'Calcio Elemental (mEq/kg/día)'
                                                    : 'Calcio Elemental (ml)'
                                        }
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleRequerimiento}
                                        value={requerimiento}
                                        id='requerimiento'
                                        label='Requerimiento'
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
                                        onChange={handleSulfatoDeMagnesio}
                                        value={sulfatoDeMagnesio}
                                        id='sulfato-de-magnesio'
                                        label='Sulfato de magnesio'
                                    />
                                    {/* <TextFieldInput id='sulfato-de-magnesio' type='text' label='Sulfato de magnesio' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        onChange={handleUnidades}
                                        value={unidades}
                                        id='requerimiento-sulfato-de-magnesio'
                                        label={
                                            (tipoPaciente === 'Adulto')
                                                ? (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'Req Sulfato de magnesio (mg/kg/día)'
                                                    : 'Req Sulfato de magnesio (ml)'
                                                : (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'Req Magnesio Elemental (mEq/kg/día)'
                                                    : 'Req Magnesio Elemental (ml)'
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
                                        id='elementos-traza'
                                        label='Elementos traza'
                                        type='text'
                                        select
                                    >
                                        {elemento.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleReqTraza}
                                        value={reqTraza}
                                        id='requerimiento-traza'
                                        label={
                                            (tipoPrescripcion === 'Por requerimientos')
                                                ? 'Requerimiento traza (ml/día)'
                                                : 'Requerimiento traza (ml)'
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
                                        id='vitaminas-hidrosolubes'
                                        label={
                                            (tipoPrescripcion === 'Por requerimientos')
                                                ? 'Vitaminas hidrosolubes (ml/día)'
                                                : 'Vitaminas hidrosolubes (ml)'
                                        }
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
                                        onChange={handleVitaminasLiposolubles}
                                        value={vitaminasLiposolubles}
                                        id='vitaminas-liposolubles'
                                        label={
                                            (tipoPaciente === 'Adulto')
                                                ? (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'Vitalipid adult (ml/día)'
                                                    : 'Vitalipid adult (ml)'
                                                : (tipoPrescripcion === 'Por requerimientos')
                                                    ? 'Vitalipid infant (ml/día)'
                                                    : 'Vitalipid infant (ml)'

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
                                        label={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'Vitamina C (mg/día)'
                                            : 'Vitamina C (ml)'
                                        }
                                    />
                                    {/* <TextFieldInput id='vitamina-c' type='text' label='Vitamina C' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        onChange={handleAcidoFolico}
                                        value={acidoFolico}
                                        id='acido-folico'
                                        label={(tipoPrescripcion === 'Por requerimientos')
                                            ? 'Acido folico (mg/día)'
                                            : 'Acido folico (ml)'
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
