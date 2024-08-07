import { CustomButton } from "@/components/CustomButton";
import { IComment } from "@/domain/models/observaciones.model";
import { mainRoutes } from "@/routes/routes";
import { colorsKarbono } from "@/themes/colors";
import { StatePrescriptionKeysEnum } from "@/utilities/enums/state_prescription_keys.enum";
import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { Card, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ReportesContext } from "../../context/ReportesContext";
import Image from 'next/image'
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { GlobalContext } from "@/context/GlobalContext";



export interface BarReporteNPTProps {
    user?: string;
}

const BarReporteNPT: React.FC<BarReporteNPTProps> = ({ user }) => {

    const router = useRouter();

    const { reporte, saveComments, setPrint } = useContext(ReportesContext);
    const { getMeUser } = useContext(GlobalContext);

    const me = getMeUser().nombre_apellidos;

    const disable = (reporte?.user.nombre_apellidos !== me
        || (reporte?.estado !== 'FINALIZADA')
    )
    console.log('GET ME:', me, reporte?.user.nombre_apellidos, reporte?.estado, 'Disable:', disable)

    useEffect(() => {
        setPrint(false);
    }, [])

    return (

        <Stack
            paddingX={'40px'}
            width={'100%'}
            overflow={'scroll'}
            bgcolor={'white'}
            height={{ xs: '80px', md: '125px' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            direction={'row'}>

            <Stack direction={'row'} spacing={3}>

                <CustomButton
                    disabled={disable}
                    id="Pre_btn_EnviarPrescripcion"
                    text={'Enviar'}
                    // onClick={handleOpenModalDescargar}
                    onClick={() => {
                        const newComment: IComment = {
                            prescriptionId: reporte?._id!,
                            // comentario: newObs!,
                            estado: StatePrescriptionKeysEnum.solicitada,
                        }
                        saveComments(newComment)
                    }}
                    width='160px'
                    height='44px'
                    // variant='outlined'
                    color={disable
                        ? 'grey'
                        : colorsKarbono.secundary}
                    fontSize={'16px'}
                    textColor={'white'}
                    borderColor={colorsKarbono.secundary}
                    startIcon={
                        <Image width={25} height={25} src={'/assets/enviar.png'} alt={''} ></Image>
                    }
                    sx={{ borderRadius: '10px' }}
                />

                <Typography sx={{ fontWeight: 700, fontSize: { xs: '16px', md: '16px' }, width: '400px' }}>
                    Ordena tu prescripción a la Central de Mezclas de tu preferencia en tan solo segundos.
                </Typography>
            </Stack>

            <Stack direction={'row'} spacing={3} paddingRight={4}>

                <CustomButton text={'Descargar'}
                    // onClick={handleOpenModalDescargar}
                    // onClick={async () => {await setPrint(true), convertirAPDF('reporte_view', reporte?.nombre_paciente!) }}
                    id="Pre_btn_DescargarPrescripcion"
                    onClick={() => router.push(mainRoutes.pdf)}
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
                    id="Pre_btn_SalirPrescripcion"
                    onClick={() => router.push(mainRoutes.prescripcion)}
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
        </Stack>
    )
}

export default BarReporteNPT

