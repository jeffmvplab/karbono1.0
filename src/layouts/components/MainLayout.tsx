import React from "react";
import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import Head from "next/head";
import { Header } from "./Header";

export interface MainLayoutInterface {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {

  return (

    <>
      <div>
        <Head>
          <title>Karbono</title>
          <meta name="description" content="Infostore" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        {/* <Box
          sx={{ paddingTop:{xs:"5px",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}

        <Header/>

        <Grid bgcolor={'blue'}>
          {/* <Grid item xs={12} > */}
          <main>{children}</main>
          {/* </Grid> */}
        </Grid>
      </div>

    </>

  );
};

export default MainLayout;



