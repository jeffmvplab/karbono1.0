
import { GlobalContext } from "@/context/GlobalContext";
import { mainRoutes } from "@/routes/routes";
import { Stack, Typography, Drawer, IconButton, Box, Button, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Image from 'next/image'
import { ButtonsMainDrawer } from "@/layouts/components/ButtonsMainDrawer";
import { PrescripcionContext } from "@/views/PrescripcionView/context/PrescripcionContext";
import { ContainerComments } from "@/views/ReportePrescripcion/ReportePrescripcionView";
import { formatearFechaEsp } from "@/utilities/get_String_from_Date";

export interface ActionsDrawerProps { }

const ActionsDrawer: React.FC<ActionsDrawerProps> = () => {

	const { openActionsDrawer, setOpenActionsDrawer, getLogsByNumber, logs } = useContext(PrescripcionContext);

	// return focus to the button when we transitioned from !open -> open
	useEffect(() => {
		if (openActionsDrawer) {
			getLogsByNumber();
			console.log('MMMM')
		}
	}, [openActionsDrawer])

	return (

		<Drawer
			anchor="right"
			open={openActionsDrawer}
			onClose={() => setOpenActionsDrawer(false)}
		// PaperProps={{
		// 	sx: {
		// 		borderRadius: '10px 0 0 10px', // Bordes izquierdos redondeados
		// 		height: '80vh', // Altura igual al tamaño de la ventana menos 50px en la parte superior e inferior
		// 		top: '80px', // Desplazamiento desde el borde superior
		// 		bottom: '50px', // Desplazamiento desde el borde inferior
		// 	},
		// }}
		>
			{/* Contenido del Drawer */}
			<Stack direction="column" sx={{ width: { xs: '350px', md: '450px' }, padding: '10px' }}>
				{/* Botón de cerrar Drawer */}
				<IconButton
					sx={{ alignSelf: 'flex-end' }}
					onClick={() => setOpenActionsDrawer(false)}
				>
					{/* <CloseIcon /> */}
				</IconButton>


				<Stack direction="column" overflow={'scroll'} width={'100%'}>

					<Stack
						direction={'row'}
						spacing={3}
						alignItems={'center'}
						paddingX={'40px'}
						paddingBottom={'40px'}
					>

						<Box width={'10px'}>
							<Button
								onClick={() => setOpenActionsDrawer(false)} variant='text'>
								<Image
									src='/assets/arrow-landing.png'
									width={10}
									height={20}
									alt=''
								/>
							</Button>
						</Box>


						<Box width={'120px'} >
							<Typography
								sx={{
									paddingLeft: '30px',
									fontFamily: 'Outfit',
									fontSize: '25px',
									fontWeight: 700,
									lineHeight: '32px',
									letterSpacing: '0.02em',
									textAlign: 'left',
								}}
							>
								Acciones.
							</Typography>
						</Box>
					</Stack>
				</Stack>

				<Stack direction={'column'} spacing={3} paddingX={2}>
					{logs?.map((item, index) => {

						return <ContainerComments
							key={index}
							user={item.user}
							rol={item.user.roles[0]}
							date={formatearFechaEsp(item.date!.toString())}
							content={item.opcion}
						/>

					})
					}

				</Stack>
				{/* Otro contenido del Drawer */}
			</Stack>
		</Drawer>
	);
};

export default ActionsDrawer;
