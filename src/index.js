import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
require('dotenv').config();

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

