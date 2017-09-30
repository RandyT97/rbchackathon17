import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
    render() {
        return (
            <h1>Camilo sucks</h1>
        )
    }
}
function Button() {
    return (
        React.createElement("button",null,"Go")
    );
}

export default App;
