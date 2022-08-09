import { Header } from '../ui/Header';
import Input from '../ui/Input';

const Step1 = () => {
    return (
        <form noValidate>
            <Header
                text='👌 Step 1'
                component='h2'
                variant='h4'
                style={{ marginTop: 20 }}
            />
            {/*<Input />*/}
            <button type='Submit'>Sumbit</button>
        </form>
    );
};

export default Step1;
