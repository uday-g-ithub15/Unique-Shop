import React from 'react';
import './Provider.css'

const Provider = () => {
    return (
        <section style={{margin:'20px 0'}}>
    <h1 style={{textAlign:'center', color:'#4c3aba',marginBottom:'5px'}}>Our most honourable provider</h1>
        <div className='provider'>
            <section>
                <div className='img'>
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg" alt="" />
                </div>
                <div className='provider-info'>
                    <h4>Name :Mia Melton</h4>
                    <p>Email : mia_melton21@gmail.com</p>
                </div>
            </section>
            <section>
                <div className='img'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg" alt="" />
                </div>
                <div className='provider-info'>
                    <h4>Name : Bryan Rivas</h4>
                    <p>Email : br.rivas@yahoo.com</p>
                </div>
            </section>
            <section>
                <div className='img'>
                    <img src="https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911330_1280.jpg" alt="" />
                </div>
                <div className='provider-info'>
                    <h4>Name : Lynn Melendez</h4>
                    <p>Email : lynn_melen@yahoo.com</p>
                </div>
            </section>
           
        </div>
        </section>
    );
};

export default Provider;