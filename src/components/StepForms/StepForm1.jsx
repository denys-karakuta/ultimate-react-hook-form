import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaStep1 } from '../../utils/schemas/Step1';
import { useData } from '../../context/DataContext';
import { Input } from '../UI/Input';
import { Form } from '../UI/Form';

const StepForm1 = () => {
    const navigate = useNavigate();
    const { data, setValues } = useData();
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
        resolver: yupResolver(schemaStep1),
    });

    const onSubmit = (data) => {
        navigate('/step2');
        setValues(data);
    };

    return (
        <Form id='form' onSubmit={handleSubmit(onSubmit)}>
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
        </Form>
    );
};

export default StepForm1;
