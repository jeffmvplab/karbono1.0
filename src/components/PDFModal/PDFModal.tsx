import { convertirAPDF } from "@/utilities/view_pdf_convert";
import PDFPrescriptionComponent from "@/views/ReportePrescripcion/components/PDFPrescriptionComponent";
import { Modal, Stack, Avatar, Button } from "@mui/material";
import { IoPrintOutline } from "react-icons/io5";
import CloseIcon from '@mui/icons-material/Close';


export interface PDFModalProps {
	open: any,
	handleClose: any,
	selectReporte: any,
	loadingApi: any
}

const PDFModal: React.FC<PDFModalProps> = ({
	open,
	handleClose,
	selectReporte,
	loadingApi
}) => {

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

export default PDFModal;
