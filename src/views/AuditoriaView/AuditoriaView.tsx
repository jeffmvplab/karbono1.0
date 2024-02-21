
import { Typography, Button, Box, Grid, Stack, TextField, InputAdornment } from '@mui/material/';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CustomButton } from '@/components/CustomButton';
import { colorsKarbono } from '@/themes/colors';
import { useContext } from 'react';
import CustomTextField from '../Formulario/Components/CustomTextField';
import { mainRoutes } from '@/routes/routes';
import { Search } from '@mui/icons-material';
import { TableAuditoria } from './components/TableAuditoria';
import { PrescripcionContext } from '../PrescripcionView/context/PrescripcionContext';



export interface PrescripcionViewProps { }

const AuditoriaView: React.FC<PrescripcionViewProps> = () => {

	const { goAddNew, getAll, handleSearchName, searchName, handleSearchId, searchId, getPrescriptionsByName, getPrescriptionsById } = useContext(PrescripcionContext)

	return (
		<>
			<Grid container sx={{ marginTop: '150px', paddingRight: { xs: '10px', md: '50px' }, paddingLeft: { xs: '10px', md: '50px' }, marginBottom: '30px' }}>
				<Grid item display='flex' xs={12} >
					{/* <SearchModal /> */}
					<Stack direction={'column'} spacing={3} width={'100%'}>
						<Typography
							variant='h5'
							sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '25px' }, marginTop: { xs: '5px' } }}>
							Registros Auditoria.
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

										onClickEndAdornament={() => { searchName ? getPrescriptionsByName(searchName) : getAll() }}
										id='Numero-de-orden'
										label='Buscar por nombre'
										type='text'
										value={searchName}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack>

								<Stack margin={'5px'} direction={'column'} >
									<CustomTextField
										onChange={handleSearchId}
										onClickEndAdornament={() => { searchId ? getPrescriptionsById(searchId) : getAll() }}
										id='Numero-de-orden'
										label='Búsqueda por número de identificación'
										type='text'
										value={searchId}
										endAdornament={<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />}
									/>
								</Stack>
							</Stack>

						</Stack>
					</Stack>

				</Grid>
			</Grid>
			<Grid container>
				{/* <Tabla /> */}
				<TableAuditoria />
			</Grid>
		</>
	)

};

export default AuditoriaView;
