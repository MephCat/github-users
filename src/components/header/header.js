import React from 'react';
import {Link} from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <header>
            <h3>
                <Link to='/'>
                    Github Users
                </Link>
            </h3>
        </header>
    )
}

export default Header;