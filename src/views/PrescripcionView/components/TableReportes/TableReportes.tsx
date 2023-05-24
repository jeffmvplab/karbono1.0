import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Skeleton, Stack } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { colorsKarbono } from '@/themes/colors';
import { PrescripcionContext } from '../../context/PrescripcionContext';
import { IPrescriptions } from '@/domain/models/prescriptions.model';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { GridRenderCellParams } from '@mui/x-data-grid/models/params/gridCellParams';
import { DataGrid } from '@mui/x-data-grid/DataGrid';

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

	const {getAll,reportes,loadingGet,loadingApi,goEdit,goReporte} = useContext(PrescripcionContext)
   
	const [page,setPage]=useState<number>();
	const pag:number=15;

	const handlePageChange=(params:any)=>{
		setPage(params)
		console.log('Params:',params)
	}

	useEffect(() => {
		getAll();
	},[])

	// useEffect(() => {
	// 	getAll(pag*(page!+1));
	// 	console.log('Reportes List:',reportes)
	// },[page])
	
	const columns: GridColDef[] = [

		{
			field: "nombre_paciente",
			headerName: "Paciente",
			headerClassName: 'table-color--header',
			// cellClassName:'style-theme--cell',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => (
			<Button
			onClick={()=>{goReporte(params.row.no_orden)}}
			>{params.value}.</Button>
			)
		},
	
		{ 
			
			field: "no_identificacion",
			headerName: "Identificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
	
		{
			field: "ips",
			headerName: "Ips",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
	
	
		{
			field: "tipo_prescripcion",
			headerName: "Tipo de Prescripción",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
	
	
		{
			field: "fecha",
			headerName: "Creación",
			headerClassName: 'table-color--header',
			flex: 1,
			maxWidth:100,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
	
		{
			field: "usuario",
			headerName: "Usuario",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
	
		{
			field: "acciones",
			headerName: "Acciones",
			headerClassName: 'table-color--header',
			flex:1,
			minWidth:130,
			renderCell: (params: GridRenderCellParams) =>
			(<>
				<Button>
					<PictureAsPdfOutlinedIcon sx={{ marginRight: '0px', color: 'black' }} />
				</Button>
				<Button
				onClick={()=>{goEdit(params.row.no_orden)}}
				>
					<ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'black' }} />
				</Button>
			</>)
		},
	];
	
	return (
		(!loadingGet||!loadingApi)
		?<Skeleton variant="rectangular" sx={{marginX:'15px',borderRadius:'5px'}} width='100%' height={700} />
		:<Box
			sx={{
				paddingX:'10px',
				height: 700,
				width: '100%',
				'& .table-color--header': {
					backgroundColor:colorsKarbono.secundary,
					color:'white'
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
					// '&:hover, &.Mui-hovered': { backgroundColor: 'rgb(0, 0,0,40%)' },
					// '& .MuiDataGrid-row:hover': { backgroundColor: 'rgb(0,0,0,60%)' },
				}}
				rows={reportes!}
				columns={columns}
				initialState={{pagination: { paginationModel: { pageSize:15} },}}
				// disableColumnSelector
			    // cledisableRowSelectionOnClick
				autoHeight
				//  pageSizeOptions={[10,30,60]}
				getRowId={(row:IPrescriptions) => row._id!}
				onPaginationModelChange={(e)=>{handlePageChange(e.page)}}

			/>

		</Box>
	);
};

export default TableReportes;
