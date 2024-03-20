import React, { useContext } from 'react';

import Image from 'next/image'

import { Box, Grid, Hidden, Stack, Typography } from '@mui/material'
import { mainRoutes } from '@/routes/routes';
import { colorsKarbono } from '@/themes/colors';
import { ButtonCardsHome } from './ButtonCardsHome';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';
import { GlobalContext } from '@/context/GlobalContext';
import { IoDocumentTextOutline } from "react-icons/io5";


const TarjetaArchivoPlano = () => {

  const { getMeRol } = useContext(GlobalContext);

  return (

    <Grid item xs={12} sm={12} md={5.30} lg={5.50} sx={{ maxHeight: '260', maxWidth: '100%', borderRadius: '20px', marginRight: '30px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px' }} className='box-shadow'>
      <Box display='flex'>
        <Box
          sx={{
            padding: '30px',
            width: '80%'
          }}
        >
          <Typography variant='h5' sx={{ color: 'black', paddingBottom: '20px' }}>Archivos Planos</Typography>
          <Typography variant='body1' sx={{ paddingBottom: '30px' }}>
            Este módulo permite la descarga de archivos planos.
          </Typography>
          {/* 
            <Button sx={{ backgroundColor: '#2FC5C6', color: '#fff', padding: '10px 40px', borderRadius: '10px', ':hover': { backgroundColor: '#2fc5c1', color: '#e8e8e2' } }}>
              Ingresar
            </Button> */}


          <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'end'}>
            <ButtonCardsHome
              route={mainRoutes.archivo_plano}
              text=' Ingresar'
              color={'black'}
              id='informes'
            />
            {/* <Typography variant='body1'> *Proximamente</Typography> */}
          </Stack>
        </Box>

        <Hidden smDown >
          <Box sx={{ justifyContent: 'center', display: 'flex', paddingRight: '20px', alignItems: 'center', width: '20%' }}>
            <IoDocumentTextOutline style={{fontSize:'80px'}} />
            {/* <Image
              src='/assets/decargar.png'
              width={80}
              height={80}
              alt=''
              style={{ marginTop: '5px', alignItems: 'center' }}

            ></Image> */}
          </Box>
        </Hidden>
      </Box>

    </Grid>

  )
}

export default TarjetaArchivoPlano



