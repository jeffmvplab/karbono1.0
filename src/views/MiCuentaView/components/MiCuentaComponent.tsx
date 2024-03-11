import { Box, Button, Checkbox, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { colorsKarbono } from '@/themes/colors';
import CustomTextField from '@/views/Formulario/Components/CustomTextField';
import { GlobalContext } from '@/context/GlobalContext';

export interface MiCuentaComponentProps { }

const sx = {
	color: { xs: 'white', md: 'black' },
	backgroundColor: { xs: colorsKarbono.primary, sm: '#B8BDBDB2 ' },
	'&:hover': {
		backgroundColor: { xs: colorsKarbono.primary, sm: '#B8BDBDB2 ' }
		// colorsKarbono.primary,
	},
	textTransform: 'capitalize', 
};

interface EditCampos {
	editInstitucion?: boolean,
	editEmail?: boolean,
	editName?: boolean,
	editRegistro?: boolean,
	editPhone?: boolean,
	editEntidad?: boolean,
}

const MiCuentaComponent: React.FC<MiCuentaComponentProps> = () => {

	const [editarCampos, setEditarCampos] = useState<EditCampos>();
	const { user, setUser,loadingAuth, updateMe } = useContext(GlobalContext)


	return (
		<>
			{(!loadingAuth)
				&& <Stack width={'100%'} paddingX={'10px'}  paddingTop={10} direction={'column'} paddingRight={{md: 20 }} spacing={2}>
					<Typography display={{ xs: 'none', sm: 'flex' }} fontSize={16} fontWeight={800}>
						Configuración
					</Typography>


					<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px',display:{xs:'none',md:'flex'} }} />


					<Typography fontSize={14} fontWeight={800}>
						Correo electrónico
					</Typography>

					<Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
						<Stack >
							{(editarCampos?.editEmail)
								? <CustomTextField
									onChange={(e) => setUser({ ...user!, email: e.target.value })}
									value={user?.email}
									id='Correo electrónico'
									label={'Correo electrónico'}
								/>
								: <Typography fontSize={16} fontWeight={500}>
									{user?.email}
								</Typography>}
						</Stack>

						<Button
							sx={sx}
							onClick={
								() => {
									(editarCampos?.editEmail) && updateMe(),
										setEditarCampos({ ...editarCampos, editEmail: !editarCampos?.editEmail })
								}
							}>
							{editarCampos?.editEmail ? 'Guardar' : 'Editar'}
						</Button>
					</Stack>

					<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

					<Typography fontSize={14} fontWeight={800}>
						Nombre y apellidos
					</Typography>
					<Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
						<Stack>
							{(editarCampos?.editName)
								? <CustomTextField
									onChange={(e) => setUser({ ...user!, nombre_apellidos: e.target.value })}
									value={user?.nombre_apellidos}
									id='Nombre y Apellidos'
									label={'Nombre y Apellidos'}
								/>
								: <Typography fontSize={16} fontWeight={500}>
									{user?.nombre_apellidos}
								</Typography>}
						</Stack>

						<Button
							sx={sx}
							onClick={() => {
								(editarCampos?.editName) && updateMe(),
									setEditarCampos({ ...editarCampos, editName: !editarCampos?.editName })
							}
							}>
							{editarCampos?.editName ? 'Guardar' : 'Editar'}
						</Button>
					</Stack>

					<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

					<Typography fontSize={14} fontWeight={800}>
						Registro Médico
					</Typography>
					<Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
						<Stack>
							{(editarCampos?.editRegistro)
								? <CustomTextField
									onChange={(e) => setUser({ ...user!, registro_medico: e.target.value })}
									value={user?.registro_medico}
									id='Registro Médico'
									label={'Registro Médico'}
								/>
								: <Typography fontSize={16} fontWeight={500}>
									{user?.registro_medico}
								</Typography>}
						</Stack>

						<Button
							sx={sx}
							onClick={

								() => {
									(editarCampos?.editRegistro) && updateMe(),
										setEditarCampos({ ...editarCampos, editRegistro: !editarCampos?.editRegistro })
								}
							}>
							{editarCampos?.editRegistro ? 'Guardar' : 'Editar'}
						</Button>
					</Stack>

					<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

					<Typography fontSize={14} fontWeight={800}>
						Teléfono
					</Typography>
					<Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
						<Stack>
							{(editarCampos?.editPhone)
								? <CustomTextField
									onChange={(e) => setUser({ ...user!, telefono: e.target.value })}
									value={user?.telefono}
									id='Teléfono'
									label={'Teléfono'}
								/>
								: <Typography fontSize={16} fontWeight={500}>
									{user?.telefono}
								</Typography>}
						</Stack>

						<Button
							sx={sx}
							onClick={
								() => {
									(editarCampos?.editPhone) && updateMe(), setEditarCampos({ ...editarCampos, editPhone: !editarCampos?.editPhone })
								}
							}>
							{editarCampos?.editPhone ? 'Guardar' : 'Editar'}
						</Button>
					</Stack>

					<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

					<Typography fontSize={14} fontWeight={800}>
						Entidad de Salud
					</Typography>
					<Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
						<Stack>
							{(editarCampos?.editEntidad)
								? <CustomTextField
									onChange={(e) => setUser({ ...user!, entidad_de_salud: [e.target.value] })}
									value={user?.entidad_de_salud}
									id='Entidad de Salud'
									label={'Entidad de Salud'}
								/>
								: <Typography fontSize={16} fontWeight={500}>
									{user?.entidad_de_salud}
								</Typography>}
						</Stack>

						<Button
							sx={sx}
							onClick={
								() => {
									(editarCampos?.editEntidad) && updateMe(), setEditarCampos({ ...editarCampos, editEntidad: !editarCampos?.editEntidad })
								}
							}>
							{editarCampos?.editEntidad ? 'Guardar' : 'Editar'}
						</Button>
					</Stack>

				</Stack>}
		</>
	)
};

export default MiCuentaComponent;
