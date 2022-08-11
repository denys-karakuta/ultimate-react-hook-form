import { Typography } from '@mui/material';

import StepForm from '../StepForm/StepForm';

const Step1 = () => {
    return (
        <>
            <Typography component='h2' variant='h4' mt={2}>
                👌 Step 1
            </Typography>
            <StepForm />
        </>
    );
};

export default Step1;
