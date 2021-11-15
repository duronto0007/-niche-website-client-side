import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="notfound" src="https://i.ibb.co/PQfbjsQ/banner-error-404.jpg" alt="" />
            <br/>
            <Link to="/"><Button>Go Back</Button></Link>
        </div>
    );
};

export default NotFound;