import { Typography } from '@mui/material';
import StepForm from '../StepForm/StepForm';
import { useData } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
    const { data, setValues } = useData();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate('/step3');
        setValues(data);
    };

    return (
        <div>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Step 2
            </Typography>
            <StepForm onSubmit={onSubmit} data={data} />
        </div>
    );
};

export default Step2;
