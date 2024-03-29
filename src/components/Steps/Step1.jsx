import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { Box, Grid, Typography } from '@mui/material';

import { PrimaryButton } from '../UI/PrimaryButton';
import StepForm1 from '../StepForms/StepForm1';

import './style.css';

const Step1 = () => {
    return (
        <Box className='box'>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Step 1
            </Typography>

            <StepForm1 />

            <Grid container justifyContent='flex-end'>
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

export default Step1;
