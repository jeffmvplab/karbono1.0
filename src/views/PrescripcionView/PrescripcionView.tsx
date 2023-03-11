import {Typography, Button, Box, Grid }from '@mui/material/';

export interface PrescripcionViewProps {}

const PrescripcionView : React.FC<PrescripcionViewProps> = () => {


	return (
		<>
		<Grid container sx={{margin:'20px', paddingRight:'40px', paddingLeft:'40px'}}>
		    <Typography sx={{marginTop:'80px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur harum tempora. Dolor, in reprehenderit? Unde quam non porro molestias repellendus dolor et. Debitis, iusto. Dolor unde molestiae explicabo nobis.</Typography>
		</Grid>
		</>
	)
	
};

export default PrescripcionView;
