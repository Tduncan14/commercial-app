import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Product = ({pro}) => {





return (

    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${pro._id}`}>
            <Card.Img src={pro.image} variant='top'/>
        </Link>

        <Card.Body>
            <Link to={`/product/${pro._id}`}>
                 <Card.Title as ="div">
                    <strong>{pro.name}</strong>
                 </Card.Title>
            </Link>
            <Card.Text as="h3">
              ${pro.price}
            </Card.Text>
        </Card.Body>

    </Card>

)


}




export default Product 