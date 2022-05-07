import React from 'react';
import img from '../../images/Error/Error.jpg'
import './Error.css'
const Error = () => {
    return (
        <div className='error'>
            <img src={img} alt="Page not found" />
        </div>
    );
};

export default Error;