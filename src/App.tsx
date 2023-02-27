import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppComponent} from "./Components";

const App = () => {
    const object = {
        name: 'React',
        uri: 'https://reactjs.org/docs/getting-started.html'
    }
    return (<AppComponent logo={logo} object={ object }/>)
};

export default App;
