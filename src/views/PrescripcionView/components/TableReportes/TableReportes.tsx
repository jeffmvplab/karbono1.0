import React, { useContext, useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, CircularProgress, Modal, Skeleton, Stack, Typography } from '@mui/material';
import { colorsKarbono } from '@/themes/colors';
import { PrescripcionContext } from '../../context/PrescripcionContext';
import { IPrescriptions } from '@/domain/models/prescriptions.model';

import { typographyKarbono } from '@/themes/typography';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { convertirFecha } from '@/utilities/get_String_from_Date';
import { getColorForState } from '@/utilities/getColorByState';
import { localeTextDataGrid } from '@/utilities/constants/loacaleTextGrid';

import { IoCopyOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoPrintOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { convertirAPDF } from '@/utilities/view_pdf_convert';
import PDFPrescriptionComponent from '@/views/ReportePrescripcion/components/PDFPrescriptionComponent';
import CloseIcon from '@mui/icons-material/Close';
import { FormulariosContext } from '@/views/Formulario/context/FormulariosContext';
import { CustomButton } from '@/components/CustomButton';
import Image from 'next/image'


export interface TableReportesProps { }

const TableReportes: React.FC<TableReportesProps> = () => {

	const { getAll, reportes, loadingGet, loadingApi, goEdit, goReporte } = useContext(PrescripcionContext)
	const { copyPrescriptions, loadingSave, messageAPI, setMessageAPI, borrarPrescriptions } = useContext(FormulariosContext)


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

	function PDFModal() {

		const style = {
			position: 'absolute' as 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '90%',
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
			maxHeight: '70vh', // Agregar altura máxima y desplazamiento vertical
			overflowY: 'auto',
		};

		return (
			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				><>
						<Stack sx={{
							zIndex: '999',
							position: 'absolute',
							top: '15%',
							left: '85%',
							transform: 'translate(-50%, -50%)',
						}} direction={'row'} spacing={2}>

							<Avatar
								sx={{
									border: '2px solid black',
									background: 'white',
									width: '50px',
									height: '50px'
								}}>
								<Button onClick={handleClose}>
									< IoPrintOutline style={{ color: 'black', fontSize: 24 }} onClick={() => { convertirAPDF('reporte_view', selectReporte!.nombre_paciente) }} />
								</Button>
							</Avatar>

							<Avatar
								sx={{
									border: '2px solid black',
									background: 'red',
									width: '50px',
									height: '50px'
								}}>
								<Button onClick={handleClose}>
									<CloseIcon sx={{ color: 'white' }} />
								</Button>
							</Avatar>
						</Stack>


						<Stack sx={style} bgcolor={'white'}>
							<PDFPrescriptionComponent reporte={selectReporte} loading={loadingApi} />
						</Stack>
					</>

				</Modal>
			</div>
		);
	}


	function CopyPresciptionModal() {

		const style = {
			position: 'absolute' as 'absolute',
			top: '30%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '300px',
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
			minHeight: '200px', // Agregar altura máxima y desplazamiento vertical
			overflowY: 'auto',
		};

		return (
			<div>
				<Modal
					open={openCopy}
					onClose={handleCloseCopy}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				><>

						<Stack direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'}>
							<Image width={30} height={30} src={'/assets/alerta.png'} alt={''} ></Image>
							<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
								¿Deseas crear una copia
								de esta prescripción?
							</Typography>
						</Stack>

						<Stack sx={{
							position: 'absolute' as 'absolute',
							top: '35%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
							direction={'row'} spacing={3}>
							<CustomButton
								onClick={() => { handleCloseCopy() }}
								height={40}
								width={100}
								text={'Descartar'}
								sx={{ borderRadius: '10px' }}
								color={colorsKarbono.secundary}
								textColor='white'
							/>

							<CustomButton
								onClick={() => copyPrescriptions(selectReporte)}
								height={40}
								sx={{ borderRadius: '10px' }}
								color={'#2B8E12'}
								textColor='white'
								text={(loadingSave) ? 'Sicrear' : 'Copiando...'}
								width={(loadingSave) ? 130 : 130}
								endIcon={
									(loadingSave)
										? <></>
										: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />


						</Stack>
					</>

				</Modal>
			</div>
		);
	}

	function DeleteModal() {

		const style = {
			position: 'absolute' as 'absolute',
			top: '30%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '340px',
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
			minHeight: '200px', // Agregar altura máxima y desplazamiento vertical
			overflowY: 'auto',
		};

		return (
			<div>
				<Modal
					open={openDelete}
					onClose={handleCloseDelete}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				><>

						<Stack direction={'column'} borderRadius={'10px'} sx={style} bgcolor={'white'} alignItems={'center'}>
							<Image width={30} height={30} src={'/assets/borrador.png'} alt={''} ></Image>
							<Typography color={colorsKarbono.secundary} fontWeight={700} textAlign={'center'}>
								¿Estás seguro de eliminar
								la prescripción?
							</Typography>
						</Stack>

						<Stack sx={{
							position: 'absolute' as 'absolute',
							top: '35%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
							direction={'row'} spacing={3}>

							<CustomButton
								onClick={() => { borrarPrescriptions(selectReporte) }}
								height={40}
								sx={{ borderRadius: '10px' }}
								color={' #C2C2C2'}
								textColor='white'
								text={(loadingSave) ? 'Si' : 'Borrando...'}
								width={(loadingSave) ? 100 : 130}
								endIcon={
									(loadingSave)
										? <></>
										: <CircularProgress sx={{ color: 'white' }} variant='indeterminate' size='30px' />} />

							<CustomButton
								onClick={() => { handleCloseDelete() }}
								height={40}
								width={170}
								text={'Seguir editando'}
								sx={{ borderRadius: '10px' }}
								color={'#2B8E12'}
								textColor='white'
							/>

						</Stack>
					</>

				</Modal>
			</div>
		);
	}

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
				<Button sx={{ fontFamily: typographyKarbono.outfit, fontSize: 12,textTransform:'none'}} variant='text' 
				 onClick={() => { goReporte(params.row.no_orden) }}>
					<Typography textTransform='capitalize' >{params.value}</Typography>
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

			field: "tipo_prescripcion",
			headerName: "Tipo de prescripción",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth:80,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},


		{
			field: "createdAt",
			headerName: "Fecha de creación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth:100,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}.</>
		},

		{
			field: "updatedAt",
			headerName: "Fecha de modificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 80,
			renderCell: (params: GridRenderCellParams) => <>{convertirFecha(params.value)}.</>
		},

		{
			field: "estado",
			headerName: "Estado",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth:80,
			renderCell: (params: GridRenderCellParams) => <>{
				<Typography color={getColorForState(params.value)}>
					{params.value}
				</Typography>
			}.</>
		},

		{
			field: "acciones",
			headerName: "Acciones",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 200,

			renderCell: (params: GridRenderCellParams) =>
			(<Stack direction={'row'} spacing={1}>
				<IoEyeOutline style={{ color: 'black', fontSize: 24 }} onClick={() => { goReporte(params.row.no_orden) }} />
				<IoCreateOutline style={{ color: 'black', fontSize: 24 }} onClick={() => { goEdit(params.row.no_orden) }} />
				< IoPrintOutline style={{ color: 'black', fontSize: 24 }} onClick={() => { setASelectReporte(params.row), handleOpen() }} />
				< IoCopyOutline style={{ color: 'black', fontSize: 24 }} onClick={() => { setASelectReporte(params.row), handleOpenCopy() }} />
				<IoTrashOutline style={{ color: 'black', fontSize: 24 }} onClick={() => { setASelectReporte(params.row), handleOpenDelete() }} />
			</Stack>)
		},
	];
	// 

	return (
		(!loadingGet || !loadingApi)
			? <Skeleton variant="rectangular" sx={{ marginX: '15px', borderRadius: '5px' }} width='100%' height={700} />
			: <>
				<PDFModal />
				<CopyPresciptionModal />
				<DeleteModal />

				<Box
					sx={{

						paddingX: {xs:'10px',md:'50px'},
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

export default TableReportes;
