import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Dashboard.css'

const Dashboard = ({ homeScreen }) => {
    const { products } = useProducts(`http://localhost:5000/warehouseproducts`)
    let sum = 0;
    let totalSoldPrice = 1;
    for (const product of products) {
        sum = sum + parseFloat(product.quantity);
        totalSoldPrice = (product.sold) * parseFloat(product.price);
    }
    return (
        <>
            {!homeScreen && <Header />}
            <div id='dashboard'>
                <h1 style={{ textAlign: 'center', color: '#4c3aba', marginTop: '10px' }}>Dashboard</h1>
                <div className='dashboard'>
                    <div className='dashboard-item'>
                        <h3>Warehouse total products</h3>
                        <h3>{sum}</h3>
                    </div>
                    <div className='dashboard-item'>
                        <h3>Total Sold Price</h3>
                        <h3>${totalSoldPrice}</h3>
                    </div>
                    <div className='dashboard-item'>
                        <h3>Average Profit</h3>
                        <h3>${(totalSoldPrice * 0.2).toFixed(2)}</h3>
                    </div>
                </div>
            </div>
            {!homeScreen && <Footer />}
        </>
    );
};

export default Dashboard;