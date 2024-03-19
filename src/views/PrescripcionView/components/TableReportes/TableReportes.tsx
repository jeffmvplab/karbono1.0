import React, { useContext, useEffect, useState } from 'react';
import { Alert, Box, Button, Card, Skeleton, Stack, Typography } from '@mui/material';
import { colorsKarbono } from '@/themes/colors';
import { PrescripcionContext } from '../../context/PrescripcionContext';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

import { typographyKarbono } from '@/themes/typography';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { getColorForState } from '@/utilities/getColorByState';
import { localeTextDataGrid } from '@/utilities/constants/loacaleTextGrid';

import { IoCopyOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoPrintOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { FormulariosContext } from '@/views/Formulario/context/FormulariosContext';
import { convertirFecha } from '@/utilities/get_String_from_Date_Esp';
import { PDFModal } from '@/components/PDFModal';
import { CopyPresciptionModal } from '@/components/CopyPresciptionModal';
import { DeleteModal } from '@/components/DeleteModal';


export interface TableReportesProps { }

const TableReportes: React.FC<TableReportesProps> = () => {

	const { getAll, reportes, loadingGet, loadingApi, goEdit, goReporte } = useContext(PrescripcionContext);
	const { copyPrescriptions, loadingSave, messageAPI, setMessageAPI, borrarPrescriptions } = useContext(FormulariosContext);

	const [page, setPage] = useState<number>();
	const pag: number = 15;

	const handlePageChange = (params: any) => {
		setPage(params)
		console.log('Params:', params)
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [openCopy, setOpenCopy] = React.useState(false);
	const handleOpenCopy = () => setOpenCopy(true);
	const handleCloseCopy = () => setOpenCopy(false);

	const [openDelete, setOpenDelete] = React.useState(false);
	const handleOpenDelete = () => setOpenDelete(true);
	const handleCloseDelete = () => setOpenDelete(false);

	const [selectReporte, setASelectReporte] = React.useState<IPrescriptions | undefined>();

	useEffect(() => {
		getAll();
	}, [])

	useEffect(() => {
		if (loadingSave) {
			handleCloseCopy()
			handleCloseDelete()
			setMessageAPI('')
			getAll()
		}
	}, [loadingSave])

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
			minWidth: 250,
			renderCell: (params: GridRenderCellParams) => (
				<Button sx={{ color: 'black', fontFamily: typographyKarbono.outfit, fontSize: 14, textTransform: 'none' }} variant='text'
					onClick={() => { goReporte(params.row.no_orden) }}>
					{/* <Typography textTransform='none' > */}
					{params.value}
					{/* </Typography> */}
				</Button>
			)
		},

		{

			field: "no_identificacion",
			headerName: "Identificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},

		{

			field: "tipo_prescripcion",
			headerName: "Tipo de prescripción",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},


		{
			field: "createdAt",
			headerName: "Fecha de creación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}</>
		},

		{
			field: "updatedAt",
			headerName: "Fecha de modificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}</>
		},

		// {
		// 	field: "user",
		// 	headerName: "Usuario",
		// 	headerClassName: 'table-color--header',
		// 	flex: 1,
		// 	minWidth: 80,
		// 	renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		// },

		{
			field: "estado",
			headerName: "Estado",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 200,
			renderCell: (params: GridRenderCellParams) => <>{
				<Typography textTransform={'inherit'} color={getColorForState(params.value)}>
					{params.value}
				</Typography>
			}</>
		},

		{
			field: "acciones",
			headerName: "Acciones",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 200,

			renderCell: (params: GridRenderCellParams) =>
			(<Stack direction={'row'} spacing={1}>
				<IoEyeOutline style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { goReporte(params.row.no_orden) }} />
				<IoCreateOutline style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { goEdit(params.row.no_orden) }} />
				< IoPrintOutline style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { setASelectReporte(params.row), handleOpen() }} />
				< IoCopyOutline style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { setASelectReporte(params.row), handleOpenCopy() }} />
				<IoTrashOutline style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { setASelectReporte(params.row), handleOpenDelete() }} />
			</Stack>)
		},
	];
	// 

	return (
		(!loadingGet || !loadingApi)
			? <Skeleton variant="rectangular" sx={{ marginX: '15px', borderRadius: '5px' }} width='100%' height={700} />
			: <>
				<PDFModal open={open} handleClose={handleClose} selectReporte={selectReporte} loadingApi={loadingApi} />
				<CopyPresciptionModal openCopy={openCopy} handleCloseCopy={handleCloseCopy} selectReporte={selectReporte} loadingApi={loadingApi} onClick={() => copyPrescriptions(selectReporte)} loadingSave={loadingSave} />
				<DeleteModal openDelete={openDelete} handleCloseDelete={handleCloseDelete} selectReporte={selectReporte} loadingApi={loadingApi} onClick={() => borrarPrescriptions(selectReporte)} loadingSave={loadingSave} />

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

						<Card elevation={2} style={{ overflowX: 'auto',scrollbarWidth:'thin', scrollbarGutter: 'small', borderRadius: '15px', }}>
							<DataGrid
								style={{ width: "100%" }}
								sx={{
									borderRadius: '12px',
									'& .MuiDataGrid-row': {
										paddingX: '15px', // Cambia "your_color_here" por el color deseado
									},
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
						</Card>
					</Stack>
				</Box>
			</>
	);
};

export default TableReportes;
