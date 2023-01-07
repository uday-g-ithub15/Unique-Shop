import React from 'react';
import Banner from './Banner/Banner';
import Dashboard from './Dashboard/Dashboard';
import HomePageItems from './HomePageItems/HomePageItems';
import Provider from './Provider/Provider';
import './Home.css'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <div className='homeStyle'>
                <Banner />
                <HomePageItems homeScreen={true} />
                <Dashboard homeScreen={true} />
                <Provider homeScreen={true} />
            </div>
            <Footer />
        </>
    );
};

export default Home;
