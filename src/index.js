import {AppContainer} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import './globalStyles.css'

import App from './App'

const rootEl = document.getElementById('root');
 
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
  rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // eslint-disable-line global-require
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}
