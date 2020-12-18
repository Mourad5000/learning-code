import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../../images/runner.png'

function TheNavbar() {
    return(
        <div className="navbar-container">
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className ="ml-5" href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        alt="React Bootstrap logo"/>
                Calculadora atlética</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5">
                    <Nav.Link href="/">¿A qué ritmo debo ir si quiero hacer..?</Nav.Link>
                    <Nav.Link href="/">¿Cuánto haré si voy a..?</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TheNavbar;