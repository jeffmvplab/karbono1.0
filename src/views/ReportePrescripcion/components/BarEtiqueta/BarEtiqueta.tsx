import { CustomButton } from "@/components/CustomButton";
import { mainRoutes } from "@/routes/routes";
import { colorsKarbono } from "@/themes/colors";
import { Stack } from "@mui/material";
import router from "next/router";

import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { RolUsersKeysEnum } from "@/utilities/enums/rol_user_keys.enum";
import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { StorageKeysEnum } from "@/utilities/enums";
import { MouseEventHandler, useEffect, useState } from "react";

export interface BarEtiquetaProps {
  idDescargar?: string;
  title?: string;
  handlePdfMode?: any;
  pdfMode?: boolean;
}

const BarEtiqueta: React.FC<BarEtiquetaProps> = ({
  idDescargar,
  title,
  handlePdfMode,
  pdfMode,
}) => {
  // const router = useRouter()
  const localStorageProtocol = new LocalStorageProtocol();
  const [rol, setRol] = useState<string[]>([]);

  const getMeRol = () => {
    if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
      const rol: string[] = localStorageProtocol.get(StorageKeysEnum.user).rol;
      setRol(rol);
      // console.log('ROL:', rol);
      return rol;
    } else {
      setRol([]);
      // console.log('ROL:', []);
      return [];
    }
  };


  useEffect(() => {
    getMeRol();
  }, []);

  return (
    <Stack
      paddingX={"40px"}
      width={"100%"}
      overflow={"scroll"}
      bgcolor={"white"}
      height={{ xs: "80px", md: "125px" }}
      alignItems={"center"}
      direction={"row"}
      spacing={3}
      justifyContent={"space-between"}
      zIndex={999}
    >
      <Stack direction={"row"} spacing={3}>
        <CustomButton
          text={"Descargar"}
          // onClick={handleOpenModalDescargar}
          // /pdfprint
          id={
            rol[0] === RolUsersKeysEnum.prescriptor
              ? "Pre_btn_DescargarPrescripcion"
              : "QF_btn_PlanDescargar"
          }
          // onClick={() => router.push(mainRoutes.pdf)}
          onClick={() => {
            if (pdfMode) {
              convertirAPDF(idDescargar!, title!);
            } else {

            }
          }}
          disabled={!pdfMode}
          width="160px"
          height="44px"
          variant="outlined"
          color="secundary"
          fontSize={"16px"}
          textColor={colorsKarbono.primary}
          colorHover="white"
          borderColor={"grey"}
          startIcon={
            <GetAppOutlinedIcon
              style={{
                color: colorsKarbono.primary,
                paddingLeft: "5px",
                scale: "1.5",
              }}
            />
          }
          sx={{ borderRadius: "10px" }}
        />

        <CustomButton
          text={pdfMode ? "Editar" : "Guardar"}
          // onClick={handleOpenModalDescargar}
          // /pdfprint
          id={"Save"}
          // onClick={() => router.push(mainRoutes.pdf)}
          onClick={() => handlePdfMode()}
          width="160px"
          height="44px"
          variant="contained"
          color="secundary"
          fontSize={"16px"}
          textColor="white"
          colorHover="grey"
          borderColor={"grey"}
          //   startIcon={
          //     <GetAppOutlinedIcon
          //       style={{
          //         color: "white",
          //         paddingLeft: "5px",
          //         scale: "1.5",
          //       }}
          //     />
          //   }
          sx={{ borderRadius: "10px" }}
        />
      </Stack>

      <CustomButton
        text={"Salir"}
        // onClick={handleOpenModalDescargar}
        id={
          rol[0] === RolUsersKeysEnum.prescriptor
            ? "Pre_btn_SalirPrescripcion"
            : "QF_btn_PlanSalir"
        }
        onClick={() => router.push(mainRoutes.reportePrescripcion)}
        width="160px"
        height="44px"
        // variant='outlined'
        color="#D03939"
        fontSize={"16px"}
        textColor={"white"}
        borderColor={colorsKarbono.secundary}
        startIcon={
          <LogoutRoundedIcon
            sx={{ color: "white", width: "30px", height: "30px" }}
          />
        }
        sx={{ borderRadius: "10px" }}
      />
    </Stack>
  );
};

export default BarEtiqueta;
