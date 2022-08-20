import { Box, Grid, Typography } from '@mui/material';
import { PrimaryButton } from '../UI/PrimaryButton';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import StepForm3 from '../StepForms/StepForm3';

const Step3 = () => {
    return (
        <Box className='box'>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Step 3
            </Typography>
            <StepForm3 />
            <Grid container spacing={2} justifyContent='flex-end'>
                <Grid item>
                    <PrimaryButton
                        variant='outlined'
                        startIcon={<ArrowRightAltRoundedIcon />}
                    >
                        Prev
                    </PrimaryButton>
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
