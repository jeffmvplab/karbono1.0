import React, { useContext } from 'react'
import Image from 'next/image';


import { Drawer, Box, Typography, Hidden, List, Grid, Divider, ListItem, ListItemText, ListItemButton, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import { CustomButton } from '@/components/CustomButton';
import { mainRoutes } from '@/routes/routes';
import { colorsKarbono } from '@/themes/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRouter } from 'next/router';
import { typographyKarbono } from '@/themes/typography';
import { PrescripcionContext } from '@/views/PrescripcionView/context/PrescripcionContext';

export const Sidebar = ({ drawerWidth = 240 }) => {

  const { goAddNew } = useContext(PrescripcionContext)
  
  const router = useRouter();

  return (
    <Box

      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar sx={{ width: '240px', justifyContent: 'center', }}>
          <Grid item >
            <Hidden smDown>
              <Button
                onClick={() => { router.push(mainRoutes.home) }}
              >
                <Box sx={{ textAlign: 'center', paddingTop: '10px' }}>
                  <Image
                    src='/assets/1.png'
                    width={120}
                    height={30}
                    alt=''
                    style={{ marginTop: '5px', alignItems: 'center', }}
                  />
                </Box>
              </Button>
            </Hidden>

            <Divider sx={{ marginTop: '10px', width: '100%' }} />
            <Box marginTop='30px' width='200px' display='flex' flexDirection='row'>
              <Image
                src='/assets/pastillas-landing.png'
                width={30}
                height={30}
                alt=''
                style={{ alignItems: 'center', paddingRight: '5px' }}

              />
              <Link href='/prescripcion' style={{ textDecoration: 'none' }}>
                <Typography
                  fontFamily={typographyKarbono.outfit}
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
                style={{ alignItems: 'center', marginLeft: '10px', paddingTop: '5px', paddingLeft: '5px' }}

              />
            </Box>
            <Box display='flex' flexDirection='row' paddingTop='25px'>
              <CustomButton text={'Agregar Nueva'}
                onClick={() => { goAddNew(mainRoutes.form) }}
                width='200px'
                height='44px'
                variant='text'
                color='secundary'
                fontSize={'16px'}
                textColor={colorsKarbono.secundary}
                borderColor={colorsKarbono.secundary}
                endIcon={<AddCircleOutlineIcon style={{ color: '#372fc6', paddingLeft: '5px', scale: '1.5' }} />}
                sx={{ borderRadius: '10px' }}
              />

            </Box>
          </Grid>
        </Toolbar>

      </Drawer>

    </Box >

  )
}
