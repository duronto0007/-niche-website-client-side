import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://sleepy-citadel-11733.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleDelete = id => {
        const url = `https://sleepy-citadel-11733.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.deletedCount){
                alert('Deleted Successfully!')
                const remaning = products.filter(product => product._id !== id);
                setProducts(remaning);
            }
           
        })
        
    }

    return (
        <div className="m-3">
            <h2>Manage Product</h2>
            <div className="delete-operation">
                {
                    products.map(product => <div className="single-product" key={product._id}> 
                    <img src={product.image} alt="" />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3> ${product.price} </h3>
                    <Button onClick={ () => handleDelete(product._id)}>Delet</Button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;