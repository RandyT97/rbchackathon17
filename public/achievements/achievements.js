import React from 'react';
import ReactDOM from 'react-dom';
import './achievements.css';
import pieChart from './pieChart';
import {Form, FormControl, Button } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';
import * as ReactBootstrap from 'react-bootstrap';
import 'whatwg-fetch';

  
ReactDOM.render(<achievements />, document.getElementById('root'));
registerServiceWorker();
