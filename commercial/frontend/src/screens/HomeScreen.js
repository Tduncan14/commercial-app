import {useEffect,useState} from 'react';
import Loaders from '../Components/Loading';
import{Row,Col} from 'react-bootstrap';
import Product from '../Components/products/Products';
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/ProductsApiSlice';
import Message from '../Components/Message';
import './headscreen.css';
import Loader from '../Components/Loading';


const HomeScreen = () => {


    const { data:products, isLoading,error}  = useGetProductsQuery();

    // const [products,setProducts ] = useState([]);



    // useEffect(() => {

    //     const fetchProducts = async () => {

    //        const {data} = await axios.get('/api/products');
    //        setProducts(data);



    //     }


    //     fetchProducts()


    // },[])




    return (
    <>

    {isLoading ? (
        <Loader/>
    ) : error ? (<Message variant='danger'>
       {error?.data?.message || error.error}
    </Message>) : (<> <h1 className="lastest">Latest Products</h1>
    
    
    <Row>
        {products.map((product) => (

            <Col key={product.key} sm={12} md={6} lg={4} xl={3}>
                 <Product pro={product} />
            </Col>


        ))}
    </Row>
    </>)}


    </>
    )
}



export default HomeScreen;