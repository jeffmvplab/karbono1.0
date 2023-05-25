import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { GlobalContext } from '@/context/GlobalContext';
import { Box, Stack, Typography } from '@mui/material';
import { typographyKarbono } from '@/themes/typography';

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

  return (
    <Stack direction={'column'} >
      <Button
        style={{ color: '#fff', backgroundColor: '#2fc5c6', marginTop: '5px', padding: '5px 2.70em', borderRadius: '10px', fontFamily: typographyKarbono.outfit }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Perfil
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
          minWidth={'135px'}
          direction={'column'}>
          <MenuItem sx={{ fontFamily: typographyKarbono.outfit }} onClick={handleClose} >Perfil</MenuItem>
          <MenuItem sx={{ fontFamily: typographyKarbono.outfit }} onClick={handleClose}>Mi cuenta</MenuItem>
          <MenuItem sx={{ fontFamily: typographyKarbono.outfit }} onClick={() => { logout(); handleClose }}>Cerrar Sesión</MenuItem>
        </Stack>
      </Menu>
    </Stack>
  );
}