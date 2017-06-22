import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import './index.css';

const Header = () => (
    <div>
        <Navbar fixedTop fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink exact to="/">Blue Slate Properties</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer activeClassName="active" to="/about">
                        <NavItem>About</NavItem>
                    </LinkContainer>
                    <LinkContainer activeClassName="active" to="/contact">
                        <NavItem>Contact</NavItem>
                    </LinkContainer>
                    <LinkContainer activeClassName="active" to="/apartments">
                        <NavItem>Apartments</NavItem>
                    </LinkContainer>
                    <LinkContainer activeClassName="active" to="/services">
                        <NavItem>Services</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
