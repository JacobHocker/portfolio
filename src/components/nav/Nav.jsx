import React from 'react';
import './Nav.css';

const Nav = ({onDarkClick}) => {
    return (
        <div>Nav <button onClick={onDarkClick}>Change</button></div>
    )
}

export default Nav;