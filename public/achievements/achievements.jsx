import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormControl, Button } from 'react-bootstrap';
import './achievements.css';

class achievements extends React.Component {

  <head>

    <link rel="stylesheet" href="achievements.css">
    <title>RBC Hackathon</title>

  </head>

  <body>
    <div id=leftColumn></div>

    <div id=rightColumn></div>

  <div id="head">
      <h1 id="title">Achievements</h1>

      <div id="topbox">

        const divStyle = {
          color: 'blue',
          backgroundImage: 'url(' + imgUrl + ')',
        };

        const buttonsInstance = (
          <ButtonToolbar>
            {/* Standard button */}
            <Button>Default</Button>

            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <Button bsStyle="primary">Primary</Button>

            {/* Indicates a successful or positive action */}
            <Button bsStyle="success">Success</Button>

            {/* Contextual button for informational alert messages */}
            <Button bsStyle="info">Info</Button>

            {/* Indicates caution should be taken with this action */}
            <Button bsStyle="warning">Warning</Button>

            {/* Indicates a dangerous or potentially negative action */}
            <Button bsStyle="danger">Danger</Button>

            {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
            <Button bsStyle="link">Link</Button>
          </ButtonToolbar>
        );


        function HelloWorldComponent() {
          return <div style={divStyle}>Hello World!</div>;
        }

      </div>
    </div>
  </body>
  ReactDOM.render(buttonsInstance, mountNode);
}
