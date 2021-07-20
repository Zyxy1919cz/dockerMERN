import React from 'react';

// Main header
const Header = () => {
    return (
        <container className="header">
            <nav>
                <p>Welcome</p>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Some more</li>
                    <li>About</li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search..."/>
                    <i class="fa fa-search"/>
                </div>
            </nav>
        </container>
    )
};

export default Header;