import React from "react";
import { ReactNode } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Head from "next/head";
import { GlobalProvider } from "@/context/GlobalProvider";
import { NavBar } from "../components/NavBar";
import { StyledRoot, StyledSection, StyledSectionBg, StyledContent } from "@/views/auth/LoginView/styles";
import { title } from "process";
// import Image from '../../components/image';
import Image from "next/image";





export interface AuthLayoutInterface {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutInterface> = ({ children }) => {

  return (
   
      <>
        <Head>
          <title>Karbono</title>
          <meta name="description" content="Infostore" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        {/* <Box
          sx={{ paddingTop:{xs:"5",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}
        <StyledRoot>
          <StyledSection>
            <Typography variant="h3" sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}>
              {/* {'Pure Life'} */}
            </Typography>
           
            <Box maxWidth={600} maxHeight={600}>
            <Image
              layout="responsive"
              width={600}
              height={550}
              // layout="fill"
              alt="auth"
              src={'/illustrations/illustration_dashboard2.jpg'}
            />
          </Box>

            {/* <Image
              disabledEffect
              visibleByDefault
              alt="auth"
              src={'/illustrations/illustration_dashboard.png'}
              sx={{ maxWidth: 720 }}
            /> */}

            <StyledSectionBg />
          </StyledSection>

          <StyledContent>
            <Stack sx={{ width: 1 }}> {children} </Stack>
          </StyledContent>
        </StyledRoot>
      </>
  );
};

export default AuthLayout;



