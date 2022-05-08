import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/HomePageItems/HomeProducts.css'

const Inventory = ({product}) => {
    const {productName, picture, desc, price, quantity, supplierName, productColor,_id} = product;
    const navigate = useNavigate();
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
            <button onClick={() => navigate(`/inventory/${_id}`)}>Stock Update</button>
        </div>
    </div>
    );
};

export default Inventory;