import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header'
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';



const App = () => {






  return(
   <>
   <main className="">
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer/>
   </main>
   </>
  
  )

}



export default App