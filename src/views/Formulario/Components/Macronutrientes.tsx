import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Macronutrientes = () => {
    return (
        <>
            <Grid container direction='column' marginTop='20px'>
                <Typography variant='h5' style={{ fontWeight: 700, color: '#372FC6', marginBottom: '20px' }} >Macronutrientes</Typography>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                    }}
                >
                    <TextField
                        id='tipo-prescripción*'
                        label='Tipo Prescripción*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight:'10px'
                        }}
                    />
                    <TextField
                        id='flujo-metabólico'
                        label='Flujo Metabólico'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft:'10px'
                        }}
                    />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='aminoácidos'
                        label='Aminoácidos*'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight:'10px'
                        }}
                    />
                    <TextField
                        id='requerimiento-aminoácidos'
                        label='Requerimiento aminoácidos'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft:'10px'
                        }}
                    />
                </Box>

                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='lípidos'
                        label='Lípidos'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight:'10px'
                        }}
                    />
                    <TextField
                        id='requerimiento-lipidos'
                        label='Requerimiento lípidos'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft:'10px'
                        }}
                    />
                </Box>

                
                <Box
                    display='flex'
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <TextField
                        id='omegaven'
                        label='Omegaven'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginRight:'10px'
                        }}
                    />
                    <TextField
                        id='dipeptiven'
                        label='Dipeptiven'
                        type='text'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        inputProps={{ style: { height: '17PX' } }}
                        sx={{
                            marginLeft:'10px'
                        }}
                    />
                </Box>


            </Grid>

        </>
    )
}


export default Macronutrientes
