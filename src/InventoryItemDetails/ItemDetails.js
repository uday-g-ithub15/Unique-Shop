import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetails.css'
const ItemDetails = () => {
    const{itemId} = useParams()
    const[product, setProduct] = useState({});
    const[active, setActive] = useState(false)
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
                <button  disabled={active} onClick={handleUpdateQuantity}>Deliverd</button>
                </div>
        </div>
    );
};

export default ItemDetails;