import React, { useContext } from 'react';

import Image from 'next/image'

import { Box, Breadcrumbs, Grid, Button, Hidden, Typography, Stack } from '@mui/material'
import { ButtonCardsHome } from './ButtonCardsHome';
import { GlobalContext } from '@/context/GlobalContext';
import { RolUsersKeysEnum } from '@/utilities/enums/rol_user_keys.enum';


const TarjetaAyudas = () => {
  const {  getMeRol } = useContext(GlobalContext);
  
  return (

    <>

      <Grid item xs={12} sm={12} md={5.30} lg={5.50} sx={{ maxHeight: '260', maxWidth: '100%', borderRadius: '20px', backgroundColor: '#fff', marginTop: '50px', marginLeft: '20px', marginRight: '30px', marginBottom: '40px' }} className='box-shadow'>
        <Box display='flex'>
          <Box
            sx={{
              padding: '30px',
              width: '80%'
            }}
          >
            <Typography variant='h5' sx={{ color: '#656474', paddingBottom: '20px', fontWeight: 700 }}>Ayudas</Typography>
            <Typography variant='body1' sx={{ paddingBottom: '30px' }}> Este módulo te permite encontrar respuestas a preguntas y dudas que tengas acerca del uso de este aplicativo. </Typography>

            {/*<Button sx={{backgroundColor:'#2FC5C6',  color:'#fff', padding:'10px 40px', borderRadius:'10px', ':hover':{backgroundColor:'#2fc5c1', color:'#e8e8e2'}}}>
             Ingresar
          </Button>*/}
            <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'end'}>
              <ButtonCardsHome
                route={' https://purelife.cloud/preguntas-frecuentes/'}
                text='Ingresar'
                color={'#90AFB0'}
                id={(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
                  ? 'Pre_Ayudas'
                  : 'QF_Ayudas'
                }

              />
              {/* <Typography variant='body1'> *Proximamente</Typography> */}
            </Stack>


          </Box>
          <Hidden smDown >
            <Box sx={{ justifyContent: 'center', display: 'flex', paddingRight: '20px', alignItems: 'center', width: '20%' }}>
              <Image
                src='/assets/icon-ayudas.png'
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

export default TarjetaAyudas


