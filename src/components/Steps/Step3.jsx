import { Box, Grid, Typography } from '@mui/material';
import { PrimaryButton } from '../UI/PrimaryButton';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import StepForm3 from '../StepForms/StepForm3';
import { Link } from 'react-router-dom';

const Step3 = () => {
    return (
        <Box className='box'>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Step 3
            </Typography>
            <StepForm3 />
            <Grid container spacing={2} justifyContent='flex-end'>
                <Grid item>
                    <Link to='/step2'>
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

export default Step3;
