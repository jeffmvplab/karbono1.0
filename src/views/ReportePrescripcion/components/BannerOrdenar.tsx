import { CustomButton } from "@/components/CustomButton"
import { colorsKarbono } from "@/themes/colors"
import { Box, Button, Grid, Typography } from "@mui/material"
import { ReportesContext } from "../context/ReportesContext"
import { useContext } from "react"

const BannerOrdenar = () => {
     
    const {handleOpenModalOrdenar} = useContext(ReportesContext)

    return (
        <>
            <Grid container display={'flex'} sx={{ backgroundColor: '#372FC6', width: '100%', height: '200px', borderRadius: '10px' }}>

                {/* <Grid item display={'flex'} xs={4} sx={{  justifyContent: 'end', alignItems: 'center', marginRight:'60px' }}>
                    <button  style={{ border: 'solid 0.03px', padding: '10px 55px', backgroundColor: 'inherit', fontSize: '18px', color: '#fff', borderColor: '#fff', borderRadius:'10px',  }}>
                        Ordenar
                    </button>
                </Grid> */}
                <Grid item display={'flex'} xs={4} sx={{ justifyContent: 'end', alignItems: 'center', marginRight: '60px' }}>
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
                </Grid>

                <Grid item display={'flex'} xs={7} sx={{ justifyContent: 'left', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '20px', lineHeight: '22px', color: '#fff' }}>
                        Envía y ordena tu prescripción a la Central de Mezclas de tu<br /> preferencia en tan solo segundos, y lleva seguimiento de tu <br /> pedido en tiempo real.
                    </Typography>

                </Grid>
            </Grid>
        </>
    )
}

export default BannerOrdenar

