import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';
import Rating from '../Rating';



const Product = ({pro}) => {




    

return (

    <Card className=" my-3+ p-3 rounded"  id='heightTop'>
        <Link to={`/product/${pro._id}`}>
            <Card.Img src={pro.image} variant='top'/>
        </Link>

        <Card.Body>
            <Link to={`/product/${pro._id}`}>
                 <Card.Title as ="div">
                    <strong>{pro.name}</strong>
                 </Card.Title>
            </Link>

            <Card.Text as="div">
                <Rating value = {pro.rating}  text={`${pro.numReviews} reviews`}/>
            </Card.Text>
            <Card.Text as="h3">
              ${pro.price}
            </Card.Text>
        </Card.Body>

    </Card>

)


}




export default Product 