import { Button } from '@mui/material';

const ButtonWIthIcon = ({ children, props }) => {
    return (
        <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{
                '& .MuiButton-endIcon': {
                    position: 'absolute',
                    right: '1rem',
                    '& >*:nth-of-type(1)': {
                        fontSize: 32,
                    },
                },
                '& .MuiButton-startIcon': {
                    position: 'absolute',
                    left: '1rem',
                },
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonWIthIcon;

// MUI 4 - https://github.com/mui/material-ui/issues/17712#issuecomment-696609565
