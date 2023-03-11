import React from 'react'
import Image from 'next/image';


import { Drawer, Box, Typography, List, Grid, Divider, ListItem, ListItemText, ListItemButton, Toolbar  }from '@mui/material';
import Link from 'next/link';

export const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box
      component='nav'
      sx={{width:{sm:drawerWidth}, flexShrink:{sm: 0}}}
    >
      <Drawer 
      variant='permanent'
      open
      sx={{
        display:{xs:'block'},
        '& .MuiDrawer-paper': {boxSizing:'border-box', width:drawerWidth}
      }}      
      >
        <Toolbar sx={{justifyContent:'center', width:'240px', padding:'0', margin:'0'}}>
        <Grid item xs={12} sm={12} md={1} >
              <Image
                src='/assets/1.png'
                width={120}
                height={30}
                alt=''
                style={{ marginTop: '5px', alignItems: 'center' }}

              />
              <Divider sx={{marginTop:'30px', width:'100%'}}/>
               <Link href='' style={{ textDecoration: 'none' }}>
                    <Typography
                    variant='h6'
                    sx={{
                      paddingTop:'40px',
                      marginLeft:'3px',
                      color:'#000',
                      fontWeight:700,
                    }}
                    >
                      Prescripción
                    </Typography></Link>
              
            </Grid>
        </Toolbar>

      </Drawer>

    </Box>

  )
}
