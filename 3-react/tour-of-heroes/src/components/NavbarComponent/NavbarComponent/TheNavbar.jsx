import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function TheNavbar() {
    return(
        <div className="navbar-container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Mou Tour of Heroes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/heroes/13">My favourite Hero</Nav.Link>
                    <Nav.Link href="/heroes/14">The fastest Heroes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TheNavbar;