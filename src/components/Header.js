import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // добавить в код

export const Header = (props) => {
    return (
        <Navbar inverse>
            <Nav>
                <NavItem eventKey={1}>
                    <Link to='/'>
                        Home
                    </Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link to='search'>
                        Search
                    </Link>
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    {props.user.login}
                </NavItem>
                <Navbar.Brand>
                    <Image id="avatar" src={props.user.img} circle />
                </Navbar.Brand>
            </Nav>
        </Navbar>
    )
}