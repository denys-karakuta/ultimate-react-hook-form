import { Box } from '@mui/material';

const style = {
    padding: '20px 50px',
    // backgroundColor: '#fafafa',
    borderRadius: '15px',
};

export const Form = ({ children, ...props }) => {
    return (
        <Box component='form' sx={style} {...props} noValidate>
            {children}
        </Box>
    );
};
