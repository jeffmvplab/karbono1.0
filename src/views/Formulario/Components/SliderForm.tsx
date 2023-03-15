import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSliderSteps() {
    return (
        <>
            <Box sx={{ width: '32.25%', margin: '0 20px' }}>
            <Typography style={{marginLeft:'25px'}}>Tiempo de infusión (h) *</Typography>

                <Slider
                    sx={{ margin: '0 18px', marginTop: '0px' }}
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                />
            </Box>

        </>

    );
}