
import Image from 'next/image'
import { GlobalContext } from '@/context/GlobalContext';
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router';

import { Box, Breadcrumbs, Grid, Button, Hidden, Typography, useStepContext } from '@mui/material'
import { mainRoutes } from '@/routes/routes';
import { ButtonCardsHome } from './ButtonCardsHome';
import { colorsKarbono } from '@/themes/colors';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';


export interface TarjetaConfProps { }

const TarjetaConf: React.FC<TarjetaConfProps> = () => {

  const { isAuth, authStatus, getMeRol } = useContext(GlobalContext);

  useEffect(() => {
    authStatus()
  })

  return (

    <>

      <Grid item xs={12} sm={12} md={5.30} lg={5.50} className='box-shadow' sx={{ maxHeight: '260', width: '100%', borderRadius: '20px', marginRight: '30px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px', }}>
        <Box display='flex' width='100%'>
          <Box
            sx={{
              padding: '30px',
              width: '80%'
            }}
          >
            <Typography variant='h5' sx={{ color: '#372FC6', paddingBottom: '20px' }}>Configuración</Typography>

            <Typography variant='body1' sx={{ paddingBottom: '30px' }}>
              {Array.isArray(getMeRol()) && getMeRol()[0] === RolUsersKeysEnum.prescriptor
                ? 'Este módulo te permite editar los datos de tú pérfil. '
                : 'Este módulo te permite editar tus datos de creación de cuenta, y administrar tu equipo.'}

            </Typography>

            {/* <Button sx={{ backgroundColor: '#372FC6', color: '#fff', padding: '10px 40px', borderRadius: '10px', ':hover': { backgroundColor: '#372FC6', color: '#e8e8e2' } }}>
                Ingresar
              </Button> */}
            <ButtonCardsHome
              route={mainRoutes.mi_cuenta}
              text=' Ingresar'
              color={colorsKarbono.secundary}
              id={Array.isArray(getMeRol())
                && (getMeRol()[0] === RolUsersKeysEnum.prescriptor)
                ? 'Pre_Prescripcion'
                : 'QF_Configuracion'
              }
            />
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
    </>


  )
}

export default TarjetaConf


