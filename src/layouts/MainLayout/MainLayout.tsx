import React from "react";
import { ReactNode } from "react";
import { AppBar, Box, Grid, IconButton, Stack, Toolbar } from "@mui/material";
import Head from "next/head";
import { GlobalProvider } from "@/context/GlobalProvider";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { FormMovilLayout } from "../FormMovilLayout";
import { useRouter } from "next/router";
import { mainRoutes } from "@/routes/routes";

export interface MainLayoutInterface {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {
  
  const router=useRouter();

  return (
    <GlobalProvider>
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

        <Box 
        sx={{ padding     :{ xs:(router.asPath===mainRoutes.form)?'0px':'10px', sm:'20px'},
              paddingRight:{ xs:(router.asPath===mainRoutes.form)?'10px':'0px',}
        }}
          >{children}
        </Box>

        <Footer />

      </>
    </GlobalProvider>

  );
};

export default MainLayout;



