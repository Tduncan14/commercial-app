import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa';



const Header = () => {



    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg"collapseOnSelect>
               <Navbar.Brand href="/">Your Shop</Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ms-auto">
                     <Nav.Link href="/cart"><FaShoppingCart /></Nav.Link>
                     <Nav.Link href="/login"><FaUser /></Nav.Link></Nav>
               </Navbar.Collapse>
            </Navbar>
        </header>

    )
}





export default Header