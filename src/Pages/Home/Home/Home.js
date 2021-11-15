import React from 'react';
import AddProduct from '../../AddProduct/AddProduct';
import About from '../About/About';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <AddProduct></AddProduct>
            <Accessories></Accessories>
            <About></About>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;