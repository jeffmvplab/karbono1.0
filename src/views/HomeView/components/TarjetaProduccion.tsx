import React from 'react';

import Image from 'next/image'

import { Box, Breadcrumbs, Grid, Button, Hidden, Typography } from '@mui/material'


const TarjetaProduccion  = () => {
  return (


    <>
    <Grid container display='flex' xs={10} sm={11} md={6} sx={{ maxHeight:'260',  borderRadius:'20px', backgroundColor:'#fff', marginTop:'50px', marginLeft:'30px', marginRight:'30px'}} className='box-shadow'>
       
       <Grid item  xs={12} sm={10}
        sx={{
         padding:'30px',
        }}
        >
          <Typography variant='h5' sx={{ color:'#2FC5C6',paddingBottom:'20px'}}>Producción</Typography>
          <Typography variant='body1' sx={{paddingBottom:'30px'}}>Este módulo te permite crear, editar y consultar datos de prescripciones  médicas de manera fácil y rápida.</Typography>
        
          <Button sx={{backgroundColor:'#2FC5C6',  color:'#fff', padding:'10px 40px', borderRadius:'10px', ':hover':{backgroundColor:'#2fc5c1', color:'#e8e8e2'}}}>
           Ingresar
          </Button>
       </Grid>
       <Hidden smDown >
        <Grid item xs={12} sm={2} sx={{justifyContent:'center', display:'flex', paddingRight:'20px', alignItems:'center'}}>
        <Image
          src='/assets/icon-producción.png'
          width={80}
          height={80}
          alt=''
          style={{marginTop:'5px', alignItems:'center'}}
          
          ></Image>
        </Grid>
        </Hidden>

        


    </Grid>
    
    </>
  )
}

export default TarjetaProduccion


