import { Box, TextField } from '@mui/material'
import React, { ReactElement } from 'react'

export interface CustomTextFieldProps {
    id: string
    label: string
    type?: string
    value?:any
    defaulValue?:any
    select?:boolean
    children?:any
    onChange?:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ 
    id, 
    label, 
    type,
    value,
    defaulValue,
    select=false, 
    children,
    onChange
}) => {
    return (
        <>
            <TextField
                onChange={onChange}
                id={id}
                label={label}
                type={type}
                value={value!}
                defaultValue={defaulValue}
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
