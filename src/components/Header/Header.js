import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="post">Posts</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="postDetails">Post Details</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;