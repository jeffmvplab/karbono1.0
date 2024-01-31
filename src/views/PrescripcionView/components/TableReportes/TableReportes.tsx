import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Skeleton, Stack, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { colorsKarbono } from '@/themes/colors';
import { PrescripcionContext } from '../../context/PrescripcionContext';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

import { typographyKarbono } from '@/themes/typography';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { convertirFecha } from '@/utilities/get_String_from_Date';
import { getColorForState } from '@/utilities/getColorByState';

// const data = [
// 	{ id: 0, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 1, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 2, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 3, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 4, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 5, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 6, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// 	{ id: 7, paciente: 'Santiago Castillo', identificación: 7485926173, ips: 'Clínica Antioquia', tipo: 'Prescripcion por requerimiento', creación: '2021-04-22', usuario: 'Helen Pabon Hpabon' },
// ];

export interface TableReportesProps { }

const TableReportes: React.FC<TableReportesProps> = () => {

	const { getAll, reportes, loadingGet, loadingApi, goEdit, goReporte } = useContext(PrescripcionContext)

	const [page, setPage] = useState<number>();
	const pag: number = 15;

	const handlePageChange = (params: any) => {
		setPage(params)
		console.log('Params:', params)
	}

	useEffect(() => {
		getAll();
	}, [])

	// useEffect(() => {
	// 	getAll(pag*(page!+1));
	// 	console.log('Reportes List:',reportes)
	// },[page])

	const columns: GridColDef[] = [

		{
			field: "nombre_paciente",
			headerName: "Nombre paciente",
			headerClassName: 'table-color--header',
			// cellClassName:'style-theme--cell',
			flex: 1,
			minWidth: 200,
			renderCell: (params: GridRenderCellParams) => (
				<Button sx={{ fontFamily: typographyKarbono.outfit, fontSize: 16, textTransform: 'none' }} variant='text' onClick={() => { goReporte(params.row.no_orden) }}>
					{params.value}
				</Button>
			)
		},

		{

			field: "no_identificacion",
			headerName: "Identificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 40,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{

			field: "tipo_prescripcion",
			headerName: "Tipo de prescripción",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 40,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},


		{
			field: "createdAt",
			headerName: "Fecha de creación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}.</>
		},

		{
			field: "updatedAt",
			headerName: "Fecha de modificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}.</>
		},

		{
			field: "estado",
			headerName: "Usuario",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Typography  color={getColorForState(params.value)}>
					{params.value}
				</Typography>
			}.</>
		},

		{
			field: "acciones",
			headerName: "Acciones",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 130,
			renderCell: (params: GridRenderCellParams) =>
			(<>
				<Button>
					<PictureAsPdfOutlinedIcon sx={{ marginRight: '0px', color: 'black' }} />
				</Button>
				<Button
					onClick={() => { goEdit(params.row.no_orden) }}
				>
					<ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'black' }} />
				</Button>
			</>)
		},
	];

	return (
		(!loadingGet || !loadingApi)
			? <Skeleton variant="rectangular" sx={{ marginX: '15px', borderRadius: '5px' }} width='100%' height={700} />
			: <Box
				sx={{

					paddingX: '50px',
					height: 700,
					width: '100%',
					'& .table-color--header': {
						backgroundColor: colorsKarbono.secundary,
						color: 'white'
					},
					// '& .style-theme--cell': {
					// 	backgroundColor: 'rgba(224, 183, 60, 0.55)',
					// 	color: '#1a3e72',
					// 	fontWeight: '600',
					//   },
				}}
			>
				<DataGrid
					style={{ width: "100%" }}
					sx={{
						borderRadius: '12px',
						// '&:hover, &.Mui-hovered': { backgroundColor: 'rgb(0, 0,0,40%)' },
						// '& .MuiDataGrid-row:hover': { backgroundColor: 'rgb(0,0,0,60%)' },
						fontFamily: typographyKarbono.outfit
					}}
					rows={reportes!}
					columns={columns}
					initialState={{ pagination: { paginationModel: { pageSize: 15 } }, }}
					// disableColumnSelector
					// cledisableRowSelectionOnClick
					autoHeight
					//  pageSizeOptions={[10,30,60]}
					getRowId={(row: IPrescriptions) => row._id!}
					onPaginationModelChange={(e) => { handlePageChange(e.page) }}

				/>

			</Box>
	);
};

export default TableReportes;
