import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header'
import Footer from './Components/Footer';



const App = () => {






  return(
   <>
   <main className="py-3">
    <Header />
    <Container>
      
      <h1>Welcome to the shop</h1>
    </Container>
    <Footer/>
   </main>
   </>
  
  )

}



export default App