import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const userName = user?.displayName;
        const email = e.target.email.value;
        const productName = e.target.productName.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const picture = e.target.picture.value;
        const productColor = e.target.productColor.value;
        const supplierName = user?.displayName;;
        const desc = e.target.desc.value;
        const sold = 1;
        const product = { userName, email, productName, productColor, price, quantity, picture, supplierName, desc, sold }
        fetch(`https://unique-shop-server-production.up.railway.app`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            console.log(data)
        })
        toast('Item Added')
        e.target.reset()
    }
    return (
        <div className='form'>
            <h3 style={{ color: '#4c3aba', backgroundColor: '#ffffff' }}>Add Product Details</h3>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="userName" id="" value={user?.displayName} disabled readOnly />
                <input type="email" name="email" id="" value={user?.email} disabled readOnly />
                <input type="text" disabled readOnly name="supplierName" id="" placeholder='Supplier Name' value={user?.displayName} />
                <input type="text" name="productName" id="" placeholder='Product Name' />
                <input type="text" name="picture" id="" placeholder='Product Image Url' />
                <input type="text" name="productColor" id="" placeholder='Product Color' />
                <input type="number" name="quantity" id="" placeholder='Quantity' />
                <input type="text" name="price" id="" placeholder='Product Price ($)' />
                <textarea name="desc" id="" placeholder='Description'></textarea>
                <input type="submit" value="Add Item" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;