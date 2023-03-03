import Link from 'next/link';
import Image from 'next/image';
import { AppBar, IconButton, Toolbar, Typography, Hidden, Grid, Box  } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FadeMenu from './components/BotonPerfil';


export const NavBar = () => {
  return (
    <AppBar color='inherit' position='sticky' elevation={ 0 }>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
           size='large'
           edge='start'        
          >
             <MenuOutlinedIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
        <Grid container display='flex' flexDirection='row'>
        <Grid item xs={12} sm={12} md={1} >
          <Image
          src='/assets/1.png'
          width={120}
          height={30}
          alt=''
          style={{marginTop:'5px', alignItems:'center'}}
          
          >

          </Image>
        </Grid>

            <Grid item xs={12} sm={12} md={7} display='flex' alignItems='center' justifyContent='space-evenly'>
             <Link href=''  style={{textDecoration:'none'}}><Typography 
             marginLeft='30px'
             marginRight='15px'
             color='#000'
             alignItems='center'
             >
               Produción
             </Typography></Link>

             <Link href=''style={{textDecoration:'none'}}><Typography 
             margin='0 15px'
             color='#000'
             >
              Configuración
             </Typography></Link>

             <Link href=''style={{textDecoration:'none'}}><Typography 
             margin='0 15px'
             color='#000'
             >
              Parámetros
             </Typography></Link>

             <Link href=''style={{textDecoration:'none'}}><Typography 
             margin='0 15px'
             color='#000'
             >
              Informes
             </Typography></Link>

             <Link href=''style={{textDecoration:'none'}}><Typography 
             margin='0 15px'
             color='#000'
             >
              Ayudas
             </Typography></Link>
           </Grid>

           <Grid item xs={12} sm={12} md={4} display='flex' alignItems='center' justifyContent='space-between' paddingRight='2' paddingLeft='80px' >
            <Box display='flex' alignItems='center'>
            <span style={{fontSize:'30px'}}><CallOutlinedIcon /></span>
            <Link href=''style={{textDecoration:'none'}} ><Typography 
             margin='0 15px'
             color='#000'
             alignItems='normal'
             >
              Contáctanos
             </Typography></Link>
            </Box>
            <FadeMenu />
           </Grid>
        </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
