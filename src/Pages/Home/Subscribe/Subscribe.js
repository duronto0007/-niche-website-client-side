import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="mt-5 mb-5 sub-bg">
            <h2>Subscribe to updates</h2>
            <hr className="line"/>
          <diV>
          <p>Our weekly mailout keeps you updated with news about future events and all things.</p>
               <input className="subs" placeholder="Email"></input>
               <button className="subs-btn">Subscribe</button>
          </diV>
        </div>
    );
};

export default Subscribe;