import React, { ReactNode } from 'react'
import Link from 'next/link';
import FadeMenu from '@/layouts/components/NavBar/components/BotonPerfil';
import { AppBar, Toolbar, IconButton, Hidden, Grid, Typography, Box } from '@mui/material';
import { MenuOutlined, CallOutlined, } from '@mui/icons-material';
import SearchBar from './SearchBar'
import Image from 'next/image'



const NavbarP = ({ drawerWidth = 240, }) => {
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
          <Grid item sx={{ marginTop: { xs: '15px' }, marginLeft: { xs: '30px', sm: '0px' } }}>
            {/* <Hidden smDown> */}
            <SearchBar />
            {/* </Hidden> */}
          </Grid>
          <Box display='flex' sx={{ marginTop: '10px' }} >
            <Grid item alignItems='center' marginRight='20px' >
              <Link href='' style={{ textDecoration: 'none' }} >
                <Typography
                  margin='0 15px'
                  color='#000'
                  alignItems='center'
                  sx={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <CallOutlined sx={{ display: { xs: 'none', sm: 'block' } }} />
                </Typography>
              </Link>
            </Grid>
            <Grid item >
              <FadeMenu />
            </Grid>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarP
