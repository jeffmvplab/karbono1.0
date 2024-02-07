import React, { ReactNode } from 'react'
import Link from 'next/link';
import FadeMenu from '@/layouts/components/NavBar/components/BotonPerfil';
import { AppBar, Toolbar, IconButton, Hidden, Grid, Typography, Box, Stack, Button } from '@mui/material';
import SearchBar from '../../../views/PrescripcionView/components/SearchBar'
import Image from 'next/image'
import { GlobalContext } from '@/context/GlobalContext';
import { useRouter } from 'next/router';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { mainRoutes } from '@/routes/routes';
import { CustomButton } from '@/components/CustomButton';
import { typographyKarbono } from '@/themes/typography';


const NavbarP = ({ drawerWidth = 0, }) => {

  const route = useRouter();

  return (
    <AppBar 
    color='inherit' 
    position={(route.pathname===mainRoutes.home)?'sticky':'fixed'}
    elevation={0}>
      <Stack direction={'row'} justifyContent={'space-between'} paddingX={'10px'}>
        {<Box display={{ xs: 'none', md: 'flex' }} width={'120px'} sx={{ paddingLeft: '20px' }}>
          <Button

            onClick={() => { route.push(mainRoutes.home) }} variant='text'>
            <Image
              src='/assets/1.png'
              width={120}
              height={30}
              alt=''
              style={{ marginTop: '5px', alignItems: 'center', }}
            />
          </Button>
        </Box>
        }

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
        {/* <Toolbar sx={{
          backgroundColor: '#fff',
          height: '82px',
        }}>



 */}

        {/* <IconButton sx={{ display: { sm: 'none' } }}> */}
        {/* <MenuOutlined /> */}
        {/* </IconButton> */}
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item sx={{ marginTop: { xs: '15px' }, marginLeft: { xs: '0px', sm: '0px' } }}>
            {/* <Hidden smDown> */}
            {/* <SearchBar /> */}
            {/* </Hidden> */}
          </Grid>

          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Box display='flex' alignItems='center'>
              <span style={{ fontSize: '30px' }}>
                <CallOutlinedIcon sx={{ color: 'black' }} />
              </span>

              <Link href='' style={{ textDecoration: 'none' }} >
                <Typography
                  fontFamily={typographyKarbono.outfit}
                  margin='0 15px'
                  color='#000'
                  alignItems='normal'
                // >Contáctanos
                >
                </Typography>
              </Link>

            </Box>
            <FadeMenu />

          </Stack>

        </Grid>
        {/* </Toolbar> */}
      </Stack>
    </AppBar >
  )
}

export default NavbarP
