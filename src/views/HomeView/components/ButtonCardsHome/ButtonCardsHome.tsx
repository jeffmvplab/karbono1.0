import { Button, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';


export interface ButtonCardsHomeProps  {
	route?:string;
	text?:string;
	color?:string
}

const ButtonCardsHome: React.FC<ButtonCardsHomeProps> = ({route,text,color}) => {

	const MyButton = styled(Button)({
		'&:hover': {
			backgroundColor:'#2FC5C6',
		},
	});

	const router=useRouter();

	return (
		
		<MyButton
		onClick={() => router.push(route!)}
		style={{
		   background:color, 
		   color: '#fff', 
		   padding: '10px 40px', 
		   borderRadius: '10px' 
		   
		   }}>
		{text}
	  </MyButton>
	);
};

export default ButtonCardsHome;
