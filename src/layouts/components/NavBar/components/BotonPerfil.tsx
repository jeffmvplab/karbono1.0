import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { GlobalContext } from '@/context/GlobalContext';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { typographyKarbono } from '@/themes/typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/routes/routes';

export default function FadeMenu() {

  const { logout } = React.useContext(GlobalContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const router=useRouter();

  return (
    <Stack direction={'column'} >
      <Button
        style={{ color: '#fff', backgroundColor: '#2fc5c6', marginTop: '5px', padding: '5px 2.70em', borderRadius: '10px', fontFamily: typographyKarbono.outfit }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      > <Avatar sx={{color:'white', background:'black'}}>
          < PersonIcon />
        </Avatar>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Stack
          padding={'5px'}
          alignItems={'start'}
          minWidth={'125px'}
          direction={'column'}>
          <MenuItem sx={{ fontFamily: typographyKarbono.outfit }} onClick={handleClose} >Perfil</MenuItem>
          <MenuItem sx={{ fontFamily: typographyKarbono.outfit }} onClick={()=>{handleClose(), router.push(mainRoutes.mi_cuenta)}}>Mi cuenta</MenuItem>
          <MenuItem sx={{ fontFamily: typographyKarbono.outfit }} onClick={() => { logout(); handleClose }}>Cerrar Sesión</MenuItem>
        </Stack>
      </Menu>
    </Stack>
  );
}