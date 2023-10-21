import React, { useContext } from 'react';
import useProducts from '../../../hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Loading from '../../Shared/Loading/Loading';
import HomePageItem from './HomePageItem';
import './HomeProducts.css'
import { Context } from '../../../contexts/UrlContext';
const HomePageItems = ({ homeScreen }) => {
    const { url } = useContext(Context);

    const { products, loading } = useProducts(`${url}/warehouseproducts`);
    const homeInventory = products.slice(0, 6)
    if (loading) {
        return <Loading />
    }
    return (
        <>
            {!homeScreen && <Header />}
            <div className='home-items'>
                <div id='sampleproducts' className='home-products'>
                    {
                        homeInventory.map(product => <HomePageItem product={product} key={product._id} />)
                    }
                </div>
            </div>
            {!homeScreen && <Footer />}
        </>
    );
};

export default HomePageItems;