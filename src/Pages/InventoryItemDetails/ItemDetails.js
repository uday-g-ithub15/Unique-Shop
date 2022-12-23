import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetails.css'
const ItemDetails = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState({});
    const [active, setActive] = useState(false)
    const [error, setError] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        const loadProduct = async () => {
            const url = `https://unique-shop-server-production.up.railway.app/${itemId}`
            const res = await fetch(url)
            const data = await res.json();
            setProduct(data)
        }
        loadProduct();
    }, [itemId])
    const { _id, productName, picture, desc, price, quantity, supplierName, productColor, sold } = product;
    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newSold, setNewSold] = useState(sold)
    useEffect(() => {
        setNewQuantity(quantity)
    }, [quantity])
    useEffect(() => {
        setNewSold(sold)
    }, [sold])

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (e.target.quantity.value < 1) {
            setError('Please provide a correct quantity')
            return
        }
        else {
            setError('')
        }
        const addedQuantity = parseInt(e.target.quantity.value) + parseInt(newQuantity);

        setNewQuantity(addedQuantity)
        e.target.reset()
    }

    const handleUpdateQuantity = () => {
        setNewQuantity(newQuantity - 1)
        setNewSold(newSold + 1)
        fetch(`https://unique-shop-server-production.up.railway.app/${itemId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity, newSold })
        })
            .then(res => res.json()).then(data => {
                alert('Updated the quantity : ', data)
                console.log(data);
            })
        if (newQuantity <= 1) {
            setActive(!active)
        }
    }


    return (
        <div className='item-details'>
            <div className="img">
                <img src={picture} alt="" />
            </div>
            <div className="information">
                <h4>{productName}</h4>
                <p>Code : {_id}</p>
                <p>Color : {productColor}</p>
                {
                    newQuantity < 1 ? <p>Quantity : Sold Out</p> : <p>Quantity : {newQuantity}</p>
                }
                <p>Price : {price}</p>
                <p>Sold : {newSold}</p>
                <p>Description : {desc}</p>
                <p>Supplier Name : {supplierName}</p>
                <button className='btn' disabled={active} onClick={handleUpdateQuantity}>Deliverd</button>
                <button style={{ marginLeft: '5px' }} className='btn' onClick={() => navigate('/manageinventories')}>Manage Intevntories</button>
            </div>
            <div className='restock-form'>
                <form onSubmit={handleAddProduct}>
                    <h4>If you want to restock this product fill the form and click Restock</h4>
                    <input type="number" name="quantity" placeholder='Quantity' />
                    {
                        error ? <p style={{ color: 'red' }}>{error}</p> : ''
                    }
                    <input type="submit" value="Restock" className='btn' />
                    <button className='btn' onClick={() => navigate('/manageinventories')}>Manage Inventories</button>
                </form>
            </div>
        </div>
    );
};

export default ItemDetails;