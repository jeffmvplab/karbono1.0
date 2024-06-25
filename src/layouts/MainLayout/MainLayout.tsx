import React, { Suspense } from "react";
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
import MatomoScript from "@/scripts/MatomoScript/Matomo";
import PWAInstallPrompt from "@/pwa/PWAInstallPromt";
import { Metadata } from "next";

export interface MainLayoutInterface {
  children: ReactNode;
}



const MainLayout: React.FC<MainLayoutInterface> = ({ children }) => {
  const router = useRouter();



  return (
    <GlobalProvider>
      <>

        <Head>
          <title>Pure Life</title>
          <meta name="description" content="Pure Life" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo-mobile.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo-mobile.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo-mobile.png" />
        </Head>

        <MainLayoutScripts />
        <ConexionStatusModal />

        {/* <Box
          sx={{ paddingTop:{xs:"5px",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}
        <NavbarP />

        {/* <Suspense> */}
        <MainDrawer />
        {/* </Suspense> */}

        <Box
          sx={{
            marginTop: { xs: '60px', md: '130px' },
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
      <MatomoScript />
      <GoogleAnalyticsScript />
    </>
  )
}
