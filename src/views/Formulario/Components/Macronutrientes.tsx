import { colorsKarbono } from '@/themes/colors'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, MenuItem, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CustomTextField from './CustomTextField'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FormulariosContext } from '../context/FormulariosContext';


const tipoPrescripcion = [
    { value: 'Por requerimientos', label: 'Por requerimientos' },
    { value: 'Por volúmenes', label: 'Por volúmenes' }
]

const aminoacidos = [
    { value: 'Adultos', label: 'Adultos' },
    { value: 'Pediátricos', label: 'Pediátricos' }
]


const Macronutrientes = () => {

    const{stateAcordion2,setStateAcordion2,matches,handleAcordion2}=useContext(FormulariosContext)

    useEffect(() => {
        setStateAcordion2(matches);
    }, [matches])

    return (

        <Stack direction={'column'}>

            <Accordion onClick={() =>handleAcordion2()} expanded={stateAcordion2} elevation={0}>
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

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }}>
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

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
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

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
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

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
                                    <CustomTextField
                                        id='lipidos'
                                        label='Lípidos'
                                        type='text'
                                    />
                                    {/* <TextFieldInput id='lipidos' type='text' label='Lípidos' /> */}
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
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
                            <Grid item container spacing={2}>

                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
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
                                <Grid item xs={12} sm={6} md={6} style={{ padding: '10px' }} >
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
