import { colorsKarbono } from '@/themes/colors';
import {CircularProgress, Stack, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React from 'react';

export interface LoadingComponentInterface {
	sizeLoading?: string | number | undefined,
	isColumn?:boolean,
	typography?:string,
	text?:string,
	paddingTop?: string | number | undefined,
	color?:string | undefined,
}

const LoadingComponent : React.FC<LoadingComponentInterface> = ({
	sizeLoading='100px',
	isColumn=true,
	typography='h2',
	text='Cargando...',
	paddingTop=0,
	color=colorsKarbono.primary

}) => {
	return (
		<Stack
				paddingTop={paddingTop}
				// bgcolor='red'
				direction='row'
				justifyContent='center'
				// alignContent='center'
			>
				<Stack
				// bgcolor='red'
				direction={(isColumn)?'column':'row'}
				alignItems='center'
				>
					<CircularProgress
					   color='secondary'
						variant='indeterminate'
						size={sizeLoading}
					/>
					<Typography
					    textAlign='center'
						paddingTop={4}
						typography={typography}
						color={color}
					>{text}
					</Typography>
				</Stack>
			</Stack>
	);
};

export default LoadingComponent;
