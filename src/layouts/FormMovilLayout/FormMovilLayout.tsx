import { FormulariosContext } from "@/views/Formulario/context/FormulariosContext";
import { Box, Grid, MenuItem, Stack } from "@mui/material";
import React, { useContext } from "react";
import { ReactNode } from "react";
import { SidebarMovil } from "../components/SidebarMovil";
import CustomTextField from "@/views/Formulario/Components/CustomTextField";
import { LightTooltip } from "@/views/Formulario/style/styleToolTips";


export interface FormMovilLayoutInterface {
  children: ReactNode;
}

const tipoEdades = [
  { value: 'años', label: 'años', },
  { value: 'meses', label: 'meses', },
  { value: 'días', label: 'días', }
]

const FormMovilLayout: React.FC<FormMovilLayoutInterface> = ({ children }) => {

  const { toggleDrawer } = useContext(FormulariosContext)

  return (

    <Grid container>

      <Grid item xs={2} sx={{ display: { sm: 'none' } }} >
        <SidebarMovil />
      </Grid>

      <Grid
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        item xs={10} sm={12} >
        {children}
      </Grid>
    </Grid>
  );
};

export default FormMovilLayout;



