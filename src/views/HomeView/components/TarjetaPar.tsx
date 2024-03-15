import React from 'react';

import Image from 'next/image'

import { Box, Breadcrumbs, Grid, Button, Hidden, Typography } from '@mui/material'
import { mainRoutes } from '@/routes/routes';
import { colorsKarbono } from '@/themes/colors';
import { ButtonCardsHome } from './ButtonCardsHome';


const TarjetaPar = () => {
  return (
      <Grid item xs={12} sm={12} md={5.30} lg={5.50} sx={{ maxHeight: '260', maxWidth: '100%', borderRadius: '20px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px', marginRight: '30px' }} className='box-shadow'>
        <Box display='flex' width='100%'>
          <Box
            sx={{
              padding: '30px',
              width:'80%'
            }}>
            <Typography variant='h5'  sx={{ color: '#372FC6', paddingBottom: '20px' }}>Registros</Typography>
            <Typography variant='body1' sx={{ paddingBottom: '30px' }}>Este módulo te permite consultar los registros (acciones) de cada caso de prescripción solicitada por las IPS.</Typography>
{/* 
            <Button sx={{ backgroundColor: '#372FC6', color: '#fff', padding: '10px 40px', borderRadius: '10px', ':hover': { backgroundColor: '#372FC6', color: '#e8e8e2' } }}>
              Ingresar
            </Button> */}
             <ButtonCardsHome
              route={mainRoutes.auditoria}
              text=' Ingresar'
              color={colorsKarbono.secundary}
              id='parametros'
              />
          </Box>
          <Hidden smDown >
            <Box sx={{ justifyContent: 'center', display: 'flex', paddingRight: '20px', alignItems: 'center', width:'20%' }}>
              <Image
                src='/assets/icon-parametros.png' 
                width={80}
                height={80}
                alt=''
                style={{ marginTop: '5px', alignItems: 'center' }}

              ></Image>
            </Box>
          </Hidden>
        </Box>

      </Grid>

  )
}

export default TarjetaPar



