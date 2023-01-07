import React from 'react';
import banner from '../../../images/Banner/banner.avif'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <h1 style={{ marginBottom: '7px', color: '#4c3aba' }}>Unique Shop Warehouse</h1>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;