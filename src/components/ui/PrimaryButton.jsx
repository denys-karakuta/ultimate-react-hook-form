import * as React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        button: {
            marginTop: 20,
            width: 120,
            fontSize: '18px',
        },
    },
});

export const PrimaryButton = ({ children, ...props }) => {
    return (
        <ThemeProvider theme={theme}>
            <Button
                type='submit'
                variant='contained'
                color='primary'
                {...props}
            >
                {children}
            </Button>
        </ThemeProvider>
    );
};
