import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pieChart from './pieChart';
import registerServiceWorker from './registerServiceWorker';
import 'whatwg-fetch';

ReactDOM.render(<pieChart />, document.getElementById('root'));
registerServiceWorker();
