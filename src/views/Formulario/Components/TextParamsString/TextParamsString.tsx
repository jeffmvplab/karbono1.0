import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface TextParamsStringProps {
	title: string;
	value?: any;
	unidad?: string;
	seguridad?: string
}

const TextParamsString: React.FC<TextParamsStringProps> = ({ 
	title, 
	value, 
	unidad = '', 
	seguridad 
}) => {
	// console.log('NaN:',title,value)
	return (
		<Stack direction={'row'} paddingY={0.5}>
			<Typography fontSize={'14px'} style={{ fontWeight: 600, }}>
				{title}
			</Typography>
			
			<Typography
			paddingRight={1}
			style={{
				fontSize:'14px',
				fontWeight: 700,
			}}>
			{value} 
			</Typography>
			<Typography
			style={{
				fontSize:'14px',
				fontWeight: 500,
				color: (seguridad==='SEGURA'||seguridad==='ADECUADA') ?'#66D84A':'#FF2525' ,
			}}>
		   {seguridad}
			</Typography>
			<Typography fontSize={'14px'} style={{ fontWeight: 500, }}>
				{
					(unidad === '' || unidad === undefined)
						? ''
						: `(${unidad})`
				}

			</Typography>
			{/* <Typography
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
			</Typography> */}
		</Stack>
	)
};

export default TextParamsString;
