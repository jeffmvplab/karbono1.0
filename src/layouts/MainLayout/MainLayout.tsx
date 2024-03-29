import React from "react";
import { ReactNode } from "react";
import { Box, } from "@mui/material";
import Head from "next/head";
import { GlobalProvider } from "@/context/GlobalProvider";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import { mainRoutes } from "@/routes/routes";
import { TagManagerScript } from "@/scripts/TagManagerScript";
import { GoogleAnalyticsScript } from "@/scripts/GoogleAnalyticsScript";
import ConexionStatusModal from "@/components/ConexionStatusModal/ConexionStatusModal";
import NavbarP from "../components/NavBar/NavBarP";
import { MainDrawer } from "../components/MainDrawer";

export interface MainLayoutInterface {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {

  const router = useRouter();

  return (
    <GlobalProvider>
      <>

        <Head>
          <title>Karbono</title>
          <meta name="description" content="Karbono" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainLayoutScripts />
        <ConexionStatusModal />
        {/* <Box
          sx={{ paddingTop:{xs:"5px",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}
        <NavbarP />
        <MainDrawer/>
        
        <Box
          sx={{
           marginTop:{xs:'60px',md:'130px'},
            padding: { xs: (router.asPath === mainRoutes.form) ? '0px' : '10px', sm: '0px' },
            paddingX: { xs: '0px', sm: '20px' },
          }}>
          {children}
        </Box>

        <Footer />
      </>
    </GlobalProvider>

  );
};

export default MainLayout;

const MainLayoutScripts = () => {
  return (
    <>
      {/* <SmartLookScript /> */}
      {/* <CustomScript name="smartlook"/> */}
      <TagManagerScript />
      <GoogleAnalyticsScript />
    </>
  )
}
