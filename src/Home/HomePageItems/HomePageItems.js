import React from 'react';
import useProducts from '../../hooks/useProducts';
import HomePageItem from './HomePageItem';
import './HomeProducts.css'
const HomePageItems = () => {
    const[products] = useProducts();
    const homeInventory = products.slice(0,6)
    return (
       <div className='home-products'>
        {
            homeInventory.map(product => <HomePageItem product={product} key={product._id}/>)
        }
       </div>
    );
};

export default HomePageItems;