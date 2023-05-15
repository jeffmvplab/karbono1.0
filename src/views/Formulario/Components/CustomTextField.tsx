import { InputAdornment, Stack, TextField } from '@mui/material'
import React from 'react'

export interface CustomTextFieldProps {
    id: string
    label: string
    type?: string
    value?: any
    defaulValue?: any
    select?: boolean
    children?: any
    endAdornament?: any,
    disabled?: boolean,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    onKeyPress?:React.KeyboardEventHandler<HTMLDivElement> | undefined
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    id,
    label,
    type,
    value,
    defaulValue,
    select,
    children,
    endAdornament = '',
    onChange,
    onClick,
    onKeyPress,
    disabled = false,
}) => {
    return (

        <TextField
    
            onKeyPress={onKeyPress}
            onClick={onClick}
            onChange={onChange}
            disabled={disabled}
            id={id}
            label={label}
            type={type}
            value={value!}
            defaultValue={defaulValue}
            variant='outlined'
            color='secondary'
            fullWidth
            select={select}
            // SelectProps={{
            //     MenuProps: {
            //         style: {
            //             height: '200px'
            //         }
            //     }
            // }}
            InputProps={{
                endAdornment: <InputAdornment position="start">{endAdornament}</InputAdornment>,
            }}
            sx={{ borderRadius: '20px' }}
        >
            {children}
        </TextField>

    )
}

export default CustomTextField
