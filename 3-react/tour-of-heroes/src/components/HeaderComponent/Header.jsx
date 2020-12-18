import React from 'react';
import {Button} from 'react-bootstrap'
import './Header.css'

function Header() {
    return (
    <div className="header-container">
        <Button variant="info" className="btn" href="/">Dashboard</Button>
        <Button variant="danger ml-10" href="/heroesList">Heroes</Button>
    </div>
    );
}

export default Header;
