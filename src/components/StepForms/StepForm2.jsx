import { Checkbox, FormControlLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';

import { schemaStep2 } from '../../utils/schemas/Step2';
import { useData } from '../../context/DataContext';
import { Input } from '../UI/Input';
import { Form } from '../UI/Form';

import 'react-phone-input-2/lib/material.css';

const StepForm2 = () => {
    const navigate = useNavigate();
    const { data, setValues } = useData();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: data.email,
            hasPhone: data.hasPhone,
            phoneNumber: data.phoneNumber,
        },
        mode: 'onBlur',
        resolver: yupResolver(schemaStep2),
    });

    const watchShowPhone = watch('hasPhone');

    const onSubmit = (data) => {
        navigate('/step3');
        setValues(data);
    };

    return (
        <Form id='form' onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='email'
                id='email'
                label='Email'
                name='email'
                {...register('email')}
                error={!!errors.email}
                helperText={errors?.email?.message}
                onBlur={(e) => setValue('email', e.target.value.trim())}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        defaultValue={data.hasPhone}
                        defaultChecked={data.hasPhone}
                        name='hasPhone'
                        {...register('hasPhone')}
                    />
                }
                label='Do you have a phone number?'
            />

            {watchShowPhone && (
                <Controller
                    control={control}
                    name='phoneNumber'
                    rules={{ required: true }}
                    shouldUnregister={true}
                    defaultValue={data.phoneNumber}
                    render={({ field: { ref, ...field } }) => (
                        <PhoneInput
                            {...field}
                            className='input'
                            inputProps={{
                                ref,
                                required: true,
                                autoFocus: true,
                            }}
                            country='ua'
                            countryCodeEditable={false}
                            specialLabel='Phone Number'
                        />
                    )}
                />
            )}
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Form>
    );
};

export default StepForm2;
