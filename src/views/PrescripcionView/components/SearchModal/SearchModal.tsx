import { CustomButton } from '@/components/CustomButton';
import { LoadingComponent } from '@/components/LoadingComponent';
import { mainRoutes } from '@/routes/routes';
import { colorsKarbono } from '@/themes/colors';
import { Modal, Avatar, Button, Stack, Box, Typography, TextField, InputAdornment, Radio, FormControlLabel, CircularProgress, Alert } from '@mui/material';
import router from 'next/router';
import React, { useContext } from 'react';
import { PrescripcionContext } from '../../context/PrescripcionContext';
import CloseIcon from '@mui/icons-material/Close';
import { Search } from '@mui/icons-material'
import { pink } from '@mui/material/colors';

export interface SearchModalProps { }

const SearchModal: React.FC<SearchModalProps> = () => {

	const {
		openModalSearch,
		handleCloseModalSearch,
		handleOpenModalSearch,
		search,
		handleSearch,
		errorSearch,
		messageErrorSearch,
		messageAPI,
		selectedFilter,
		handleChangeFilter,
		handleFilterSearch,
		loadingApi,
		apiOK,
		goEdit,
		goReporte,
		prescSearch,
	} = useContext(PrescripcionContext)



	const controlProps = (item: string) => ({
		checked: selectedFilter === item,
		onChange: handleChangeFilter,
		value: item,
		name: 'color-radio-button-demo',
		inputProps: { 'aria-label': item },
	});

	return (
		<Modal
			open={openModalSearch}
			onClose={handleCloseModalSearch}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{
				overflow: 'auto',
				top: '20%', left: { xs: '20%', sm: '40%' },
			}}>
			<>
				<Avatar
					sx={{
						zIndex: 100,
						top: '10px',
						right: { xs: '-250px', sm: '-400px' },
						background: 'red',
						width: '25px',
						height: '25px'
					}}>
					<Button onClick={handleCloseModalSearch}>
						<CloseIcon sx={{ color: 'white' }} />
					</Button>
				</Avatar>

				<Stack
					direction='row'
					alignItems='center'
					sx={{
						width: { xs: '200px', sm: '450px', md: '500px', lg: '500px', xl: '500px' },
						// bgcolor: 'background.paper',
						// boxShadow: 24,
						borderRadius: 4,
					}}>
					<Stack
						direction='column'
						borderRadius={'10px'}
						bgcolor={'white'}
						minWidth={{ xs: '300px', sm: '440px' }}
						minHeight={'200px'}
					>
						<Box
							padding={'5px'}
							sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
							bgcolor={colorsKarbono.primary}
							minWidth={{ xs: '300px', sm: '440px' }}
							minHeight={'50px'}
						>
							<Stack margin={'5px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>

								<TextField
									onChange={handleSearch}
									id='Numero-de-orden'
									label='Buscar Predscripción'
									type='text'
									value={search}
									variant='outlined'
									sx={{ bgcolor: 'transparent', color: 'white' }}
									InputProps={{
										startAdornment:
											<InputAdornment position="start">
												<Search style={{ color: 'black', paddingLeft: '5px', scale: '1.5' }} />
											</InputAdornment>,
									}}
									fullWidth
								/>


							</Stack>
						</Box>

						<Stack padding='30px' direction='column' alignItems='start' spacing={2}>
							<Typography
								// color={textColor}
								textAlign={'center'}
								textTransform='initial'
								sx={{
									fontSize: { xs: '14px', sm: '16px' },
									fontWeight: '1px'
								}}
							>Buscar por:
							</Typography>

							<FormControlLabel
								control={<Radio {...controlProps('a')} />}
								label="Nombre del paciente"
								labelPlacement="end"
							/>
							<FormControlLabel
								control={<Radio {...controlProps('b')} />}
								label="Ips"
								labelPlacement="end"
							/>
							<FormControlLabel
								control={<Radio {...controlProps('c')} />}
								label="Identificación"
								labelPlacement="end"
							/>
							<FormControlLabel
								control={<Radio {...controlProps('d')} />}
								label="Número de orden"
								labelPlacement="end"
							/>


						</Stack>

						<Stack padding='30px' direction='column' alignItems='center' spacing={2}>

							{(!apiOK)
								? (!errorSearch)
									? <Alert severity="success" sx={{ mb: 3 }}>
										<Stack direction={'column'}>
											{'Busqueda Terminada'}
											<Stack direction={'column'}>
												<Button variant='text' onClick={()=>handleCloseModalSearch()}>
													<Typography
														textTransform='initial'
														sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '1px' }}
													>Ver Tabla
													</Typography>
												</Button>

												{/* <Button variant='text' onClick={()=>goEdit(prescSearch?.no_orden!)}>
													<Typography
														textAlign={'center'}
														textTransform='initial'
														sx={{ fontSize: { xs: '14px', sm: '16px' }, fontWeight: '1px' }}
													>Editar Prescripción
													</Typography>
												</Button> */}

											</Stack>
										</Stack>
									</Alert>
									: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)', color: 'white' }}>
										{messageAPI}
									</Alert>
								: null
							}


							<CustomButton
								onClick={() => handleFilterSearch()}
								disabled={(search!=='')
									        ?(loadingApi) ? false : true
											:true
										}
								textColorHover={(loadingApi) ? 'white' : null}
								textColor={'white'}
								colorHover={(loadingApi) ? colorsKarbono.secundary : ''}
								colorActive={(loadingApi) ? colorsKarbono.secundary : ''}
								sx={{
									width: '200px',
									height: '50px',
									// color:colorsInfostore.primary
								}}
								variant='contained'
								text={(loadingApi) ? 'Buscar' : 'Buscando...'}
								endIcon={
									(loadingApi)
										? <></>
										: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />
								}
							/>
						</Stack>

					</Stack>
				</Stack>
			</>
		</Modal>

	);
};

export default SearchModal;
