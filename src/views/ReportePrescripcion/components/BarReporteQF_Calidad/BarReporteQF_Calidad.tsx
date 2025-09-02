import { CustomButton } from "@/components/CustomButton";
import { colorsKarbono } from "@/themes/colors";
import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { Card, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ReportesContext } from "../../context/ReportesContext";
import Image from 'next/image'
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useRouter } from "next/router";
import { mainRoutes } from "@/routes/routes";
import { GlobalContext } from "@/context/GlobalContext";
import { RolUsersKeysEnum } from "@/utilities/enums/rol_user_keys.enum";
import { esAutomatizado } from "../../data/functionsParams";


const BarReporteQF_Calidad = () => {

    const { getMeRol } = useContext(GlobalContext);
    const { reporte } = useContext(ReportesContext);

    const router = useRouter();

    // Determinar si debe ser automático basado en la lógica de negocio
    const esEtiquetaAutomatica = reporte ? esAutomatizado(reporte) : false;

    return (

        <Stack direction={'column'} width={'100%'}>

            <Typography
                sx={{ color: colorsKarbono.secundary, fontWeight: 700, fontSize: { xs: '16px', md: '16px' }, paddingX: '40px' }}>
                Generar archivos:
            </Typography>

            <Stack

                paddingX={'40px'}
                overflow={'scroll'}
                bgcolor={'white'}
                height={{ xs: '60px', md: '80px' }}
                alignItems={'center'}
                direction={'row'}
                spacing={3}
                justifyContent={'space-between'}
            >

                <Stack direction={'row'} spacing={2}>
                    {/* Botón Etiqueta Automática */}
                    <CustomButton text={'Etiqueta Automática'}
                        id={'QF_btn_EtiquetaAutomatica'}
                        onClick={() => router.push(`${mainRoutes.etiqueta}?automatico=true`)}
                        width='180px'
                        height='44px'
                        color={colorsKarbono.primary}
                        fontSize={'14px'}
                        textColor={'white'}
                        borderColor={colorsKarbono.primary}
                        startIcon={
                            <Image width={25} height={25} src={'/assets/Etiqueta.png'} alt={''} ></Image>
                        }
                        sx={{ borderRadius: '10px' }}
                    />

                    {/* Botón Etiqueta Manual */}
                    <CustomButton text={'Etiqueta Manual'}
                        id={'QF_btn_EtiquetaManual'}
                        onClick={() => router.push(`${mainRoutes.etiqueta}?automatico=false`)}
                        width='170px'
                        height='44px'
                        color={'#5C7CFA'}
                        fontSize={'14px'}
                        textColor={'white'}
                        borderColor={'#5C7CFA'}
                        startIcon={
                            <Image width={25} height={25} src={'/assets/Etiqueta.png'} alt={''} ></Image>
                        }
                        sx={{ borderRadius: '10px' }}
                    />

                    <CustomButton text={'Plan de producción'}
                        // onClick={handleOpenModalDescargar}
                        id='QF_btn_PlanProduccion'
                        onClick={() => router.push(mainRoutes.plan_produccion)}
                        width='240px'
                        height='44px'
                        // variant='outlined'
                        color={colorsKarbono.primary}
                        fontSize={'16px'}
                        textColor={'white'}
                        borderColor={colorsKarbono.secundary}
                        startIcon={
                            <Image width={25} height={25} src={'/assets/verificar.png'} alt={''} ></Image>
                        }
                        sx={{ borderRadius: '10px' }}
                    />
                    {/* 
                        <CustomButton text={'Archivo plano'}
                            // onClick={handleOpenModalDescargar}
                            onClick={() => {

                            }}
                            width='200px'
                            height='44px'
                            // variant='outlined'
                            color={'black'}
                            fontSize={'16px'}
                            textColor={'white'}
                            borderColor={colorsKarbono.secundary}
                            startIcon={
                                <Image width={25} height={25} src={'/assets/archivo_plano.png'} alt={''} ></Image>
                            }
                            sx={{ borderRadius: '10px' }}
                        /> */}

                    <CustomButton text={'Descargar'}
                        // onClick={handleOpenModalDescargar}
                        // onClick={() => convertirAPDF('reporte_view', reporte?.nombre_paciente!)}
                        id={(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
                            ? 'Pre_btn_DescargarPrescripcion'
                            : 'QF_btn_EtiquetaDescargar'
                        }
           
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
                </Stack>

                <CustomButton text={'Salir'}
                    // onClick={handleOpenModalDescargar}
                    id={(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
                        ? 'Pre_btn_SalirPrescripcion'
                        : 'QF_btn_EtiquetaSalir'
                    }
                    onClick={() => { router.push(mainRoutes.prescripcion) }}
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

export default BarReporteQF_Calidad

