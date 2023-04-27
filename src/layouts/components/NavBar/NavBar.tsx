import Link from 'next/link';
import Image from 'next/image';
import { AppBar, IconButton, Toolbar, Typography, Hidden, Grid, Box, Stack } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FadeMenu from './components/BotonPerfil';
import { GlobalContext } from '@/context/GlobalContext';
import React, { useEffect } from 'react';
import { mainRoutes } from '@/routes/routes';
import { CustomButton } from '@/components/CustomButton';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import { colorsKarbono } from '@/themes/colors';


export const NavBar = () => {


  const { isAuth,authStatus } = React.useContext(GlobalContext)

  // console.log('IsAuth:', isAuth)

  const router = useRouter();
  // console.log('Router', router.asPath)
 
  useEffect(()=>{
   authStatus();
  },[])

  return (
    <AppBar color='inherit' position='sticky' elevation={0}>
      <Toolbar>
        <Hidden mdUp>
          <Button
            onClick={() => { router.push(mainRoutes.home); console.log('Click') }}
          >
            <Image
              src={(router.asPath === mainRoutes.login || router.asPath === mainRoutes.register)
                ? '/assets/1.png'
                : '/assets/iconMenu.png'
              }
              width={
                (router.asPath === mainRoutes.login || router.asPath === mainRoutes.register)
                  ? 80 : 20}
              height={
                (router.asPath === mainRoutes.login || router.asPath === mainRoutes.register)
                  ? 20 : 25
              }
              alt=''
              style={{ marginTop: '5px', alignItems: 'center' }}
            />

          </Button>
        </Hidden>
        <Hidden mdDown>
          <Grid container display='flex' flexDirection='row'>
            <Grid item xs={12} sm={12} md={1} >
              <Button
                onClick={() => { router.push(mainRoutes.home); console.log('Click') }}
              >
                <Image
                  src='/assets/1.png'
                  width={120}
                  height={30}
                  alt=''
                  style={{ marginTop: '5px', alignItems: 'center' }}
                />
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={7} display='flex' alignItems='center' justifyContent='space-evenly'>
              {
                (isAuth)
                  ? <>
                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        marginLeft='30px'
                        marginRight='15px'
                        color='#000'
                        alignItems='center'
                      >
                        Produción
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        margin='0 15px'
                        color='#000'
                      >
                        Configuración
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        margin='0 15px'
                        color='#000'
                      >
                        Parámetros
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        margin='0 15px'
                        color='#000'
                      >
                        Informes
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        margin='0 15px'
                        color='#000'
                      >
                        Ayudas
                      </Typography>
                    </Link>
                  </>
                  : null
              }

            </Grid>

            {/* <Grid item xs={12} sm={12} md={4} display='flex' alignItems='center' justifyContent='space-between' paddingRight='2' paddingLeft='80px' > */}
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Box display='flex' alignItems='center'>
                {(isAuth)
                  ? <span style={{ fontSize: '30px' }}>
                    <CallOutlinedIcon />
                  </span>
                  : null
                }

                {
                  (isAuth)
                    ? <Link href='' style={{ textDecoration: 'none' }} >
                      <Typography
                        margin='0 15px'
                        color='#000'
                        alignItems='normal'
                      >Contáctanos
                      </Typography>
                    </Link>
                    : <Link href={mainRoutes.login} style={{ textDecoration: 'none' }} >
                      <Typography
                        margin='0 15px'
                        color='#000'
                        alignItems='normal'
                      >Iniciar Sesión
                      </Typography>
                    </Link>
                }

              </Box>
              {
                (isAuth)
                  ? <FadeMenu />
                  : <Link href={mainRoutes.register} style={{ textDecoration: 'none' }} >
                    <Button
                      style={{ color: '#fff', backgroundColor: '#2fc5c6', padding: '0.20em 2.70em', borderRadius: '10px' }}
                      id="fade-button"
                      onClick={()=>{router.push(mainRoutes.register)}}
                    >
                      Registrarse
                    </Button>
                  </Link>
              }
            </Stack>
            {/* </Grid> */}


          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
