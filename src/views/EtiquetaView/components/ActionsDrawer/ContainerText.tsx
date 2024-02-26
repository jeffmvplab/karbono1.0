import { Stack, Typography, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export interface ContainerTextProps {

	title: string, titleSize?: string,
	value: string, valueSize?: string,
}

const ContainerText: React.FC<ContainerTextProps> = ({ title, value, titleSize, valueSize }) => {

	return (

		<Stack bgcolor={'red'} width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
			<Typography fontSize={titleSize}>
				{title}:
			</Typography>
			<Box width={'100%'} bgcolor='#ccc' borderRadius={2} paddingY={0.5}>
				<Typography fontSize={valueSize} textAlign={"center"}>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
};

export default ContainerText
