import { Input } from '../UI/Input';
import { Grid } from '@mui/material';
import { PrimaryButton } from '../UI/PrimaryButton';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { Form } from '../UI/Form';
import { useData } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/schema';

const StepForm = () => {
    const { data, setValues } = useData();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName,
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        navigate('/step2');
        setValues(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                id='firstName'
                label='First Name'
                name='firstName'
                {...register('firstName')}
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
                onBlur={(e) => setValue('firstName', e.target.value.trim())}
            />
            <Input
                id='lastName'
                label='Last Name'
                name='lastName'
                {...register('lastName')}
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}
                onBlur={(e) => setValue('lastName', e.target.value.trim())}
            />
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
                        type='submit'
                        endIcon={<ArrowRightAltRoundedIcon />}
                    >
                        Next
                    </PrimaryButton>
                </Grid>
            </Grid>
        </Form>
    );
};

export default StepForm;
