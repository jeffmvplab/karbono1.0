import { Box, TextField } from '@mui/material'
import React from 'react'

export interface TextFieldInputProps {
    id: string
    label: string
    type: string
}

const TextFieldInput: React.FC<TextFieldInputProps> = ({ id, label, type }) => {
    return (
        <>

            <TextField
                id={id}
                label={label}
                type={type}
                variant='outlined'
                color='secondary'
                fullWidth
                inputProps={{ style: { height: '25PX' } }}
                sx={{
                    marginRight:'10px',
                }}
            />


        </>
    )
}

export default TextFieldInput
