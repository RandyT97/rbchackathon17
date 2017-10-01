import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pieChart from './pieChart';
import registerServiceWorker from './registerServiceWorker';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<pieChart />, document.getElementById('root'));
registerServiceWorker();
