import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <Container className='container' fixed={true}>
            <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" className='Logo'>OMA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#pricing"><div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary">search</button>
                        </div></Nav.Link>
                        <Nav.Link href="#deets">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavBar;