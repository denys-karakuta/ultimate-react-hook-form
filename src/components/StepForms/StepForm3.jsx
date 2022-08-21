import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { useForm } from 'react-hook-form';
import { Form } from '../UI/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaStep3 } from '../../utils/schemaStep3';
import { FileInput } from '../UI/FileInput';
import { acceptFiles } from '../../utils/constants';

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
