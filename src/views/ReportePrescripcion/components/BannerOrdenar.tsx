import { CustomButton } from "@/components/CustomButton"
import { colorsKarbono } from "@/themes/colors"
import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { ReportesContext } from "../context/ReportesContext"
import { useContext } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { mainRoutes } from "@/routes/routes"
import { useRouter } from "next/router"


const BannerOrdenar = () => {
    
    const router=useRouter();

    const { handleOpenModalOrdenar } = useContext(ReportesContext)

    return (
        <>
            <Grid container 
            spacing={{xs:'0px',sm:'30px'}}
            sx={{ 
                justifyContent: 'center', alignItems: 'center',
                backgroundColor: '#372FC6', 
                height: '200px', 
                borderRadius: '10px' 
                }}>

                <Grid item 
                xs={11} sm={12} md={3} 
                sx={{ justifyContent: 'center', alignItems: 'center'}}>

                    <Stack direction={'row'} spacing={4}>
                        <CustomButton text={'Atras'}
                            onClick={()=>{
                            router.push(mainRoutes.form)
                                // goEdit(mainRoutes.form)
                            }}
                            startIcon={<ArrowBackIcon style={{ color: 'white', paddingRight: '5px',scale:'2' }} />}
                            width='265px'
                            height='65px'
                            variant='outlined'
                            color='secundary'
                            fontSize={'20px'}
                            textColor={'white'}
                            borderColor={'white'}
                            sx={{ borderRadius: '10px' }}
                        />

                        <CustomButton text={'Ordenar'}
                            onClick={handleOpenModalOrdenar}
                            width='265px'
                            height='65px'
                            variant='outlined'
                            color='secundary'
                            fontSize={'20px'}
                            textColor={'white'}
                            borderColor={'white'}
                            sx={{ borderRadius: '10px' }}
                        />
                    </Stack>
                </Grid>

                <Grid item 
                xs={11} sm={12} md={6}
                sx={{ justifyContent: 'center', alignItems: 'center' }}>

                    <Typography
                    width={'450px'}
                     sx={{ fontSize: '20px', lineHeight: '22px', color: '#fff' }}>
                        Envía y ordena tu prescripción a la Central de Mezclas de tu 
                        preferencia en tan solo segundos, y lleva seguimiento de tu
                        pedido en tiempo real.
                    </Typography>

                </Grid>
            </Grid>
        </>
    )
}

export default BannerOrdenar

