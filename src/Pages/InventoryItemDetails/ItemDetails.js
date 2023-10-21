import { Button, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import HandleSnackBar from '../Shared/Snackbar/Snackbar';
import './ItemDetails.css'
import BasicModal from './ItemDetailsModal';
const ItemDetails = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState({});
    const [active, setActive] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    //For snackbar
    const [snackBar, setSnackBar] = useState(false);
    const [snackBarStatus, setSnackBarStatus] = useState('success');
    const [snackBarMsg, setSnackBarMsg] = useState('');
    const onCloseSnackBar = () => {
        setSnackBarMsg('')
        setSnackBar(false)
    }

    // For Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        const loadProduct = async () => {
            // const url = `https://unique-shop-server.onrender.com/warehouseproducts/${itemId}`
            const url = `https://unique-shop-server.onrender.com/warehouseproducts/${itemId}`

            const res = await fetch(url)
            const data = await res.json();
            setProduct(data)
        }
        loadProduct();
    }, [itemId])
    console.log(product);
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
        handleUpdateQuantity({ updatingQuantity: addedQuantity })
        setOpen(false)
        e.target.reset()
    }
    // https://unique-shop-server.onrender.com
    const handleUpdateQuantity = async ({ updatingQuantity }) => {
        setSnackBar(true)
        if (updatingQuantity) {
            const response = await fetch(`https://unique-shop-server.onrender.com/warehouseproducts/${itemId}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updatingQuantity })
            })
            if (response.ok) {
                await response.json()
                setSnackBarStatus('success')
                setSnackBarMsg('Restock Successful')
            }
            else {
                setSnackBarStatus('error')
                setSnackBarMsg('Please try again later, we are working on this.')
            }
        }
        else {
            setNewQuantity(newQuantity - 1)
            setNewSold(newSold + 1)
            const response = await fetch(`https://unique-shop-server.onrender.com/warehouseproducts/${itemId}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity, newSold })
            })
            if (response.ok) {
                setSnackBarStatus('success')
                setSnackBarMsg('Delivered Successful')
                await response.json()
            }
            else {
                setSnackBarStatus('error')
                setSnackBarMsg('Please try again later, we are working on this.')
            }
            if (newQuantity <= 1) {
                setActive(!active)
            }
        }

    }

    const MYBUTTON = styled(Button)({
        margin: '0.3em'
    })
    return (
        <>
            <Header />
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
                    <MYBUTTON variant='contained' disabled={active} onClick={handleUpdateQuantity}>Deliverd</MYBUTTON>
                    <MYBUTTON variant='contained' onClick={() => navigate('/manageinventories')}>Manage Intevntories</MYBUTTON>
                    <MYBUTTON variant='contained' onClick={handleOpen} >ReStock</MYBUTTON>
                </div>
                {
                    snackBar && <HandleSnackBar message={snackBarMsg} type={snackBarStatus} onCloseSnackBar={onCloseSnackBar} handleAddProduct={handleAddProduct} />
                }
                {
                    open && <BasicModal handleOpen={handleOpen} handleClose={handleClose} error={error} handleAddProduct={handleAddProduct} />
                }
            </div>
            <Footer />
        </>
    );
};

export default ItemDetails;