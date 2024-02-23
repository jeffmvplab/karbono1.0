import { Stack, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export interface ContainerTextProps {

	title: string,titleSize?:string,
	value: string,valueSize?:string,
}

const ContainerText: React.FC<ContainerTextProps> = ({ title, value,titleSize,valueSize}) => {


	return (

		<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
			<Typography fontSize={titleSize}>
				{title}:
			</Typography>
			<Box bgcolor='#ccc' borderRadius={2} padding={0.5}>
				<Typography fontSize={valueSize}>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
};

export default ContainerText
