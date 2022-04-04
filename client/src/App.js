import React from 'react';

import Header from './components/Header.js';

import './scss/main.scss';

const App = () => {
    return(
        <div className="frontpage">
            <Header />
            <h1>Test some text {process.env.TESTING_VAR}</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Aenean id metus id velit ullamcorper pulvinar. Integer lacinia. Nunc tincidunt ante vitae massa. Aliquam ante. Maecenas lorem. Integer pellentesque quam vel velit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Mauris tincidunt sem sed arcu. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Mauris metus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aliquam erat volutpat. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Aliquam erat volutpat. Curabitur bibendum justo non orci. Etiam bibendum elit eget erat.</p>
            <p>Nam quis nulla. Maecenas libero. Donec iaculis gravida nulla. Nullam faucibus mi quis velit. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Nullam rhoncus aliquam metus. Donec iaculis gravida nulla. Fusce suscipit libero eget elit. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Quisque porta. Aliquam erat volutpat.</p>

            <h1>Test header 2</h1>
            <p>Some text </p>
        </div>
    )
};

export default App;
