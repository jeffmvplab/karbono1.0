import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FormulariosContext } from '../context/FormulariosContext';
import { LightTooltip } from '../style/styleToolTips';
import { getPotacioTotal, getSodioTotal } from '@/views/ReportePrescripcion/data/functionsParams';
import { convertComaAPunto } from '@/views/ReportePrescripcion/data/comaTopoint';

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
    { value: 'Multi12Potasio', label: 'Multi12K1' }
]


// const sumVit = [
//     { value: 'Sumar Vitaminas', label: 'Sumar Vitaminas' },
//     { value: 'No Sumar Vitaminas', label: 'No Sumar Vitaminas' }
// ]

const Micronutrientes = () => {

    const {
        tipoPrescripcion, tipoPaciente,
        prescriptionSave,
        sodioTotal, handleSodioTotal,
        potacioTotal, handlePotacioTotal,
        fosfato, handleFosfato,
        requerimientoFosfato, handleRequerimientoFosfato,
        calcio, handleCalcio,
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
        soluvid_Vitalipid, handleSoluvid_Vitalipid,
        getPrescriptions
    } = useContext(FormulariosContext)

    // useEffect(() => {
    //     setStateAcordion3(matches);
    // }, [matches])

    // console.log('Magnesio:', magnesio)
    /////////////////////////////////////////////////////////////////////
    const [sumaVit, setSumaVit] = useState<string>('No Sumar Vitaminas');


    return (

        <Stack
            direction={'column'}
            height={'100%'}
            paddingBottom={{ xs: '80px' }}
            padding={1}
            paddingTop={3}
            overflow={'scroll'}>

            {/* <Accordion 
            // expanded={stateAcordion3} 
            expanded={true} 
            elevation={0}> */}
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
                            onClick={() => !matches && handleAcordion3()}
                            fontSize={16}
                            // paddingY={2}
                            style={{ fontWeight: 700, color: colorsKarbono.secundary }}
                        >Micronutrientes
                        </Typography > */}
            {/* </AccordionSummary>
                </Box> */}

            {/* <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: colorsKarbono.secundary, }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Micronutrientes:
                </Typography > */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* <AccordionDetails 
                 sx={{ 
                    minHeight: '500px'
                     }}>
 */}

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
                                <Stack direction={'row'}>
                                    <Grid item xs={8} sm={8} md={8} style={{ paddingRight: '10px' }}>
                                        <CustomTextField
                                            onChange={handleSodioTotal}
                                            onClick={getPrescriptions}
                                            onKeyPress={getPrescriptions}
                                            value={convertComaAPunto(sodioTotal)}
                                            id='Cloruro de Sodio 2MEQ/ML'
                                            label={'Cloruro de Sodio 2MEQ/ML'}
                                            endAdornament={
                                                <Typography
                                                    textTransform={'lowercase'}>
                                                    {(tipoPrescripcion === 'Por requerimientos')
                                                        ? 'mEq/kg/día'
                                                        : 'ml'}
                                                </Typography>
                                            }
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <CustomTextField
                                            disabled={true}
                                            value={getSodioTotal(prescriptionSave!).toFixed(2)}
                                            id='Sodio-total'
                                            label={'Sodio-total'}
                                            endAdornament={
                                                <Typography
                                                    textTransform={'lowercase'}>
                                                    {(tipoPrescripcion === 'Por requerimientos')
                                                        ? 'mEq/kg/día'
                                                        : 'ml'}
                                                </Typography>
                                            }
                                            type='text'
                                        />
                                    </Grid>
                                </Stack>

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
                                <Stack direction={'row'}>
                                    <Grid item xs={8} sm={8} md={8} style={{ paddingRight: '10px' }}>
                                        <CustomTextField
                                            onChange={handlePotacioTotal}
                                            onClick={getPrescriptions}
                                            onKeyPress={getPrescriptions}
                                            value={convertComaAPunto(potacioTotal)}
                                            id='Cloruro de Potasio 2MEQ/ML'
                                            label={'Cloruro de Potasio 2MEQ/ML'}
                                            endAdornament={
                                                <Typography
                                                    textTransform={'lowercase'}>
                                                    {(tipoPrescripcion === 'Por requerimientos')
                                                        ? 'mEq/kg/día'
                                                        : 'ml'}
                                                </Typography>
                                            }
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <CustomTextField
                                            disabled={true}
                                            value={getPotacioTotal(prescriptionSave!).toFixed(2)}
                                            id='potasio-total'
                                            label={'Potasio total'}
                                            endAdornament={
                                                <Typography
                                                    textTransform={'lowercase'}>
                                                    {(tipoPrescripcion === 'Por requerimientos')
                                                        ? 'mEq/kg/día'
                                                        : 'ml'}
                                                </Typography>
                                            }
                                            type='text'
                                        />
                                    </Grid>
                                </Stack>
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
                                    onClick={getPrescriptions}
                                    onKeyPress={getPrescriptions}
                                    value={fosfato}
                                    defaulValue={fosfato}
                                    id='fosfato'
                                    label='Fosfato'
                                    type='text'
                                    select
                                >
                                    {tipoFosfato.map((option) => (
                                        <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </CustomTextField>

                            </Grid>
                        </LightTooltip>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <CustomTextField
                                onChange={handleRequerimientoFosfato}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(requerimientoFosfato)}
                                id='requerimiento-fosfato'
                                label={'Requerimiento fosfato'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mmol/kg/día'
                                            : 'ml'}
                                    </Typography>
                                }
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
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={calcio}
                                defaulValue={calcio}
                                id='calcio'
                                label='Calcio'
                                type='text'
                                select
                            >
                                {tipoCalcio.map((option) => (
                                    <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>

                            {/* <TextFieldInput id='calcio' type='text' label='Calcio' /> */}

                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <CustomTextField
                                onChange={handleReqCalcio}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(reqCalcio)}
                                id='requerimiento_calcio'
                                label={calcio}
                                endAdornament={
                                    (calcio === 'Gluconato de Calcio')

                                        ? <Typography
                                            textTransform={'lowercase'}>
                                            {(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mg/kg/día'
                                                : 'ml'}
                                        </Typography>
                                        : <Typography
                                            textTransform={'lowercase'}>
                                            {(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mEq/kg/día'
                                                : 'ml'
                                            }
                                        </Typography>
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
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={magnesio}
                                defaulValue={magnesio}
                                id='magnesio'
                                label='Magnesio'
                                type='text'
                                select
                            >
                                {tipoMagnesio.map((option) => (
                                    <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </CustomTextField>

                            {/* <TextFieldInput id='sulfato-de-magnesio' type='text' label='Sulfato de magnesio' /> */}
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                onChange={handleReqMagnesio}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(reqMagnesio)}
                                id='requerimiento-sulfato-de-magnesio'
                                label={convertComaAPunto(magnesio)}
                                endAdornament={
                                    (magnesio === 'Sulfato de Magnesio')

                                        ? <Typography
                                            textTransform={'lowercase'}>
                                            {(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mg/kg/día'
                                                : 'ml'
                                            }
                                        </Typography>

                                        : <Typography
                                            textTransform={'lowercase'}>
                                            {(tipoPrescripcion === 'Por requerimientos')
                                                ? 'mEq/kg/día'
                                                : 'ml'
                                            }
                                        </Typography>
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
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={elementosTraza}
                                defaulValue={elementosTraza}
                                id='elementos-traza'
                                label={'Elementos traza'}
                                type='text'
                                select
                            >
                                {
                                    (tipoPaciente === 'Adulto')
                                        ? trazaAdulto.map((option) => (
                                            <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))

                                        : trazaPediatrico.map((option) => (
                                            <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))
                                }
                            </CustomTextField>

                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <CustomTextField
                                onChange={handleReqTraza}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(reqTraza)}
                                id='requerimiento-traza'
                                label={'Requerimiento traza'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'ml/día'
                                            : 'ml'
                                        }
                                    </Typography>
                                }
                                type='text'
                            />
                            {/* <TextFieldInput id='requerimiento-traza' type='text' label='Requerimiento traza' /> */}
                        </Grid>
                    </Grid>
                </Box>

                {/* <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                onChange={(e) => setSumaVit(e.target.value)}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={sumaVit}
                                defaulValue={soluvid_Vitalipid !== '' ? 'Sumar Vitaminas' : 'No Sumar Vitaminas'}
                                id='sumar vit'
                                label={'Sumar Vitaminas'}
                                type='text'
                                select
                            >
                                {
                                    sumVit.map((option) => (
                                        <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))
                                }
                            </CustomTextField>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                        </Grid>
                    </Grid>
                </Box> */}

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                // disabled={sumaVit === 'Sumar Vitaminas'}
                                onChange={handleVitaminasHidrosolubles}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
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
                                            <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                        : (tipoPaciente === 'Pediatrico')
                                            ? hidrosolublesPediatricos.map((option) => (
                                                <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                            : hidrosolublesPediatricos.map((option) => (
                                                <MenuItem sx={{ backgroundColor: 'white' }} key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                }
                            </CustomTextField>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                // disabled={sumaVit === 'Sumar Vitaminas'}
                                onChange={handleReqVitHidrosolubles}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(reqVitHidrosolubles)}
                                // disabled={!sumVit}
                                id='req-vitaminas-hidrosolubles'
                                label={'Requerimientos Vitaminas hidrosolubes'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'ml/día'
                                            : 'ml'
                                        }
                                    </Typography>
                                }
                                type='text'
                            />
                        </Grid>

                    </Grid>

                </Box>

                <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <CustomTextField
                                disabled={sumaVit === 'Sumar Vitaminas'}
                                onChange={handleVitaminasLiposolubles}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                // disabled={!sumVit}
                                value={convertComaAPunto(vitaminasLiposolubles)}
                                id='vitaminas-liposolubles'
                                label={
                                    (tipoPaciente === 'Adulto')
                                        ? 'Vitalipid adult (ml/día)'
                                        : 'Vitalipid infant (ml/día)'
                                }
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'ml/día'
                                            : 'ml'
                                        }
                                    </Typography>
                                }
                                type='text'
                            />

                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                            <CustomTextField
                                // disabled={sumaVit !== 'Sumar Vitaminas'}
                                onChange={handleSoluvid_Vitalipid}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(soluvid_Vitalipid)}
                                // disabled={!sumVit}
                                id='Soluvit/Vitalipit'
                                label={'Soluvit/Vitalipit'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'ml/día'
                                            : 'ml'
                                        }
                                    </Typography>
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
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(vitaminasC)}
                                id='vitamina-c'
                                label={'Vitamina C'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mg/día'
                                            : 'ml'
                                        }
                                    </Typography>
                                }
                            />
                            {/* <TextFieldInput id='vitamina-c' type='text' label='Vitamina C' /> */}
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                            <CustomTextField
                                onChange={handleAcidoFolico}
                                onClick={getPrescriptions}
                                onKeyPress={getPrescriptions}
                                value={convertComaAPunto(acidoFolico)}
                                id='acido-folico'
                                label={'Acido folico (mg/día)'}
                                endAdornament={
                                    <Typography
                                        textTransform={'lowercase'}>
                                        {(tipoPrescripcion === 'Por requerimientos')
                                            ? 'mg/día'
                                            : 'ml'
                                        }
                                    </Typography>
                                }
                                type='text'
                            />
                            {/* <TextFieldInput id='acido-folico' type='text' label='Acido folico' /> */}
                        </Grid>

                    </Grid>

                </Box>
            </Grid>
            {/* </AccordionDetails> */}
            {/* </Accordion> */}
        </Stack>
    )
}

export default Micronutrientes
