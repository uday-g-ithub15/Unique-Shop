import { Box, Button } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Inventory.css'

const Inventory = ({ product, handleDelete }) => {
    const [user] = useAuthState(auth)
    const { productName, picture, desc, price, quantity, supplierName, productColor, _id } = product;
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
            </div>
            <Box>
                <Button sx={{ margin: '0.4em' }} variant='contained' onClick={() => navigate(`/inventory/${_id}`)}>Stock Update</Button>
                {
                    user && <Button sx={{ margin: '0.4em' }} variant='contained' onClick={() => handleDelete(_id)}>Delete</Button>
                }
            </Box>
        </div>
    );
};

export default Inventory;