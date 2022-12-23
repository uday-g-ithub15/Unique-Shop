import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../Shared/Loading/Loading';
import HomePageItem from './HomePageItem';
import './HomeProducts.css'
const HomePageItems = () => {
    const { products, loading } = useProducts(`https://unique-shop-server-production.up.railway.app`);
    const homeInventory = products.slice(0, 6)
    const navigate = useNavigate()
    if (loading) {
        return <Loading />
    }
    return (
        <div className='home-items'>
            <div id='sampleproducts' className='home-products'>
                {
                    homeInventory.map(product => <HomePageItem product={product} key={product._id} />)
                }
            </div>
            <div>
                <button style={{ margin: '20px auto 0' }} className='btn' onClick={() => navigate(`/manageinventories`)}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default HomePageItems;