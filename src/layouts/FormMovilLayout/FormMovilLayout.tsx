import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import { SidebarMovil } from "../components/SidebarMovil";


export interface FormMovilLayoutInterface {
  children: ReactNode;
}

const FormMovilLayout: React.FC<FormMovilLayoutInterface> = ({ children }) => {

  return (
    // <Stack direction={'row'}>

    //  <Stack width={'100px'} direction={'column'}>

    //   </Stack>

    //   <Stack direction={'column'}>
    //   {children}
    //   </Stack>

    // </Stack>

    // sx={{display:{sm:'none'}}}

    <Grid container>

      <Grid xs={1.5} sx={{ display: { sm: 'none' } }} marginRight={0.5}>
        <SidebarMovil />
      </Grid>

      <Grid xs={10} sm={12} >
        {children}
      </Grid>

    </Grid>


  );
};

export default FormMovilLayout;



