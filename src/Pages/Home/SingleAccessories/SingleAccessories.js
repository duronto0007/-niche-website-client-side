import React from 'react';
import './SingleAccessories.css';

const SingleAccessories = ({singleAccessorie}) => {
    
    const{img, name, price} = singleAccessorie;

    return (
        <div className="mt-3 col-lg-4 col-md-6">
           <div className="single-item">
           <img className="image" src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price: {price}</h6>
            <button>Order Now</button>
           </div>
            
        </div>
    );
};

export default SingleAccessories;