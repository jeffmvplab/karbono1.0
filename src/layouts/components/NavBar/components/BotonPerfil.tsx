import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { GlobalContext } from '@/context/GlobalContext';

export default function FadeMenu() {

  const {logout} = React.useContext(GlobalContext)
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null); 
  };

  return (
    <div>
      <Button
        style={{color:'#fff', backgroundColor:'#2fc5c6', padding:'0.20em 2.70em', borderRadius:'10px'}}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Perfil
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
        <MenuItem onClick={handleClose} >Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
        <MenuItem onClick={()=>{logout(); handleClose}}>cerrar sesión</MenuItem>
      </Menu>
    </div>
  );
}