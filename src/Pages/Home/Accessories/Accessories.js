import React, { useEffect, useState } from 'react';
import SingleAccessories from '../SingleAccessories/SingleAccessories';
import './Accessories.css';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    useEffect( () => {
        fetch('accessories.json')
        .then(res => res.json())
        .then(data => setAccessories(data))
    }, []) 
    return (
        <div id="accessories" className="container mt-5">
            <h3> <span className="text-warning">RIDING </span> ACCESSORIES</h3>
            <hr className="line"/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a <br/> page when looking at its layout.</p>
            <div className="row">

                {
                    accessories.map(singleAccessorie => <SingleAccessories
                    key={singleAccessorie.name}
                    singleAccessorie={singleAccessorie}
                    >

                    </SingleAccessories>)
                }

            </div>
        </div>
    );
};

export default Accessories;