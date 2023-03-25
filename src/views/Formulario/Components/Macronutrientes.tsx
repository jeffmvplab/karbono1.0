import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const tipoPrescripcion = [
    {
        value: 'Por requerimientos ',
        label: 'Por requerimientos '
    },
    {
        value: 'Por volúmenes',
        label: 'Por volúmenes'
    }
]

const aminoacidos = [
    {
        value: 'Adultos',
        label: 'Adultos'
    },
    {
        value: 'Pediátricos',
        label: 'Pediátricos'
    }
]


const Macronutrientes = () => {
    return (

        <Stack direction={'column'}>

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
                    >Macronutrientes
                    </Typography >
                </AccordionSummary>

                <Typography
                    variant='h6'
                    paddingY={2}
                    style={{ fontWeight: 700, color: '#372FC6', }}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >Macronutrientes:
                </Typography >
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <AccordionDetails>

                    <Grid container direction='column' >

                        <Box display='flex' sx={{ marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>

                                    <CustomTextField
                                        id='tipo-prescripción*'
                                        label='Tipo Prescripción*'
                                        select
                                    >
                                        {tipoPrescripcion.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>

                                </Grid>

                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }}>
                                    <CustomTextField
                                        id='flujo-metabolico'
                                        label='Flujo metabólico'
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='flujo-metabolico' type='text' label='Flujo metabólico' /> */}
                                </Grid>

                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='aminoácidos'
                                        label='Aminoácidos*'
                                        type='text'
                                        select
                                    >
                                        {aminoacidos.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomTextField>
                                </Grid>

                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='requerimiento-aminoacidos'
                                        label='Requerimiento aminoácidos'
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='requerimiento-aminoacidos' type='text' label='Requerimiento aminoácidos' /> */}
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ marginTop: '20px', }}>
                            <Grid container spacing={2}>

                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='lipidos'
                                        label='Lípidos'
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='lipidos' type='text' label='Lípidos' /> */}
                                </Grid>
                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='requerimiento-lipidos'
                                        label='Requerimiento Lípidos'
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='requerimiento-lipidos' type='text' label='Requerimiento Lípidos' /> */}
                                </Grid>
                            </Grid>
                        </Box>

                        <Box display='flex' sx={{ width: '100%', marginTop: '20px' }}>
                            <Grid container spacing={2}>

                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <TextField
                                        id='omegaven'
                                        label='Omegaven'
                                        type='text'
                                        variant='outlined'
                                        color='secondary'
                                        fullWidth
                                    />
                                    {/* <TextFieldInput id='omegaven' type='text' label='Omegaven' /> */}
                                </Grid>
                                <Grid xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <TextField
                                        id='dipeptiven'
                                        label='Dipeptiven'
                                        type='text'
                                        variant='outlined'
                                        color='secondary'
                                        fullWidth
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
