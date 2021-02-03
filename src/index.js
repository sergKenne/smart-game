import React from 'react';
import reactDOM from 'react-dom'
import './index.scss';
import {AppProvider} from './context';
import App from './App'


reactDOM.render(
        <AppProvider>
            <App/>
        </AppProvider>, document.getElementById("root")
    )