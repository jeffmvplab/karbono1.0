import React, { ReactNode } from 'react'
import Link from 'next/link';
import FadeMenu from '@/layouts/components/NavBar/components/BotonPerfil';
import { AppBar, Toolbar, IconButton, Hidden, Grid, Typography, Box, Stack } from '@mui/material';
import SearchBar from './SearchBar'
import Image from 'next/image'
import { GlobalContext } from '@/context/GlobalContext';
import { useRouter } from 'next/router';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { mainRoutes } from '@/routes/routes';
import { CustomButton } from '@/components/CustomButton';
import { typographyKarbono } from '@/themes/typography';


const NavbarP = ({ drawerWidth = 240, }) => {

  const { isAuth } = React.useContext(GlobalContext)

  return (
    <AppBar
      position='fixed'
      sx={{
        height: '0',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar sx={{
        backgroundColor: '#fff',
        height: '82px',
      }}>
        <Hidden smUp>
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
        </Hidden>
        {/* <IconButton sx={{ display: { sm: 'none' } }}> */}
        {/* <MenuOutlined /> */}
        {/* </IconButton> */}
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item sx={{ marginTop: { xs: '15px' }, marginLeft: { xs: '0px', sm: '0px' } }}>
            {/* <Hidden smDown> */}
            <SearchBar />
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
                >Contáctanos
                </Typography>
              </Link>

            </Box>
            <FadeMenu />

          </Stack>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarP
