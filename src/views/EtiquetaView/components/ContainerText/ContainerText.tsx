import { Stack, Typography, Box } from "@mui/material";

export interface ContainerTextProps {

	title: string, titleSize?: string,
	value: string, valueSize?: string,
	isUpper?: boolean, color?: string,
	transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'
}

const ContainerText: React.FC<ContainerTextProps> = ({ title, value, transform, titleSize, valueSize, isUpper = false, color }) => {

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
					fontSize: isUpper ?24: 24,
					fontWeight: isUpper ? 'bold' : 'normal',
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
					fontSize: titleSize,
					fontWeight: isUpper ? 'bold' : 'normal',
				}}>
				<Typography minWidth={'70px'} minHeight={'20px'} fontSize={isUpper ? 24 : 24} textAlign={"center"} paddingX={1}>
					{value
						? value === undefined
							? '-'
							: value === 'null' ? '-' : value
						: '-'}
				</Typography>
			</Stack>

		</Stack>
	);
};

export default ContainerText
