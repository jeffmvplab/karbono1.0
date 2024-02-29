import { Stack, Typography, Box } from "@mui/material";

export interface ContainerTextProps {

	title: string, titleSize?: string,
	value: string, valueSize?: string,
	isUpper?: boolean, color?: string,
	titleWeigth?: string,
	valueWeigth?: string,
	transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'

}

const ContainerText: React.FC<ContainerTextProps> = ({
	title, value, titleSize, transform, valueSize, isUpper = false, color, titleWeigth = 'normal',
	valueWeigth = 'normal',
}) => {

	return (

		<Stack
			width={isUpper ? '100%' : 'inline-block'}
			direction={'row'}
			alignItems={'center'}
			spacing={2}
			justifyContent={isUpper ? 'space-between' : 'normal'}>

			<Typography
				style={{
					color: color,
					fontSize: isUpper ? 14 : titleSize,
					fontWeight: isUpper ? 'bold' : titleWeigth,
					textTransform: transform
				}}>
				{isUpper ? title : `${title}:`}
			</Typography>

			<Stack
				direction={'row'}
				flexGrow={isUpper ? 0 : 1}
				bgcolor='#EDF1F1'
				borderRadius={3}
				paddingY={0.5}
				justifyContent={'center'}
				style={{
					fontSize: valueSize,
					fontWeight: isUpper ? 'bold' : valueWeigth,
				}}
			>
				<Typography fontSize={isUpper ? 14 : valueSize} textAlign={"center"} paddingX={1}>
					{value}
				</Typography>
			</Stack>

		</Stack>
	);
};

export default ContainerText
