import React, { ReactNode } from 'react'
import Link from 'next/link'

import FadeMenu from '@/layouts/components/NavBar/components/BotonPerfil'




import { AppBar, Toolbar, IconButton, Hidden, Grid, Typography, Box } from '@mui/material'
import { MenuOutlined, CallOutlined, } from '@mui/icons-material'
import SearchBar from './SearchBarReporte'
import Image from 'next/image'




const NabvarReportePrescripcion = ({ }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        height: '0',
        width: '100%',
        marginTop:'5px'
      }}
    >
      <Toolbar sx={{
        backgroundColor: '#fff',
        height: '82px',
      }}>
        {/* <IconButton
         sx={{display:{sm:'none'}}}
        >

          <MenuOutlined />
        </IconButton> */}

        <Grid container direction='row' justifyContent='space-between'>
          <Grid item>
            {/* <SearchBar /> */}
            <Image
              src='/assets/1.png'
              width={120}
              height={30}
              alt=''
              style={{  alignItems: 'center', }}

            />

          </Grid>
          <Grid item display='flex' >

            <Box alignItems='center' marginRight='20px'>
              <Link href='' style={{ textDecoration: 'none' }} >
                <Typography
                  margin='0 15px'
                  color='#000'
                  alignItems='center'
                  sx={{ justifyContent: 'center', alignItems: 'center' }}
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

export default NabvarReportePrescripcion
