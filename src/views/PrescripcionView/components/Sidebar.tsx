import React from 'react'
import Image from 'next/image';


import { Drawer, Box, Typography, List, Grid, Divider, ListItem, ListItemText, ListItemButton, Toolbar } from '@mui/material';
import Link from 'next/link';

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box

      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{

          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar sx={{ width: '240px', justifyContent: 'center', }}>
          <Grid item >
            <Box sx={{ textAlign: 'center', paddingTop: '10px' }}>
              <Image
                src='/assets/1.png'
                width={120}
                height={30}
                alt=''
                style={{ marginTop: '5px', alignItems: 'center', }}

              />
            </Box>

            <Divider sx={{ marginTop: '30px', width: '100%' }} />
            <Box marginTop='30px' width='200px' display='flex' flexDirection='row'>
              <Image
                src='/assets/pastillas-landing.png'
                width={30}
                height={30}
                alt=''
                style={{ alignItems: 'center', paddingRight: '5px' }}

              />
              <Link href='' style={{ textDecoration: 'none' }}>
                <Typography
                  variant='h6'
                  sx={{
                    paddingTop: '0',
                    marginLeft: '3px',
                    color: '#000',
                    fontWeight: 700,
                  }}
                >
                  Prescripción
                </Typography></Link>
                <Image
                src='/assets/arrow-landing.png'
                width={25}
                height={25}
                alt=''
                style={{ alignItems: 'center', marginLeft:'10px', paddingTop:'5px', paddingLeft:'5px' }}

              />
            </Box>
          </Grid>
        </Toolbar>

      </Drawer>

    </Box>

  )
}
