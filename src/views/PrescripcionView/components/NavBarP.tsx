import React, { ReactNode } from 'react'
import Link from 'next/link'

import FadeMenu from '@/layouts/components/NavBar/components/BotonPerfil'





import { AppBar, Toolbar, IconButton, Hidden, Grid, Typography, Box } from '@mui/material'
import { MenuOutlined, CallOutlined,  } from '@mui/icons-material'
import SearchBar from './SearchBar'




const NavbarP = ({drawerWidth = 240}) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {sm:`calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`}
      }}
    >
      <Toolbar sx={{
        backgroundColor:'#fff'
      }}>
        <IconButton
         sx={{display:{sm:'none'}}}
        >

          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between'>
          <Grid item>
            <SearchBar />

          </Grid>
          <Grid item display='flex' >

            <Box  alignItems='center' marginRight='20px'>            
            <Link href='' style={{ textDecoration: 'none' }} >
                      <Typography
                        margin='0 15px'
                        color='#000'
                        alignItems='center'
                        sx={{justifyContent:'center', alignItems:'center'}}
                      >                    
                         <CallOutlined />
                      </Typography>
                    </Link>
                    
            </Box>
            <Box>
              <FadeMenu />
            </Box>

          </Grid>

        </Grid>


      </Toolbar>     
    </AppBar>
  )
}

export default NavbarP
