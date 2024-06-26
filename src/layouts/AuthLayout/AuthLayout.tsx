import React from "react";
import { ReactNode } from "react";
import { Box, Button, Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useTheme } from '@mui/material/styles';
// import Image from '../../components/image';
import Image from "next/image";

import { StyledContent, StyledSection, StyledSectionBg } from "@/views/auth/LoginView/styles";
import { colorsKarbono } from "@/themes/colors";
import { GlobalProvider } from "@/context/GlobalProvider";
import { Footer } from "../components/Footer";
import router from "next/router";
import { mainRoutes } from "@/routes/routes";
import ConexionStatusModal from "@/components/ConexionStatusModal/ConexionStatusModal";


export interface AuthLayoutInterface {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutInterface> = ({ children }) => {


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

        <ConexionStatusModal />
        {/* <Box
          sx={{ paddingTop:{xs:"5",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}
        {/* <StyledRoot> */}
        {/* <Typography variant="h3" sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}>
              {/* {'Pure Life'} */}
        {/* </Typography> */}
        <Grid container >
          <Grid display={{ xs: 'none', md: 'flex' }} item xs={12} sm={6} md={8} xl={9}>
            <Stack>
              <Button
                onClick={() => { router.push(mainRoutes.home); 
                  // console.log('Click')
                 }}
              >
                <Image
                  src='/assets/1.png'
                  width={120}
                  height={30}
                  alt=''
                  style={{ marginTop: '5px', alignItems: 'center' }}
                />
              </Button>

              <StyledSectionBg sx={{ width: { xs: '100%', sm: '50%', md: '65%', xl: '75%' } }} />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4} xl={3}
            sx={{ padding: { xs: '20px', sm: '20px', md: '20px', xl: '40px' } }}
          >
            <Card
              elevation={10}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                padding: '10px',
                overflow: 'scroll', // Agregamos scroll si el contenido excede el tamaño del contenedor
                maxHeight: '85vh', // Altura máxima del contenedor antes de agregar scroll
                // background: colorsKarbono.gradientCard
              }}>
              <Stack sx={{ width: 1 }}> {children} </Stack>
            </Card>

            <Stack display={{ xs: 'none', sm: 'flex' }} sx={{ width: 1 }}> {children} </Stack>

          </Grid>
          {/* </StyledContent>
        </StyledRoot> */}
        </Grid>
        <Footer />
      </>

    </GlobalProvider >
  );
};

export default AuthLayout;



