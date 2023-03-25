import { colorsKarbono } from '@/themes/colors';
import { styled, Tooltip,TooltipProps,tooltipClasses } from '@mui/material';
import React, { JSXElementConstructor, ReactElement } from 'react';



const MyTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: colorsKarbono.primary,

	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor:  colorsKarbono.primary,
		fontSize: 15,
	},
}));
  
export interface CustomToolTipInterface {
	children?:ReactElement<any,any> ;
	tip: React.ReactNode,
	placeTip?:"bottom"|"left"|"right"|"top"|"bottom-end"|"bottom-start"|"left-end"|"left-start"|"right-end"|"right-start"|"top-end"|"top-start"|undefined
}

const CustomToolTip : React.FC<CustomToolTipInterface> = ({children,tip,placeTip}) => {
	
	return (
		<MyTooltip  
		children={children!} 
		title={tip}
		placement={placeTip!}
		/>	
	);
};

export default CustomToolTip;

