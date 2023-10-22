import { forwardRef } from 'react';
import { TextField } from '@mui/material';

export const Input = forwardRef((props, ref) => {
    return (
        <TextField
            type='text'
            fullWidth
            variant='outlined'
            margin='normal'
            autoComplete='off'
            inputRef={ref}
            {...props}
        />
    );
});
