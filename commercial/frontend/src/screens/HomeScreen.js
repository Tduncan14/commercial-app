import {useEffect,useState} from 'react';

import{Row,Col} from 'react-bootstrap';
import Product from '../Components/products/Products';
import axios from 'axios';

import './headscreen.css';


const HomeScreen = () => {

    const [products,setProducts ] = useState([]);



    useEffect(() => {

        const fetchProducts = async () => {

           const {data} = await axios.get('/api/products');
           setProducts(data);



        }


        fetchProducts()


    },[])




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