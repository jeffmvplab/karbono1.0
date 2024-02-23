import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Image from 'next/image'
import { ContainerText } from "./components/ActionsDrawer";


export interface EtiquetaViewProps { }

const EtiquetaView: React.FC<EtiquetaViewProps> = () => {


	return (
		<>
			<Container
				// maxWidth="100vw"
				sx={{
					// marginX:'50px',
					height: '80vh',
					backgroundColor: '#ccc',
					borderRadius: '10px',
					display: 'block',
					alignItems: 'center',
					justifyContent: 'center',
					paddingY: '30px'
				}}
			>
				<Stack paddingX={6} borderRadius={2} bgcolor={'white'} width={'100%'} height={'100%'} direction={'column'}>
					{//////////////Fecha-Version-etc///////////////////////////////////////////////
					}
					<Stack paddingTop={3} direction={'row'} justifyContent={'end'}>
						<Typography>
							Versión 4,Fecha de aprobación:16.03.2021  plantilla OyM-5605
						</Typography>
					</Stack>

					{/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}
					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>
							<Grid item xs={3}>
								{/*  */}
								<Stack
									height={'100%'}
									direction={'column'}
									justifyContent={'center'}>
									<Image
										src='/assets/1.png'
										width={240}
										height={60}
										alt=''
										style={{ marginTop: '5px', alignItems: 'center', }}
									/>
								</Stack>
							</Grid>

							<Grid item xs={5}>

							</Grid>
							<Grid item xs={2}>
								<Stack
									height={'100%'}
									direction={'column'}
									justifyContent={'end'}>

									<ContainerText title="Fecha" value="xxxxxxxx" />
								</Stack>
							</Grid>


							<Grid item xs={2}>
								<Stack direction={'column'} spacing={2}>
									<ContainerText titleSize="24px" title="Lote" value="xxxxxxxxx" />
									<ContainerText title="Número ID" value="xxxxxxxxx" />
								</Stack>
							</Grid>

						</Grid>
					</Stack>
					{					/////////////////////////////////////////////////////////////////////////////////////////////////////////////
					}

					<Divider sx={{ paddingY: 1 }} />

					<Stack paddingTop={1} direction={'row'} justifyContent={'end'}>

						<Grid container spacing={2}>
 
							<Grid item xs={5}>
								<Stack direction={'column'} spacing={2}>
									<ContainerText title="Fecha" value="xxxxxxxx" />
								</Stack>
							</Grid>

							<Grid item xs={5}>
								<Stack direction={'column'} spacing={2}>
									<ContainerText title="Fecha" value="xxxxxxxx" />
								</Stack>
							</Grid>


							<Grid item xs={2}>
								<Stack direction={'column'} spacing={2}>
									<ContainerText title="Número ID" value="xxxxxxxxx" />
								</Stack>
							</Grid>

						</Grid>
					</Stack>


				</Stack>
			</Container>
		</>
	)

};

export default EtiquetaView;

