import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Step1, Step2, Step3, Result } from '../components';
import { Container } from '@material-ui/core';
import { Header } from '../components/ui/Header';

const App = () => {
    return (
        <Container maxWidth='sm' className='App'>
            <Header
                text='Ultimate React Form'
                component='h1'
                variant='h3'
                style={{ marginTop: 100, fontWeight: 700 }}
            />
            <Routes>
                <Route path='/' element={<Step1 />} />
                <Route path='/step2' element={<Step2 />} />
                <Route path='/step3' element={<Step3 />} />
                <Route path='/result' element={<Result />} />
                <Route path='*' element={<h1>Step not found</h1>} />
            </Routes>
        </Container>
    );
};

export default App;
