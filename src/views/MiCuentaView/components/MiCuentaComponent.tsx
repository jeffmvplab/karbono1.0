import { Box, Button, Checkbox, Divider, Grid, Stack, Typography, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { colorsKarbono } from '@/themes/colors';
import CustomTextField from '@/views/Formulario/Components/CustomTextField';
import { PerfilProvider } from '../context/PerfilProvider';
import { PerfilContext } from '../context/PerfilContext';

export interface MiCuentaComponentProps { }

const CustomButtonEditar = styled(Button)({
	color: 'black',
	backgroundColor: '#B8BDBDB2 ',
	'&:hover': {
		backgroundColor: colorsKarbono.primary,
	},
});

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
	const { user, setUser, getUserByRol } = useContext(PerfilContext)


	return (

		<Grid item xs={12} sm={12} md={9}>
			<Stack paddingTop={10} direction={'column'} paddingRight={20} spacing={2}>
				<Typography fontSize={16} fontWeight={800}>
					Configuración
				</Typography>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				<Typography fontSize={14} fontWeight={800}>
					Institución
				</Typography>

				<Stack direction={'row'} justifyContent={'space-between'}>

					<Stack>
						{(editarCampos?.editInstitucion)
							? <CustomTextField
								onChange={(e) => setUser({ ...user!, institution: e.target.value })}
								value={user?.institution}
								id='Institución'
								label={'Institución'}
							/>
							: <Typography fontSize={16} fontWeight={500}>
								{user?.institution}
							</Typography>}
					</Stack>

					<CustomButtonEditar
						onClick={
							() => setEditarCampos({ ...editarCampos, editInstitucion: !editarCampos?.editInstitucion })
						}>
						{editarCampos?.editInstitucion ? 'No Editar' : 'Editar'}
					</CustomButtonEditar>
				</Stack>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				<Typography fontSize={14} fontWeight={800}>
					{user?.email}
				</Typography>

				<Stack direction={'row'} justifyContent={'space-between'}>
					<Stack>
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

					<CustomButtonEditar
						onClick={
							() => setEditarCampos({ ...editarCampos, editEmail: !editarCampos?.editEmail })
						}>
						{editarCampos?.editEmail ? 'No Editar' : 'Editar'}
					</CustomButtonEditar>
				</Stack>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				<Typography fontSize={14} fontWeight={800}>
					Nombre y apellidos
				</Typography>
				<Stack direction={'row'} justifyContent={'space-between'}>
					<Stack>
						{(editarCampos?.editName)
							? <CustomTextField
								onChange={(e) => setUser({ ...user!, fullName: e.target.value })}
								value={user?.fullName}
								id='Nombre y Apellidos'
								label={'Nombre y Apellidos'}
							/>
							: <Typography fontSize={16} fontWeight={500}>
								{user?.fullName}
							</Typography>}
					</Stack>

					<CustomButtonEditar
						onClick={
							() => setEditarCampos({ ...editarCampos, editName: !editarCampos?.editName })
						}>
						{editarCampos?.editName ? 'No Editar' : 'Editar'}
					</CustomButtonEditar>
				</Stack>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				<Typography fontSize={14} fontWeight={800}>
					Registro Médico
				</Typography>
				<Stack direction={'row'} justifyContent={'space-between'}>
					<Stack>
						{(editarCampos?.editRegistro)
							? <CustomTextField
								onChange={(e) => setUser({ ...user!, medicalRecord: e.target.value })}
								value={user?.medicalRecord}
								id='Registro Médico'
								label={'Registro Médico'}
							/>
							: <Typography fontSize={16} fontWeight={500}>
								{user?.medicalRecord}
							</Typography>}
					</Stack>

					<CustomButtonEditar
						onClick={
							() => setEditarCampos({ ...editarCampos, editRegistro: !editarCampos?.editRegistro })
						}>
						{editarCampos?.editRegistro ? 'No Editar' : 'Editar'}
					</CustomButtonEditar>
				</Stack>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				<Typography fontSize={14} fontWeight={800}>
					Teléfono
				</Typography>
				<Stack direction={'row'} justifyContent={'space-between'}>
					<Stack>
						{(editarCampos?.editPhone)
							? <CustomTextField
								onChange={(e) => setUser({ ...user!, phone: e.target.value })}
								value={user?.phone}
								id='Teléfono'
								label={'Teléfono'}
							/>
							: <Typography fontSize={16} fontWeight={500}>
								{user?.phone}
							</Typography>}
					</Stack>

					<CustomButtonEditar
						onClick={
							() => setEditarCampos({ ...editarCampos, editPhone: !editarCampos?.editPhone })
						}>
						{editarCampos?.editPhone ? 'No Editar' : 'Editar'}
					</CustomButtonEditar>
				</Stack>

				<Divider sx={{ backgroundColor: '#B8BDBDB2 ', height: '2px', }} />

				<Typography fontSize={14} fontWeight={800}>
					Entidad de Salud
				</Typography>
				<Stack direction={'row'} justifyContent={'space-between'}>
					<Stack>
						{(editarCampos?.editEntidad)
							? <CustomTextField
								onChange={(e) => setUser({ ...user!, healthEntity: e.target.value })}
								value={user?.healthEntity}
								id='Entidad de Salud'
								label={'Entidad de Salud'}
							/>
							: <Typography fontSize={16} fontWeight={500}>
								{user?.healthEntity}
							</Typography>}
					</Stack>

					<CustomButtonEditar
						onClick={
							() => setEditarCampos({ ...editarCampos, editEntidad: !editarCampos?.editEntidad })
						}>
						{editarCampos?.editEntidad ? 'No Editar' : 'Editar'}
					</CustomButtonEditar>
				</Stack>

			</Stack>
		</Grid >
	)
};

export default MiCuentaComponent;
