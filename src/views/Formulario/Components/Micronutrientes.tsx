import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const fosfato = [
    {
        value: 'Fosfato de sodio',
        label: 'Fosfato de sodio'
    },
    {
        value: 'Fosfato de potasio',
        label: 'Fosfato de potasio'
    }
]

const elemento = [
    {
        value: 'Adultos',
        label: 'Adultos'
    },
    {
        value: 'Pediátricos',
        label: 'Pediátricos'
    }
]


const Micronutrientes = () => {
    return (

        <Stack direction={'column'} paddingBottom={{ xs: '80px' }}>

            <Accordion defaultExpanded={true} elevation={0}>
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
                        paddingY={2}
                        style={{ fontWeight: 700, color: '#372FC6' }}
                    >Micronutrientes
                    </Typography >
                </AccordionSummary>

                <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: '#372FC6', }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Micronutrientes:
                </Typography >
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <AccordionDetails>


                    <Grid container direction='column'>

                        <Box display='flex' sx={{ width: '100%', }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        id='Sodio-total'
                                        label='Sodio total'
                                        type='text'
                                    />

                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        id='potasio-total'
                                        label='Potasio tota'
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
                                        id='fosfato'
                                        label='Fosfato'
                                        type='text'
                                        select
                                    >
                                        {fosfato.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>

                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        id='requerimiento-fosfato'
                                        label='Requerimiento fosfato'
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
                                        id='calcio'
                                        label='Calcio'
                                    />
                                    {/* <TextFieldInput id='calcio' type='text' label='Calcio' /> */}

                                </Grid>

                                <Grid item xs={12} sm={6} md={3} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        id='unidades '
                                        label='Unidades '
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} style={{ padding: '10px' }}>
                                    <CustomTextField
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
                                        id='sulfato-de-magnesio'
                                        label='Sulfato de magnesio'
                                    />
                                    {/* <TextFieldInput id='sulfato-de-magnesio' type='text' label='Sulfato de magnesio' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        id='requerimiento-sulfato-de-magnesio'
                                        label='Requerimiento sulfato de magnesio'
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
                                        id='requerimiento-traza'
                                        label='Requerimiento traza'
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
                                        id='vitaminas-hidrosolubes'
                                        label='Vitaminas hidrosolubes'
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
                                        id='vitaminas-liposolubles'
                                        label='Vitaminas liposolubles'
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

                            </Grid>

                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px', marginBottom: '50px' }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        id='vitamina-c'
                                        label='Vitamina C'
                                    />
                                    {/* <TextFieldInput id='vitamina-c' type='text' label='Vitamina C' /> */}
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        id='acido-folico'
                                        label='Acido folico'
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
