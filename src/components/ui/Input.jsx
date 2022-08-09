import { forwardRef } from 'react';
import { TextField } from 'material-ui';

const Input = forwardRef((props, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            {...props}
        />
    );
});

export default Input;
