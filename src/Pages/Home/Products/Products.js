import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div id="products" className="mt-5">
            <h3> <span className="text-warning">FEATURED </span> PRODUCTS</h3>
            <hr className="line"/>
            <p>It is a long established fact that a reader will be distracted by the readable content page <br/> when looking at its layout.</p>
            <div className="products-container">
           {
               products.map(product => <Product
               key={product.id}
               product={product}
               ></Product>)
           }
        </div>
        </div>
    );
};

export default Products;