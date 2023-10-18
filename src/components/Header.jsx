import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, FormControl } from 'react-bootstrap';
import logo from './logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../pages/Home';
import AboutUs from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Blog from '../pages/Blog';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky='top' collapseOnSelect expand="md" bg="dark" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />My Game Blog
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form className='d-flex' >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/about" element={<AboutUs/>} />
                        <Route exact path="/contactus" element={<ContactUs/>} />
                        <Route exact path="/blog" element={<Blog/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Header;