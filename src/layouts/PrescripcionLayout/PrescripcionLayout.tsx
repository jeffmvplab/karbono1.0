import React from 'react';
import { ReactNode } from "react";


import { Box } from '@mui/material'
import NavbarP from '../../views/PrescripcionView/components/NavBarP';
import { Sidebar } from '../../views/PrescripcionView/components/Sidebar';
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider';
import { GlobalProvider } from '@/context/GlobalProvider';



export interface PrescripcionLayoutInterface {
  children: ReactNode;
}

const draweWidth = 240;



const PrescripcionLayout: React.FC<PrescripcionLayoutInterface> = ({ children }) => {
  return (
    <>
    <GlobalProvider>
    <PrescripcionProvider>
        <Box sx={{ display: 'flex' }}>

          {/*Navbar draweWidth */}
          <NavbarP drawerWidth={draweWidth} />


          {/*Sidebar draweWidth */}
          <Sidebar  />

          <Box
            component='main'
            sx={{ flexGrow: 1, padding: '3' }}
          >
            {/*Toolbar*/}

            {children}

          </Box>




        </Box>
      </PrescripcionProvider>
      
    </GlobalProvider>

    </>

  )
}

export default PrescripcionLayout;

