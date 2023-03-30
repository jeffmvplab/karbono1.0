import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface TextParamsProps {
	title: string;
	value: string;
	unidad?: string;
	seguridad?: string
}

const TextParams: React.FC<TextParamsProps> = ({ title, value, unidad = '', seguridad }) => {
	return (
		<Stack direction={'row'} paddingY={0.5}>
			<Typography fontSize={'14px'} style={{ fontWeight: 600, }}>
				{title}
			</Typography>
			<Typography fontSize={'14px'} style={{ fontWeight: 500, }}>
				{value}
			</Typography>
			<Typography fontSize={'14px'} style={{ fontWeight: 500, }}>
				{
					(unidad === '' || unidad === undefined)
						? ''
						: `(${unidad})`
				}

			</Typography>
			<Typography
			paddingLeft={1}
				fontSize={'14px'}
				style={{
					fontWeight: 500,
					color: (seguridad==='Seguro') ?'#66D84A':'#FF2525' ,
				}}>
				{(seguridad!==''||seguridad!==undefined)
				?seguridad
				:''
				}
			</Typography>
		</Stack>
	)
};

export default TextParams;
