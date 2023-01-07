import { Button, styled } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/HomePageItems/HomeProducts.css'

const MyItem = (props) => {
    const { product, handleDelete } = props
    const { userName, productName, picture, desc, price, quantity, productColor, _id } = product;
    const navigate = useNavigate();
    const MYBUTTON = styled(Button)({
        margin: '0.4em'
    })
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
                <MYBUTTON variant='contained' onClick={() => navigate(`/inventory/${_id}`)}>Stock Update</MYBUTTON>
                <MYBUTTON variant='contained' onClick={() => handleDelete(_id)}>Delete</MYBUTTON>
            </div>
        </div>
    );
};

export default MyItem;