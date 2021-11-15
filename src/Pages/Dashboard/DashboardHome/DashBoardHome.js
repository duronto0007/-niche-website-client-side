import React from 'react';
import ManageProduct from '../../Home/ManageProduct/ManageProduct';
import Products from '../../Home/Products/Products';

const DashBoardHome = () => {
    return (
        <div>
               <Products></Products>
                <ManageProduct></ManageProduct>
        </div>
    );
};

export default DashBoardHome;