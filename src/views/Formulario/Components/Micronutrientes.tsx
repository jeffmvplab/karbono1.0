import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

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
                    <TextField
                        id='sodio-total'
                        label='Sodio total'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='potasio-total'
                        label='Potasio total'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px'
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
                    <TextField
                        id='fosfato'
                        label='Fosfato'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='requerimiento-fosfato'
                        label='Requerimiento fosfato'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px'
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
                    <TextField
                        id='calcio'
                        label='Calcio'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='unidades '
                        label='Unidades '
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px',
                            marginRight:'10px',
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
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px',
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
                    <TextField
                        id='sulfato-de-magnesio'
                        label='Sulfato de magnesio'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='requerimiento-sulfato-de-magnesio'
                        label='Requerimiento sulfato de magnesio'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px'
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
                    <TextField
                        id='elementos-traza'
                        label='Elementos traza'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='requerimiento-traza'
                        label='Requerimiento traza'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px'
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
                    <TextField
                        id='vitaminas-hidrosolubes'
                        label='Vitaminas hidrosolubes'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='vitaminas-liposolubles'
                        label='Vitaminas liposolubles'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px'
                        }}
                    />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                        marginBottom:'50px'
                    }}
                >
                    <TextField
                        id='vitamina-c'
                        label='Vitamina C'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight: '10px'
                        }}
                    />
                    <TextField
                        id='acido-folico'
                        label='Acido fólico'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft: '10px'
                        }}
                    />
                </Box>
            </Grid>
        </>
    )
}

export default Micronutrientes
