import React from 'react';
import useProducts from '../hooks/useProducts';
import Inventory from './Inventory';
import '../Home/HomePageItems/HomeProducts.css'
import { useNavigate } from 'react-router-dom';

const Inventorys = () => {
    const[products] = useProducts()
    const navigate = useNavigate()
    return (
        <div className='home-products'>
                <div className='add-item'>
            <button onClick={() => navigate('/additem')}>Add new item</button>
        </div>
            {
                products.map(product => <Inventory key={product._id} product = {product}/>)
            }
        </div>
    );
};

export default Inventorys;