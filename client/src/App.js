import React from 'react';

const App = () => {
    return(
        <div className="main">
            <header className="header"></header>
            <h1>`Test ${process.env.TESTING_VAR}`</h1>
            <footer className="footer"></footer>
        </div>
    )
};

export default App;