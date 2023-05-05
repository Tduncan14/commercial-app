import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';



const Header = () => {



    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg"collapseOnSelect>
                <LinkContainer to="/">
               <Navbar.Brand >Your Shop</Navbar.Brand>
               </LinkContainer>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ms-auto">
                    <LinkContainer to="/cart">
                     <Nav.Link ><FaShoppingCart /></Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/signin">
                     <Nav.Link ><FaUser /></Nav.Link>
                     </LinkContainer></Nav>
               </Navbar.Collapse>
            </Navbar>
        </header>

    )
}





export default Header