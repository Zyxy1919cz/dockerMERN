import React from 'react';

import Header from './components/Header.js';

import './scss/main.scss';

const App = () => {
    return(
        <div className="main">
            <Header />
            <h1>Test some text {process.env.TESTING_VAR}</h1>
            <p>Hello</p>
        </div>
    )
};

export default App;