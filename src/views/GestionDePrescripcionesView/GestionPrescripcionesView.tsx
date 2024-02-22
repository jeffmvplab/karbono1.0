
import { Typography, Button, Box, Grid, Stack, TextField, InputAdornment } from '@mui/material/';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { useContext } from 'react';
import CustomTextField from '../Formulario/Components/CustomTextField';
import { mainRoutes } from '@/routes/routes';
import { Search } from '@mui/icons-material';
import { PrescripcionContext } from '../PrescripcionView/context/PrescripcionContext';
import { TableGestionPrescripciones } from './TableGestionPrescripciones';



export interface GestionPrescripcionesViewProps { }

const GestionPrescripcionesView: React.FC<GestionPrescripcionesViewProps> = () => {

	const { 
		goAddNew, 
		getAll, 
		handleSearchName, 
		searchName, 
		handleSearchId, 
		searchId, 
		handleSearchNumber, 
		searchNumber, 
		handleSearchFecha, 
		searchFecha, 
		getPrescriptionsByName, 
		getPrescriptionsById,
		getPrescriptionsByNumber
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
							Gestión de prescripciones
						</Typography>

						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'end'} spacing={4}>

							

							<Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>

								<Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchName}

										onClickEndAdornament={() => { searchName ? getPrescriptionsByName(searchName) : getAll() }}
										id='Numero-de-orden'
										label='Nombre'
										type='text'
										value={searchName}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack>

								<Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchId}
										onClickEndAdornament={() => { searchId ? getPrescriptionsById(searchId) : getAll() }}
										id='Numero-de-identificación'
										label='Identificación'
										type='text'
										value={searchId}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack>

								<Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchNumber}
										onClickEndAdornament={() => {searchNumber? getPrescriptionsByNumber(searchNumber) : getAll() }}
										id='Numero-de-orden'
										label='# de orden'
										type='text'
										value={searchNumber}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack>


								{/* <Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchFecha}
										onClickEndAdornament={() => { searchFecha ? getPrescriptionsByFecha(searchFecha) : getAll() }}
										id='Fecha'
										label='Fecha'
										type='text'
										value={searchFecha}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack> */}
							</Stack>

						</Stack>
					</Stack>

				</Grid>
			</Grid>
			<Grid container>
				{/* <Tabla /> */}
				<TableGestionPrescripciones />
			</Grid>
		</>
	)

};

export default GestionPrescripcionesView;
