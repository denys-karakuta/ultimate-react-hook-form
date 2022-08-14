import { Input } from '../UI/Input';
import { Form } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/schema';

const StepForm = ({ onSubmit, data }) => {
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

export default StepForm;
