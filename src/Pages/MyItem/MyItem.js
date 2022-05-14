import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/HomePageItems/HomeProducts.css'

const MyItem = (props) => {
    const {product, handleDelete} = props
    const {userName,productName, picture, desc, price, quantity, productColor,_id} = product;
    
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
            <p>Supplier Name : {userName}</p>
            <button style={{marginRight:'5px'}} onClick={() => navigate(`/inventory/${_id}`)}>Stock Update</button>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    </div>
    );
};

export default MyItem;