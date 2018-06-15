import "typeface-roboto";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers/App';
import registerServiceWorker from './workers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
