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
  const route = useRouter();

  useEffect(() => {
    authStatus();
  }, [])

  return (
    <AppBar color='inherit' position='sticky' elevation={0}>
      <Toolbar>
        {/* <Stack direction={'row'} alignContent={'space-between'} > */}
        {/* <Hidden mdUp> */}
        <Hidden mdUp>
          <Button onClick={() => { route.push(mainRoutes.home) }} variant='text'>
            <Stack direction={'row'} alignItems={'center'}>
              <Box sx={{ paddingTop: '10px' }}>
                <Link href='/prescripcion'>
                  <Image
                    src='/assets/Group.png'
                    width={20}
                    height={20}
                    alt=''
                    style={{ justifyContent: 'center', marginLeft: '10px' }}
                  />
                </Link>
              </Box>
              <Box sx={{ paddingTop: '10px' }}>
                <Link href='/prescripcion'>
                  <Image
                    src='/assets/logo-mobile.png'
                    width={20}
                    height={30}
                    alt=''
                    style={{ justifyContent: 'center', marginLeft: '10px' }}
                  />
                </Link>
              </Box>
            </Stack>
          </Button>

        </Hidden>


        <Grid container maxWidth={'80vw'} display='flex' flexDirection='row' justifyContent={'end'}>
          <Hidden mdDown>
            <Grid item xs={12} sm={12} md={3} >
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

         
          </Hidden>
          {/* <Grid item xs={12} sm={12} md={4} display='flex' alignItems='center' justifyContent='space-between' paddingRight='2' paddingLeft='80px' > */}
          <Stack direction={'row'} spacing={2} justifyItems={'center'} >

            <Box minWidth={{ xs: '0%', sm: '0%', md: '10%', xl: '60%' }} />

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
            <Box paddingX={'10px'}>
              {

                (isAuth)
                  ? <FadeMenu />
                  : <Link href={mainRoutes.register} style={{ textDecoration: 'none' }} >
                    <Button
                      style={{ color: '#fff', backgroundColor: '#2fc5c6', padding: '0.20em 2.70em', borderRadius: '10px', fontFamily: typographyKarbono.outfit }}
                      id="fade-button"
                      onClick={() => { router.push(mainRoutes.register) }}
                    >
                      Registrarse
                    </Button>
                  </Link>
              }
            </Box>
          </Stack>
          {/* </Grid> */}


        </Grid>
        {/* </Stack> */}
      </Toolbar>
    </AppBar >
  )
}
