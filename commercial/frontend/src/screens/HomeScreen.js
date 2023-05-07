import React from 'react';
import{Row,Col} from 'react-bootstrap';
import Product from '../Components/products/Products';
import products from '../Components/products/product';
import './headscreen.css';


const HomeScreen = () => {




    return (
    <>

      <h1 className="lastest">Latest Products</h1>
    
    
    
    <Row>
        {products.map((product) => (

            <Col key={product.key} sm={12} md={6} lg={4} xl={3}>
                 <Product pro={product} />
            </Col>


        ))}
    </Row>
    
    </>
    )
}



export default HomeScreen;