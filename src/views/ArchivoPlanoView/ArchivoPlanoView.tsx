
import { Stack, Avatar, Button, Grid, Typography, MenuItem, TextField } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { TableArchivosPlanos } from "./TableArchivosPlanos";
import { Search } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomTextField from "../Formulario/Components/CustomTextField";
import { useContext } from "react";
import { PrescripcionContext } from "../PrescripcionView/context/PrescripcionContext";
import { instituciones } from "../ReportePrescripcion/data/instituciones";



export interface ArchivoPlanoViewProps { }

const ArchivoPlanoView: React.FC<ArchivoPlanoViewProps> = () => {

	const {
		// goAddNew, 
		getAll,
		searchInst,
		handleSearchInst,
		setSearchFecha,
		searchFecha,
		getPrescriptionsProd, handleFiltrosBorrar
	} = useContext(PrescripcionContext)

	return (

		<>
			<Grid container sx={{ marginTop: '150px', paddingRight: { xs: '10px', md: '50px' }, paddingLeft: { xs: '10px', md: '50px' }, marginBottom: '30px' }}>
				<Grid item display='flex' xs={12} >
					{/* <SearchModal /> */}
					<Stack direction={'column'} spacing={3} width={'100%'}>
						<Typography
							variant='h5'
							sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '25px' }, marginTop: { xs: '5px' } }}>
							Gestión de Archivos Planos
						</Typography>

						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'end'} spacing={4}>

							<Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>

								<Stack margin={'5px'} direction={'column'} >
									<TextField
										onChange={handleSearchInst}
										value={searchInst}
										label="Institución"
										type="text"
										placeholder='Institución'
										fullWidth
										select
										InputProps={{
											endAdornment:
												<Button onClick={() => { searchInst ? getPrescriptionsProd(searchInst,searchFecha) :  getPrescriptionsProd('','') }}
													sx={{ background: 'transparent', height: '30px' }}>
													<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />
												</Button>,
										}}

										inputProps={{ style: { height: '15PX', } }}
										sx={{
											width: '200px',
											bgcolor: 'transparent',
											"& .MuiInputBase-root": { borderRadius: '10px' },
										}}
									>
										{instituciones.map((option) => (
											<MenuItem
												style={{
													background: "white",
													color: "black",
												}}
												key={option.value}
												value={option.label}
											>
												{option?.label!}
											</MenuItem>
										))

										}
									</TextField>
								</Stack>

								<Stack margin={'5px'} direction={'column'} >
									<LocalizationProvider
										dateAdapter={AdapterDayjs}
										adapterLocale='es'
									>
										<DatePicker
											sx={{
												'.MuiOutlinedInput-root': { borderRadius: '12px' },
											}}
											label="Fecha"
											views={['day', 'month', 'year',]}
											onChange={(e) => setSearchFecha(e)}
											onAccept={() => { searchFecha ? getPrescriptionsProd(searchInst,searchFecha) :  getPrescriptionsProd('','') }}
											value={searchFecha}
										/>

									</LocalizationProvider>

								</Stack>

								<Stack direction={'row'} width={'200px'}>
									<Button onClick={handleFiltrosBorrar}>
										<Typography textTransform={'none'}>
											Borrar Filtros
										</Typography>
										<CloseIcon />
									</Button>
								</Stack>
							</Stack>

						</Stack>
					</Stack>

				</Grid>
			</Grid >
			<Grid container>
				{/* <Tabla /> */}
				<TableArchivosPlanos />
			</Grid>
		</>
	)

};

export default ArchivoPlanoView;