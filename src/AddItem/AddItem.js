import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddProduct = async(e) => {
        e.preventDefault();
        const userName = user?.displayName;
        const email = e.target.email.value;
        const productName = e.target.productName.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const picture = e.target.picture.value;
        const productColor = e.target.productColor.value;
        const supplierName = e.target.supplierName.value;
        const desc = e.target.desc.value;
        const product = {userName, email, productName, productColor, price, quantity, picture, supplierName,desc}
        fetch(`http://localhost:5000/warehouseproducts`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        }).then(res => res.json()).then(data => console.log(data))
        // e.target.reset()
    }
    return (
        <div className='form'>
         <h3 style={{color:'#4c3aba',backgroundColor:'#ffffff'}}>Add Product Details</h3>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="userName" id="" value={user?.displayName} disabled readOnly/>
                <input type="email" name="email" id=""  value={user?.email} disabled readOnly/>
                <input type="text" name="supplierName" id=""  placeholder='Supplier Name'  />
                <input type="text" name="productName" id="" placeholder='Product Name'/>
                <input type="text" name="picture" id="" placeholder='Product Image Url'/>
                <input type="text" name="productColor" id="" placeholder='Product Color'/>
                <input type="number" name="quantity" id="" placeholder='Quantity'/>
                <input type="text" name="price" id="" placeholder='Product Price ($)'/>
                <textarea name="desc" id="" placeholder='Description'></textarea>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;