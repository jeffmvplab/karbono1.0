import { convertirAPDF } from "@/utilities/view_pdf_convert";
import { Stack, Avatar, Button } from "@mui/material";
import { IoDownloadOutline } from "react-icons/io5";
import PDFPrescriptionComponent from "../ReportePrescripcion/components/PDFPrescriptionComponent";
import CloseIcon from '@mui/icons-material/Close';
import { ReportesContext } from "../ReportePrescripcion/context/ReportesContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { mainRoutes } from "@/routes/routes";



export interface ArchivoPlanoViewProps { }

const ArchivoPlanoView: React.FC<ArchivoPlanoViewProps> = () => {


	return (

		<>
			<h1>Archivo Plano</h1>
		</>
	)

};

export default ArchivoPlanoView;