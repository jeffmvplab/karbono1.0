import React from 'react';
import { ReactNode } from "react";

import { Box } from '@mui/material'
import { PrescripcionProvider } from '@/views/PrescripcionView/context/PrescripcionProvider';
import { GlobalProvider } from '@/context/GlobalProvider';
import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import NabvarReportePrescripcion from '@/views/ReportePrescripcion/components/NavBarReporte';



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

      <GlobalProvider>
        <PrescripcionProvider>
          <Box sx={{ display: 'flex', width:'100' }}>

            {/*Navbar draweWidth */}
            <NabvarReportePrescripcion />


            {/*Sidebar draweWidth */}

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

export default ReportePrescripcionLayout;

