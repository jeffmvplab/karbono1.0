import {FC} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const marks = [
    {value: 10,label: '10',},
    {value: 11,label: '',},
    {value: 12,label: '',},
    {value: 13,label: '',},
    {value: 14,label: '14',},
    {value: 15,label: '',},
    {value: 16,label: '',},
    {value: 17,label: '17',},
    {value: 18,label: '',},
    {value: 19,label: '',},
    {value: 20,label:'',},
    {value: 21,label:'21',},
    {value: 22,label:'',},
    {value: 23,label:'',},
    {value: 24,label:'24',},
   
  ];
  
function valuetext(value: number) {
    return `${value}h`;
}

export interface DiscreteSliderStepsProps {
    nombre:string
}

 const DiscreteSliderSteps: React.FC<DiscreteSliderStepsProps>  = ({nombre})  => {
    return (
        <>
            <Box sx={{justifyContent:'left' }}>
            <Typography style={{marginLeft:'15px'}}>{nombre}</Typography>

                <Slider
                    sx={{ margin: '0 5px', marginTop: '0px' }}
                    aria-label="Small steps"
                    defaultValue={1}
                    getAriaValueText={valuetext}
                    step={1}
                    min={0}
                    max={14}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>

        </>

    );
}

export default DiscreteSliderSteps;