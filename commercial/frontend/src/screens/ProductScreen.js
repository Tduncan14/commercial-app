import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import{Link } from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button,Form} from 'react-bootstrap';
import Rating from '../Components/Rating';
import { useGetProductDetailsQuery } from '../slices/ProductsApiSlice';
import Loader from '../Components/Loading';
// import axios from 'axios'
import Message from '../Components/Message';


const ProductScreen = () => {



    // const [product,setProduct] = useState({})


    // to get the id from the params


    const {id:productId} = useParams();

    const[qty,setQty] = useState(1)

    const {data:product,isLoading, error} = useGetProductDetailsQuery(productId);



    // useEffect (() => {

    //     const fetchProduct = async () => {
    //         const {data} = await axios.get(`/api/products/${productId}`)
    //          setProduct(data);
    //     }

    //     fetchProduct()


    // },[productId])

    // const  product = products.find((p) => p._id === productId)


    console.log(product)






    return(
        <>
        <Link className="btn btn-light my-3" to= "/">
            Go Back
        </Link>
    

          {isLoading ? (<Loader />) : error ? (<Message variant='danger'>
       {error?.data?.message || error.error}
    </Message>) : (    <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />

            </Col>

            <Col md={4}>
                
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <h3>{product.name}</h3>
                    </ListGroup.Item>


                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        ${product.price}
                    </ListGroup.Item>


                    <ListGroup.Item>
                        ${product.description}
                    </ListGroup.Item>
                </ListGroup>
                

            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>
                                    ${product.price}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>


                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                <strong>
                                   {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                         {
                            product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                          QTY
                                          <Col>
                                            <Form.Control as='select' 
                                            value={qty} 
                                            onChange={(e) => setQty(Number(e.target.value))}>
                                                {[...Array(product.countInStock).keys()].map((x ) =>(
                                                    <option key={x + 1} value={x+1}>
                                                        {x + 1}
                                                    </option>



                                                ))}
                                            </Form.Control>
                                          </Col>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )
                         }

                        <ListGroup.Item>
                            <Button className="btn-block"
                            type="button"
                            disabled={product.countInStock === 0}>
                              Add to cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Card>
                
            </Col>
        </Row>
)}
    

        </>
    )



}



export default ProductScreen