import React, { useContext, useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, CircularProgress, Modal, Skeleton, Stack, Typography } from '@mui/material';
import { colorsKarbono } from '@/themes/colors';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

import { typographyKarbono } from '@/themes/typography';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { getColorForState } from '@/utilities/getColorByState';
import { localeTextDataGrid } from '@/utilities/constants/loacaleTextGrid';
import { IoEyeOutline } from "react-icons/io5";
import { FormulariosContext } from '@/views/Formulario/context/FormulariosContext';
import { convertirFecha } from '@/utilities/get_String_from_Date_Esp';
import { PrescripcionContext } from '@/views/PrescripcionView/context/PrescripcionContext';
import { getNameByObject } from '@/utilities/getnameByObject';

export interface TableAuditoriaProps { }

const TableAuditoria: React.FC<TableAuditoriaProps> = () => {

	const { getAll, reportes, loadingGet, loadingApi, goEdit, goReporte,goActions } = useContext(PrescripcionContext);

	const {loadingSave, messageAPI, setMessageAPI } = useContext(FormulariosContext);

	const [page, setPage] = useState<number>();
	const pag: number = 15;

	const handlePageChange = (params: any) => {
		setPage(params)
		console.log('Params:', params)
	}

	
	useEffect(() => {
		getAll();
	}, [])

	useEffect(() => {
		if (loadingSave) {		
			setMessageAPI('')
			getAll()
		}
	}, [loadingSave])



	const columns: GridColDef[] = [

		{
			field: "ips",
			headerName: "Institución",
			headerClassName: 'table-color--header',
			// cellClassName:'style-theme--cell',
			flex: 1,
			minWidth: 250,
			renderCell: (params: GridRenderCellParams) => (
				<Button sx={{ fontFamily: typographyKarbono.outfit, fontSize: 12 }} variant='text'
				>
					<Typography onClick={() => { goReporte(params.row.no_orden) }} >{params.value}</Typography>
				</Button>
			)
		},
		{

			field: "no_identificacion",
			headerName: "Identificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 100,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
		{
			field: "nombre_paciente",
			headerName: "Paciente",
			headerClassName: 'table-color--header',
			// cellClassName:'style-theme--cell',
			flex: 1,
			minWidth: 250,
			renderCell: (params: GridRenderCellParams) => (
				<Button sx={{ fontFamily: typographyKarbono.outfit, fontSize: 12, textTransform: 'none' }} variant='text'
					onClick={() => { goReporte(params.row.no_orden) }}>
					<Typography textTransform='capitalize' >{params.value}</Typography>
				</Button>
			)
		},

		{
			field: "estado",
			headerName: "Estado de la solicitud",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{
				<Typography color={getColorForState(params.value)}>
					{params.value}
				</Typography>
			}.</>
		},



		{

			field: "tipo_prescripcion",
			headerName: "Tipo de prescripción",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},


		{
			field: "createdAt",
			headerName: "Fecha de creación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 120,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}</>
		},

		{
			field: "updatedAt",
			headerName: "Fecha de modificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 140,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}</>
		},

		{
			field: "user",
			headerName: "Prescriptor",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 180,
			renderCell: (params: GridRenderCellParams) => <>{params.value?.nombre_apellidos}</>
		},
		{
			field: "controlador_de_calidad",
			headerName: "Responsable control calidad",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 200,
			renderCell: (params: GridRenderCellParams) => <>{params.value?.nombre_apellidos}</>
		},
		{
			field: "preparador",
			headerName: "Preparador",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{params.value?.nombre_apellidos}</>
		},


		{
			field: "acciones",
			headerName: "Acciones",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 200,

			renderCell: (params: GridRenderCellParams) =>
			(<Stack direction={'row'} spacing={1}>
				<IoEyeOutline style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { goActions(params.row.no_orden)}} />
			</Stack>)
		},
	];
	// 

	return (
		(!loadingGet || !loadingApi)
			? <Skeleton variant="rectangular" sx={{ marginX: '15px', borderRadius: '5px' }} width='100%' height={700} />
			: <>				
				<Box
					sx={{

						paddingX: { xs: '10px', md: '50px' },
						height: 700,
						width: '100vw',
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
					<Stack direction={'column'}>
						{(messageAPI)
							&& <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)', borderRadius: '10px' }}>
								{messageAPI}
							</Alert>

						}

						<div style={{ overflowX: 'auto' }}>
							<DataGrid
								style={{ width: "100%" }}
								sx={{
									borderRadius: '12px',
									// '&:hover, &.Mui-hovered': { backgroundColor: 'rgb(0, 0,0,40%)' },
									// '& .MuiDataGrid-row:hover': { backgroundColor: 'rgb(0,0,0,60%)' },
									fontFamily: typographyKarbono.outfit
								}}
								rows={reportes ? reportes : []}
								columns={columns}
								initialState={{ pagination: { paginationModel: { pageSize: 15 } }, }}
								localeText={localeTextDataGrid}
								// disableColumnSelector
								// cledisableRowSelectionOnClick
								autoHeight
								//  pageSizeOptions={[10,30,60]}
								getRowId={(row: IPrescriptions) => row._id!}
								onPaginationModelChange={(e) => { handlePageChange(e.page) }}

							/>
						</div>
					</Stack>


				</Box>
			</>
	);
};

export default TableAuditoria;
