import React, { useContext, useEffect, useState } from 'react';
import { Alert, Box, Button, Card, Skeleton, Stack, Typography } from '@mui/material';
import { colorsKarbono } from '@/themes/colors';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

import { typographyKarbono } from '@/themes/typography';
import { DataGrid, GridColDef, GridRenderCellParams, } from '@mui/x-data-grid';
import { getColorForState } from '@/utilities/getColorByState';
import { localeTextDataGrid } from '@/utilities/constants/loacaleTextGrid';


import { IoEyeOutline } from "react-icons/io5";

import { FormulariosContext } from '@/views/Formulario/context/FormulariosContext';
import { convertirFecha } from '@/utilities/get_String_from_Date_Esp';
import { PrescripcionContext } from '@/views/PrescripcionView/context/PrescripcionContext';
import { IoPrintOutline } from "react-icons/io5";
import { CustomButton } from '@/components/CustomButton';
import Image from 'next/image';

export interface TableArchivosPlanosProps { }

const TableArchivosPlanos: React.FC<TableArchivosPlanosProps> = () => {

	const {
		getPrescriptionsProd,
		reportes,
		loadingApi,
		goReporte, messageAPI, setMessageAPI,
		getPlainFile, arrayPrescId, setArrayPrescId,
		searchFecha, searchInst
	} = useContext(PrescripcionContext);
	// const { saveComments } = useContext(ReportesContext)

	const [page, setPage] = useState<number>();

	const handlePageChange = (params: any) => {
		setPage(params)
		// console.log('Params:', params)
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [selectReporte, setASelectReporte] = React.useState<IPrescriptions | undefined>();

	useEffect(() => {
		console.log('SEARCH:', searchFecha, searchInst);
		getPrescriptionsProd();
	}, [])

	useEffect(() => {
		if (loadingApi) {
			setMessageAPI('')
			getPrescriptionsProd()
		}
	}, [])

	const handleSelectionModelChange = (selectionModel: any[]) => {
		// console.log('PLPL:', selectionModel)
		setArrayPrescId(selectionModel);
	};

	const columns: GridColDef[] = [

		{
			field: "ips",
			headerName: "Institución",
			headerClassName: 'table-color--header',
			// cellClassName:'style-theme--cell',
			flex: 1,
			minWidth: 250,
			renderCell: (params: GridRenderCellParams) => (
				<Button sx={{ color: 'black', fontFamily: typographyKarbono.outfit, fontSize: 12 }} variant='text'>
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
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
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
			field: "archivo_plano",
			headerName: "Fecha",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 120,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value?.createdAt)}</>
		},

		// {
		// 	field: "updatedAt",
		// 	headerName: "Fecha de modificación",
		// 	headerClassName: 'table-color--header',
		// 	flex: 1,
		// 	minWidth: 140,
		// 	renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}</>
		// },

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
				<IoEyeOutline
				id='QF_btn_VerArchivo'
				style={{ color: 'black', fontSize: 24, cursor: 'pointer' }}
					onClick={
						() => {
							// const newComment: IComment = {
							// 	prescriptionId: params.row._id!,
							// 	// comentario: newObs!,
							// 	estado: StatePrescriptionKeysEnum.calidad,
							// }
							// saveComments(newComment)
							goReporte(params.row.no_orden), console.log('OJITO')
						}
					} />
				< IoPrintOutline id='QF_btn_ImprimirArchivo' style={{ color: 'black', fontSize: 24, cursor: 'pointer' }} onClick={() => { setASelectReporte(params.row), handleOpen() }} />
			</Stack>)
		},
	];
	// 

	return (
		(!loadingApi)
			? <Skeleton variant="rectangular" sx={{ marginX: '15px', borderRadius: '5px' }} width='100%' height={700} />
			: <>
				{/* <PDFModal open={open} handleClose={handleClose} selectReporte={selectReporte} loadingApi={loadingApi} /> */}
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
					}}>

					<Stack direction={'column'}>

						{(messageAPI)
							&& <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,60%)', borderRadius: '10px' }}>
								{messageAPI}
							</Alert>

						}

						<Card elevation={2} style={{ overflowX: 'auto', borderRadius: '15px', }}>
							<DataGrid
								style={{ width: "100%" }}
								sx={{
									borderRadius: '12px',
									'& .MuiDataGrid-row': {
										paddingX: '0px', // Cambia "your_color_here" por el color deseado
									},
								}}
								checkboxSelection
								onRowSelectionModelChange={handleSelectionModelChange}
								rows={reportes ? reportes : []}
								columns={columns}
								initialState={{ pagination: { paginationModel: { pageSize: 15 } }, }}
								localeText={localeTextDataGrid}
								autoHeight
								getRowId={(row: IPrescriptions) => (row._id) ? row._id : 1}
								onPaginationModelChange={(e) => { handlePageChange(e.page) }}
							/>
						</Card>

						<Stack direction={'row'} width={'100%'} justifyContent={'end'}>
							<CustomButton text={'Archivo plano'}
								// onClick={handleOpenModalDescargar}
								id='QF_btn_ArchivoDescargar'
								onClick={() => getPlainFile()}
								width='200px'
								height='44px'
								// variant='outlined'
								color={'black'}
								fontSize={'16px'}
								textColor={'white'}
								borderColor={colorsKarbono.secundary}
								startIcon={
									<Image width={25} height={25} src={'/assets/archivo_plano.png'} alt={''} ></Image>
								}
								sx={{ borderRadius: '10px', marginY: '40px' }}
							/>
						</Stack>
					</Stack>

				</Box>
			</>
	);
};

export default TableArchivosPlanos;
