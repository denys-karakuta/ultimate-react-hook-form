import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { schemaStep3 } from '../../utils/schemas/Step3';
import { useData } from '../../context/DataContext';
import { acceptFiles } from '../../constants';
import { FileInput } from '../UI/FileInput';
import { Form } from '../UI/Form';

const StepForm3 = () => {
    const navigate = useNavigate();
    const { data, setValues } = useData();

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            files: data.files,
        },
        resolver: yupResolver(schemaStep3),
    });

    const onSubmit = (data) => {
        navigate('/result');
        setValues(data);
    };

    return (
        <Form id='form' onSubmit={handleSubmit(onSubmit)}>
            <FileInput
                name='files'
                accept={acceptFiles}
                control={control}
                setValue={setValue}
            />
        </Form>
    );
};

export default StepForm3;
