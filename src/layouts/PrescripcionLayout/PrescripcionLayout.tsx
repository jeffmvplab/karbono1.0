import React from 'react';
import { ReactNode } from "react";


import { Box } from '@mui/material'
import NavbarP from '../components/NavBar/NavBarP';
import { Sidebar } from '../../views/PrescripcionView/components/Sidebar';
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider';
import { GlobalProvider } from '@/context/GlobalProvider';
import Head from 'next/head';
import ConexionStatusModal from '@/components/ConexionStatusModal/ConexionStatusModal';
import { FormulariosProvider } from '@/views/Formulario/context/FormulariosProvider';
import { MainDrawer } from '../components/MainDrawer';
import { ReportesProvider } from '@/views/ReportePrescripcion/context/ReportesProvider';



export interface PrescripcionLayoutInterface {
  children: ReactNode;
}

const draweWidth = 240;
const drawerWidth1 = 20;



const PrescripcionLayout: React.FC<PrescripcionLayoutInterface> = ({ children }) => {
  return (
    <>

      <Head>
        <title>Pure Life</title>
        <meta name="description" content="Pure Life" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo-mobile.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo-mobile.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo-mobile.png" />

      </Head>

      <GlobalProvider>
        <FormulariosProvider>
          <PrescripcionProvider>
            {/* <ReportesProvider> */}
            <ConexionStatusModal />
            <Box sx={{ display: 'flex' }}>
              {/*Navbar draweWidth */}
              <NavbarP drawerWidth={draweWidth} />
              <MainDrawer />
              {/*Sidebar draweWidth */}
              {/* <Sidebar /> */}
              <Box
                component='main'
                sx={{ flexGrow: 1, padding: '3' }}
              >
                {/*Toolbar*/}
                {children}
              </Box>
            </Box>
            {/* </ReportesProvider> */}
          </PrescripcionProvider>
        </FormulariosProvider>
      </GlobalProvider>

    </>

  )
}

export default PrescripcionLayout;

