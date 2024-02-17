
import { GlobalContext } from "@/context/GlobalContext";
import { mainRoutes } from "@/routes/routes";
import { Stack, Typography, Drawer, IconButton, Box, Button, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
import Image from 'next/image'
import { ButtonsMainDrawer } from "../ButtonsMainDrawer";

export interface MainDrawerProps { }

const MainDrawer: React.FC<MainDrawerProps> = () => {

	const { openMainDrawer, setOpenMainDrawer } = useContext(GlobalContext);

	// return focus to the button when we transitioned from !open -> open
	const route = useRouter();

	console.log('VVV:', route.pathname)

	return (

		<Drawer
			anchor="left"
			open={openMainDrawer}
			onClose={() => setOpenMainDrawer(false)}
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
			<Stack direction="column" sx={{ width: '300px', padding: '10px' }}>
				{/* Botón de cerrar Drawer */}
				<IconButton
					sx={{ alignSelf: 'flex-end' }}
					onClick={() => setOpenMainDrawer(false)}
				>
					{/* <CloseIcon /> */}
				</IconButton>


				<Stack direction="column" overflow={'scroll'} width={'100%'}>

					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						alignItems={'center'}
						paddingX={'40px'}
						paddingBottom={'40px'}
					>

						<Box width={'10px'}>
							<Button
								onClick={() => setOpenMainDrawer(false)} variant='text'>
								<Image
									src='/assets/arrowleft.png'
									width={10}
									height={20}
									alt=''
								/>
							</Button>
						</Box>


						<Box width={'120px'} >
							<Button

								onClick={() => { route.push(mainRoutes.home) }} variant='text'>
								<Image
									src='/assets/1.png'
									width={120}
									height={30}
									alt=''
								/>
							</Button>
						</Box>
					</Stack>
				</Stack>

				<Stack direction={'column'} spacing={3}>

					<ButtonsMainDrawer
						icon='/assets/home.png'
						title="Inicio"
						wIcon={20}
						hIcon={20}
						isActive={mainRoutes.home === route.pathname}
						rourte={mainRoutes.home} />

					<Divider />
					<ButtonsMainDrawer
						icon='/assets/iconprescripcion1.png'
						title="Prescripciones"
						wIcon={30}
						hIcon={30}
						isActive={mainRoutes.prescripcion === route.pathname}
						rourte={mainRoutes.prescripcion} />


					<Divider />
					<ButtonsMainDrawer
						icon='/assets/parametros.png'
						title="Parámetros"
						wIcon={20}
						hIcon={20}
						isActive={mainRoutes.form === route.pathname}
						rourte={mainRoutes.form} />

					<Divider />
					<ButtonsMainDrawer
						icon='/assets/informes.png'
						title="Informes"
						wIcon={20}
						hIcon={20}
						isActive={mainRoutes.reportePrescripcion === route.pathname}
						rourte={mainRoutes.reportePrescripcion} />

					<Divider />
					<ButtonsMainDrawer
						icon='/assets/configuracion.png'
						title="Configuración"
						wIcon={20}
						hIcon={20}
						isActive={mainRoutes.mi_cuenta === route.pathname}
						rourte={mainRoutes.mi_cuenta} />

					<Divider />
					<ButtonsMainDrawer
						icon='/assets/ayudas.png'
						title="Ayuda"
						wIcon={20}
						hIcon={20}
						isActive={mainRoutes.ayuda === route.pathname}
						rourte={mainRoutes.ayuda} />

				</Stack>

				{/* Otro contenido del Drawer */}
			</Stack>
		</Drawer>
	);
};

export default MainDrawer;
