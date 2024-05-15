import { CustomButton } from "@/components/CustomButton";
import { mainRoutes } from "@/routes/routes";
import { colorsKarbono } from "@/themes/colors";
import {  Stack} from "@mui/material";
import { useRouter } from "next/router";


import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { RolUsersKeysEnum } from "@/utilities/enums/rol_user_keys.enum";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";


export interface BarEtiquetaProps {
    idDescargar?: string,
    title?: string,
}


const BarEtiqueta: React.FC<BarEtiquetaProps> = ({
    idDescargar,
    title, }) => {

    const router = useRouter();
    const { getMeRol } = useContext(GlobalContext);
    
    return (


        <Stack
            paddingX={'40px'}
            width={'100%'}
            overflow={'scroll'}
            bgcolor={'white'}
            height={{ xs: '80px', md: '125px' }}
            alignItems={'center'}
            direction={'row'}
            spacing={3}
            justifyContent={'space-between'}
            zIndex={999}
        >

            <CustomButton text={'Descargar'}
                // onClick={handleOpenModalDescargar}
                // /pdfprint
                id={(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
                    ? 'Pre_btn_DescargarPrescripcion'
                    : 'QF_btn_PlanDescargar'
                }
         
                onClick={() => router.push(mainRoutes.pdf)}
                // onClick={() => convertirAPDF(idDescargar!, title!)}
                width='160px'
                height='44px'
                variant='outlined'
                color='secundary'
                fontSize={'16px'}
                textColor={colorsKarbono.primary}
                colorHover="white"
                borderColor={'grey'}
                startIcon={
                    <GetAppOutlinedIcon
                        style={{ color: colorsKarbono.primary, paddingLeft: '5px', scale: '1.5' }} />
                }
                sx={{ borderRadius: '10px' }}
            />


            <CustomButton text={'Salir'}
                // onClick={handleOpenModalDescargar}
                id={(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
                    ? 'Pre_btn_SalirPrescripcion'
                    : 'QF_btn_PlanSalir'
                }
                onClick={() => router.push(mainRoutes.reportePrescripcion)}
                width='160px'
                height='44px'
                // variant='outlined'
                color='#D03939'
                fontSize={'16px'}
                textColor={'white'}
                borderColor={colorsKarbono.secundary}
                startIcon={
                    <LogoutRoundedIcon sx={{ color: 'white', width: '30px', height: '30px', }} />
                }
                sx={{ borderRadius: '10px' }}
            />
        </Stack>
    )
}

export default BarEtiqueta;

