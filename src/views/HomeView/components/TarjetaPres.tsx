
import Image from 'next/image'
import { GlobalContext } from '@/context/GlobalContext';
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';

import { Box, Breadcrumbs, Grid, Button, Hidden, Typography, useStepContext } from '@mui/material'
import { mainRoutes } from '@/routes/routes';
import { ButtonCardsHome } from './ButtonCardsHome';
import { colorsKarbono } from '@/themes/colors';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';


export interface TarjetaPresProps { }

const TarjetaPres: React.FC<TarjetaPresProps> = () => {

  const { isAuth, authStatus, getMeRol } = useContext(GlobalContext);

  useEffect(() => {
    authStatus()
  })

  return (

    <>
        <Grid item xs={12} sm={12} md={5.30} lg={5.50} sx={{ maxHeight: '260', borderRadius: '20px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px', marginRight: '30px' }} className='box-shadow'>
          <Box display='flex'>
            <Box
              sx={{
                padding: '30px',
                width: '80%'
              }}
            >
              <Typography variant='h5' sx={{ color: '#2FC5C6', paddingBottom: '20px' }}>Prescripción</Typography>
              <Typography variant='body1' sx={{ paddingBottom: '30px' }}>Este módulo te permite consultar las prescripciones solicitadas por las IPS, y generar la etiqueta y PP.</Typography>

              <ButtonCardsHome
                route={isAuth 
                  ? (getMeRol()[0] === RolUsersKeysEnum.prescriptor) 
                    ? mainRoutes.prescripcion 
                    : mainRoutes.gestion 
                  : mainRoutes.login}
                text=' Ingresar'
                color={colorsKarbono.primary}
                id='prescripcion'
              />

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

    </>


  )
}

export default TarjetaPres


