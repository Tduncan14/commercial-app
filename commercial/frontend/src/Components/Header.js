import React from 'react';
import {Navbar,Nav,Container,Badge} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import {useSelector} from 'react-redux';


const Header = () => {


    const {cartItems} = useSelector((state) => state.cart)
    console.log(cartItems,'items')



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
                     <Nav.Link ><FaShoppingCart />
                     {
                        cartItems.length > 0 && (<Badge pill bg='success' style={{marginLeft:'5px'}}>
                            {cartItems.reduce((a,c) => a + c.qty, 0)}

                        </Badge>)
                     }
                     </Nav.Link>
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