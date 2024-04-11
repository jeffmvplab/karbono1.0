
import { Typography, Grid, Stack, Button } from '@mui/material/';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { mainRoutes } from '@/routes/routes';
import { TableReportes } from './components/TableReportes';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { useContext } from 'react';
import { PrescripcionContext } from './context/PrescripcionContext';
import { Search } from '@mui/icons-material';
import CustomTextField from '../Formulario/Components/CustomTextField';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es'; // Asegúrate de importar el idioma español de Day.js
import CloseIcon from '@mui/icons-material/Close';


export interface PrescripcionViewProps { }

const PrescripcionView: React.FC<PrescripcionViewProps> = () => {

	const {
		goAddNew,
		getAll,
		handleSearchName,
		searchName,
		handleSearchId,
		searchId,
		searchNumber,
		searchFecha,
		setSearchFecha, handleFiltrosBorrar,
		handleSearchNumber,
		getPrescriptionsByNumber,
		getPrescriptionsByName, getPrescriptionsByDate,
		getPrescriptionsById } = useContext(PrescripcionContext)

	return (
		<>
			<Grid container sx={{ marginTop: '150px', paddingRight: { xs: '10px', md: '50px' }, paddingLeft: { xs: '10px', md: '50px' }, marginBottom: '30px' }}>
				<Grid item display='flex' xs={12} >
					{/* <SearchModal /> */}
					<Stack direction={'column'} spacing={3} width={'100%'}>
						<Typography
							variant='h5'
							sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '25px' }, marginTop: { xs: '5px' } }}>
							Pacientes prescritos
						</Typography>

						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={4}>

							<Stack margin={'5px'} direction={'column'} >
								<CustomButton text={'Nueva prescripción'}
									onClick={() => { goAddNew(mainRoutes.form) }}
									width='240px'
									height='44px'
									variant='outlined'
									color={colorsKarbono.secundary}
									fontSize={'16px'}
									textColor={'white'}
									borderColor={'transparent'}
									endIcon={<AddCircleOutlineIcon style={{ color: 'white', paddingLeft: '5px', scale: '1.5' }} />}
									sx={{ borderRadius: '10px' }}
								/>
							</Stack>

							<Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>

								<Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchName}
										whitIcon={true}
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
										whitIcon={true}
										onClickEndAdornament={() => { searchId ? getPrescriptionsById(searchId) : getAll() }}
										id='Numero-de-orden'
										label='Identificación'
										type='text'
										value={searchId}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack>


								<Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchNumber}
										whitIcon={true}
										onClickEndAdornament={() => { searchNumber ? getPrescriptionsByNumber(searchNumber) : getAll() }}
										id='Numero-de-orden'
										label='# de orden'
										type='text'
										value={searchNumber}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
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
											onAccept={() => { searchFecha ? getPrescriptionsByDate(searchFecha) : getAll() }}
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
			</Grid>
			<Grid container>
				{/* <Tabla /> */}
				<TableReportes />
			</Grid>
		</>
	)

};

export default PrescripcionView;
