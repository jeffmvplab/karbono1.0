import { Box, TextField } from '@mui/material'
import React, { ReactElement } from 'react'

export interface CustomTextFieldProps {
    id: string
    label: string
    type?: string
    value?:any
    select?:boolean
    children?:any

}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ 
    id, 
    label, 
    type,
    value,
    select=false, 
    children
}) => {
    return (
        <>
            <TextField
                id={id}
                label={label}
                type={type}
                value={value!}
                variant='outlined'
                color='secondary'
                fullWidth
                select={select}
                sx={{borderRadius:'20px'}}
                 >
                 {children}
                 </TextField>
        </>
    )
}

export default CustomTextField
