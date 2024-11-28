import * as React from 'react';
import TextField from '@mui/material/TextField';
import BasicTextFieldsCardProps from '../interface/BasicTextFieldsCardProps'

export default function BasicTextFields({ inputType, placeholder }: Readonly<BasicTextFieldsCardProps>) {
    return (
        <TextField
            variant="outlined"
            type={inputType}       // Use inputType prop for the input type
            placeholder={placeholder} // Use placeholder prop
            className='tw-w-full tw-rounded-md tw-border tw-border-slate-500'

        />
    );
}