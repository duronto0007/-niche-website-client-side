import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Order = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState([])

    useEffect( () =>{
        fetch(`https://sleepy-citadel-11733.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data =>setProduct(data));
    },[productId])
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Title>${product.price}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
              <Link to="/payment"><Button variant="primary">Pay Now</Button> </Link>
            </Card.Body>
            </Card>
            
        </div>
    );
};

export default Order;