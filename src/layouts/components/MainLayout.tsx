import React from "react";
import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import Head from "next/head";
import { NavBar } from "./NavBar";

export interface MainLayoutInterface {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {

  return (

    <>
        <Head>
          <title>Karbono</title>
          <meta name="description" content="Infostore" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        {/* <Box
          sx={{ paddingTop:{xs:"5px",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}

        <NavBar />

        <Box sx={{padding: '10px 20px'}}> 
        { children }
        </Box>
    </>
  );
};

export default MainLayout;



