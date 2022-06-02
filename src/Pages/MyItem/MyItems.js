import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from './MyItem';
import '../Home/HomePageItems/HomeProducts.css'
import Loading from '../Shared/Loading/Loading';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this product ?')
        if (confirm) {
            fetch(`https://lit-harbor-73222.herokuapp.com/warehouseproducts/${id}`, {
                method: "DELETE"
            }).then(res => res.json()).then(result => {
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
                console.log(result);
            })
        }
    }
    useEffect(() => {
        setLoading(true)
        fetch(`https://lit-harbor-73222.herokuapp.com/addedproducts?email=${email}`).then(res => res.json()).then(data => {
            setProducts(data)
            setLoading(false)
        })
    }, [email])

    if (loading) {
        return <Loading />
    }
    return (
        <div className='home-products' style={{ marginTop: '90px' }}>
            {
                products.length !== 0 ?
                    products.map(product => <MyItem product={product} handleDelete={handleDelete} key={product._id} />) :
                    <div>
                        <h1 style={{ color: '#4c3aba', marginBottom: '12.2em' }}> You don't add any item to warehouse yet ...</h1>
                    </div>
            }
        </div>
    );
};

export default MyItems;