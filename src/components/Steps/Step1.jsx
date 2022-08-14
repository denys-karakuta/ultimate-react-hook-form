import './style.css';
import { Box, Grid, Typography } from '@mui/material';
import StepForm from '../StepForm/StepForm';
import { PrimaryButton } from '../UI/PrimaryButton';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const Step1 = () => {
    const { data, setValues } = useData();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate('/step2');
        setValues(data);
    };

    return (
        <Box className='box'>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Step 1
            </Typography>
            <StepForm onSubmit={onSubmit} data={data} />
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

export default Step1;
