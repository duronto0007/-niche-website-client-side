import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div id="about">
          <div className="about-section">
          <div className="about-img">
              <img src="https://cdn.shopify.com/s/files/1/0434/2431/7599/files/slider_03b3e7d4-bac4-43d5-89c9-ed3e48273f3e_2000x_1_2000x.jpg?v=1595491264" alt="" />
           </div>
           <div className="about-text">
                <h3 className="text-danger">About Us</h3>
                <hr/>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Lorem The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,</p>
                <Button>Read More</Button>
           </div>
          </div>
        </div>
    );
};

export default About;<h2>ABout Us</h2>