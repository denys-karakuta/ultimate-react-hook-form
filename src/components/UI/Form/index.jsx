import { Box } from '@mui/material';

export const Form = ({ children, ...props }) => {
    return (
        <Box component='form' {...props} noValidate>
            {children}
        </Box>
    );
};
