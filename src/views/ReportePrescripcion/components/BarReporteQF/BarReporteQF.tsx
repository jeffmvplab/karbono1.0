import { CustomButton } from "@/components/CustomButton";

import { colorsKarbono } from "@/themes/colors";
import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { ReportesContext } from "../../context/ReportesContext";
import Image from 'next/image'
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import CloseIcon from '@mui/icons-material/Close';

const BarReporteQF = () => {


    const { reporte, saveComments,handleOpenModalRechazar, handleOpenModalVerificar, handleOpenModalCancelVerificar } = useContext(ReportesContext)

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
        >

            <CustomButton text={'Descargar'}
                // onClick={handleOpenModalDescargar}
                onClick={() => convertirAPDF('reporte_view', reporte?.nombre_paciente!)}
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

            <CustomButton text={'Verificar'}
                // onClick={handleOpenModalDescargar}
                onClick={() => {
                    handleOpenModalVerificar()
                    // const newComment: IComment = {
                    //     prescriptionId: reporte?._id!,
                    //     // comentario: newObs!,
                    //     estado: StatePrescriptionKeysEnum.solicitada,
                    // }
                    // saveComments(newComment)
                }}
                width='160px'
                height='44px'
                // variant='outlined'
                color={'#2B8E12 '}
                fontSize={'16px'}
                textColor={'white'}
                borderColor={colorsKarbono.secundary}
                startIcon={
                    <Image width={25} height={25} src={'/assets/verificar.png'} alt={''} ></Image>
                }
                sx={{ borderRadius: '10px' }}
            />

            <CustomButton text={'Rechazar'}
                // onClick={handleOpenModalDescargar}
                onClick={() => {
                    handleOpenModalRechazar()
                    // const newComment: IComment = {
                    //     prescriptionId: reporte?._id!,
                    //     // comentario: newObs!,
                    //     estado: StatePrescriptionKeysEnum.rechazada,
                    // }
                    // saveComments(newComment)
                }}
                width='160px'
                height='44px'
                // variant='outlined'
                color={'#E4951E '}
                fontSize={'16px'}
                textColor={'white'}
                borderColor={colorsKarbono.secundary}
                startIcon={
                    <CloseIcon sx={{color:'white',width:'30px',height:'30px'}}/>
                }
                sx={{ borderRadius: '10px' }}
            />

            <CustomButton text={'Salir'}
                // onClick={handleOpenModalDescargar}
                onClick={() => { handleOpenModalCancelVerificar() }}
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

export default BarReporteQF

