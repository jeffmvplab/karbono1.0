import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { Stack, Avatar, Button } from "@mui/material";
import { IoDownloadOutline } from "react-icons/io5";
import PDFPrescriptionComponent from "../ReportePrescripcion/components/PDFPrescriptionComponent";
import CloseIcon from '@mui/icons-material/Close';
import { ReportesContext } from "../ReportePrescripcion/context/ReportesContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { mainRoutes } from "@/routes/routes";
import { GlobalContext } from "@/context/GlobalContext";
import { RolUsersKeysEnum } from "@/utilities/enums/rol_user_keys.enum";



export interface PDFViewProps { }

const PDFView: React.FC<PDFViewProps> = () => {

	const { getPrescriptionsByNumber, loadingSave, reporte } = useContext(ReportesContext);
	const { getMeRol, getMe } = useContext(GlobalContext);
	const router = useRouter();

	useEffect(() => {
		getPrescriptionsByNumber();
	}, [router.pathname])

	return (

		<>
			<Stack sx={{
				zIndex: '999',
				position: 'absolute',
				top: '10%',
				left: '85%',
				transform: 'translate(-50%, -50%)',
			}} direction={'row'} spacing={2}>

				<Avatar
					sx={{
						border: '1px solid black',
						background: 'white',
						width: '50px',
						height: '50px'
					}}>
					<Button id={(getMeRol()[0] === RolUsersKeysEnum.prescriptor)
						? 'Pre_btn_PopupImprimir'
						: 'QF_btn_PopupImprimir'
					}
						onClick={() => { convertirAPDF('reporte_view', reporte!.nombre_paciente,reporte!.no_orden,getMeRol()[0]) }}>
						< IoDownloadOutline style={{ color: 'black', fontSize: 24 }} />
					</Button>
				</Avatar>

				<Avatar
					sx={{
						border: '1px solid black',
						background: 'red',
						width: '50px',
						height: '50px'
					}}>
					<Button onClick={() => router.push(mainRoutes.prescripcion)}>
						<CloseIcon sx={{ color: 'white' }} />
					</Button>
				</Avatar>
			</Stack>

			<Stack bgcolor={'white'}>
				<PDFPrescriptionComponent reporte={reporte} loading={loadingSave} />
			</Stack>
		</>
	)

};

export default PDFView;