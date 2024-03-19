

import { colorsKarbono } from "@/themes/colors";
import { Stack, Typography } from "@mui/material";
// import { textDecorationLine } from "html2canvas/dist/types/css/property-descriptors/text-decoration-line";
import Image from 'next/image'
import Link from "next/link";

export interface ButtonsMainDrawerProps {
	icon: any,
	title: string,
	rourte: string,
	isActive?: boolean,
	wIcon?: number,
	hIcon?: number
}


const ButtonsMainDrawer: React.FC<ButtonsMainDrawerProps> = ({ icon, title, rourte, isActive, wIcon = 30, hIcon = 30 }) => {

	return (

		<Link href={`${rourte}`} style={{ textDecorationLine: 'none' }}>
			<Stack direction={'row'} alignItems={'center'} paddingX={'20px'} justifyContent={'space-between'}>

				<Stack direction={'row'} alignItems={'center'} spacing={1}>

					{icon}
					{/* <Image
						src={`${icon}`}
						width={wIcon}
						height={hIcon}
						alt=''
						style={{
							filter: (isActive)
								? 'grayscale(100%) brightness(1) invert(1) sepia(60%) saturate(10000%) hue-rotate(170deg)'
								: ''
						}}
					/> */}

					<Typography
						// sx={{ paddingLeft: '10px', paddingRight: '30px' }}
						color={isActive ? 'black': '#656474'}
						fontSize={'20px'}
						textTransform={'initial'}
						fontWeight={isActive ? 700 : 300}
					>
						{title}
					</Typography>
				</Stack>

				<Image
					src='/assets/arrow-landing.png'
					width={10}
					height={15}
					alt=''
				/>
			</Stack>
		</Link>
	);
};

export default ButtonsMainDrawer;
