import { Button, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';


export interface ButtonCardsHomeProps  {
	route?:string;
	text?:string;
	color?:string;
	id?:string;
}

const ButtonCardsHome: React.FC<ButtonCardsHomeProps> = ({route,text,color,id}) => {

	const MyButton = styled(Button)({
		'&:hover': {
			backgroundColor:'#2FC5C6',
		},
	});

	const router=useRouter();

	return (
		
		<MyButton
		onClick={() => router.push(route!)}
		id={id}
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
