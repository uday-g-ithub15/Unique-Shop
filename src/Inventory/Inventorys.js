import React from 'react';
import useProducts from '../hooks/useProducts';
import Inventory from './Inventory';
import '../Home/HomePageItems/HomeProducts.css'
import { useNavigate } from 'react-router-dom';

const Inventorys = () => {
    const[products, setProducts] = useProducts()
    const navigate = useNavigate()
    const handleDelete = id => {
            fetch(`http://localhost:5000/warehouseproducts/${id}`,{
                method:"DELETE"
            }).then(res => res.json()).then(result => {
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
                console.log(result);
                })
    }
    return (
        <div className='home-products'>
                <div className='add-item'>
            <button onClick={() => navigate('/additem')}>Add new item</button>
        </div>
            {
                products.map(product => <Inventory key={product._id} product = {product} handleDelete={handleDelete}/>)
            }
        </div>
    );
};

export default Inventorys;