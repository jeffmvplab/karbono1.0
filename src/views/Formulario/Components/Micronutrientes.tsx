import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import TextFieldInput from './TextField'



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
        <>
            <Grid container direction='column' marginTop='20px'>
                <Typography variant='h5' style={{ fontWeight: 700, color: '#372FC6', marginBottom: '20px' }} >Micronutrientes</Typography>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                    }}
                >
                    <TextFieldInput id='Sodio-total' type='text' label='Sodio total' />
                    <TextFieldInput id='potasio-total' type='text' label='Potasio total' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px'
                    }}
                >
                    <TextField
                        id='fosfato'
                        label='Fosfato'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    >
                        {fosfato.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextFieldInput id='requerimiento-fosfato' type='text' label='Requerimiento fosfato' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px'
                    }}
                >
                    <TextFieldInput id='calcio' type='text' label='Calcio' />

                    <TextField
                        id='unidades '
                        label='Unidades '
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '22PX' } }}
                        sx={{
                            marginRight: '10px',
                            width: '32.25%',
                        }}
                    />
                    <TextField
                        id='requerimiento'
                        label='Requerimiento'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '22PX' } }}
                        sx={{
                            marginRight: '10px',
                            width: '32.25%'
                        }}
                    />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px'
                    }}
                >
                    <TextFieldInput id='sulfato-de-magnesio' type='text' label='Sulfato de magnesio' />
                    <TextFieldInput id='requerimiento-sulfato-de-magnesio' type='text' label='Requerimiento sulfato de magnesio' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px'
                    }}
                >
                    <TextField
                        id='elementos-traza'
                        label='Elementos traza'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    >
                        {elemento.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextFieldInput id='requerimiento-traza' type='text' label='Requerimiento traza' />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px'
                    }}
                >
                    <TextField
                        id='vitaminas-hidrosolubes'
                        label='Vitaminas hidrosolubes'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                        }}
                    >
                        {elemento.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id='vitaminas-liposolubles'
                        label='Vitaminas liposolubles'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        select
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px',
                            marginRight:'10px'
                        }}
                    >
                        {elemento.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                        marginBottom: '50px'
                    }}
                >
                    <TextFieldInput id='vitamina-c' type='text' label='Vitamina C' />
                    <TextFieldInput id='acido-folico' type='text' label='Acido folico' />
                </Box>
            </Grid>
        </>
    )
}

export default Micronutrientes
