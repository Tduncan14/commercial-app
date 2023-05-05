import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header'
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';



const App = () => {






  return(
   <>
   <main className="py-3">
    <Header />
    <Container>
      
    <HomeScreen />
    </Container>
    <Footer/>
   </main>
   </>
  
  )

}



export default App