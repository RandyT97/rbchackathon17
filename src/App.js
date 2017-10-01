/**
 * Created by Randy on 10/1/2017.
 */
import React, {Component} from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import * as FireBase from 'firebase';


const loginPage = (
    <div>
        <ReactBootstrap.PageHeader>Login Page</ReactBootstrap.PageHeader>
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
            email:"",
            password:""

        };
    }
    validateForm() {
        return this.state.email.length > 0;
    }
    render() {
        return (
            <div>
                <h1></h1>
                <h2>{loginPage}</h2>
            </div>
        )
    }
}
export default App;
