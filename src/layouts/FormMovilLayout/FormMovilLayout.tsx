import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import { SidebarMovil } from "../components/SidebarMovil";


export interface FormMovilLayoutInterface {
  children: ReactNode;
}

const FormMovilLayout: React.FC<FormMovilLayoutInterface> = ({ children }) => {

  return (

    <Grid container>

      <Grid item xs={2} sx={{ display: { sm: 'none' } }} >
        <SidebarMovil />
      </Grid>

      <Grid item xs={10} sm={12} >
        {children}
      </Grid>

    </Grid>


  );
};

export default FormMovilLayout;



