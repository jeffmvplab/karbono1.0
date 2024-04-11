import { Button, InputAdornment, Stack, TextField } from '@mui/material'
import { error } from 'console'
import React from 'react'

export interface CustomTextFieldProps {
    component?: any,
    id: string
    label: string
    type?: string
    error?: boolean | undefined
    helperText?: string | undefined
    value?: any
    defaulValue?: any
    select?: boolean
    children?: any
    endAdornament?: any,
    startAdornament?: any,
    disabled?: boolean,
    borderRadius?: string | number,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined,
    onClickEndAdornament?: React.MouseEventHandler<HTMLButtonElement> | undefined
    whitIcon?: boolean
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
    startAdornament = '',
    onChange,
    onClick,
    onKeyPress,
    disabled = false,
    error = false,
    helperText = '',
    borderRadius = '12px',
    onClickEndAdornament,
    component,
    whitIcon=false
}) => {
    return (

        <TextField
            component={component}
            onKeyPress={onKeyPress}
            onClick={onClick}
            onChange={onChange}
            disabled={disabled}
            id={id}
            error={error}
            label={label}
            type={type}
            value={value!}
            defaultValue={defaulValue}
            variant='outlined'
            color='secondary'
            fullWidth
            select={select}
            helperText={helperText}
            // SelectProps={{
            //     MenuProps: {
            //         style: {
            //             height: '200px'
            //         }
            //     }
            // }}
            InputProps={{
                endAdornment:
                    whitIcon
                        ? <Button onClick={onClickEndAdornament} sx={{ background: 'transparent', height: '30px' }}>
                            <InputAdornment position="start">{endAdornament}</InputAdornment>
                        </Button>
                        // <Button onClick={onClickEndAdornament} sx={{ background: 'transparent', height: '30px' }}>
                        : <InputAdornment position="start">{endAdornament}</InputAdornment>
                // </Button>,
            }}
            sx={{
                // borderRadius: '15px',
                "& .MuiFormHelperText-root ": {
                    WebkitTextFillColor: 'red',
                },
                "& .MuiInputBase-root": {
                    borderRadius: borderRadius,
                },

            }}>
            {children}
        </TextField >

    )
}

export default CustomTextField
