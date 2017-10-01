import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Form, FormControl, Button } from 'react-bootstrap';
import './achievements.css';

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
