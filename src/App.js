import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigator } from './navigation/navigator';

import './App.css';

export const App = () => {
    return (
        <div className="App">
            <Header />
            <Navigator />
            <Link to="/">Welcome</Link>
            <Link to="/pwet">Test</Link>
        </div>
    );
};
