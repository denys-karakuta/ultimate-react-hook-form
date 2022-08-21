import './style.css';
import { Box, Grid, Typography } from '@mui/material';
import StepForm2 from '../StepForms/StepForm2';
import { PrimaryButton } from '../UI/PrimaryButton';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { Link } from 'react-router-dom';

const Step2 = () => {
    return (
        <Box className='box'>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Step 2
            </Typography>
            <StepForm2 />
            <Grid container spacing={2} justifyContent='flex-end'>
                <Grid item>
                    <Link to='/'>
                        <PrimaryButton
                            variant='outlined'
                            startIcon={<ArrowRightAltRoundedIcon />}
                        >
                            Prev
                        </PrimaryButton>
                    </Link>
                </Grid>
                <Grid item>
                    <PrimaryButton
                        form='form'
                        type='submit'
                        endIcon={<ArrowRightAltRoundedIcon />}
                    >
                        Next
                    </PrimaryButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Step2;
