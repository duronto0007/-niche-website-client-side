import React from 'react';
import { Card } from 'react-bootstrap';

const Payment = () => {
    return (
        <div>
            <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>Thanks For Your Order</Card.Header>
            <Card.Body>
            <Card.Title>About Our Payment System</Card.Title>
            <Card.Text>
               We are very happy that you want to buy product from us and we are going to let you know about our payment system very soon over Email.
               Thanks for your Patience!
            </Card.Text>
            </Card.Body>
         </Card>
        </div>
    );
};

export default Payment;