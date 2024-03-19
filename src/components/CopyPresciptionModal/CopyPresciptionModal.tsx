import { CircularProgress, Modal, Stack, Typography, } from "@mui/material";

import { CustomButton } from "../CustomButton";
import { colorsKarbono } from "@/themes/colors";
import Image from 'next/image'
import { MouseEventHandler } from "react";


export interface CopyPresciptionModalProps {
	openCopy: any,
	handleCloseCopy: any,
	selectReporte: any,
	loadingApi: any,
	onClick: MouseEventHandler<HTMLButtonElement> | undefined,
	loadingSave: any
}

const CopyPresciptionModal: React.FC<CopyPresciptionModalProps> = ({
	openCopy,
	handleCloseCopy,
	selectReporte,
	loadingApi,
	onClick,
	loadingSave
}) => {

	const style = {
		position: 'absolute' as 'absolute',
		top: '30%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '300px',
		bgcolor: 'background.paper',
		// border: '2px solid #000',
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
							onClick={onClick}
							height={40}
							sx={{ borderRadius: '10px' }}
							color={'#2B8E12'}
							textColor='white'
							text={(loadingSave) ? 'Si,crear' : 'Copiando...'}
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

export default CopyPresciptionModal;
