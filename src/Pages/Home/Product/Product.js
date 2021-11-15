import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
      const {_id,name, price, description, image} = product;
    return (
        <div className="single-product">
            <img className="images" src={image} alt=""/>
            <h5>Name: {name}</h5>
            <h6>Price: ${price}</h6>
            <p className="px-3">{description}</p>
            <Link to={`/order/${_id}`}>
            <button>Order Now</button>
            </Link>
        </div>
    );
};

export default Product;