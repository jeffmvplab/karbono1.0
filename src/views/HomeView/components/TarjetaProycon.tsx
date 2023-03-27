
import Image from 'next/image'
import { GlobalContext } from '@/context/GlobalContext';
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';

import { Box, Breadcrumbs, Grid, Button, Hidden, Typography, useStepContext } from '@mui/material'
import { mainRoutes } from '@/routes/routes';


export interface TarjetaProyconProps { }

const TarjetaProycon: React.FC<TarjetaProyconProps> = () => {

  const router = useRouter();



  return (

    <>
      <Grid container  >

        <Grid item xs={12} sm={12} md={5.30} lg={5.50} sx={{ maxHeight: '260', borderRadius: '20px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px', marginRight: '30px' }} className='box-shadow'>
          <Box display='flex'>
            <Box
              sx={{
                padding: '30px',
                width: '80%'
              }}
            >
              <Typography variant='h5' sx={{ color: '#2FC5C6', paddingBottom: '20px' }}>Prescripción</Typography>
              <Typography variant='body1' sx={{ paddingBottom: '30px' }}>Este módulo te permite crear, editar y consultar datos de prescripciones  médicas de manera fácil y rápida.</Typography>

              <Button
                onClick={() => router.push(mainRoutes.prescripcion)}
                sx={{ backgroundColor: '#2FC5C6', color: '#fff', padding: '10px 40px', borderRadius: '10px', ':hover': { backgroundColor: '#2fc5c1', color: '#e8e8e2' } }}>
                Ingresar
              </Button>
            </Box>
            <Hidden smDown >
              <Box sx={{ justifyContent: 'center', display: 'flex', paddingRight: '20px', alignItems: 'center', width: '20%' }}>
                <Image
                  src='/assets/icon-producción.png'
                  width={80}
                  height={80}
                  alt=''
                  style={{ marginTop: '5px', alignItems: 'center' }}

                ></Image>
              </Box>
            </Hidden>
          </Box>

        </Grid>
        <Grid item xs={12} sm={12} md={5.30} lg={5.50} className='box-shadow' sx={{ maxHeight: '260', width: '100%', borderRadius: '20px', marginRight: '30px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px', }}>
          <Box display='flex' width='100%'>
            <Box
              sx={{
                padding: '30px',
                width: '80%'
              }}
            >
              <Typography variant='h5' sx={{ color: '#372FC6', paddingBottom: '20px' }}>Configuración</Typography>
              <Typography variant='body1' sx={{ paddingBottom: '30px' }}>Este módulo te permite personalizar tu experiencia con nuestra aplicación. Puedes establecer tus preferencias de notificación para recordatorios de medicamento.</Typography>

              <Button sx={{ backgroundColor: '#372FC6', color: '#fff', padding: '10px 40px', borderRadius: '10px', ':hover': { backgroundColor: '#372FC6', color: '#e8e8e2' } }}>
                Ingresar
              </Button>
            </Box>
            <Hidden smDown>
              <Box sx={{ justifyContent: 'center', display: 'flex', paddingRight: '20px', alignItems: 'center', width: '20%' }}>
                <Image
                  src='/assets/icon-configuracion.png'
                  width={80}
                  height={80}
                  alt=''
                  style={{ marginTop: '5px', alignItems: 'center' }}

                ></Image>
              </Box>
            </Hidden>
          </Box>

        </Grid>


      </Grid >

    </>


  )
}

export default TarjetaProycon


