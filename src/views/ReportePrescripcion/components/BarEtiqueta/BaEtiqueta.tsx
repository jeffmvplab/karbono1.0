import { CustomButton } from "@/components/CustomButton";
import { IComment } from "@/domain/models/observaciones.model";
import { mainRoutes } from "@/routes/routes";
import { colorsKarbono } from "@/themes/colors";
import { StatePrescriptionKeysEnum } from "@/utilities/enums/state_prescription_keys.enum";
import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { Card, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ReportesContext } from "../../context/ReportesContext";
import Image from 'next/image'
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


export interface BarEtiquetaProps {
    idDescargar?: string,
    title?: string,
}


const BarEtiqueta: React.FC<BarEtiquetaProps> = ({
    idDescargar,
    title, }) => {

    const router = useRouter();

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
        >

            <CustomButton text={'Descargar'}
                // onClick={handleOpenModalDescargar}
                onClick={() => convertirAPDF(idDescargar!, title!)}
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

