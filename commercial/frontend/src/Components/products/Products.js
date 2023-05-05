import React from 'react';
import { Card } from 'react-bootstrap';



const Product = ({pro}) => {





return (

    <Card className="my-3 p-3 rounded">
        <a href={`/product/${pro._id}`}>
            <Card.Img src={pro.image} variant='top'/>
        </a>

        <Card.Body>
            <a href={`/product/${pro._id}`}>
                 <Card.Title as ="div">
                    <strong>{pro.name}</strong>
                 </Card.Title>
            </a>
            <Card.Text as="h3">
              ${pro.price}
            </Card.Text>
        </Card.Body>

    </Card>

)


}




export default Product 