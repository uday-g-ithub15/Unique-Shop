import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css'
const ItemDetails = () => {
    const{itemId} = useParams()
    const[product, setProduct] = useState({});
    const[active, setActive] = useState(false)
    const[error, setError] = useState('');
    useEffect(() => {
        const loadProduct = async() => {
            const url = `http://localhost:5000/warehouseproducts/${itemId}`
        const res = await fetch(url)
        const data = await res.json();
        setProduct(data)
        }
        loadProduct();
    },[itemId])
    const{_id, productName, picture, desc, price, quantity, supplierName, productColor}=product;
    const[newQuantity,setNewQuantity] = useState(quantity)
    useEffect(() => {setNewQuantity(quantity)}, [quantity])
    const handleUpdateQuantity = () => {
        setNewQuantity(newQuantity - 1)
            fetch(`http://localhost:5000/warehouseproducts/${itemId}`,{
                method:"PUT",
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify({newQuantity})
            })
            .then(res => res.json()).then(data => {
                alert('Updated the quantity : ',data)
                console.log(data);
            })
if(newQuantity <= 1){
    setActive(!active)
}
    }
    const handleAddProduct = (e) => {
        e.preventDefault();
            if(e.target.quantity.value < 1){
                    setError('Please provide a correct quantity')
                    return
            }
            else{
                setError('')
            }
            const addedQuantity = parseInt(e.target.quantity.value) + parseInt(newQuantity);

            setNewQuantity(addedQuantity)
            fetch(`http://localhost:5000/warehouseproducts/${itemId}`,{
                method:"PUT",
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify({addedQuantity})
            })
            .then(res => res.json()).then(data => {
                console.log(data);
            })
            e.target.reset()
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
                    newQuantity < 1 ? <p>Quantity : Sold Out</p>: <p>Quantity : {newQuantity}</p>
                }
                <p>Price : {price}</p>
                <p>Description : {desc}</p>
                <p>Supplier Name : {supplierName}</p>
                <button className = 'btn'  disabled={active} onClick={handleUpdateQuantity}>Deliverd</button>
                <button className = 'btn' onClick={handleUpdateQuantity}>Manage Intevntories</button>
                </div>
                <div className='restock-form'>
                    <form onSubmit={handleAddProduct}>
                    <h4>If you want to restock this product fill the form and click Restock</h4>
                        <input type="number" name="quantity" placeholder='Quantity' />
                        {
                            error ? <p style={{color:'red'}}>{error}</p> : ''
                        }
                        <input type="submit" value="Restock" className='btn' />
                    </form>
                </div>
        </div>
    );
};

export default ItemDetails;