import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Navbar,Nav,Container,Badge, NavDropdown} from 'react-bootstrap'
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/useSlice';
import { logout } from '../slices/authSlice';
import {useSelector,useDispatch} from 'react-redux';



const Header = () => {


    const {cartItems} = useSelector((state) => state.cart)
    const {userInfo} = useSelector((state) => state.auth)


    const dispatch = useDispatch()
    const navigate = useNavigate()






    console.log(cartItems,'items')


    // the mutation function to call
    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler =  async () => {
        try{
            // you can unwrap promise
            await logoutApiCall().unwrap();
            dispatch(logout())
            navigate('/login')

        }

        catch(error){

            console.log(error)
            
        }
    }



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
                     {userInfo ? (<NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to="/profile">
                            
                               <NavDropdown.Item>Profile</NavDropdown.Item>
                               </LinkContainer>
                               <NavDropdown.Item onClick ={logoutHandler}>
                                 Logout
                               </NavDropdown.Item>
                               
                     
                     </NavDropdown>) : (  <LinkContainer to="/login">
                     <Nav.Link ><FaUser /></Nav.Link>
                     </LinkContainer>)}
                   </Nav>
               </Navbar.Collapse>
            </Navbar>
        </header>

    )
}





export default Header