import { Header } from '../ui/Header';
import { Input } from '../ui/Input';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from '../ui/PrimaryButton';
import { Box, TextField } from '@mui/material';

const Step1 = () => {
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
    });
    const { onChange, onBlur, name, ref } = register('firstName');
    return (
        <Box component={'form'} sx={{ marginTop: 200 }}>
            <Header component='h2' variant='h4' style={{ marginTop: 20 }}>
                👌 Step 1
            </Header>

            <Input
                id='firstName'
                type='text'
                label='First Name'
                name='firstName'
            />
            <Input
                id='lastName'
                type='text'
                label='Last Name'
                name='lastName'
            />

            <PrimaryButton>Next</PrimaryButton>
        </Box>
    );
};

export default Step1;
