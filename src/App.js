/**
 * Created by Randy on 10/1/2017.
 */
import React, {Component} from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import * as FireBase from 'firebase';


const loginPage = (
    <div>
        {/*TODO: Firebase authentication implementation and Control label*/}
        <ReactBootstrap.PageHeader>Login Page</ReactBootstrap.PageHeader>
        <ReactBootstrap.Form horizontal>
            <ReactBootstrap.FormGroup controlId="formHorizontalEmail">
                {/*<ReactBootstrap.Col componentClass={ControlLabel} sm={2}>*/}
                    {/*Email*/}
                {/*</ReactBootstrap.Col>*/}
                <ReactBootstrap.Col sm={10}>
                    <ReactBootstrap.FormControl type="email" placeholder="Email" />
                </ReactBootstrap.Col>
            </ReactBootstrap.FormGroup>

            <ReactBootstrap.FormGroup controlId="formHorizontalPassword">
                {/*<ReactBootstrap.Col componentClass={ControlLabel} sm={2}>*/}
                    {/*/!*Password*!/*/}
                {/*</ReactBootstrap.Col>*/}
                <ReactBootstrap.Col sm={10}>
                    <ReactBootstrap.FormControl type="password" placeholder="Password" />
                </ReactBootstrap.Col>
            </ReactBootstrap.FormGroup>

            <ReactBootstrap.FormGroup>
                <ReactBootstrap.Col smOffset={0} sm={10}>
                    <ReactBootstrap.Checkbox><p>Remember me</p></ReactBootstrap.Checkbox>
                </ReactBootstrap.Col>
            </ReactBootstrap.FormGroup>

            <ReactBootstrap.FormGroup>
                <ReactBootstrap.Col smOffset={0} sm={10}>
                    <ReactBootstrap.Button type="submit">
                        Sign in
                    </ReactBootstrap.Button>
                    <ReactBootstrap.Button type="submit">
                        Make Account
                    </ReactBootstrap.Button>
                </ReactBootstrap.Col>
            </ReactBootstrap.FormGroup>
        </ReactBootstrap.Form>

        <ReactBootstrap.ButtonToolbar>
            <ReactBootstrap.Button>Blank</ReactBootstrap.Button>
        </ReactBootstrap.ButtonToolbar>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:" ",
            password:" "


        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value});
    }

    //This function should be using firebase auth
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    render() {
        return (
            <div>
                <h1>{loginPage}</h1>
            </div>
        )
    }
}
export default App;
