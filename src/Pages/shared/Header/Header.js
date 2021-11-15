import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
          <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home">RIDEO</Navbar.Brand>
                            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link className="text-white" as={HashLink} to="/home#products">Products</Nav.Link>
                <Nav.Link className="text-white" as={HashLink} to="/home#accessories">Accessories</Nav.Link>
                <Nav.Link className="text-white" as={HashLink} to="/home#addProduct">AddProduct</Nav.Link>
                <Nav.Link className="text-white" as={HashLink} to="/home#about">About</Nav.Link>
                {
                    user?.email?
                    <>
                    <Nav.Link as={Link} to="/dashboard">Explore</Nav.Link>
                    <Button onClick={logOut} variant="light">Logout</Button>
                    </>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
                <Navbar.Text>
                     <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
           
        </>
    );
};

export default Header;