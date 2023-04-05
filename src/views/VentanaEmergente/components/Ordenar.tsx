import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Suscripciones from './Suscripciones';





const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1480,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const Ordenar = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid container spacing={0} direction={'column'} sx={{ justifyContent: 'center', marginTop: '100px', alignItems: 'center', minHeight: '86.50vh', padding: '4', backgroundColor: '#5E58D0' }}>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Grid container sx={style} style={{}}>
                        <Grid item display={'flex'}>
                            <Box sx={{ width: '50%', paddingTop: '20px', marginLeft: '10px' }}>
                                <Typography variant='h5' sx={{ fontWeight: 700, color: '#000' }}>Ordenar</Typography>
                                <p style={{ color: '#656474', lineHeight: '20px' }}>Hola!, estás intentando acceder a una función que no incluye esta versión<br /> gratuita de PureLife (Plan básico).</p>
                                <p style={{ color: '#656474', lineHeight: '20px' }}>Sin embargo, podrás ordenar y comunicarte directamente con una Central de Mezclas autorizada en el país, adquiriendo nuestro plan estándar o premium.</p>
                                <p style={{ color: '#656474', lineHeight: '20px' }}> A continuación te presentamos un comparativo entre las coberturas y funcionalidades de las suscripciones que hemos creado para tí!.</p>
                            </Box>
                            <Box sx={{ width: '50%', justifyContent: 'end', display: 'flex' }}>
                                <Image
                                    src='/assets/icono-modal.png'
                                    width={150}
                                    height={250}
                                    alt=''
                                    style={{ alignItems: 'center', marginLeft: '10px', paddingTop: '2px', paddingBottom: '2px', paddingLeft: '5px', marginRight: '10px' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item width={'100%'} sx={{ backgroundColor: '#F0F0F0', marginTop: '15px', borderRadius: '10px', paddingBottom: '20px' }} >
                            <Typography variant='h6' textAlign={'center'} sx={{ fontWeight: '700', paddingTop: '20px' }}>Suscripciones Mensuales PureLife</Typography>
                            <Suscripciones />
                        </Grid>
                        <Grid item width={'100%'} sx={{  marginTop: '15px', borderRadius: '10px', paddingBottom: '20px' }} >
                        <p style={{ color: '#656474', lineHeight: '20px', fontSize:'20px' }}>¿Qué esperas para suscribirte y aprovechar todos los beneficios <br/> que trae esta herramienta para tí?</p>
                        </Grid>
                    </Grid>

                </Modal>
            </Grid>
        </>
    )
}

export default Ordenar
