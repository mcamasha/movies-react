import React from "react";
import ReactDOM from "react-dom";
import Select from 'react-select';
import { App } from './components/App.js';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);