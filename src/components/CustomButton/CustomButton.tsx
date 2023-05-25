import { Button, CircularProgress, styled, SxProps, Theme, Typography } from '@mui/material';
import { MouseEventHandler, ReactNode, RefObject } from 'react';
import { fontWeight } from '@mui/system';
import { colorsKarbono } from '@/themes/colors';
import { typographyKarbono } from '@/themes/typography';



export interface CustomButtonProps {

	color?: string,
	borderColor?: string[] | string | undefined,
	colorHover?: string,
	colorActive?: string,
	colorBorderHover?: string,
	colorBorderActive?: string,
	colorFocus?: string,
	gradient?: boolean,

	text: string,
	textColor?: any,
	textColorHover?: any,
	textAlign?: any
	textTransform?: any,
	textVariant?: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | undefined

	fontSize?: string | number,
	fontSizeMovil?: string | number,
	fontWeight?: string | number,

	variant?: "text" | "outlined" | "contained" | undefined,

	size?: "small" | "medium" | "large" | undefined,
	height?: number | string,
	width?: number | string,
	padding?: number | string,
	borderRadius?: number | string,

	startIcon?: ReactNode,
	endIcon?: ReactNode,
	loading?: boolean,

	disabled?: boolean,
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined,

	sx?: SxProps<Theme> | undefined
	ref?: RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement | null) => void) | null | undefined;
	id?: string | undefined

}
const colorsButton = colorsKarbono.primary;

const CustomButton: React.FC<CustomButtonProps> = (

	{
		text,
		textAlign = 'start',
		textVariant,
		textColor,

		textColorHover = 'white',
		fontSize = 14,
		fontSizeMovil = 12,
		size = 'small',
		variant = "contained",

		height,
		width = 100,
		padding = '4px 30px',
		borderRadius='12px',

		color = colorsButton,
		borderColor = colorsButton,
		colorActive = colorsButton,
		colorFocus = colorsButton,
		colorHover = colorsButton,
		colorBorderActive = colorsButton,
		colorBorderHover = colorsButton,
		gradient = false,

		startIcon,
		endIcon,
		loading,

		disabled,
		onClick,
		sx,
		ref,
		id,
	}) => {


	const cirularProgress = <CircularProgress
		thickness={6}
		size='20px'
		sx={{ color: 'white' }}
	/>;



	const MyButton = styled(Button)({
		// justifyContent:'center',
		// alignContent:'center',
		backgroundColor: color,
		borderColor: borderColor,
		'&:hover': {
			color: textColorHover,
			backgroundColor: colorHover,
			borderColor: colorBorderHover,
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: colorActive,
			borderColor: colorBorderActive,
		},
		'&:focus': {
			//   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',

		},
	});


	return (

		<MyButton
			id={id}
			ref={ref!}
			disabled={disabled}
			variant={variant}
			size={size}
			sx={{
				":disabled": {
					color: 'white',
					backgroundColor: '#C0C2C3'
				},
				borderRadius:borderRadius,
				width: width,
				height: height,
				padding: padding,
				background: gradient ? 'linear-gradient(90deg, rgba(45,146,159,1) 0%, rgba(45,146,159,1) 35%, rgba(67,203,161,1) 100%)' : variant === 'contained' ? color : 'transparent',
				textTransform: 'none',
				...sx,
			}}
			style={{
				background: color
			}}
			startIcon={startIcon && loading ? cirularProgress : startIcon}
			endIcon={endIcon && loading ? cirularProgress : endIcon}
			onClick={onClick}
		>

			{
				loading && (!startIcon && !endIcon)
					?
					cirularProgress
					:

					<Typography
						fontFamily={typographyKarbono.outfit}
						color={textColor}
						textAlign={textAlign}
						textTransform='initial'
						variant={textVariant}
						sx={{
							fontSize: { xs: fontSizeMovil, sm: fontSize },
							fontWeight: '1px'
						}}
					>{text}</Typography>
			}
		</MyButton>)
};

export default CustomButton;