import { Button } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
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
        const supplierName = user?.displayName;
        const desc = e.target.desc.value;
        const sold = 1;
        const product = { userName, email, productName, productColor, price, quantity, picture, supplierName, desc, sold }
        fetch(`http://localhost:5000/warehouseproducts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                toast('Item Added')
            }
        })
        e.target.reset()
    }
    return (
        <>
            <Header />
            <div className='form'>
                <h3 style={{ color: '#4c3aba', backgroundColor: '#ffffff' }}>Add Product Details</h3>
                <form onSubmit={handleAddProduct}>
                    <input type="text" name="userName" id="" value={user?.displayName} disabled readOnly />
                    <input type="email" name="email" id="" value={user?.email} disabled readOnly />
                    <input type="text" disabled readOnly name="supplierName" id="" placeholder='Supplier Name' value={user?.displayName} />
                    <input type="text" name="productName" id="" placeholder='Product Name' required />
                    <input type="text" name="picture" id="" placeholder='Product Image Url' required />
                    <input type="text" name="productColor" id="" placeholder='Product Color' required />
                    <input type="number" name="quantity" id="" placeholder='Quantity' required />
                    <input type="text" name="price" id="" placeholder='Product Price ($)' required />
                    <textarea name="desc" id="" placeholder='Description' required></textarea>
                    {/* <input type="submit" value="Add Item" /> */}
                    <Button type='submit' variant='contained' sx={{ margin: 'auto', display: 'block' }}>ADD ITEM</Button>
                </form>
                <ToastContainer />
            </div>
            <Footer />
        </>
    );
};

export default AddItem;