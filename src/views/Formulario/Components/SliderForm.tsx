import {FC} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core';

function valuetext(value: number) {
    return `${value}°C`;
}

export interface DiscreteSliderStepsProps {
    nombre:string
}

 const DiscreteSliderSteps: React.FC<DiscreteSliderStepsProps>  = ({nombre})  => {
    return (
        <>
            <Box sx={{ width: '30.25%', margin: '0 25px', justifyContent:'left' }}>
            <Typography style={{marginLeft:'15px'}}>{nombre}</Typography>

                <Slider
                    sx={{ margin: '0 5px', marginTop: '0px' }}
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={1}
                    marks
                    min={-5}
                    max={10}
                    valueLabelDisplay="auto"
                />
            </Box>

        </>

    );
}

export default DiscreteSliderSteps;