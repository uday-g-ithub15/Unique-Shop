import React from 'react';
import Banner from './Banner';
import HomePageItems from './HomePageItems/HomePageItems';
// import HomePageItems from './HomePageItems/HomePageItems';

const Home = () => {
    const homeStyle = {
        marginTop:'100px'
    }
    return (
        <div style={homeStyle}>
          <Banner/>  
         <HomePageItems/>
        </div>
    );
};

export default Home;