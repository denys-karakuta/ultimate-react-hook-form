import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { DataProvider } from './context/DataContext';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <DataProvider>
            <Router>
                <App />
            </Router>
        </DataProvider>
    </React.StrictMode>
);
