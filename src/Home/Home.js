import React from 'react';
import Banner from './Banner';
import InventoryItem from './HomePageItems/HomePageItems';

const Home = () => {
    const homeStyle = {
        marginTop:'100px'
    }
    return (
        <div style={homeStyle}>
          <Banner/>  
         <InventoryItem/>
        </div>
    );
};

export default Home;