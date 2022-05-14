import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Inventory.css'

const Inventory = (props) => {
    const[user] = useAuthState(auth)
    const {product, handleDelete} = props;
    const {productName, picture, desc, price, quantity, supplierName, productColor,_id} = product;
    const navigate = useNavigate();
    return (
        <div className='inventory-product'>
        <div className="img">
            <img src={picture} alt="" />
        </div>
        <div className="information">
            <h4>{productName}</h4>
            <p>Color : {productColor}</p>
            <p>Quantity : {quantity}</p>
            <p>Price : ${price}</p>
            <p>Description : {desc}</p>
            <p>Supplier Name : {supplierName}</p>
            <button onClick={() => navigate(`/inventory/${_id}`)}>Stock Update</button>
            {
                user && <button style={{marginLeft:'5px'}} onClick={() => handleDelete(_id)}>Delete</button>
            }
        </div>
    </div>
    );
};

export default Inventory;