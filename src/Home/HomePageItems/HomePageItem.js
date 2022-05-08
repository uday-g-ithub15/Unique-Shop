import React from 'react';
import './HomeProducts.css'
const HomePageItem = ({product}) => {
    const {productName, picture, desc, price, quantity, supplierName, productColor} = product
    return (
        <div className='home-product'>
            <div className="img">
                <img src={picture} alt="" />
            </div>
            <div className="information">
                <h4>{productName}</h4>
                <p>Color : {productColor}</p>
                <p>Quantity : {quantity}</p>
                <p>Price : {price}</p>
                <p>Description : {desc}</p>
                <p>Supplier Name : {supplierName}</p>
                <button>Stock Update</button>
            </div>
        </div>
    );
};

export default HomePageItem;