/**
 * Created by Randy on 10/1/2017.
 */
import React, {Component} from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';

const buttonsInstance = (
    <div>
        <ReactBootstrap.ButtonToolbar>
            <ReactBootstrap.Button bsStyle="primary">Default button</ReactBootstrap.Button>
            <ReactBootstrap.Button>Default button</ReactBootstrap.Button>
        </ReactBootstrap.ButtonToolbar>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
                <h2>{buttonsInstance}</h2>
            </div>
        )
    }
}
export default App;
