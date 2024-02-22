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


const BarReporteNPT = () => {

    const router = useRouter();

	const { reporte, saveComments} = useContext(ReportesContext)


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

                    <CustomButton text={'Enviar'}
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
                        color={colorsKarbono.secundary}
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
                    
                    <CustomButton text={'Salir'}
                        // onClick={handleOpenModalDescargar}
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

