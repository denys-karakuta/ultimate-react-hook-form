import * as React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        button: {
            marginTop: 20,
            fontSize: '18px',
        },
    },
});

export const PrimaryButton = ({ children, ...props }) => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                type='button'
                variant='contained'
                color='primary'
                sx={{
                    '& .MuiButton-endIcon>*:nth-of-type(1)': {
                        fontSize: 32,
                    },
                    '& .MuiButton-startIcon': {
                        '& >*:nth-of-type(1)': {
                            fontSize: 32,
                            transform: 'scaleX(-1)',
                        },
                    },
                }}
                {...props}
            >
                {children}
            </Button>
        </ThemeProvider>
    );
};
