import './App.css';
import { Routes, Route } from 'react-router-dom';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Result from '../components/Result';

function App() {
    return (
        <div className='App'>
            <h1>Ultimate React Form</h1>
            <Routes>
                <Route path='/' element={<Step1 />} />
                <Route path='/step2' element={<Step2 />} />
                <Route path='/step3' element={<Step3 />} />
                <Route path='/result' element={<Result />} />
                <Route path='*' element={<h1>Step not found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
