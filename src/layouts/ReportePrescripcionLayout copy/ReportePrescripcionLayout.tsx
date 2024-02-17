import React from 'react';
import { ReactNode } from "react";
import { Box } from '@mui/material'
import Head from 'next/head';
import ConexionStatusModal from '@/components/ConexionStatusModal/ConexionStatusModal';
import { MainDrawer } from '../components/MainDrawer';



export interface ReportePrescripcionLayoutInterface {
  children: ReactNode;
}

const ReportePrescripcionLayout: React.FC<ReportePrescripcionLayoutInterface> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Karbono</title>
        <meta name="description" content="Karbono" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConexionStatusModal />
      <MainDrawer/>
      {/* <GlobalProvider>
        <PrescripcionProvider> */}
          <Box sx={{ display: 'flex', width:'100%' }}>
            {/*Navbar draweWidth */}
            {/* <NabvarReportePrescripcion /> */}
            {/*Sidebar draweWidth */}
            <Box component='main' sx={{ flexGrow: 1, padding: '3' }}>
              {/*Toolbar*/}
              {children}
            </Box>
          </Box>
        {/* </PrescripcionProvider>

      </GlobalProvider> */}
    </>

  )
}

export default ReportePrescripcionLayout;

