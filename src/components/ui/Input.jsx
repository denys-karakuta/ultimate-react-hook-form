import { forwardRef } from 'react';
import { TextField } from '@mui/material';

export const Input = forwardRef((props, ref) => {
    return (
        <TextField
            fullWidth
            id='outlined-basic'
            variant='outlined'
            margin='normal'
            inputRef={ref}
            {...props}
        />
    );
});
