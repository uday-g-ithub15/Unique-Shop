import React from 'react';
import Banner from './Banner/Banner';
import Dashboard from './Dashboard/Dashboard';
import HomePageItems from './HomePageItems/HomePageItems';
import Provider from './Provider/Provider';
import './Home.css'

const Home = () => {
    return (
        <div className='homeStyle'>
          <Banner/>  
         <HomePageItems/>
         <Dashboard/>
         <Provider/>
        </div>
    );
};

export default Home;
