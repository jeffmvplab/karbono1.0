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
        <title>Pure Life</title>
        <meta name="description" content="Pure Life" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo-mobile.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo-mobile.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo-mobile.png" />
      </Head>
      <ConexionStatusModal />
      <MainDrawer />
      {/* <GlobalProvider>
        <PrescripcionProvider> */}
      <Box sx={{ display: 'flex', width: '100%' }}>
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

