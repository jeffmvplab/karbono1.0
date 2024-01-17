import Link from 'next/link';
import Image from 'next/image';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FadeMenu from './components/BotonPerfil';
import { GlobalContext } from '@/context/GlobalContext';
import React, { useEffect } from 'react';
import { mainRoutes } from '@/routes/routes';
import { useRouter } from 'next/router';
import { typographyKarbono } from '@/themes/typography';
import { AppBar, Box, Button, Grid, Hidden, Stack, Toolbar, Typography } from '@mui/material';



export const NavBar = () => {


  const { isAuth, authStatus } = React.useContext(GlobalContext)

  // console.log('IsAuth:', isAuth)

  const router = useRouter();
  // console.log('Router', router.asPath)

  useEffect(() => {
    authStatus();
  }, [])

  return (
    <AppBar color='inherit' position='sticky' elevation={0}>
      <Toolbar>
        {/* <Stack direction={'row'} alignContent={'space-between'} > */}
        <Hidden mdUp>
          <Button
            onClick={() => { router.push(mainRoutes.home); }}
          >
            {(router.asPath !== mainRoutes.form)
              && <Image
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
              />}

          </Button>
        </Hidden>

        <Grid container maxWidth={'80vw'}  display='flex' flexDirection='row' justifyContent={'end'}>
          <Hidden mdDown>
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
                        fontFamily={typographyKarbono.outfit}
                        marginLeft='30px'
                        marginRight='15px'
                        color='#000'
                        alignItems='center'
                      >
                        Produción
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        fontFamily={typographyKarbono.outfit}
                        margin='0 15px'
                        color='#000'
                      >
                        Configuración
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        fontFamily={typographyKarbono.outfit}
                        margin='0 15px'
                        color='#000'
                      >
                        Parámetros
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        fontFamily={typographyKarbono.outfit}
                        margin='0 15px'
                        color='#000'
                      >
                        Informes
                      </Typography></Link>

                    <Link href='' style={{ textDecoration: 'none' }}>
                      <Typography
                        fontFamily={typographyKarbono.outfit}
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

          </Hidden>
          {/* <Grid item xs={12} sm={12} md={4} display='flex' alignItems='center' justifyContent='space-between' paddingRight='2' paddingLeft='80px' > */}
          <Stack direction={'row'} spacing={2} justifyItems={'center'} >

            <Box minWidth={{ xs: '60%', sm: '100%', md: '10%', xl: '60%' }} />

            <Box display='flex' alignItems='center'>
              {(isAuth)
                ? <span style={{ fontSize: '30px', paddingTop: '5px' }}>
                  <CallOutlinedIcon />
                </span>
                : null
              }

              {
                (isAuth)
                  ? <Link href='' style={{ textDecoration: 'none' }} >
                    <Typography
                      fontFamily={typographyKarbono.outfit}
                      display={{ xs: 'none', sm: 'block' }}
                      margin='0 15px'
                      color='#000'
                      alignItems='normal'
                    // >Contáctanos
                    >
                    </Typography>
                  </Link>
                  : <Link href={mainRoutes.login} style={{ textDecoration: 'none' }} >
                    <Typography
                      fontFamily={typographyKarbono.outfit}
                      display={{ xs: 'none', sm: 'block' }}
                      margin='0 15px'
                      color='#000'
                      alignItems='normal'
                      minWidth={'100px'}
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
                    style={{ color: '#fff', backgroundColor: '#2fc5c6', padding: '0.20em 2.70em', borderRadius: '10px',fontFamily: typographyKarbono.outfit  }}
                    id="fade-button"
                    onClick={() => { router.push(mainRoutes.register) }}
                  >
                    Registrarse
                  </Button>
                </Link>
            }
          </Stack>
          {/* </Grid> */}


        </Grid>
        {/* </Stack> */}
      </Toolbar>
    </AppBar >
  )
}
